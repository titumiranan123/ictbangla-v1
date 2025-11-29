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
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";

function Thumnailvideoslider({ data }: { data: any }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const mainSwiperRef = useRef<any>(null);
  const thumbsSwiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (mainSwiperRef.current) {
      setIsBeginning(mainSwiperRef.current.isBeginning);
      setIsEnd(mainSwiperRef.current.isEnd);
    }
  }, []);

  return (
    <div className="w-full max-w-full mx-auto rounded-lg overflow-visible md:px-4 px-1">
      <div className="relative">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
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
          className="mySwiper2"
        >
          {data?.map((dt: any, idx: number) => (
            <SwiperSlide key={idx} className="relative">
              <div className="relative bg-black rounded-[8px] overflow-hidden mx-auto w-full aspect-video">
                <ReactPlayer
                  url={dt?.url}
                  playing={isPlaying}
                  playIcon={
                    <div
                      onClick={() => setIsPlaying(true)}
                      className="flex absolute inset-0 justify-center items-center"
                    >
                      <PluseIcon />{" "}
                    </div>
                  }
                  onStart={() => setIsPlaying(true)}
                  onEnded={() => setIsPlaying(false)}
                  width="100%"
                  height="100%"
                  light={
                    <div className="w-full h-full">
                      <Image
                        src={dt?.image}
                        alt={`thumbnail-${idx}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  }
                />

                {!isPlaying && (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="
                    absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 
                    flex justify-start items-center 
                    bg-white/25 backdrop-blur-[40px]
                    rounded-[24.38px] 
                    w-[90%] sm:w-[324px] h-[28px] sm:h-[32px]
                    border border-[#29AE48]
                    cursor-pointer
                    overflow-hidden
                    z-50
                  "
                  >
                    <Marquee>
                      <div className="flex justify-center items-center gap-2 py-2 px-10 sm:px-20">
                        <Image
                          src="/assets/icon/playicon.png"
                          alt="play"
                          width={18}
                          height={18}
                          className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                        />
                        <span className="text-[16px] sm:text-[18px] font-[600] text-white whitespace-nowrap">
                          Watch Promo Video
                        </span>
                      </div>
                    </Marquee>
                  </div>
                )}
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
          className="mySwiper mt-3 sm:mt-4"
        >
          <style jsx global>{`
            .mySwiper2 {
              height: auto !important;
              width: 100% !important;
            }
            .mySwiper {
              height: 60px !important;
            }
            .mySwiper .swiper-slide {
              width: 70px !important;
              height: 40px !important;
              border-radius: 4px;
              overflow: hidden;
            }
            .mySwiper .swiper-slide-thumb-active {
              opacity: 1 !important;
              border: 2px solid #29ae48 !important;
            }

            @media (min-width: 640px) {
              .mySwiper {
                height: 80px !important;
              }
              .mySwiper .swiper-slide {
                width: 80px !important;
                height: 40px !important;
              }
            }
          `}</style>
          {data?.map((dt: any, idx: number) => (
            <SwiperSlide key={idx} className="cursor-pointer">
              <Image
                src={dt?.image}
                width={80}
                height={40}
                alt={`thumbnail-${idx}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          disabled={isBeginning}
          className="hidden md:block absolute top-[35%] -left-2 -translate-y-1/2 px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:opacity-50 transition-opacity"
          onClick={() => {
            mainSwiperRef.current?.slidePrev();
            thumbsSwiperRef.current?.slidePrev();
          }}
          aria-label="Previous slide"
        >
          <ArrowLeftCircle
            style={{ strokeWidth: "1.2px" }}
            className="text-primary hover:text-primary bg-white/40 rounded-full hover:bg-white/60 transition-colors"
            size={32}
          />
        </button>

        <button
          disabled={isEnd}
          className="hidden md:block absolute top-[35%] -right-0 -translate-y-1/2 z-10 disabled:cursor-not-allowed disabled:opacity-50 transition-opacity"
          onClick={() => {
            mainSwiperRef.current?.slideNext();
            thumbsSwiperRef.current?.slideNext();
          }}
          aria-label="Next slide"
        >
          <ArrowRightCircle
            style={{ strokeWidth: "1.2px" }}
            className="text-primary hover:text-primary bg-white/40 rounded-full hover:bg-white/60 transition-colors"
            size={32}
          />
        </button>
      </div>
    </div>
  );
}

export default Thumnailvideoslider;
