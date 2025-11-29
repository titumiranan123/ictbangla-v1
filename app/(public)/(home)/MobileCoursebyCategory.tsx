/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import TabCategoryswiper from "./TabCategoryswiper";

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
        minHeight: "790px",
      }}
      className=" sectionGap py-5 mt-16"
    >
      <div className="container mx-auto ">
        <div data-aos="fade-up" data-aos-delay="300" className="text-center ">
          <h2 className="text-xl font-bold bg-primary rounded-[50px] py-[10px] px-[32px] w-[257px] flex justify-center items-center -translate-y-16 ms-[60px] h-[57px] text-white mt-4">
            আমাদের কোর্স সমূহ
          </h2>
        </div>
        <div className="relative w-full  mt-0">
          {/* Categories Swiper */}
          <Swiper
            freeMode={true}
            modules={[FreeMode]}
            slidesPerView={1.1}
            spaceBetween={15}
            breakpoints={{
              360: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              440: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1.3,
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
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="pb-10 relative course-category-swiper"
          >
            {categories
              ?.slice()
              ?.reverse()
              ?.map((category: any) => (
                <SwiperSlide key={category._id}>
                  <div
                    key={category._id}
                    className={`relative mx-auto  w-[270px]    max-h-[80px] flex justify-between md:px-[10px] px-1 py-1 md:py-[18px]  items-center  rounded-xl  overflow-hidden p-[2px] transition-all  gap-4 group hover:bg-primary  ${
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
        </div>
        <div className="flex justify-center items-center">
          {/* Courses Grid */}
          <div className="  mt-16  relative  w-full">
            {filteredData.length === 0 && (
              <div className="min-h-36 h-auto w-full flex justify-center items-center col-span-4">
                Comming soon ......
              </div>
            )}
            <TabCategoryswiper data={filteredData} />
            {/* {filteredData?.slice(0, 4).map((course: any, idx: number) => (
              <div
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
                key={course._id}
              >
                <Coursecard data={course} />
              </div>
            ))} */}
            {/* Custom Navigation Arrows */}
            <button
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -top-10 left-0 z-10 text-primary disabled:text-slate-400"
            >
              <ArrowLeftCircle className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -top-10 right-0 z-10 text-primary disabled:text-slate-400"
            >
              <ArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCoursebyCategory;
