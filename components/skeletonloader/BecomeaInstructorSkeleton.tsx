import React from 'react';

const BecomeaInstructorSkeleton = () => {
    return (
        <div className="section container rounded-[12px] bg-secondary">
  <div className="responsive-row w-full h-[328px] lg:px-[80px] lg:py-[92px] px-2 py-10 rounded-lg flex justify-between">
    {/* Left content section */}
    <div className="lg:w-[423px] w-full flex flex-col gap-4 text-black">
      {/* Main heading */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="300"
        className="h-10 w-3/4 bg-gray-300 rounded animate-pulse"
      ></div>
      
      {/* Description text */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="400"
        className="space-y-2"
      >
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>
      </div>
      
      {/* Three points section */}
      <div className="flex justify-between">
        {[300, 400, 500].map((delay, i) => (
          <div 
            key={i}
            data-aos="fade-up"
            data-aos-delay={delay}
            className="h-5 w-[30%] bg-gray-300 rounded animate-pulse"
          ></div>
        ))}
      </div>
    </div>
    
    {/* Button placeholder (middle) */}
    <div 
      data-aos="fade-up" 
      data-aos-delay="300"
      className="hidden lg:flex items-center"
    >
      <div className="w-[220px] h-[65px] bg-gray-300 rounded animate-pulse"></div>
    </div>
    
    {/* Image placeholder (right) - hidden on mobile */}
    <div className="w-[354px] lg:block hidden h-[421px] -mt-[94px] bg-gray-200 rounded animate-pulse"></div>
  </div>
</div>
    );
};

export default BecomeaInstructorSkeleton;