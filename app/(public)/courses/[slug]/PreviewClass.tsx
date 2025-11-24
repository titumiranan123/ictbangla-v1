/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
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

function PreviewClass() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
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
    <div className="relative flex justify-center items-center flex-col mx-auto rounded-lg overflow-hidden">
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
        className="main-swiper"
      >
        <style>
          {`
            .main-swiper {
              width: 350px !important;
              height: 180px !important;
              border-radius: 12px;
            }
            
            .main-swiper .swiper-slide {
              width: 350px !important;
              height: 180px !important;
            }
            
            @media (min-width: 1024px) {
              .main-swiper {
                width: 818px !important;
                height: 435px !important;
              }
              
              .main-swiper .swiper-slide {
                width: 818px !important;
                height: 435px !important;
              }
            }
          `}
        </style>
        {[...Array(10)].map((_, idx) => (
          <SwiperSlide key={idx} className="relative">
            <img
              className="object-cover w-full h-full"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt={`Slide ${idx + 1}`}
            />
            <div
              style={{ zIndex: 999 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <PluseIcon />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={(swiper) => {
          setThumbsSwiper(swiper);
          thumbsSwiperRef.current = swiper;
        }}
        modules={[FreeMode, Thumbs]}
        className="thumbs-swiper mt-4"
      >
        <style>
          {`
            .thumbs-swiper {
              width: 350px !important;
              height: 80px !important;
            }
            
            .thumbs-swiper .swiper-slide {
              width: 71px !important;
              height: 40px !important;
              border-radius: 8px;
              overflow: hidden;
              cursor: pointer;
           
              transition: opacity 0.3s ease;
            }
            
            .thumbs-swiper .swiper-slide-thumb-active {
              opacity: 1;
       
            }
            
            @media (min-width: 1024px) {
              .thumbs-swiper {
                width: 818px !important;
                height: 100px !important;
              }
              
              .thumbs-swiper .swiper-slide {
                width: 90px !important;
                height: 60px !important;
              }
            }
          `}
        </style>
        {[...Array(10)].map((_, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={"/assets/course-1.png"}
              width={90}
              height={60}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        disabled={isBeginning}
        className="hidden lg:block absolute top-[40%] left-8 -translate-y-1/2 text-primary px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => {
          mainSwiperRef.current?.slidePrev();
          thumbsSwiperRef.current?.slidePrev();
        }}
        aria-label="Previous slide"
      >
        <ArrowLeftCircle
          style={{ strokeWidth: "1.2px" }}
          className="w-8 h-8 hover:text-primary bg-white/40 rounded-full transition-colors"
        />
      </button>

      <button
        disabled={isEnd}
        className="hidden lg:block absolute top-[40%] right-10 -translate-y-1/2 text-primary z-10 disabled:cursor-not-allowed disabled:opacity-40"
        onClick={() => {
          mainSwiperRef.current?.slideNext();
          thumbsSwiperRef.current?.slideNext();
        }}
        aria-label="Next slide"
      >
        <ArrowRightCircle
          style={{ strokeWidth: "1.2px" }}
          className="w-8 h-8 hover:text-primary bg-white/40 rounded-full transition-colors"
        />
      </button>
    </div>
  );
}

export default PreviewClass;
