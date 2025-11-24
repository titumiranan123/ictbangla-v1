/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import ReactPlayer from "react-player";
import PluseIcon from "../PulseIcon/PluseIcon";
const data: any = [
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-17.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-18.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-19.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-20.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-21.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-22.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-23.jpeg",
  },
  {
    type: "image",
    image: "/assets/coursesinglepage/asset-24.jpeg",
  },
];
const videodata: any = [
  {
    id: "13",
    video_link: "https://youtu.be/vtpwfGLnIcE",
    thumbnail: "https://i.postimg.cc/fbyYsFYB/thum-1.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "14",
    video_link: "https://youtu.be/TEZ4NRtsR8g",
    thumbnail: "https://i.postimg.cc/SxDcwqYn/thum-2.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "15",
    video_link: "https://youtu.be/tUPjeUEFyJg",
    thumbnail: "https://i.postimg.cc/hP8L1VSb/thum-3.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "16",
    video_link: "https://youtu.be/WsfrWgVx7k8",
    thumbnail: "https://i.postimg.cc/k5YFt970/thum-4.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "17",
    video_link: "https://youtu.be/rcDN5qZZfHM",
    thumbnail: "https://i.postimg.cc/3wxFRWQj/thum-5.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "18",
    video_link: "https://youtu.be/bqsgNZuph1E",
    thumbnail: "https://i.postimg.cc/Hk2tdXRs/thum-6.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "19",
    video_link: "https://youtu.be/VayKrG-PJO8",
    thumbnail: "https://i.postimg.cc/k4VNQZ4B/thum-7.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "20",
    video_link: "https://youtu.be/G1439655_94",
    thumbnail: "https://i.postimg.cc/ZR0HfnfY/thum-8.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "21",
    video_link: "https://youtu.be/9DgrJf-GI9o",
    thumbnail: "https://i.postimg.cc/TPdCDCgD/thum-9.jpg",
    category: "capcut",
    title: "Customer Retention",
  },

  {
    id: "22",
    video_link: "https://youtu.be/-te2Ed0oyYA",
    thumbnail: "https://i.postimg.cc/y8XLxwgK/thum-10.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "23",
    video_link: "https://youtu.be/M7QOyyL2gFE",
    thumbnail: "https://i.postimg.cc/g2PMYY04/thum-11.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "24",
    video_link: "https://youtu.be/h5Hj--0Sib0",
    thumbnail: "https://i.postimg.cc/1zvn8t5S/thum-12.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "25",
    video_link: "https://youtu.be/-0CVLv2VQ2w",
    thumbnail: "https://i.postimg.cc/NjwrVSP3/thum-13.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "26",
    video_link: "https://youtu.be/hG4hFpoq_54",
    thumbnail: "https://i.postimg.cc/mrL1ZM4V/thum-14.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "27",
    video_link: "https://youtu.be/3cE-tbpbT34",
    thumbnail: "https://i.postimg.cc/jSVzTLCk/thum-15.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "28",
    video_link: "https://youtu.be/Rnxp7UOGSpE",
    thumbnail: "https://i.postimg.cc/PrDwSTKb/thum-16.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
];

const CourseReviewSection = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef2 = useRef<any>(null);
  const [isBeginning2, setIsBeginning2] = useState(true);
  const [isEnd2, setIsEnd2] = useState(false);

  useEffect(() => {
    if (swiperRef.current && data?.length) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto section ">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <h2 data-aos="fade-up" data-aos-delay="300">
            Students Review
          </h2>
        </div>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-14 max-w-[850px] mx-auto"
      >
        {/* {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 md:w-[320px] w-full group lg:h-[420px] h-[468px] rounded-lg p-2 animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-300 rounded-lg" />
                  <div className="flex justify-between mt-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-6 w-20 bg-gray-300 rounded"
                      />
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-6 w-5/6 bg-gray-300 rounded-md" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md" />
                    <div className="h-3 w-1/2 bg-gray-300 rounded-md" />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="h-8 w-28 bg-primary bg-opacity-30 rounded" />
                    <div className="h-8 w-28 bg-gray-300 rounded" />
                  </div>
                </div>
              ))}
          </div>
        ) : ( */}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 2,
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
          className="customReveiw"
        >
          {data?.map((course: any, idx: number) => (
            <SwiperSlide
              key={course.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                <Image alt="ig" src={course.image} width={400} height={250} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* )} */}

        {/* Navigation Buttons */}
        {data?.length > 4 ? (
          <>
            <button
              disabled={isBeginning}
              className="md:block hidden bg-secondary border border-borderPrimary absolute w-14 top-1/2 -left-20 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              disabled={isEnd}
              className="md:block hidden absolute w-[60px] top-1/2 -right-20 -translate-y-1/2 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            >
              ❯
            </button>
          </>
        ) : (
          <>
            <button
              className="md:block hidden bg-secondary border border-borderPrimary opacity-40 absolute w-14 top-1/2 -left-20 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10"
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              className="md:block hidden absolute w-[60px] opacity-40 top-1/2 -right-20 -translate-y-1/2 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10"
              aria-label="Next slide"
            >
              ❯
            </button>
          </>
        )}
      </div>
      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-14 max-w-[850px] mx-auto"
      >
        {/* {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 md:w-[320px] w-full group lg:h-[420px] h-[468px] rounded-lg p-2 animate-pulse"
                >
                  <div className="w-full h-52 bg-gray-300 rounded-lg" />
                  <div className="flex justify-between mt-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-6 w-20 bg-gray-300 rounded"
                      />
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-6 w-5/6 bg-gray-300 rounded-md" />
                    <div className="h-4 w-3/4 bg-gray-300 rounded-md" />
                    <div className="h-3 w-1/2 bg-gray-300 rounded-md" />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="h-8 w-28 bg-primary bg-opacity-30 rounded" />
                    <div className="h-8 w-28 bg-gray-300 rounded" />
                  </div>
                </div>
              ))}
          </div>
        ) : ( */}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          //   autoplay={{
          //     delay: 2000,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          //   }}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef2.current = swiper;
            setIsBeginning2(swiper.isBeginning);
            setIsEnd2(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning2(swiper.isBeginning);
            setIsEnd2(swiper.isEnd);
          }}
          className="customReveiw"
        >
          {videodata?.map((rev: any, idx: number) => (
            <SwiperSlide
              key={idx}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="aspect-video w-full">
                <ReactPlayer
                  url={rev.video_link}
                  // playing={playingId === rev.id}
                  light={rev.thumbnail}
                  playIcon={<PluseIcon />}
                  width="100%"
                  height="100%"
                  controls
                  // onClickPreview={() => setPlayingId(rev.id)}
                  // onPlay={() => setPlayingId(rev.id)}
                  // onPause={() => setPlayingId(null)}
                  // onEnded={() => setPlayingId(null)}
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        fs: 1, // Changed to 1 to allow fullscreen
                        //   autoplay: playingId === rev.id ? 1 : 0,
                      },
                    },
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* )} */}

        {/* Navigation Buttons */}
        {data?.length > 4 ? (
          <>
            <button
              disabled={isBeginning2}
              className="md:block hidden bg-secondary border border-borderPrimary absolute w-14 top-1/2 -left-20 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
              onClick={() => swiperRef2.current?.slidePrev()}
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              disabled={isEnd2}
              className="md:block hidden absolute w-[60px] top-1/2 -right-20 -translate-y-1/2 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
              onClick={() => swiperRef2.current?.slideNext()}
              aria-label="Next slide"
            >
              ❯
            </button>
          </>
        ) : (
          <>
            <button
              className="md:block hidden bg-secondary border border-borderPrimary opacity-40 absolute w-14 top-1/2 -left-20 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10"
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button
              className="md:block hidden absolute w-[60px] opacity-40 top-1/2 -right-20 -translate-y-1/2 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10"
              aria-label="Next slide"
            >
              ❯
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseReviewSection;
