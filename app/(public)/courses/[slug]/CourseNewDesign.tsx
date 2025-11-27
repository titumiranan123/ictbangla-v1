/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CourseDetailsFooter from "./CourseDetailsFooter";
import WhichYoulearn from "./WhichYoulearn";
import Image from "next/image";
import { Star, Users } from "lucide-react";
import Thumnailvideoslider from "./Thumnailvideoslider";
import CourseCoupon from "./Couponcoupon";
import AddCompare from "./AddCompare";
import CourseModulsummary from "./CourseModulsummary";
import ShareButtons from "./ShareButtons";
import BatchTag from "./BatchTag";
import { CoursePriceCalculator } from "../(old design)/CoursePriceCalculation";
import CourseInfoTab from "./CourseInfoTab";
import CourseReturn from "./CourseReturn";
import Whomeneeds from "./Whomeneeds";
import CourseTopTimeCount from "./CourseTopTimeCount";
import CoursePageHolder from "../(old design)/CoursePageHolder";
import Admissionnow from "./Admissionnow";
import Countdown from "./Ofercountdown";
import RightSideLeadsubmit from "./RightSideLeadsubmit";

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
      <CourseTopTimeCount class_start_date="2025-09-04T00:00:00.000Z" />
      <div className="header bg-[#F3F4F6]  ">
        <div className="container  flex justify-between items-center lg:flex-row flex-col gap-2">
          <div className="flex-1 max-w-[1034px] mx-auto flex flex-col gap-[26px] pt-6 pb-9 relative">
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

            <h2 className="lg:text-[48px] md:text-[36px] text-[20px]  w-full font-semibold md:leading-[60px] leading-[28px] text-textPrimary whitespace-nowrap ">
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
          <div
            className={`max-w-[389px] w-full h-[540px]  p-3 rounded-[16.25px] border border-red-500 bg-red-500/10`}
          >
            <div className="max-w-[357px] w-full max-h-[269px] h-full relative mb-4">
              {othersContent?.course_intro?.length > 0 && (
                <Thumnailvideoslider data={othersContent?.course_intro} />
              )}
            </div>
            <div className=" mt-[65px] space-y-4">
              <div className="flex justify-between items-center mt-3 ">
                <p className="text-[38px] leading-[50px font-[700] text-primary">
                  কোর্স ফী
                </p>
                <div className="flex justify-center items-center">
                  <span className="text-[38px] leading-[50px] font-[700] text-primary">
                    ৳.{totalPrice}
                  </span>
                  <span className="text-[14px] leading-[20px] font-[700] text-text-secondary line-through mt-3 ms-3">
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
      <div className="flex container relative bg-white  mt-6 lg:flex-row flex-col gap-2 min-h-screen ">
        {/* left part */}
        <div className="flex-1 max-w-[982px]  w-full  mx-auto">
          {tabs?.length > 0 && (
            <CourseInfoTab
              data={othersContent?.course_details}
              tools={othersContent?.tools_you_will_learn}
              tabs={tabs}
              key={1}
            />
          )}
          {othersContent?.course_features !== undefined &&
            othersContent?.course_features?.length > 0 && (
              <CourseReturn course_features={othersContent?.course_features} />
            )}
          {othersContent?.target_audience !== undefined &&
            othersContent?.target_audience?.length > 0 && (
              <Whomeneeds
                target_audience={othersContent?.target_audience}
                courseId={data?._id}
              />
            )}
        </div>
        {/* right part  */}
        <div className="max-w-[389px] mx-auto sticky self-start top-20">
          <div className=" border  border-primary  w-full  rounded-[16px] p-4">
            <p className="text-textPrimary text-center mt-6 mb-6 text-[18px] font-[600] ">
              ভর্তির শেষ সময়
            </p>
            <Countdown targetDate="2025-12-31T23:59:59" />
            <div className="bg-[#EAF7ED] border border-primary rounded-[8px] mt-4 py-3">
              <p className="text-primary font-bold text-center text-[16px]">
                ৪০০০+ শিক্ষার্থী এখন পর্যন্ত এনরোল করেছে
              </p>
            </div>
            <div className="bg-[#F3F4F6] border border-primary rounded-[8px] mt-4 py-3 px-4">
              <p className="text-primary font-bold text-center text-[16px]">
                কোর্স সংক্রান্ত আরও তথ্য জানতে
              </p>
              <RightSideLeadsubmit courseId={data?._id} />
            </div>
            <div className="max-w-[357px] w-full max-h-[269px] h-full relative mb-4 mt-4">
              <div className="w-[357px] h-[269px] rounded-[8.13px]">
                {othersContent?.course_intro?.length > 0 && (
                  <Thumnailvideoslider data={othersContent?.course_intro} />
                )}
              </div>
            </div>

            <div className="max-w-[360px] mt-10 h-[154px] bg-primary rounded-[8px] text-white  justify-center items-center hidden">
              <h2 className="text-[40px] font-[700]">IMAGE 1</h2>
            </div>
            <div className="mt-5">
              <div className="bg-[#EAF7ED] gap-2 rounded-lg flex items-center px-3 py-2 w-[50%]">
                <Users />
                <p className="text-text-neutral">৯,০০৯ মেম্বারস</p>
              </div>
              <p className="text-primary text-[21px] font-bold text-center mt-3">
                ICT Bangla Student’s Community
              </p>
              <button className="py-2 px-3 rounded-lg font-bold bg-primary text-white text-[18px]  mt-4 w-full flex justify-center items-center gap-2">
                ফেইসবুক গ্রুপ জয়েন করুন{" "}
                <Image
                  src={"/assets/icon/facebook.png"}
                  alt=""
                  width={24}
                  className=""
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="p-4">
            <WhichYoulearn tools={othersContent?.tools_you_will_learn} />
          </div>
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
