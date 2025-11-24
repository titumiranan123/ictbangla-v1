/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Timeline from "./CourseTimeline";
import Curriculamtab from "./Curriculamtab";
import Accordion from "./Accordion";

const Coursecurriculam = ({ data }: { data: any }) => {
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
          <div className="flex justify-center items-center gap-3 mt-6">
            <span className="w-[84px] h-[84px]  bg-bg-secondary border border-primary rounded-lg"></span>
            <span className="w-[84px] h-[84px]  bg-bg-secondary border border-primary rounded-lg"></span>
            <span className="w-[84px] h-[84px]  bg-bg-secondary border border-primary rounded-lg"></span>
            <span className="w-[84px] h-[84px]  bg-bg-secondary border border-primary rounded-lg"></span>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F6] max-w-[882px] mt-[45px] rounded-[24px]">
        <Timeline />
      </div>
    </div>
  );
};

export default Coursecurriculam;
