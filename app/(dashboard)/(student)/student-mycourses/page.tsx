/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import usePurchaseCourse from "@/hooks/student/usePurchasecourse";
import React from "react";
import Coursecard from "./Coursecard";
import CoursecardSkeleton from "./CourseSkeleton";

const StudentMycourse = () => {
  const { data, isLoading } = usePurchaseCourse();

  return (
    <div className="mt-10">
      <h2 className="text-xl text-green-500 font-[500]">
        <span className="text-2xl font-[600]">C</span>ontinue Your Learning
        Journey !!
      </h2>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Running Course : </h2>
        {!isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            {data?.courses?.length > 0 ? (
              data?.courses?.map((course: any) => (
                <Coursecard key={course?._id} data={course} />
              ))
            ) : (
              <div className="flex justify-center items-center mt-10">
                No Course Found
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            {[...Array(4)].map((_, idx) => (
              <CoursecardSkeleton key={idx} />
            ))}
          </div>
        )}
      </div>
      {/* <div className="mt-8">
        <h2 className="text-xl font-semibold">Complete Course : </h2>
        {!isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            {complete?.length > 0 ? (
              complete?.map((course: any) => (
                <Coursecard key={course?._id} data={course} />
              ))
            ) : (
              <div className="flex justify-center items-center mt-10">
                No Course Found
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
            {[...Array(4)].map((_, idx) => (
              <CoursecardSkeleton key={idx} />
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default StudentMycourse;
