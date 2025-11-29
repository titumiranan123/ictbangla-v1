"use client";
import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseModulsummary = ({ modules }: { modules: any[] }) => {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
      {modules?.map((data, idx) => (
        <div
          key={idx}
          className="relative md:max-w-full md:w-[189px] max-w-[189px] w-full h-[126px] md:h-[126px] border border-[#29AE48] rounded-[8px] flex flex-col items-center justify-center gap-1.5 overflow-hidden"
        >
          {/* Corner Line */}
          <div className="absolute -top-[1px] -right-[1.1px] w-[45px] h-[45px] border-t-3 border-r-3 border-[#29AE48] rounded-tr-[8px]"></div>

          {/* Icon */}
          <Image
            src={`${data?.icon}`}
            alt={data?.title}
            width={49}
            height={49}
            className="text-[#29AE48] md:w-[49px] md:h-[49px] w-[40px] h-[40px]"
          />

          {/* Quantity */}
          <p className="md:text-[22px] text-[16px] font-[700] text-[#4F4F4F]">
            {data?.sub_title}
          </p>

          {/* Title */}
          <p className="md:text-[18px] text-[16px] text-[#4F4F4F] font-[700]">
            {data?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseModulsummary;
