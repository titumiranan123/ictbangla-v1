/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Coursecard from "./mobile/Coursecard";
import TabCategoryswiper from "./TabCategoryswiper";

const CourseSlider = ({
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
    <div className=" mt-[100px] container">
      <div
        style={{
          backgroundImage: "url('/assets/coursetab.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "924px",
        }}
        className="  2xl:rounded-[32px] px-16"
      >
        <div data-aos="fade-up" data-aos-delay="300" className="text-center ">
          <h1 className="text-[18px] leading-[23px] h-[57px]  bg-primary rounded-[50px] -translate-y-7 w-[221px] flex justify-center items-center mx-auto font-bold text-white">
            আমাদের কোর্স সমূহ
          </h1>
        </div>
        <div className="relative max-w-full mt-[50px] mx-auto">
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
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4.9,
                spaceBetween: 10,
              },
              1400: {
                slidesPerView: 4.3,
                spaceBetween: 10,
              },
            }}
            className="pb-12 mx-auto relative course-category-swiper"
          >
            {categories
              ?.slice()
              ?.reverse()
              ?.map((category: any) => (
                <SwiperSlide key={category._id}>
                  <div
                    className={`relative mx-auto  max-w-[320px] w-full   max-h-[80px] flex justify-between px-[10px] py-[18px]  items-center  rounded-xl  overflow-hidden p-[2px] transition-all  group hover:bg-primary  ${
                      category._id === filterKey ? "bg-primary" : "bg-white"
                    }`}
                  >
                    <div
                      className={`w-[54px] flex justify-center items-center flex-col gap-1 h-[54px] rounded-full  p-2  ${
                        category._id !== filterKey
                          ? "bg-[#707070] group-hover:bg-white"
                          : "bg-white"
                      }`}
                    >
                      <Image
                        src={"/assets/allcourse.png"}
                        alt="allcourse"
                        width={16}
                        height={16}
                      />
                    </div>
                    <button
                      onClick={() => setFilterKey(category._id)}
                      className={`w-[196px] h-[54px] z-50 strock cursor-pointer rounded-xl group transition-all duration-300 ease-in-out text-center  ${
                        category._id === filterKey
                          ? "text-white   "
                          : " text-[#8A8A8A]  hover:text-white  "
                      }`}
                    >
                      <p
                        className={`font-medium text-xl  text-left line-clamp-4 capitalize group-hover:text-white ${
                          category._id === filterKey
                            ? "text-white "
                            : " text-[#8A8A8A] "
                        }`}
                      >
                        {category.title}
                      </p>
                      <div className="text-sm mt-1 flex gap-1 items-center justify-start">
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
            className="absolute top-6 -left-10 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowLeftCircle className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            disabled={isEnd}
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-6 -right-10 z-10 text-primary disabled:text-slate-400"
          >
            <ArrowRightCircle className="w-6 h-6" />
          </button>
        </div>
        <div className="relative mt-10 rounded-xl bgBorder p-[1px]">
          <style>
            {`
      .bgBorder {
        position: relative;
        border-radius: 12px;
      }

      .bgBorder::before {
        content: "";
        position: absolute;
        inset: 0;
        padding: 1px;
        border-radius: 12px;
        background: linear-gradient(110.48deg, rgba(223, 183, 93, 0.65) 1.01%, #FFEECF 50.15%, rgba(105, 79, 22, 0.45) 98.34%);
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .glassBg {
        background: linear-gradient(110.96deg, rgba(228, 24, 24, 0.045) 7.27%, rgba(110, 11, 11, 0.045) 92.41%);
      }
    `}
          </style>

          <div className="rounded-xl  backdrop-blur-lg glassBg p-10">
            <div className="max-w-[1141px] mx-auto">
              {filteredData.length === 0 ? (
                <div className="min-h-36 h-auto w-full flex justify-center items-center col-span-4">
                  Comming soon ......
                </div>
              ) : filteredData.length > 3 ? (
                <TabCategoryswiper data={filteredData} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData?.map((course: any, idx: number) => (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={100 + idx * 100}
                      key={course._id}
                    >
                      <Coursecard data={course} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
