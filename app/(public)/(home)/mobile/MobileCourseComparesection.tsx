/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseComparisoncard from "./CourseComparisoncard";
import "swiper/css";
import "swiper/css/pagination";
import IconImage from "../../(additional pages)/about-us/iconImages";

const MobileCourseComparesection = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="container">
      <h3 className="text-[24px] font-bold text-black-color text-center">
        Featured Comparisons
      </h3>
      <p className="text-[16px] font-bold text-[#707070] text-center">
        Compare & Choose Your Desired Course !
      </p>

      <div className="flex items-stretch w-full gap-6">
        {/* Swiper Section */}
        <div className="relative w-full mt-10">
          {/* Custom Swiper CSS */}
          <style>{`
            .courseComparson .swiper-slide {
              height: 950px !important;
            }
            .courseComparson .swiper-pagination {
              bottom: 18px !important;
              display: flex !important;
              justify-content: center !important;
              gap: 20px !important;
            }
            .courseComparson .swiper-pagination-bullet {
              display:none;
            }
            .courseComparson .swiper-pagination-bullet-active {
              display:none;
            .courseComparson .swiper-pagination-bullet-active::after {
             display:none;
            }
          `}</style>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              750: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="courseComparson"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {Array.from({ length: 6 }).map((_, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                  <CourseComparisoncard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -top-3 left-0 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowLeftCircle className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -top-3 right-0 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowRightCircle className="w-6 h-6" />
          </button>
        </div>

        {/* Right Button */}
      </div>
      <div className=" mb-10 mt-4 flex justify-end items-center">
        <button className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer">
          সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
        </button>
      </div>
    </div>
  );
};

export default MobileCourseComparesection;
