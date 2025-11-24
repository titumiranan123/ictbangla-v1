import React from "react";

const InstructorclassSheduleSkeleton = () => {
  return (
    <div className="mx-auto bg-white p-4">
      <h2 className="text-2xl font-bold text-center mb-6 animate-pulse bg-gray-200 h-8 w-64 mx-auto rounded"></h2>

      {/* Week Navigation Skeleton */}
      <div className="flex items-center justify-center space-x-4 my-4">
        <div className="p-2 rounded-full bg-gray-200 h-10 w-10 animate-pulse"></div>
        <div className="font-medium text-gray-700 bg-gray-200 h-6 w-48 animate-pulse rounded"></div>
        <div className="p-2 rounded-full bg-gray-200 h-10 w-10 animate-pulse"></div>
      </div>

      {/* Calendar Grid Skeleton */}
      <div className="grid grid-cols-7 gap-1 mb-6">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            <div className="bg-gray-200 h-4 w-full animate-pulse rounded mx-auto"></div>
          </div>
        ))}

        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center p-2 rounded-lg border border-gray-200 h-14 animate-pulse bg-gray-100"
          >
            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Class Cards Skeleton */}
      <div className="space-y-6">
        {/* Today's Classes Skeleton */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <div className="bg-gray-200 h-6 w-32 animate-pulse rounded"></div>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 animate-pulse bg-gray-50 h-40"
              >
                <div className="bg-gray-200 h-5 w-3/4 mb-3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
                <div className="bg-gray-200 h-4 w-2/3 mb-4 rounded"></div>
                <div className="bg-gray-200 h-8 w-full rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Classes Skeleton */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
            <div className="bg-gray-200 h-6 w-40 animate-pulse rounded"></div>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 animate-pulse bg-gray-50 h-40"
              >
                <div className="bg-gray-200 h-5 w-3/4 mb-3 rounded"></div>
                <div className="bg-gray-200 h-4 w-1/2 mb-2 rounded"></div>
                <div className="bg-gray-200 h-4 w-2/3 mb-4 rounded"></div>
                <div className="bg-gray-200 h-8 w-full rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorclassSheduleSkeleton;
