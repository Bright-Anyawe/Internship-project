"use client";
import React, { useState, useEffect } from "react";
import UpdateScoresForm from "./updateScoresModal";

export default function ScoreUpdater() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOpenModal = () => {
    setShowModal(true);
    setSubmitted(false);
    setProgress(0);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitSuccess = () => {
    setSubmitted(true);
    handleCloseModal();
  };

  useEffect(() => {
    if (submitted) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 100 / (2000 / 50); 
          if (next >= 100) {
            clearInterval(interval);
            return 100;
          }
          return next;
        });
      }, 50);
      const timer = setTimeout(() => {
        setSubmitted(false);
        setProgress(0);
      }, 2000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [submitted]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleOpenModal}
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>

      {submitted && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 w-full max-w-md p-4 bg-green-500 text-white text-center rounded">
            Submitted successfully
            <div className="mt-2 w-full h-2 bg-green-700 rounded">
              <div
                className="h-full bg-white rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="relative z-10">
            <UpdateScoresForm
              onCancel={handleCloseModal}
              onSubmitSuccess={handleSubmitSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
}
