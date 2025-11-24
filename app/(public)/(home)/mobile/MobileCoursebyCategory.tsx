/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { ArrowLeftCircle, ArrowRightCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Coursecard from "./Coursecard";

const MobileCoursebyCategory = ({
  categories,
  courseData,
}: {
  categories: any;
  courseData: any;
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const swiperRef = useRef<any>(null);
  const [filterKey, setFilterKey] = useState<string | null>(
    courseData[0]?.basicInfo?.category
  );
  useEffect(() => {
    if (swiperRef.current && categories?.length) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [categories]);
  // Set initial filter to first category if available
  if (categories?.length > 0 && !filterKey) {
    const reverse = categories?.slice()?.reverse()[0];
    setFilterKey(reverse?._id);
  }

  const filteredData = courseData?.filter(
    (course: any) => course?.basicInfo?.category === filterKey
  );

  // Count courses per category
  const getCourseCount = (categoryId: string) => {
    return courseData.filter(
      (course: any) => course?.basicInfo?.category === categoryId
    ).length;
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #840000 0%, #D34242 49.52%, #840000 100%) ",
        minHeight: "820px",
      }}
      className=" sectionGap py-5"
    >
      <div className="container mx-auto ">
        <div data-aos="fade-up" data-aos-delay="300" className="text-center ">
          <h2 className="text-xl font-bold bg-primary rounded-[50px] py-[10px] px-[32px] w-[257px] flex justify-center items-center -translate-y-24 ms-16 h-[57px] text-white mt-4">
            আমাদের কোর্স সমূহ
          </h2>
        </div>
        <div className="relative  mt-0">
          {/* Categories Swiper */}
          <Swiper
            freeMode={true}
            modules={[FreeMode, Navigation]}
            slidesPerView={"auto"}
            spaceBetween={10}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsBeginning(swiper.isEnd);
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="pb-10 relative course-category-swiper"
          >
            {categories
              ?.slice()
              ?.reverse()
              ?.map((category: any) => (
                <SwiperSlide style={{ width: "100%" }} key={category._id}>
                  <div
                    className={`relative mx-auto  max-w-[360px]   h-[75px] flex justify-between px-4 items-center  rounded-xl  overflow-hidden p-[2px] transition-all  group hover:bg-primary  ${
                      category._id === filterKey ? "bg-primary" : "bg-neutral"
                    }`}
                  >
                    <div
                      className={`w-[64px] flex justify-center items-center flex-col gap-1 h-16 rounded-full  p-2  ${
                        category._id !== filterKey
                          ? "bg-[#707070] group-hover:bg-white"
                          : "bg-neutral"
                      }`}
                    >
                      <Image
                        src={"/assets/allcourse.png"}
                        alt="allcourse"
                        width={16}
                        height={16}
                      />
                      <p
                        className={`text-[8px]   ${
                          category._id !== filterKey
                            ? "text-white group-hover:text-primary"
                            : "text-[#707070]"
                        }`}
                      >
                        All Course
                      </p>
                    </div>
                    <button
                      onClick={() => setFilterKey(category._id)}
                      className={`w-[196px] h-[71px] z-50 strock cursor-pointer rounded-xl group transition-all duration-300 ease-in-out text-center  ${
                        category._id === filterKey
                          ? "text-white   "
                          : " text-[#8A8A8A]  hover:text-white  "
                      }`}
                    >
                      <p
                        className={`font-medium text-xl  text-left line-clamp-4 group-hover:text-white ${
                          category._id === filterKey
                            ? "text-white "
                            : " text-[#8A8A8A] "
                        }`}
                      >
                        {category.title}
                      </p>
                      <div className="text-sm mt-1 flex gap-4 items-center justify-start">
                        <span
                          className={`w-2 h-2 rounded-full  group-hover:bg-white ${
                            category._id === filterKey
                              ? "bg-white"
                              : "bg-[#8A8A8A]"
                          }`}
                        ></span>
                        <span
                          className={`   group-hover:text-white ${
                            category._id === filterKey
                              ? "text-white"
                              : "text-[#8A8A8A]"
                          }`}
                        >
                          {getCourseCount(category._id)} কোর্স
                        </span>
                      </div>
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <button
            disabled={isBeginning}
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-24 md:-top-14 left-0 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowLeftCircle className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-24 md:-top-10 right-0 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowRightCircle className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-10 mb-10 ">
            {filteredData.length === 0 && (
              <div className="min-h-36 h-auto w-full flex justify-center items-center col-span-4">
                Comming soon ......
              </div>
            )}
            {filteredData?.slice(0, 4).map((course: any, idx: number) => (
              <div
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
                key={course._id}
              >
                <Coursecard data={course} />
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {filteredData?.length > 4 && (
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center mt-10"
          >
            <Link
              href={`/courses?category=${filterKey}`}
              className="inline-flex items-center px-6 py-3 bg-[#1cab55] text-white rounded-lg hover:bg-[#16d43b] transition-colors"
            >
              আরও কোর্স দেখুন
              <ChevronRight className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileCoursebyCategory;
