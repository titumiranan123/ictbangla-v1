import React from 'react';

const HomestateSkeleton = () => {
    return (
        <div className="section container h-auto bg-secondary mt-[60px] section responsive-row">
  {/* Image placeholder */}
  <div className="img-rounded-left object-cover h-full w-full lg:w-[686px] bg-gray-200 animate-pulse"></div>
  
  {/* Content placeholder */}
  <div className="lg:w-[715px] lg:rounded-r-[12px] rounded-b-[12px] lg:h-[651px] bg-secondary w-full lg:pt-[40px] pt-[30px] lg:px-[60px] px-[20px] lg:pb-[60px] pb-[40px] flex justify-center items-start flex-col gap-2">
    {/* Title placeholder */}
    <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" data-aos="fade-up" data-aos-delay="400"></div>
    
    {/* Subtitle placeholder */}
    <div className="h-5 w-full bg-gray-200 rounded animate-pulse mb-6" data-aos="fade-up" data-aos-delay="500"></div>
    
    {/* Stats grid placeholder */}
    <div className="grid grid-cols-2 gap-x-20 gap-y-8 w-full mt-5">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          data-aos="fade-up"
          data-aos-delay={500 + i * 100}
          className="flex flex-col relative ps-4 after:w-[3px] after:h-full after:bg-gray-300 after:absolute after:left-0 after:rounded-full after:top-0"
        >
          {/* Stat value placeholder with icon */}
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
          
          {/* Stat label placeholder */}
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  </div>
</div>
    );
};

export default HomestateSkeleton;