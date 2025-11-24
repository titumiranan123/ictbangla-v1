import React from "react";

const Featureblog = () => {
  return (
    <div className="md:w-[329px] w-full group md:h-[395px] h-[390px] rounded-lg gap-8">
      {/* Image placeholder */}
      <div className="relative w-[329px] md:h-[260px] overflow-hidden rounded-[8px] bg-gray-200 animate-pulse">
        <div className="w-full h-full rounded-lg"></div>
      </div>

      {/* Content placeholder */}
      <div className="mt-1 p-2">
        {/* Category placeholder */}
        <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse mb-3"></div>

        {/* Title placeholder - 2 lines */}
        <div className="space-y-2 mb-4">
          <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Metadata placeholders */}
        <div className="flex justify-between text-[#585d69] text-[14px] font-[400] mt-2">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featureblog;
