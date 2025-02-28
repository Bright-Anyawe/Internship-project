import React from "react";

export default function SyllabusAnalysis() {
  const syllabusData = [
    { 
      title: "HTML Tools, Forms, History", 
      percentage: 80,
      barColor: "bg-blue-500",
      bgColor: "bg-blue-100"
    },
    { 
      title: "Tags & References in HTML", 
      percentage: 60,
      barColor: "bg-orange-500",
      bgColor: "bg-orange-100"
    },
    { 
      title: "Tables & References in HTML", 
      percentage: 24,
      barColor: "bg-red-500",
      bgColor: "bg-red-100"
    },
    { 
      title: "Tables & CSS Basics", 
      percentage: 96,
      barColor: "bg-green-500",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-6 w-full bg-white">
      <h2 className="text-xl font-semibold mb-6">Syllabus Wise Analysis</h2>
      <div className="space-y-6">
        {syllabusData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 text-sm">{item.title}</span>
              <span className="text-gray-900 font-medium">{item.percentage}%</span>
            </div>
            <div className={`w-full ${item.bgColor} h-2 rounded-full`}>
              <div
                className={`${item.barColor} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
