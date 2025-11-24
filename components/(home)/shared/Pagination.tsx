import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const left = Math.max(1, currentPage - 2);
      const right = Math.min(totalPages, currentPage + 2);

      if (left > 1) {
        pages.push(1);
        if (left > 2) pages.push("...");
      }

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }

      if (right < totalPages) {
        if (right < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center   justify-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-5 py-2 bg-gray-100 text-black border border-black rounded-full hover:bg-[#FFEFEA] disabled:bg-opacity-50 transition-all duration-300 ease-in-out"
      >
        <FaAngleLeft />
      </button>

      <div className="flex ml-2 gap-2">
        {pageNumbers().map((number, index) =>
          typeof number === "string" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-3 py-1 w-10 h-10 flex justify-center items-center"
            >
              {number}
            </span>
          ) : (
            <button
              key={number}
              className={`px-3 py-1 w-10 h-10 flex justify-center items-center transition-all duration-300 hover:bg-black rounded-full hover:text-white ${
                currentPage === number
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-5 py-2 bg-gray-100 text-black border border-black rounded-full hover:bg-[#FFEFEA] disabled:opacity-50 transition-all duration-300 ease-in-out"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
