/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

const Timeline = ({ road_map }: { road_map: any }) => {
  return (
    <section className="bg-[#F3F4F6] py-10 rounded-[24px]">
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Center vertical line */}
        <div className="absolute lg:block hidden left-1/2 transform -translate-x-1/2 h-full border-[2px] border-primary" />
        <div className="space-y-2 ">
          {road_map?.faq?.map((item: any, index: number) => {
            const isLeft = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex items-center justify-around lg:px-14 w-full relative  gap-2  ${
                  isLeft ? "flex-row " : "flex-row-reverse"
                }`}
              >
                {/* Box */}
                <div
                  className={`md:w-5/12 w-[95%]  bg-white border border-dashed border-primary rounded-md px-6 py-4 shadow-sm`}
                >
                  <h3
                    className={`text-primary text-lg font-semibold mb-1 ${
                      isLeft ? "text-right " : "text-left"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-gray-700 text-sm leading-relaxed ${
                      isLeft ? "text-right " : "text-left"
                    }`}
                  >
                    {item.sub_title}
                  </p>
                </div>

                {/* Circle connector */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white border-[3px] border-primary z-10"></div>
                <div className="w-5/12 lg:block hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
