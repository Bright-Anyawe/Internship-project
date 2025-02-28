"use client"


import React, { useContext } from "react";
import { FormDataContext } from "../context/formDataContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ComparisonGraph() {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error("QuestionAnalysis must be used within a FormDataProvider");
  }
  const { formData } = context;
  const userPercentile = formData.percentile ? parseInt(formData.percentile, 10) : 30;
  const userYValue = 45;

  const distributionData = [
    { x: 0, y: 0 },
    { x: 25, y: 40 },
    { x: 50, y: 70 },
    { x: 60, y: 50 },
    { x: 75, y: 35 },
    { x: 90, y: 10 },
    { x: 100, y: 0 },
  ];

  const data = {
    datasets: [
      {
        label: "Distribution",
        data: distributionData,
        borderColor: "#6366F1",
        backgroundColor: "#6366F1",
        tension: 0.3,
        showLine: true,
        pointRadius: 3,
        parsing: {
          xAxisKey: "x",
          yAxisKey: "y",
        },
      },
      {
        label: "Your Percentile",
        data: [{ x: userPercentile, y: userYValue }],
        borderColor: "#EF4444",
        backgroundColor: "#EF4444",
        pointRadius: 5,
        showLine: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "linear" as const,
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Percentile",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Students",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {},
    },
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Comparison Graph</h2>
      <p className="text-gray-700 mb-4">
        You scored <strong>{userPercentile}% percentile</strong> which is lower than the
        average percentile <strong>72%</strong> of all the engineers who took
        this assessment.
      </p>
      <div className="h-64 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
