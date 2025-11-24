/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Footerpop from "@/components/(home)/pop/Footerpop";
import CourseDetailsFooter from "./CourseDetailsFooter";
import CourseDetailsSidebar from "./CourseDetailsSidebar";
import CourseDetailsLeftside from "./CourseDetailsLeftside";
import CourseDetailsHeader from "./CourseDetailsHeader";
import CoursePageHolder from "./CoursePageHolder";
import { CoursePriceCalculator } from "./CoursePriceCalculation";
import CourseNotFound from "./not-found";

const OldDesignCourse = async ({
  data,
  fbclid = "",
  slug,
}: {
  data: any;
  fbclid?: string;
  slug: string;
}) => {
  try {
    const totalPrice = CoursePriceCalculator(data);
    return (
      <div className="bg-white relative min-h-screen">
        {/* Main Hero/Holder */}
        <CoursePageHolder data={data} fbclid={fbclid} />
        {/* AOS fallback for noscript */}
        <noscript>
          <style>{`
            [data-aos] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>

        {/* Header Section */}
        <div className="text-[#1D2939] bg-[#F3F4F6]">
          <div className="container flex flex-col gap-2 md:pt-[40px] pt-3 pb-6">
            <CourseDetailsHeader data={data} key={data?._id} />
          </div>
        </div>

        {/* Main Body Content */}
        <div className="flex justify-between gap-10 lg:flex-row flex-col-reverse container py-8 relative">
          {/* Left Section */}
          <div className="lg:w-[70%]">
            <CourseDetailsLeftside data={data} skuId={slug} key={slug} />
          </div>

          {/* Sidebar */}
          <div className="lg:w-[30%] w-full lg:sticky lg:top-10 lg:-mt-32 rounded-[12px] -mt-2">
            <CourseDetailsSidebar data={data} key={data?._id} />
          </div>
        </div>

        {/* Footer CTA */}
        <CourseDetailsFooter
          data={data}
          discountPrice={totalPrice ?? 0}
          fbclid={fbclid}
        />

        {/* Global Footer */}
        <Footerpop />
      </div>
    );
  } catch (error: any) {
    console.error("SingleCourse Page Error:", error);
    return <CourseNotFound />;
  }
};

export default OldDesignCourse;
