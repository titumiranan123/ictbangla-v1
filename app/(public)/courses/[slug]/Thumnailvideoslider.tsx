/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Thumbs } from "swiper/modules";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import PluseIcon from "@/components/(home)/home/PulseIcon/PluseIcon";

function Thumnailvideoslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState("");
  const mainSwiperRef = useRef<any>(null);
  const thumbsSwiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (mainSwiperRef.current) {
      setIsBeginning(mainSwiperRef.current.isBeginning);
      setIsEnd(mainSwiperRef.current.isEnd);
    }
  }, []);

  return (
    <div className="w-[362px] mx-auto rounded-lg overflow-hidden">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        onSwiper={(swiper) => {
          mainSwiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="mySwiper2 h-[260px]"
      >
        {[...Array(10)].map((_: any, idx: number) => (
          <SwiperSlide key={idx} className="relative">
            <img
              className="object-cover"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="dd"
            />
            <div className="absolute top-[35%] left-[40%]">
              <PluseIcon />
            </div>
            <p
              style={{ zIndex: 99 }}
              className="flex justify-start items-center w-full bg-white/25 backdrop-blur-[39.69px] rounded-[24.38px] max-w-[324px] max-h-[32px] border border-[#29AE48] -translate-y-36 mx-auto gap-5 px-5 cursor-pointer"
            >
              <Image
                src={"/assets/icon/playicon.png"}
                alt="play"
                width={18}
                height={18}
              />

              <span className="text-[18px] font-[600] text-white">
                Watch Promo Video
              </span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={-5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={(swiper) => {
          setThumbsSwiper(swiper as any);
          thumbsSwiperRef.current = swiper;
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper h-[80px] mt-4"
      >
        <style>
          {`
          .mySwiper2 {
            height: 260px !important;
          }
          .mySwiper .swiper-slide {
            width: 80px !important;
            height: 40px !important;
          }
          `}
        </style>
        {[...Array(10)].map((_: any, idx: number) => (
          <SwiperSlide
            key={idx}
            style={{ width: "71px", height: "40px", overflow: "hidden" }}
          >
            <Image
              src={"/assets/course-1.png"}
              width={71}
              height={40}
              alt="course-1"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        disabled={isBeginning}
        className="md:block hidden absolute top-[40%]  -left-2 -translate-y-1/2 text-primary px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => {
          mainSwiperRef.current?.slidePrev();
          thumbsSwiperRef.current?.slidePrev();
        }}
        aria-label="Previous slide"
      >
        <ArrowLeftCircle
          style={{ strokeWidth: "1.2px" }}
          className="hover:text-primary bg-bg-secondary/40 rounded-full hover:fill-bg-secondary"
        />
      </button>
      <button
        disabled={isEnd}
        className="md:block hidden absolute top-[40%] -right-0 -translate-y-1/2 text-primary z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
        onClick={() => {
          mainSwiperRef.current?.slideNext();
          thumbsSwiperRef.current?.slideNext();
        }}
        aria-label="Next slide"
      >
        <ArrowRightCircle
          style={{ strokeWidth: "1.2px" }}
          className="hover:text-primary bg-bg-secondary/40 rounded-full hover:fill-bg-secondary"
        />
      </button>
    </div>
  );
}

export default Thumnailvideoslider;
