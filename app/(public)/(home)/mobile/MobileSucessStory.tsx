/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SuceessStroyCard from "./SuceessStroyCard";
import { Autoplay, Pagination } from "swiper/modules";
import IconImage from "../../(additional pages)/about-us/iconImages";

const buttons = [
  {
    title: "সব",
  },
  {
    title: "ভিডিও এডিটিং (Capcut)",
  },
  {
    title: "ভিডিও এডিটিং",
  },
  {
    title: "এক্সেল",
  },
  {
    title: "কল সেন্টার ",
  },
];

const MobileSuccessStory = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="sectionGap container">
      <h2 className="text-[24px] font-bold text-black-color mb-4 text-center w-fit mx-auto relative">
        সাফল্যের <span className="text-primary">গল্প</span>
        <IconImage
          fileName="moon_mark.svg"
          className="!w-[86px] !h-full absolute top-[26px]  right-[-40px]"
        />
      </h2>
      <p className="text-[16px] font-bold text-[#707070] text-center">
        আমাদের শিক্ষার্থীদের সফলতার গল্পগুলো দেখে নিতে পারেন।
      </p>
      <div className="flex items-center gap-3 mt-10 overflow-x-auto scrollbar-hide px-2 py-3">
        {buttons?.map((item, idx) => {
          const active = selectedButton === idx;

          return (
            <button
              key={idx}
              onClick={() => setSelectedButton(idx)}
              type="button"
              className={`
          whitespace-nowrap px-5 py-2 rounded-lg font-semibold transition-all duration-300
          border border-transparent
          ${
            active
              ? "bg-primary text-white border-primary shadow-md"
              : "bg-[#E6EBE7] text-[#4A4A4A] hover:bg-[#D2D8D3]"
          }
        `}
            >
              {item?.title}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-stretch gap-10 mt-8">
        {/* Swiper Section */}
        <div className="relative w-full mt-10">
          {/* Custom Swiper CSS */}
          <style>{`
            .successStory .swiper-slide {
              height: 380px !important;
              width:100%;
            }
            .successStory .swiper-pagination {
              bottom: 18px !important;
              display: flex !important;
              justify-content: center !important;
              gap: 20px !important;
            }
            .successStory .swiper-pagination-bullet {
              display:none;
            }
            .successStory .swiper-pagination-bullet-active {
              display:none;
            .successStory .swiper-pagination-bullet-active::after {
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
            className="successStory"
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
                <div
                  data-aos="fade-up"
                  className="w-full"
                  data-aos-delay={100 + idx * 100}
                >
                  <SuceessStroyCard />
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
      </div>

      <button
        className="border border-primary text-primary bg-white button-primary w-fit px-4 mx-auto  flex justify-end items-center "
        type="button"
      >
        সব দেখুন
      </button>
    </div>
  );
};

export default MobileSuccessStory;
