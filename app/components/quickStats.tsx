"use client"
import React, { useContext } from "react";
import { FormDataContext } from "../context/formDataContext";

export default function QuickStatistics() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("QuickStatistics must be used within a FormDataProvider");
  }
  const { formData } = context;

  return (
    <div className="bg-white shadow-md border border-gray-300 rounded p-4 w-full">
      <h2 className="text-lg font-semibold mb-3">Quick Statistics</h2>
      <div className="flex flex-col sm:flex-row items-center justify-around divide-y sm:divide-y-0 sm:divide-x">
        <div className="flex items-center py-3 sm:py-0 sm:px-4 w-full sm:w-auto justify-center">
          <div className="mr-3 text-2xl">🏆</div>
          <div>
            <p className="text-xl font-bold">{formData.rank || "1"}</p>
            <p className="text-sm text-gray-600">YOUR RANK</p>
          </div>
        </div>
        <div className="flex items-center py-3 sm:py-0 sm:px-4 w-full sm:w-auto justify-center">
          <div className="mr-3 text-2xl">📋</div>
          <div>
            <p className="text-xl font-bold">
              {formData.percentile ? `${formData.percentile}%` : "30%"}
            </p>
            <p className="text-sm text-gray-600">PERCENTILE</p>
          </div>
        </div>
        <div className="flex items-center py-3 sm:py-0 sm:px-4 w-full sm:w-auto justify-center">
          <div className="mr-3 text-2xl">✅</div>
          <div>
            <p className="text-xl font-bold">
              {formData.currentScore || "10/15"}
            </p>
            <p className="text-sm text-gray-600">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
