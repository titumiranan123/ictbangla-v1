import React from "react";

const CoursecardSkeleton: React.FC = () => {
  return (
    <div className="bg-secondary rounded-lg mt-1 p-4 md:w-[580px] md:h-[230px] overflow-hidden flex md:flex-row flex-col justify-center items-center gap-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="md:w-[230px] md:h-[200px] w-full h-[180px] bg-gray-300 rounded-lg" />

      {/* Text and Buttons Skeleton */}
      <div className="flex-1 flex gap-5 flex-col w-full">
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-300 rounded w-3/4" />

        {/* Progress Bar Skeleton */}
        <div className="h-3 bg-gray-300 rounded w-full" />

        {/* Button Skeletons */}
        <div className="flex gap-5">
          <div className="h-[45px] w-[130px] bg-gray-300 rounded-full" />
          <div className="h-[45px] w-[130px] bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CoursecardSkeleton;
