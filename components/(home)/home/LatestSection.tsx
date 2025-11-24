/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import SingleBlogcard from "./SingleBlogcard";

import Button from "../shared/Button";
import { useHomeDataSlice } from "@/hooks/public/useHomeDataSlice";
import Featureblog from "../../skeletonloader/Featureblogskeleton";

const LatestBlog = () => {
  const { data, isLoading } = useHomeDataSlice("blogs");
  if (!data || data.length === 0) return null;
  return (
    <div className="container section">
      <div className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4">
        <div>
          <h1 data-aos="fade-up" data-aos-delay="100" className="capitalize">
            ফ্রি <span className="text-[#3CB449]">ব্লগ </span> সমূহ
          </h1>
        </div>
        <Button
          data-aos="fade-up"
          data-aos-delay="300"
          hoverColor="#ce2f2f"
          title="সব দেখুন"
          className=" text-[18px]"
          href={"/blogs"}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="mt-10">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, idx) => (
              <Featureblog key={idx} />
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 28,
              },
            }}
            className="blog"
          >
            {data?.map((blog: any, idx: number) => (
              <SwiperSlide key={idx}>
                <SingleBlogcard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default LatestBlog;
