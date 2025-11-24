"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import TopicButton from "@/components/(home)/shared/TopicButton";
import Image from "next/image";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import home from "@/public/assets/icon/house-window.svg";
import React from "react";
interface props {
  categories: any;
}
const CoursesHeader: React.FC<props> = ({ categories }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6  py-8">
      {/* Breadcrumbs */}
      <div className="flex flex-col gap-2 justify-start pt-5   ">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex gap-1 items-center text-sm text-[#1D2939]"
          aria-label="Breadcrumb"
        >
          <Image src={home} alt="Home" width={14} height={14} />
          <Image
            src={angleRight}
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          পৃষ্ঠাগুলি
          <Image
            src={angleRight}
            alt=""
            width={20}
            height={20}
            aria-hidden="true"
          />
          <span>আমাদের কোর্স সমূহ </span>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-[26px] md:text-[42px] font-bold mt-4 text-[#1D2939]"
        >
          আমাদের কোর্স সমূহ
        </h1>
      </div>

      {/* Topic Buttons */}
      <div className="lg:mt-[40px] mt-5">
        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="font-[400] lg:text-[24px] lg:leading-[20px] mt-[5px] text-[#1D2939]"
        >
          কোর্স সম্পর্কিত বিষয়সমূহ :
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex gap-2 lg:flex-nowrap flex-wrap items-center mt-5"
          role="list"
        >
          {categories?.map((topic: any) => (
            <TopicButton
              key={topic._id}
              title={topic?.title}
              id={topic._id}
              slug={topic.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesHeader;
