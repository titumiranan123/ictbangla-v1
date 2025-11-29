/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Coursecard from "./mobile/Coursecard";
const MobileCommonCourseslider: React.FC<{ data: any; isWhite?: boolean }> = ({
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
  if (!data) {
    return null;
  }
  return (
    <>
      <style>
        {`
  /* top course slider  */
  .top-courses-swiper {
    height: 560px !important;
  }
  .top-courses-swiper .swiper-slide {
    height: 500px !important;
  }

  /* Default bullet color based on isWhite */
  .common-courses-swiper .swiper-pagination-bullet {
  display:none;
  }
  .common-courses-swiper .swiper-pagination-bullet-active {
    background-color: ${isWhite ? "#fff" : "#161615"} !important;
  }

  @media screen and (max-width: 640px) {
    .top-courses-swiper {
      height: 510px !important;
    }
    .top-courses-swiper .swiper-slide {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }
    /* Mobile override (optional if you want a different color) */
    .common-courses-swiper .swiper-pagination-bullet {
      background: ${isWhite ? "#fff" : "#161615"} !important;
    }
    .common-courses-swiper .swiper-pagination-bullet-active {
      background-color: ${isWhite ? "#fff" : "#161615"} !important;
    }
  }
  `}
      </style>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
        className={`top-courses-swiper common-courses-swiper ${
          isWhite ? "pagination-white" : "pagination-dark"
        }`}
      >
        {data?.map((course: any, idx: number) => (
          <SwiperSlide
            key={course.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
              <Coursecard data={course} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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

      <button
        disabled={isBeginning}
        className=" absolute  -top-12 left-0  text-primary px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
      >
        <ArrowLeftCircle
          style={{ strokeWidth: "1.2px", height: "24px", width: "24px" }}
          className="hover:text-primary"
        />
      </button>
      <button
        disabled={isEnd}
        className=" absolute -top-12 right-2     text-primary  z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
      >
        <ArrowRightCircle
          style={{ strokeWidth: "1.2px", height: "24px", width: "24px" }}
          className="hover:text-primary hover:fill-bg-secondary w-[24px] h-6 text-[24px] "
        />
      </button>
    </>
  );
};

export default MobileCommonCourseslider;
