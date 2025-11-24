
import React from "react";

const CategorySkeleton: React.FC = () => {
  return (
    <div className="container section overflow-hidden py-6 animate-pulse">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col items-center px-4 py-3 relative lg:w-[200px] w-[160px]">
            {/* Icon Skeleton */}
            <div className="w-10 h-10 bg-gray-200 rounded-full mb-2"></div>
            
            {/* Text Skeleton */}
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
            
            {/* Hover border indicators (hidden during loading) */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"></div>
          </div>
        ))}
      </div>
      
      {/* Bottom border */}
      <div className="border-b border-gray-200 mt-4"></div>
    </div>
  );
};

export default CategorySkeleton;