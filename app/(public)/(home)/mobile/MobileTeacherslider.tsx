"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import TeamMembersCard from "../../(additional pages)/our-teams/teamMembersCard";

const MobileTeacherSection: React.FC<{ data: any }> = ({ data }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    if (swiperRef.current && data?.length) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [data]);
  return (
    <div className="relative ">
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
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
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
        className="instructorSwiper"
      >
        <style>{`
 .instructorSwiper .swiper-slide {
  height: 530px !important;
}
.instructorSwiper .swiper-pagination-bullet {
  display:none;
  }

 `}</style>
        {data?.map((instructor: any, idx: number) => (
          <SwiperSlide key={idx}>
            <TeamMembersCard member={instructor} />
          </SwiperSlide>
        ))}
      </Swiper>
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
        className=" absolute -top-12 right-0     text-primary  z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
      >
        <ArrowRightCircle
          style={{ strokeWidth: "1.2px", height: "24px", width: "24px" }}
          className="hover:text-primary hover:fill-bg-secondary w-[24px] h-6 text-[24px] "
        />
      </button>
    </div>
  );
};

export default MobileTeacherSection;
