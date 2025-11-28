"use client";
import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseReturn = ({ course_features }: { course_features: any[] }) => {
  return (
    <div className="mt-10 ">
      <h2 className="text-[24px] text-center font-[700] text-primary">
        এই কোর্সে যা যা পাচ্ছেন
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {course_features?.map((dt, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center gap-2 border border-primary bg-[#F3F4F6] p-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Image src={`${dt?.icon}`} alt="learning" width={85} height={85} />
            <h3 className="text-[18px] font-bold text-primary">{dt?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseReturn;
