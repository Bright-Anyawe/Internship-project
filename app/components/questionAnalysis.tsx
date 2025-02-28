"use client";
import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FormDataContext } from "../context/formDataContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis: React.FC = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("QuestionAnalysis must be used within a FormDataProvider");
  }
  const { formData } = context;

  let score = 8;
  let total = 15;
  if (formData.currentScore) {
    const [parsedScore, parsedTotal] = formData.currentScore.split("/");
    score = parseInt(parsedScore, 10) || 10;
    total = parseInt(parsedTotal, 10) || 15;
  }

  const percentage = (score / total) * 100;

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#3b82f6", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Question Analysis</h3>
        <span className="font-medium text-blue-600">{`${score}/${total}`}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        <strong className="font-medium">
          You scored {score} questions correct out of {total}.
        </strong>{" "}
        However, it still needs some improvements.
      </p>
      <div className="mt-4 flex justify-center">
        <div className="relative w-32 h-32">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{`${score}/${total}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
