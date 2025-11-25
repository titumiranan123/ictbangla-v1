/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useCourse from "@/hooks/public/useCourse";
import React from "react";
import Coursecard from "../(home)/mobile/Coursecard";

const UpcomingCourse = () => {
  const { data } = useCourse();

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {data?.map((dt: any, idx: number) => (
        <Coursecard data={dt} key={idx} />
      ))}
    </div>
  );
};

export default UpcomingCourse;
