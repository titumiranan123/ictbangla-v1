"use client";
import useCategory from "@/hooks/public/useCategory";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import CategorySkeleton from "../../skeletonloader/CategorySkeleton";
interface CategoryItem {
  id: string;
  icon: string;
  title: string;
}

const Category: React.FC = () => {
  const { data, isLoading } = useCategory();
  if (isLoading) {
    return <CategorySkeleton />;
  }

  return (
    <div className=" section  py-6">
      <div className="border-b w-full border-gray-300"></div>
      <div className="container overflow-hidden">
        <Swiper
          loop={true}
          grabCursor={true}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="category-slider"
        >
          {data?.map((category: CategoryItem, index: number) => (
            <SwiperSlide key={category.id ?? index}>
              <div className="flex flex-col py-6 justify-center items-center gap-3 p-4 relative group">
                {/* Category Icon */}
                <div className="p-2 group-hover:bg-gray-100 rounded-full transition-colors">
                  <Image
                    src={category?.icon?.trim() ?? ""}
                    alt={category.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Category Title */}
                <p className="text-sm font-medium text-center">
                  {category.title}
                </p>

                {/* Hover Border Effects */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-0 bg-black 
    transition-all duration-500 ease-out 
    group-hover:w-full group-hover:duration-300 group-hover:ease-in-out"
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Global bottom border */}
      <div className="border-b w-full border-gray-300"></div>
    </div>
  );
};

export default Category;
