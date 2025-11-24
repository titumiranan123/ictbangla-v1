"use client";
import React from "react";
// /data/timelineData.ts
export interface TimelineItem {
  date: string;
  title: string;
}

export const timelineData: TimelineItem[] = [
  {
    date: "২৬ ডিসেম্বর, ২০১৯",
    title: "BYLC যুব কার্নিভাল - ২০১৯-এ অংশগ্রহণ করেছেন",
  },
  {
    date: "২৬ ডিসেম্বর, ২০১৯",
    title: "BYLC যুব কার্নিভাল - ২০১৯-এ অংশগ্রহণ করেছেন",
  },
  {
    date: "২৬ ডিসেম্বর, ২০১৯",
    title: "BYLC যুব কার্নিভাল - ২০১৯-এ অংশগ্রহণ করেছেন",
  },
  {
    date: "২৬ ডিসেম্বর, ২০১৯",
    title: "BYLC যুব কার্নিভাল - ২০১৯-এ অংশগ্রহণ করেছেন",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-10 sectionGap ">
      <div className="max-w-4xl w-full mx-auto text-center lg:px-4 px-1">
        <h2 className="text-[24px] md:text-[40px] lg:text-[48px] font-bold text-[#29AE48] mb-2">
          আমরা এখন পর্যন্ত পৌঁছেছি
        </h2>
        <p className="text-text-neutral mt-2 text-base md:text-xl font-medium ">
          ICT Bangla তে সবচেয়ে বড় অর্জন হলো আপনাকে সত্যিকার অর্থে উৎসাহী হিসেবে
          সংযুক্ত করা।
        </p>
        <div className="relative max-w-[633px] mx-auto mt-10 lg:mt-16">
          {timelineData.map((item: TimelineItem, index: number) => (
            <div
              key={index}
              className={` flex mt-10 md:gap-4 gap-2 w-full  items-center justify-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Left side date */}
              <div className=" md:text-right  w-[45%] ">
                <p className="text-[#29AE48] md:text-[24px] text-[12px] font-semibold">
                  {item.date}
                </p>
              </div>
              <div className="md:w-[30px] md:h-[30px] w-5 h-5 bg-[#29AE48] rounded-full"></div>

              {/* Right side card */}
              <div className="  w-[50%]  ">
                <div
                  className={`bg-white shadow-sm rounded-xl md:px-5 px-2 md:py-4 py-2  border-[#29AE48] ${
                    index % 2 === 0 ? "border-l-[10px]" : "border-r-[10px]"
                  }`}
                >
                  <h4 className="font-[500] leading-[23px] md:text-lg   text-left text-text-neutral text-[12px]">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
