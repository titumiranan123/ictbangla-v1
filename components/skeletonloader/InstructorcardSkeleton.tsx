import React from 'react';

const InstructorcardSkeleton = () => {
    return (
        <div className="md:w-[259px] w-full md:h-[360px] h-[475px] rounded-lg overflow-hidden">
  {/* Image placeholder */}
  <div className="w-full md:h-52 h-60 rounded-[8px] bg-gray-200 animate-pulse"></div>
  
  {/* Content placeholders */}
  <div className="p-3 space-y-3">
    {/* Stats row */}
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
    
    {/* Name placeholder */}
    <div className="space-y-2">
      <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
    </div>
    
    
  </div>
</div>
    );
};

export default InstructorcardSkeleton;