/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import EStroeCard from "../EStroeCard";
import IconImage from "../../(additional pages)/about-us/iconImages";

const MobileEstore = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);
  return (
    <div className="container sectionGap">
      <div className="flex justify-between items-center gap-8">
        <h3 className="text-[24px] font-bold text-black-color">ICT Bangla </h3>
        <h3 className="text-[24px] font-bold text-primary px-6  border border-primary rounded-2xl">
          e-store{" "}
        </h3>
      </div>

      <div className=" mt-10 gap-6 relative">
        <style>
          {`
             .eStore .swiper-slide {
                height: 520px !important;
              }
              
              .eStore .swiper-pagination {
                bottom: 18px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 20px !important;
              }
              
              .eStore .swiper-pagination-bullet {
                background: #D2D8D3 !important; 
                opacity: 1 !important;
                position: relative !important;
                width:42px;
                height:8px;
                border-radius: 4px;
              }
              .eStore .swiper-pagination-bullet:after {
                content:none
              }
            
              
              .eStore .swiper-pagination-bullet-active {
                position: relative !important;
                 background-color: #29AE48 !important;
                 width:16px;
                 height:8px !important;
                 border-radius: 4px;
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
          className={`eStore`}
        >
          {[...Array(6)]?.map((course: any, idx: number) => (
            <SwiperSlide
              key={idx}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                <EStroeCard />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          disabled={isBeginning}
          className=" absolute  -top-2 left-0  text-primary px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
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
          className=" absolute -top-2 right-0     text-primary  z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <ArrowRightCircle
            style={{ strokeWidth: "1.2px", height: "24px", width: "24px" }}
            className="hover:text-primary hover:fill-bg-secondary w-[24px] h-6 text-[24px] "
          />
        </button>
      </div>
      <button
        className="text-primary mt-4 flex justify-end items-center text-lg font-bold  gap-2 cursor-pointer w-full"
        type="button"
      >
        সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
      </button>
    </div>
  );
};

export default MobileEstore;
