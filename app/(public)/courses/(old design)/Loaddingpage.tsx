import Image from "next/image";
import React from "react";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import home from "@/public/assets/icon/house-window.svg";
import WhatyouLearnSkeleton from "@/components/skeletonloader/WhatwillLearnskeleton";
import CourseDetailsSkeleton from "@/components/skeletonloader/CourseDetailsSkeleton";
const Loaddingpage = () => {
  return (
    <div className="container pt-10 flex flex-col gap-2 justify-start   pb-6">
      <div className="lg:w-[60%] w-full">
        <div className="flex gap-1 items-center text-sm">
          <Image
            className="w-[14px] h-[14px]"
            src={home}
            alt="home"
            priority
            decoding="async"
          />
          <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
          <span>Pages</span>
          <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
          <button className="px-5 py-2 bg-slate-300 text-black w-32 h-9 animate-pulse rounded-lg"></button>
        </div>
        <div className="mt-[20px] bg-slate-300 w-full rounded-lg h-8 animate-pulse"></div>
        <div className="w-full rounded-lg bg-slate-300 h-20 animate-pulse mt-2"></div>
        <div className="flex gap-10 mt-8">
          {[...Array(3)].map((_, idx) => (
            <button
              key={idx}
              className="px-5 py-2 bg-slate-300 text-black w-32 h-9 animate-pulse rounded-lg"
            ></button>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-10 lg:flex-row flex-col-reverse relative container py-8">
        <div className="lg:w-[70%]">
          <div className="mb-8 animate-pulse">
            {/* Tabs Skeleton */}
            <div className="flex gap-4 mb-4 overflow-x-auto">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded-md"></div>
              ))}
            </div>

            {/* Content Skeleton */}
            <div className="space-y-3">
              <div className="h-6 w-3/4 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-5/6 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-2/3 bg-gray-200 rounded-md"></div>
              <div className="h-6 w-4/5 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          <WhatyouLearnSkeleton />
          <WhatyouLearnSkeleton />
          <div className="pb-10 mt-10">
            <div className="w-full md:w-1/3 h-8 bg-slate-200 animate-pulse rounded-lg mb-5"></div>
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-full mt-1 h-10 bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
          <div className="pb-10 mt-10">
            <div className="w-full md:w-1/3 h-8 bg-slate-200 animate-pulse rounded-lg mb-5"></div>
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="w-full mt-1 h-10  bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-10 lg:-mt-32 rounded-[12px] lg:right-0 h-auto lg:w-[30%] w-full -mt-5">
          <CourseDetailsSkeleton />
        </div>
      </div>
    </div>
  );
};

export default Loaddingpage;
