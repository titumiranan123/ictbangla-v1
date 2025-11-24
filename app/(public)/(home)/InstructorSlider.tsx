"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";
import InstructorCard from "./InstructorCard";
import MentorCard from "@/components/(home)/home/additional/MentorCard";
const InstructorSlider: React.FC<{ data: any }> = ({ data }) => {
  return (
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
          slidesPerView: 3,
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
      className="instructorSwiper"
    >
      <style>{`
 .instructorSwiper .swiper-slide {
  height: 580px !important;
}
 `}</style>
      {data?.map((instructor: any, idx: number) => (
        <SwiperSlide key={idx}>
          <MentorCard data={instructor} idx={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InstructorSlider;
