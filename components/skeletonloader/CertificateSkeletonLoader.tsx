"use client";
import React from "react";

const CertificateSectionSkeleton: React.FC = () => {
  return (
    <div className="container lg:mt-[120px] mt-[60px] animate-pulse">
      {/* Title & Subtitle Skeleton */}
      <div className="flex flex-col justify-center items-center mb-14">
        <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
      </div>

      <div className="flex justify-between items-center gap-10 lg:flex-row flex-col">
        {/* Certificate Image Skeleton */}
        <div className="bg-gray-200 rounded-xl lg:w-[640px] lg:h-[464px] w-full aspect-video"></div>

        {/* Features Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full max-w-[305px] p-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-3"></div>
              <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSectionSkeleton;