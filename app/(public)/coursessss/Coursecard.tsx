"use client";
import { Course } from "@/app/interface/coursecard";
import IconImage from "@/common/iconImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Coursecard = ({
  data,
  isPreMium,
}: {
  data: Course;
  isPreMium?: boolean;
}) => {
  return (
    <div className="cardbg group 2xl:!w-[319px] xl:w-[307px] w-[319px] !h-[464px]  mx-auto  transition-all   duration-300 ease-in-out hover:shadow-lg  rounded-[8px] p-[1px] ">
      <style>
        {`
        .cardbg {
            background: linear-gradient(161.66deg, rgba(89, 222, 124, 0.75) 1.12%, #EAF7ED 98.7%);
        }
        .cardbg:hover {
            background: linear-gradient(161.66deg, rgba(89, 222, 124, 0.75) 100%, #EAF7ED 98.7%);
        }
        .card-border{
            background: linear-gradient(90deg, #D2D8D3 0%, rgba(210, 216, 211, 0) 100%);
        }
      `}
      </style>
      <div className="2xl:w-[317px] xl:w-[305px] w-[317]  h-[462px]  rounded-[8px] 2xl:p-4 xl:p-3 p-4 overflow-hidden bg-white">
        <Link
          href={`/courses/${data?.basicInfo?.slug}`}
          className="relative 2xl:w-[283px] w-[263px] h-[191px] overflow-hidden rounded-[8px] block"
        >
          {/* Thumbnail image */}
          <Image
            src={data?.media?.thumbnail}
            alt={data?.basicInfo?.title}
            className="!w-[285px] !h-[191px] object-cover"
            width={285}
            height={191}
          />

          {!isPreMium && (
            <div className="absolute left-2 top-2 flex items-center gap-2">
              <div className="w-[23px] h-[23px] bg-[#29AE48] rounded-full flex justify-center items-center z-10">
                <div className="w-5 h-5 bg-white rounded-full flex justify-center items-center">
                  <svg
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.04778 3.05893C6.67477 3.42092 6.67477 4.32589 6.04778 4.68788L1.6393 7.23312C1.01231 7.59511 0.228584 7.14263 0.228584 6.41865V1.32817C0.228584 0.604188 1.01231 0.151703 1.6393 0.513692L6.04778 3.05893Z"
                      fill="#ED2024"
                    />
                  </svg>
                </div>
              </div>
              <span
                title="Pre-Recorded"
                className="w-[70px] h-[16px] bg-[#29AE48] rounded-full -ms-6 text-[6px] flex justify-end items-center text-white english-text"
              >
                <span className="me-2">PRE-RECORDED</span>
              </span>
            </div>
          )}

          {!isPreMium && (
            <div className="bg-[#29AE48] group-hover:opacity-0 group-hover:delay-75 transition-all duration-300 ease-in-out rotate-[40deg] w-[188px] absolute top-[22px] -right-[62.73px] text-white -ms-3 font-bold flex justify-center items-center text-xs py-1.5 english-text">
              <span className="group-hover:translate-x-20 -translate-x-1 transition-all duration-300 ease-in-out">
                UP-COMING
              </span>
            </div>
          )}
          {isPreMium && (
            <div className="bg-[linear-gradient(89deg,#FFED26_23.38%,#896F04_99.13%)] rotate-[-50deg] w-[188px] absolute top-[20px] -left-[62.73px] text-black-color font-bold flex justify-center items-center text-xs py-1.5">
              PREMIUM
            </div>
          )}
        </Link>

        <div className="mt-6">
          {isPreMium && (
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <IconImage
                  fileName="course-card-batch.svg"
                  className="!w-[104px] !h-[32px]"
                />
                <span className="text-white font-medium absolute top-1 left-2 leading-[20px]">
                  Batch-01
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconImage fileName="calendar_month-gray.svg" />
                <span className="text-xs font-medium text-text-neutral leading-[20px]">
                  1st july 2025
                </span>
              </div>
            </div>
          )}

          {!isPreMium && (
            <div className="flex items-center  gap-1.5">
              <h2 className="2xl:text-sm xl:text-[12px] text-sm 2xl:leading-[20px] xl:leading-[18px] leading-[20px] font-bold tracking-[0.42px] text-[#29AE48] english-text ">
                Total Project - 4
              </h2>
              <div className="flex items-center justify-center gap-1">
                <IconImage
                  fileName="lesson-icon.svg"
                  className="!w-[14px] !h-[14px]"
                />
                <p className="text-xs font-medium english-text flex items-center text-secondary-text leading-[18px]">
                  {data?.total_lessons} Lessons
                </p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IconImage
                  fileName="hour.png"
                  className="!w-[14px] !h-[14px]"
                />
                <p className="text-xs font-medium  text-text-secondary montserrat flex items-center english-text leading-[18px]">
                  {data?.total_duration} hours
                </p>
              </div>
            </div>
          )}

          {/* title */}
          <Link
            href={`/courses/${data?.basicInfo?.slug}`}
            className="text-[16px] text-secondary-text leading-[22px] tracking-[0.32px]  font-[600] hover:scale-[96.1%] duration-200 transition-all    english-text inline-block mt-3"
          >
            {data?.basicInfo?.title}
          </Link>

          <div className="mt-3 mb-4 space-y-2">
            <hr className="h-px w-full bg-gradient-to-r from-[#D2D8D3] to-[#D2D8D3]/0 border-0" />

            <div className="flex justify-between w-full items-center">
              <Link
                href={`/courses/${data?.basicInfo?.slug}`}
                className="text-primary font-semibold leading-[18px] text-xs  english-text "
              >
                {data?.basicInfo?.creator?.first_name}{" "}
                {data?.basicInfo?.creator?.last_name}
              </Link>
              <div className="flex gap-2">
                <IconImage fileName="shoping_bag.svg" />
                <IconImage fileName="share_icon.svg" />
              </div>
            </div>
            <hr className="h-px w-full bg-gradient-to-r from-[#D2D8D3] to-[#D2D8D3]/0 border-0" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <IconImage
                    fileName="star_icon.svg"
                    className="!h-[14px] w-[14px]"
                  />
                  <IconImage
                    fileName="star_icon.svg"
                    className="!h-[14px] w-[14px]"
                  />
                  <IconImage
                    fileName="star_icon.svg"
                    className="!h-[14px] w-[14px]"
                  />
                  <IconImage
                    fileName="star_icon.svg"
                    className="!h-[14px] w-[14px]"
                  />
                  <IconImage
                    fileName="star_icon.svg"
                    className="!h-[14px] w-[14px]"
                  />
                </div>
                <p className="text-xs font-semibold english-text text-secondary-text leading-[100%]">
                  ( 194 )
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IconImage
                  fileName="peoples_icon.svg"
                  className="!h-[14px] w-[14px]"
                />{" "}
                <p className="text-xs font-medium text-secondary-text english-text leading-[100%]">
                  18 Students
                </p>
              </div>
            </div>
            <hr className="h-px w-full bg-gradient-to-r from-[#B0FFC5] to-[#D2D8D3]/0 border-0" />
          </div>

          <div className="flex justify-between items-center mt-3">
            <div className="flex justify-center items-center gap-2">
              <p className="text-[24px] leading-[32px] text-black-color english-text font-semibold ">
                ৳ {data?.pricing?.price?.main}
              </p>
              <p className="text-sm text-[#8A8A8A] english-text font-medium leading-[20px] mt-1">
                <span> ৳ {data?.pricing?.price?.main}</span>
              </p>
            </div>
            <Link
              href={`/courses/${data?.basicInfo?.slug}`}
              className="button-primary w-fit !leading-[23px] px-[22.5px] "
            >
              বিস্তারিত
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
