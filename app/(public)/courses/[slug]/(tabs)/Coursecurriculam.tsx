/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Timeline from "./CourseTimeline";
import Curriculamtab from "./Curriculamtab";
import Accordion from "./Accordion";
import Image from "next/image";

const Coursecurriculam = ({ data, tools }: { data: any; tools: any }) => {
  console.log("toolstoolstools", tools);
  return (
    <div>
      <div className="bg-[#F3F4F6] max-w-[882px]  w-full  rounded-[24px] lg:px-5 px-2 py-3 lg:py-5  ">
        <Curriculamtab />
        <div className="">
          {data?.live_classes?.map((dt: any, moduleNumberx: number) => {
            return (
              <div key={moduleNumberx} className=" h-full w-full">
                <h2 className="text-primary font-[700] text-center md:text-[24px] text-[18px] mt-6 mb-6 ">
                  {dt?.group?.group_name}
                </h2>
                <Accordion items={dt?.group?.faq} key={moduleNumberx} />
              </div>
            );
          })}
        </div>
        <div className="py-10">
          <h2 className="text-primary text-center font-[700] text-[18px]  md:text-[28px]">
            যেসব ট্যুলস ও টেকনোলোজি শিখবেন
          </h2>
          <div className="flex justify-center flex-wrap items-center gap-3 mt-6">
            {tools.length > 0 &&
              tools.map((tl: any, idx: number) => (
                <span
                  key={idx}
                  className="w-[84px] h-[84px]  bg-bg-secondary border border-primary rounded-lg"
                >
                  <Image
                    src={`/${tl.icon}`}
                    alt={`${tl.titl}`}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px]"
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
      {data?.road_map !== undefined && data?.road_map.length > 0 && (
        <div className="bg-[#F3F4F6] max-w-[882px] mt-[45px] rounded-[24px]">
          <Timeline />
        </div>
      )}
    </div>
  );
};

export default Coursecurriculam;
