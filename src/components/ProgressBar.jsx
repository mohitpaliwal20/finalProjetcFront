import React, { useState } from "react";

function ProgressBar() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-500"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {currentPage > 1 && (
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Prev
          </button>
        )}
        {currentPage < 4 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;