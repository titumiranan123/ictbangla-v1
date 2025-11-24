import React from "react";
import CommonCourseslider from "./CommonCourseslider";
import IconImage from "../(additional pages)/about-us/iconImages";
import axios from "axios";

const TopCourseSection = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=TOP_COURSES`
  );

  return (
    <div className="container mt-[32px] ">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex justify-between items-end"
      >
        <h2
          className=" text-black-color text-[48px] font-[700] leading-[60px] "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          আমাদের{" "}
          <span className="text-[#3CB449] text-[48px] relative">
            {" "}
            টপ-কোর্স{" "}
            <IconImage
              fileName="moon_mark.svg"
              className="absolute h-[33px] -right-2 -bottom-3 !w-[183px]"
            />{" "}
          </span>{" "}
          সমূহ
        </h2>
        <button
          className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer"
          type="button"
        >
          সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
        </button>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-[89px]"
      >
        <CommonCourseslider data={result?.data ?? []} isWhite={false} />
      </div>
    </div>
  );
};

export default TopCourseSection;
