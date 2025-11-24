import React from "react";
import { InstructorHeaderSkeleton } from "./InstructorHeaderSkeleton";

import InstructorNav from "../(instructor)/instructorDashboard/InstructorNav";

const InstructorMyCourseSkeleton = () => {
  return (
    <div>
      <div className="h-16 bg-gray-200 animate-pulse">
        <InstructorHeaderSkeleton />
      </div>
      <div className="container mt-[350px] flex lg:flex-row flex-col gap-11">
        <div className="">
          <InstructorNav />
        </div>
        <div className="lg:w-[1000px] border rounded-xl flex flex-col  gap-5 p-5 ">
          <div className="flex gap-5 ">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-32 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
          {/* Skeleton for course container */}
          <div className="mt-6 gap-6 grid grid-cols-3 ">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg p-4 md:w-[320px] w-full  group  lg:h-[420px] h-[468px]"
              >
                <div className="w-full md:h-52 bg-gray-300 rounded-lg"></div>
                <div className="mt-10">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mt-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorMyCourseSkeleton;
