/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Countdown from "./Ofercountdown";
import Image from "next/image";
import Link from "next/link";
import WhichYoulearn from "./WhichYoulearn";
import RightSideLeadsubmit from "./RightSideLeadsubmit";
import Thumnailvideoslider from "./Thumnailvideoslider";
import { Users } from "lucide-react";

const Courserightsideinfluncersection = ({
  othersContent,
  id,
}: {
  othersContent: any;
  id: string;
}) => {
  return (
    <div className="md:w-[385px]   md:max-w-full  max-w-[360px]  rounded-[16.25px] mx-auto ">
      <div className="border border-primary w-full rounded-[16px] p-4">
        <p className="text-primary text-center mt-6 mb-6 text-[22px] font-[600]">
          ভর্তির সময় শেষ হয়ে যাচ্ছে
        </p>
        <Countdown targetDate="2025-12-10T00:00:00.000Z" />
        <div className="bg-[#EAF7ED] border border-primary rounded-[8px] mt-4 py-3">
          <p className="text-primary font-bold text-center text-[16px]">
            {othersContent?.total_enrolled}
          </p>
        </div>
        <div className="bg-[#F3F4F6] border border-primary rounded-[8px] mt-4 py-3 px-4">
          <p className="text-primary font-bold text-center text-[16px]">
            কোর্স সংক্রান্ত আরও তথ্য জানতে
          </p>
          <RightSideLeadsubmit courseId={id} />
        </div>
        <div className="w-full max-h-[269px] h-full relative mb-4 mt-4">
          <div className="w-full h-[269px] rounded-[8.13px]">
            {othersContent?.course_intro?.length > 0 && (
              <Thumnailvideoslider
                data={
                  othersContent?.influencers_video ??
                  othersContent?.course_intro
                }
              />
            )}
          </div>
        </div>

        <div className="w-full mt-10 h-[154px] bg-primary rounded-[8px] text-white justify-center items-center hidden">
          <h2 className="text-[40px] font-[700]">IMAGE 1</h2>
        </div>
        <div className="mt-5">
          <div className="bg-[#EAF7ED] gap-2 rounded-lg flex items-center px-3 py-2 w-[60%]">
            <Users />
            <p className="text-text-neutral">১৫,৯০০ জন মেম্বারস</p>
          </div>
          <p className="text-primary text-[21px] font-bold text-center mt-3">
            ICT Bangla Student&apos;s Community
          </p>
          <Link
            href={`https://www.facebook.com/groups/ictbanglastudentscommunity`}
            target="_blank"
            className="py-2 px-3 rounded-lg font-bold bg-primary text-white text-[18px] mt-4 w-full flex justify-center items-center gap-2"
          >
            ফেইসবুক গ্রুপ জয়েন করুন{" "}
            <Image
              src={"/assets/icon/facebook.png"}
              alt=""
              width={24}
              className=""
              height={24}
            />
          </Link>
        </div>
      </div>
      <div className="p-4">
        <WhichYoulearn tools={othersContent?.tools_you_will_learn} />
      </div>
    </div>
  );
};

export default Courserightsideinfluncersection;
