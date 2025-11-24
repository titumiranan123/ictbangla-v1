/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import NewCourseCard from "../course/NewCourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const CommonCourseslider: React.FC<{ data: any }> = ({ data }) => {
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 2000,
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
        className="top-courses-swiper common-courses-swiper"
      >
        {data?.map((course: any, idx: number) => (
          <SwiperSlide
            key={course.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
              <NewCourseCard course={course} />
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
        className="md:block hidden bg-secondary border border-borderPrimary absolute w-14 top-1/2 -left-20 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        disabled={isEnd}
        className="md:block hidden absolute w-[60px] top-1/2 -right-20 -translate-y-1/2 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
      >
        ❯
      </button>
    </>
  );
};

export default CommonCourseslider;
