import React from "react";
import { FaClock, FaListUl, FaTag, FaUser } from "react-icons/fa";

const EditCourseCardSkeleton = () => {
  return (
    <div className="w-full max-w-full animate-pulse border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="relative w-full md:w-48 h-52 flex-shrink-0 bg-slate-400" />

        {/* Course Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Title and Creator */}
          <div className="mb-4">
            <div className="h-6 w-3/4 bg-slate-300 rounded-lg mb-2" />
            <div className="flex items-center gap-2">
              <FaUser className="text-primary" size={12} />
              <div className="w-20 h-4 bg-slate-300 rounded-lg" />
            </div>
          </div>

          {/* Pricing and Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
              <FaTag className=" text-primary " />
              <div className="w-16 h-4 bg-slate-300 rounded-lg" />
            </div>

            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg text-sm">
              <FaListUl className=" text-primary " />
              <div className="w-10 h-4 bg-slate-300 rounded-lg" />
              <span className="mx-2 text-gray-400">|</span>
              <FaClock className=" text-primary " />
              <div className="w-10 h-4 bg-slate-300 rounded-lg" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-wrap gap-3">
            <div className="w-60 h-10 bg-primary bg-opacity-30 rounded-lg" />
            <div className="w-60 h-10 bg-slate-300 rounded-lg" />
            <div className="w-20 h-10 bg-slate-300 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourseCardSkeleton;
