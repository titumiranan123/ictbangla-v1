import React from "react";
import TestimonialCarousel from "./Strudentcarosul";

const StudentReviewSection = () => {
  return (
    <div className="sectionGap container">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-10">
        <div className="w-full max-w-[722px]">
          <h2 className="text-black-color font-bold  text-[32px] lg:text-[48px] lg:leading-[60px] leading-[42px] mb-4">
            আমাদের ছাত্র ছাত্রীদের মতামত
          </h2>
          <p className="text-[#8A8A8A] bold text-lg leading-[23px] mb-[24px]">
            কোর্স থেকে নতুন দক্ষতা অর্জন করে শিক্ষার্থীরা তাদের ক্যারিয়ার ও
            ব্যক্তিগত উন্নয়নে যে সাফল্য পেয়েছে তার ইতিবাচক অভিজ্ঞতা এবং মতামত
            গুলো তুলে ধরা হলো।{" "}
          </p>

          <button
            className="button-primary w-[103px] h-[44px] text-lg leading-[23px] !px-4 !py-[10px]"
            type="button"
          >
            সব দেখুন
          </button>
        </div>
        <div className="w-full max-w-[668px]">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default StudentReviewSection;
