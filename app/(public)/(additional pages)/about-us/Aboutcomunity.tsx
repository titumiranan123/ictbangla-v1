"use client";
import Image from "next/image";
import React from "react";

const Aboutcomunity = () => {
  return (
    <div className=" max-w-[1000px] mx-auto sectionGap  flex justify-center items-center flex-col lg:mt-[100px]">
      <h2 className="text-[24px] md:text-[40px] lg:text-[48px] text-center font-bold text-[#29AE48] lg:leading-[60px] md:leading-[52px] leading-[32px] mb-6 ">
        শেখার সবচেয়ে বড় <br /> কমিউনিটিতে যোগদান করুন
      </h2>
      <p className="text-secondary  md:text-xl text-base font-medium  text-center">
        বাস্তব অভিজ্ঞতা সম্পন্ন প্রশিক্ষকদের সরাসরি গাইডলাইন ও হাতে-কলমে দক্ষতার
        নিশ্চয়তা জব মার্কেট বা ফ্রিল্যান্সিং প্ল্যাটফর্মের চাহিদা অনুযায়ী
        প্রজেক্ট-ভিত্তিক স্কিল ডেভেলপমেন্ট লার্নিং ও ক্যারিয়ার গ্রোথে সহায়ক
        কমিউনিটি যেখানে স্টুডেন্ট টু প্রফেশনাল সব এক জায়গায় |
      </p>

      <div className="border border-primary w-[385px] h-[141px] rounded-[16px]  flex flex-col justify-center items-center gap-4 mt-10">
        <p className="flex justify-center items-center gap-2">
          <Image
            src={"/assets/love.png"}
            alt="love"
            width={20}
            height={18}
            className="w-[20px] h-[18px]"
          />{" "}
          <span className="lg:text-[24px] lg:leading-[32px] leading-[16px] text-[20px] text-[#29AE48] font-bold">
            আনন্দিত গ্রাহক
          </span>
        </p>
        <div className="flex items-center">
          <Image
            src={"/assets/user-1.png"}
            alt="user"
            width={40}
            height={40}
            className=""
          />
          <Image
            src={"/assets/user-2.png"}
            alt="user"
            width={40}
            height={40}
            className="-translate-x-5"
          />
          <Image
            src={"/assets/user-3.png"}
            alt="user"
            width={40}
            height={40}
            className="-translate-x-8"
          />
          <p className=" lg:text-[24px] lg:leading-[32px] leading-[16px] text-[20px] text-[#29AE48] font-bold">
            ২২ হাজার+
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutcomunity;
