import Link from "next/link";
import React from "react";

const MobileAdditionSection = () => {
  return (
    <div
      className="sectionGap mt-10"
      style={{
        backgroundImage: "url('/assets/home/home_green_section_bg.svg')",
      }}
    >
      <div className="container py-20">
        <h2 className="text-white font-bold text-[24px] text-center">
          ভর্তি চলছে
        </h2>
        <p className="text-[16px] font-medium text-white mt-2 text-center w-full ">
          ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। যুক্ত হোন আইসিটি বাংলার
          সাথে। স্কিল ডেভলপ জার্নি শুরু করুন সেরা সব কোর্সে এনরোল করে।
        </p>
        <div className="mt-8 flex items-center gap-6 justify-center">
          <Link
            href={"https://www.facebook.com/groups/ictbanglastudentscommunity"}
            className="button-primary text-lg w-fit px-4 !bg-white !text-primary block"
            type="button"
          >
            কমিউনিটিতে ঘুরে আসুন
          </Link>
          <Link
            href={"/courses"}
            className="button-primary w-fit px-4 !bg-transparent !text-white border border-white block"
            type="button"
          >
            ব্রাউজ কোর্স
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileAdditionSection;
