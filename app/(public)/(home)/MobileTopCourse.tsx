import React from "react";
import Image from "next/image";
import MobileCommonCourseslider from "./MobileCommonCourseslider";
import axios from "axios";
import Button from "./Button";

const MobileTopCourse = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=TOP_COURSES`
  );

  return (
    <div className="container  ">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex flex-col gap-1 w-full">
          <h2
            className="text-[24px]  relative leading-[32px] font-bold text-center mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            আমাদের <span className="text-[#3CB449]"> টপ-কোর্স </span> সমূহ
            <Image
              className="absolute right-32 md:right-72"
              src={"/assets/redmark.png"}
              alt=""
              width={103}
              height={24}
            />
          </h2>
        </div>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-[36px] md:mt-[80px] "
      >
        <MobileCommonCourseslider data={result?.data} />
      </div>
      <div
        className="flex justify-end items-start  mt-4 "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Button
          hoverColor="#ce2f2f"
          title="সব দেখুন "
          className=" text-[18px] text-primary font-[700]"
          href={"/courses"}
        />
      </div>
    </div>
  );
};

export default MobileTopCourse;
