/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CourseDetailsFooter from "./CourseDetailsFooter";
import Image from "next/image";
import { Star } from "lucide-react";
import Thumnailvideoslider from "./Thumnailvideoslider";
import CourseCoupon from "./Couponcoupon";
import AddCompare from "./AddCompare";
import CourseModulsummary from "./CourseModulsummary";
import ShareButtons from "./ShareButtons";
import BatchTag from "./BatchTag";
import { CoursePriceCalculator } from "../(old design)/CoursePriceCalculation";
import CourseInfoTab from "./CourseInfoTab";
import CourseTopTimeCount from "./CourseTopTimeCount";
import CoursePageHolder from "../(old design)/CoursePageHolder";
import Admissionnow from "./Admissionnow";
import Courserightsideinfluncersection from "./Courserightsideinfluncersection";

const CourseNewDesign = ({
  data,
  othersContent,
  tabs,
  fbclid,
}: {
  data: any;
  othersContent: any;
  tabs: string[];
  fbclid: string;
}) => {
  const totalPrice = CoursePriceCalculator(data);
  return (
    <div className="mb-20 relative">
      <CoursePageHolder data={data} fbclid={fbclid} />
      <CourseTopTimeCount class_start_date="2025-12-10T00:00:00.000Z" />
      <div className="header bg-[#F3F4F6] py-4 ">
        <div className="container  flex justify-between items-center lg:flex-row flex-col gap-5">
          <div className="flex-1 max-w-[1024px] mx-auto flex flex-col gap-3 pt-6 pb-9 relative">
            <button className="max-w-[144px] bg-[#FFE9E9] rounded-lg py-2 px-2 flex gap-1 text-[16px] font-[700]  items-center ">
              <Image
                src={"/assets/icon/courseLive.png"}
                alt="live"
                width={30}
                height={30}
                priority
              />
              <span className="text-red-500">লাইভ কোর্স</span>
            </button>

            <h2 className="lg:text-[48px] md:text-[36px] text-[20px]  w-full font-semibold md:leading-[60px] leading-[28px] text-textPrimary xl:whitespace-nowrap ">
              {data?.basicInfo?.title}
            </h2>

            <div className="flex  md:gap-3 gap-2  items-center">
              <BatchTag number={othersContent?.batch_number ?? 1} />{" "}
              <div className="flex items-center  md:gap-1">
                <div className="flex justify-center items-center">
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                </div>
                <span className="text-[18px] text-textPrimary font-[600]">
                  ({data?.total_ratting})
                </span>
              </div>
              <ShareButtons data={data} />
            </div>
            <p className="text-[#8A8A8A] font-[500] text-[16px] md:text-[18px] max-w-[980px]  leading-[140%]">
              {data?.basicInfo?.short_description}
            </p>
            {othersContent?.additional_info !== undefined &&
              othersContent?.additional_info?.length > 0 && (
                <CourseModulsummary modules={othersContent?.additional_info} />
              )}
            <div className="top-20 sticky">
              {othersContent?.course_schedule !== undefined && (
                <AddCompare data={othersContent?.course_schedule} />
              )}
            </div>
          </div>
          <div className="md:w-[385px]  md:max-w-full  max-w-[360px] p-3 rounded-[16.25px] border border-red-500 bg-red-500/10">
            <div className="w-full max-h-[269px] h-full relative">
              {othersContent?.course_intro?.length > 0 && (
                <Thumnailvideoslider data={othersContent?.course_intro} />
              )}
            </div>
            <div className="mt-[15px] space-y-4">
              <div className="flex justify-between items-center mt-3">
                <p className="text-[28px] lg:text-[38px] leading-tight font-[700] text-primary whitespace-nowrap">
                  কোর্স ফী
                </p>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[28px] lg:text-[38px] leading-tight font-[700] text-primary whitespace-nowrap">
                    ৳.{totalPrice}
                  </span>
                  <span className="text-[12px] lg:text-[14px] leading-[20px] font-[700] text-text-secondary line-through whitespace-nowrap">
                    ৳.{data?.pricing?.price?.main}
                  </span>
                </div>
              </div>
              <CourseCoupon />
              <Admissionnow data={data} />
            </div>
          </div>
        </div>
      </div>
      {/* body  */}
      <div className="container  flex justify-between items-center lg:flex-row flex-col gap-5   mt-6  min-h-screen ">
        {/* left part */}
        <div className="flex-1 max-w-[1024px] w-full mx-auto flex flex-col gap-3 pt-6 pb-9 relative">
          {tabs?.length > 0 && (
            <CourseInfoTab
              id={data?._id}
              othersContent={othersContent}
              data={othersContent?.course_details}
              tools={othersContent?.tools_you_will_learn}
              tabs={tabs}
              key={1}
            />
          )}
        </div>
        <div className="md:block hidden  sticky top-20 self-start">
          <Courserightsideinfluncersection
            id={data?._id}
            othersContent={othersContent}
          />
        </div>
      </div>
      <CourseDetailsFooter
        data={data}
        discountPrice={totalPrice}
        fbclid={fbclid}
      />
    </div>
  );
};

export default CourseNewDesign;
