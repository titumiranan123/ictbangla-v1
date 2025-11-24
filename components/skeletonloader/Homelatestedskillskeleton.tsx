import React from 'react';

const HomelatestedskillSkeleton = () => {
    return (
        <div className="section container flex lg:flex-row flex-col-reverse justify-between items-center">
  {/* Content placeholder (left side) */}
  <div className="lg:w-[715px] lg:rounded-l-[12px] lg:rounded-b-[0] rounded-b-[12px] lg:h-[651px] bg-[#D6EBF4] w-full lg:pt-[137px] pt-[30px] lg:px-[60px] px-[20px] lg:pb-[60px] pb-[40px] flex justify-center items-start flex-col gap-6">
    {/* Heading placeholder */}
    <div 
      data-aos="fade-up" 
      data-aos-delay="100"
      className="h-12 w-3/4 bg-gray-300 rounded animate-pulse mb-2"
    ></div>
    
    {/* Subheading placeholder (2 lines) */}
    <div 
      data-aos="fade-up" 
      data-aos-delay="200"
      className="space-y-2 w-full"
    >
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>
    </div>
    
    {/* Button placeholder */}
    <div 
      data-aos="fade-up" 
      data-aos-delay="300"
      className="h-[58px] w-[180px] bg-gray-300 rounded animate-pulse"
    ></div>
  </div>

  {/* Image placeholder (right side) */}
  <div className="lg:w-[685px] lg:h-[651px] lg:rounded-r-[12px] rounded-t-[12px] lg:rounded-t-[0] bg-gray-200 animate-pulse"></div>
</div>
    );
};

export default HomelatestedskillSkeleton;