"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import NewCourseCard from "../course/NewCourseCard";
const HeaderCarsoul: React.FC<{ data: any }> = ({ data }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="lg:w-[35%]  relative  w-full lg:h-[530px] h-[520px] overflow-hidden ">
      <noscript>
        <style>
          {`
      /* Scope only to this component */
      .header-courses-swiper, 
      .header-courses-swiper .swiper-wrapper, 
      .header-courses-swiper .swiper-slide {
        all: unset !important;
      }

      .header-courses-swiper .swiper-wrapper {
        display: flex !important;
        gap: 1rem !important;
        overflow-x: hidden !important;
        scroll-snap-type: x mandatory !important;
        -webkit-overflow-scrolling: touch !important;
      }

      .header-courses-swiper .swiper-slide {
        flex: 0 0 268px !important;
        transform: none !important;
        opacity: 1 !important;
        scroll-snap-align: start !important;
     
      }
    `}
        </style>
      </noscript>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="feature header-courses-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {data?.map((course: any, idx: number) => (
          <SwiperSlide
            key={idx}
            className="!w-[280px] md:!w-[290px] lg:ms-0 !ms-1"
          >
            <NewCourseCard key={course.id} course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
      {data?.length >= 3 && (
        <>
          <button
            disabled={isBeginning}
            className="bg-secondary border border-borderPrimary  absolute w-14 right-20 bottom-3 text-black    px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            ❮
          </button>
          <button
            disabled={isEnd}
            className="absolute w-[60px] right-0 bottom-3 bg-secondary border border-borderPrimary  text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
            onClick={() => swiperRef.current?.slideNext()}
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
};

export default HeaderCarsoul;
