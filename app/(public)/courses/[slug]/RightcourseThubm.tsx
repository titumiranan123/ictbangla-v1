"use client";
import Image from "next/image";
import React from "react";

const RightcourseThubm = () => {
  return (
    <div className="flex gap-1 overflow-hidden py-1">
      <Image
        src={"/assets/course-1.png"}
        width={71}
        height={40}
        alt="course-1"
      />
      <Image
        src={"/assets/course-2.png"}
        width={71}
        height={40}
        alt="course-1"
      />
      <Image
        src={"/assets/course-1.png"}
        width={71}
        height={40}
        alt="course-1"
      />
      <Image
        src={"/assets/course-2.png"}
        width={71}
        height={40}
        alt="course-1"
      />
      <Image
        src={"/assets/course-1.png"}
        width={71}
        height={40}
        alt="course-1"
      />
    </div>
  );
};

export default RightcourseThubm;
