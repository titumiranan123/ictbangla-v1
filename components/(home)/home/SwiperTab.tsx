/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import useCategory from "@/hooks/public/useCategory";
import { useEffect, useRef, useState } from "react";
import useCourse from "@/hooks/public/useCourse";
import { ICourse } from "@/interface/Course";
import NewCourseCard from "../course/NewCourseCard";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import CourseCardSkeleton from "../../skeletonloader/CourseCardSkeleton";

const CourseSlider = () => {
  const { data: categories, isLoading: categoryLoader } = useCategory();
  const { data: courseData = [], isLoading: courseLoader } = useCourse();
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
    (course: ICourse) => course?.basicInfo?.category === filterKey
  );

  // Count courses per category
  const getCourseCount = (categoryId: string) => {
    return courseData.filter(
      (course: ICourse) => course?.basicInfo?.category === categoryId
    ).length;
  };

  if (categoryLoader || courseLoader) {
    return (
      <div className="container section mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, index) => (
            <CourseCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center lg:mb-16 mb-10"
      >
        <h1 className="text-3xl font-bold text-[#1D2939]">
          আমাদের <span className="text-[#3CB449]">কোর্স সমূহ</span>
        </h1>
      </div>
      <div className="relative">
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
              slidesPerView: 3,
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
          className="pb-12 relative course-category-swiper"
        >
          {categories
            ?.slice()
            ?.reverse()
            ?.map((category: any) => (
              <SwiperSlide style={{ width: "100%" }} key={category._id}>
                <div className="relative mx-auto  w-[200px] animate-strock  h-[75px] flex justify-center items-center  rounded-xl  overflow-hidden p-[2px]">
                  <button
                    onClick={() => setFilterKey(category._id)}
                    className={`w-[196px] h-[71px] z-50 strock cursor-pointer rounded-xl group shadow-sm transition-all duration-300 ease-in-out text-center border ${
                      category._id === filterKey
                        ? "text-white bg-[#222A3C] border-[#222A3C] shadow-md"
                        : "bg-white text-[#1D2939] border-gray-200 hover:text-white hover:bg-[#222A3C] hover:border-[#222A3C] hover:shadow-md"
                    }`}
                  >
                    <p
                      className={`font-medium line-clamp-4 group-hover:text-white ${
                        category._id === filterKey
                          ? "text-white "
                          : " text-[#1D2939] "
                      }`}
                    >
                      {category.title}
                    </p>
                    <div className="text-sm mt-1 flex gap-4 items-center justify-center">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          category._id === filterKey
                            ? "bg-white"
                            : "bg-[#222A3C]"
                        }`}
                      ></span>
                      {getCourseCount(category._id)} কোর্স
                    </div>
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <button
          disabled={isBeginning}
          className="md:block disabled:opacity-80  bg-secondary border border-borderPrimary absolute w-14 md:top-1/2 md:-left-20 top-1/2 left-0 -translate-y-1/2 text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          {" "}
          ❮
        </button>
        <button
          disabled={isEnd}
          className="md:block  absolute w-[60px] md:top-1/2 md:-right-20 -translate-y-1/2 top-1/2 right-0 bg-secondary border border-borderPrimary text-black px-3 py-1 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-400 disabled:text-slate-400"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          {" "}
          ❯
        </button>
      </div>
      <div className="flex justify-center items-center">
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
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
              <NewCourseCard course={course} />
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
            <FiChevronRight className="ml-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseSlider;
