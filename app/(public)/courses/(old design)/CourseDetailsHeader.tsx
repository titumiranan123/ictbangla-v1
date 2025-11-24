/* eslint-disable @typescript-eslint/no-explicit-any */
import { RenderStars } from "@/components/(home)/shared/RenderStars";
import Image from "next/image";
import React from "react";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import home from "@/public/assets/icon/house-window.svg";
import clock from "@/public/assets/icon/clock-three.svg";
const CourseDetailsHeader = ({ data }: { data: any }) => {
  return (
    <div className="text-[#1D2939] ">
      <div className="container flex flex-col gap-2 justify-start   pb-6">
        <div className="lg:w-[60%] w-full">
          <div className="flex gap-1 items-center text-sm">
            <Image
              className="w-[14px] h-[14px]"
              src={home}
              alt="home"
              priority
              decoding="async"
            />
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <span>Pages</span>
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <span>{data?.basicInfo?.category?.title}</span>
          </div>
          <h1 className="md:mt-[20px] mt-2 mb-1  text-[#1D2939] font-bold md:text-3xl text-xl">
            {data?.basicInfo?.title}
          </h1>

          <p className="font-[400] lg:text-[16px] lg:leading-[26px] mt-[5px] text-[#1D2939]">
            {data?.basicInfo?.short_description}
          </p>
          <div className="flex md:flex-row flex-wrap items-center md:gap-6 gap-2 md:mt-5 mt-2 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-[#1cab55] mt-[2px]">
                ( {data?.total_ratting ?? 0})
              </span>
              {RenderStars(data?.ratting_point ?? 0)}
              <span className="mt-[2px]">
                {data?.total_ratting ?? 0} Review
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="text-[#1cab55]"
              >
                <path d="M17.5,0H6.5C4.019,0,2,2.019,2,4.5V20.5c0,1.93,1.57,3.5,3.5,3.5h12c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,4.5v12.5H7V1h5V9.848c0,.502,.307,.93,.782,1.091,.476,.16,.979,.007,1.284-.392l.934-1.223,.934,1.223c.306,.402,.82,.551,1.284,.392,.475-.161,.782-.589,.782-1.091V1.036c1.694,.243,3,1.704,3,3.464ZM13,1h4V9.848c0,.09-.056,.127-.103,.144-.046,.015-.114,.02-.168-.051l-1.331-1.743c-.189-.248-.605-.248-.795,0l-1.331,1.743c-.056,.072-.123,.067-.168,.052-.047-.016-.103-.054-.103-.144V1ZM3,4.5c0-1.76,1.306-3.221,3-3.464v15.964h-.5c-.978,0-1.864,.404-2.5,1.053V4.5Zm14.5,18.5H5.5c-3.286-.059-3.284-4.942,0-5h15.5v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
              </svg>
              <span>{data?.total_lessons} Lessons</span>
            </div>
            <span className="flex items-center gap-[6px]">
              <Image className="w-4 h-4" src={clock} alt="clock" />
              <span>{data?.total_duration || 0}</span> hours
            </span>
            <div>
              <span className="flex">
                Last updated: {new Date(data?.updatedAt)?.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHeader;
