import React from "react";

const AdditionSection = () => {
  return (
    <div
      className="mt-[100px]"
      style={{
        backgroundImage: "url('/assets/home/home_green_section_bg.svg')",
      }}
    >
      <div className="container py-4 md:py-8 lg:py-20">
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-[48px] leading-[60px] text-center">
          ভর্তি চলছে
        </h2>
        <p className=" text-base lg:text-xl font-medium text-white mt-4 text-center w-full max-w-[800px] mx-auto">
          ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। যুক্ত হোন আইসিটি বাংলার
          সাথে। স্কিল ডেভলপ জার্নি শুরু করুন সেরা সব কোর্সে এনরোল করে।
        </p>
        <div className="mt-8 flex items-center gap-2 md:gap-6 justify-center">
          <button
            className="button-primary text-lg w-fit px-4 !bg-white !text-primary"
            type="button"
          >
            কমিউনিটিতে ঘুরে আসুন
          </button>
          <button
            className="button-primary w-fit px-4 !bg-transparent !text-white border border-white"
            type="button"
          >
            ব্রাউজ কোর্স
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionSection;
