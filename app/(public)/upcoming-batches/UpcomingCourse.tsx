/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import NewCourseCard from "@/components/(home)/course/NewCourseCard";
import useCourse from "@/hooks/public/useCourse";
import React from "react";

const UpcomingCourse = () => {
  const { data } = useCourse();
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {data?.map((dt: any) => (
        <NewCourseCard course={dt} key={dt._id} />
      ))}
    </div>
  );
};

export default UpcomingCourse;
