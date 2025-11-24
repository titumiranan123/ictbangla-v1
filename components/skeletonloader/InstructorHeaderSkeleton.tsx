import React from "react";

export const InstructorHeaderSkeleton = () => {
  return (
    <div className="bg-[#FFEFEA] py-[186px] pt-[120px] pb-28 animate-pulse">
      <div className="max-w-[1280px] lg:h-[120px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <div className="w-32 h-32 p-4 border-2 rounded-full border-orange-500">
              <div className="w-full h-full rounded-full bg-gray-300"></div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="h-10 w-80 bg-gray-300 rounded"></div>

              <div className="flex items-center gap-9 mt-5">
                <div className="flex items-center gap-5">
                  <div className="w-6 h-8 bg-gray-300 rounded"></div>
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-6 h-8 bg-gray-300 rounded"></div>
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="h-14 w-48 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
