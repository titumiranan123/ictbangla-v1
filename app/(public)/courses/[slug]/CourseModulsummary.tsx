"use client";
import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseModulsummary = ({ modules }: { modules: any[] }) => {
  return (
    <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {modules?.map((data, idx) => (
        <div
          key={idx}
          className="relative md:w-[213px] w-[191px] h-[120px] md:h-[156px] border border-[#29AE48] rounded-[8px] flex flex-col items-center justify-center gap-1.5 overflow-hidden"
        >
          {/* Corner Line */}
          <div className="absolute -top-[1px] -right-[1.1px] w-[45px] h-[45px] border-t-3 border-r-3 border-[#29AE48] rounded-tr-[8px]"></div>

          {/* Icon */}
          <Image
            src={`/assets/icon/${data?.icon}`}
            alt={data?.title}
            width={60}
            height={60}
            className="text-[#29AE48] md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
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
