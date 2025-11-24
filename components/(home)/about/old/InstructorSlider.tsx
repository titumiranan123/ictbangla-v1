"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import TeampInstructorcard from "@/components/(instructor)/instructor/TeampInstructorcard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, Pagination } from "swiper/modules";
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
          slidesPerView: 5,
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
      className="instructorSwiper"
    >
      {data?.map((instructor: any, idx: number) => (
        <SwiperSlide key={idx}>
          <TeampInstructorcard instructor={instructor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InstructorSlider;
