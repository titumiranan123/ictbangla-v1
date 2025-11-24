/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Coursecard from "./mobile/Coursecard";

const CommonCourseslider: React.FC<{ data: any; isWhite?: boolean }> = ({
  data,
  isWhite = false,
}) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && data?.length) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [data]);

  if (!data) return null;

  return (
    <div
      className={`relative w-full max-w-[1440px] mx-auto px-4 md:px-4 2xl:px-0 xl:px-28`}
    >
      {/* FIXED CSS – No more broken height */}
      <style>
        {`
          .desktopCourse .swiper-slide {
            display: flex;
            height:560px !important;
            justify-content: center;
            align-items: start;
          }
        
          /* Swiper container এ relative position থাকতে হবে */
          .desktopCourses {
            position: relative;
          }
          
          /* Left side gradient */
          .desktopCourses::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100px; /* Gradient এর width */
            background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);

            z-index: 10;
            pointer-events: none; /* Click through করার জন্য */
          }
          
          /* Right side gradient */
          .desktopCourses::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100px;
            background: linear-gradient(-90deg, #FFFFFF -15.77%, rgba(255, 255, 255, 0) 100%);
            z-index: 10;
            pointer-events: none;
          }
        `}
      </style>

      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 14 },
            1280: { slidesPerView: 3, spaceBetween: 16 },
            1440: { slidesPerView: 4.3, spaceBetween: 16 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className={`desktopCourse ${
            isWhite ? "pagination-white " : "pagination-dark desktopCourses"
          }`}
        >
          {data?.map((course: any, idx: number) => (
            <SwiperSlide key={idx}>
              <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                <Coursecard data={course} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        disabled={isBeginning}
        className="md:block hidden absolute  top-[42%] 2xl:-left-12 lg:left-5 -translate-y-1/2 text-primary px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
      >
        <ArrowLeftCircle
          style={{ strokeWidth: "1.2px" }}
          className="hover:text-primary"
        />
      </button>
      <button
        disabled={isEnd}
        className="md:block hidden absolute top-[42%] 2xl:-right-12 lg:right-4 -translate-y-1/2 text-primary z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
      >
        <ArrowRightCircle
          style={{ strokeWidth: "1.2px" }}
          className="hover:text-primary hover:fill-bg-secondary "
        />
      </button>
      <noscript>
        <style>
          {`

      /* Scope only to this component */
      .common-courses-swiper,
      .common-courses-swiper .swiper-wrapper,
      .common-courses-swiper .swiper-slide {
        all: unset !important;
      }

      .common-courses-swiper .swiper-wrapper {
        display: flex !important;
        gap: 1rem !important;
        overflow-x: hidden !important;
        scroll-snap-type: x mandatory !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .common-courses-swiper .swiper-slide {
        flex: 0 0 268px !important;
        transform: none !important;
        opacity: 1 !important;
        scroll-snap-align: start !important;

      }
    `}
        </style>
      </noscript>
    </div>
  );
};

export default CommonCourseslider;
