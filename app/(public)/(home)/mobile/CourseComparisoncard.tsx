import Image from "next/image";
import React from "react";
import IconImage from "../../(additional pages)/about-us/iconImages";

const CourseComparisoncard = () => {
  return (
    <div className=" bg-white rounded-2xl border border-[#DFDFDF] p-6 h-full">
      <div className="flex flex-col items-stretch gap-6">
        <div className="h-full w-full ">
          <Image
            className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
            src="/assets/bundel.png"
            width={318}
            height={230}
            alt="ictbangla"
          />

          <h4 className="text-[36px] font-bold text-black-color flex items-center gap-4">
            লাইভ ব্যাচ <IconImage fileName="live_icon.svg" />
          </h4>
          <p className="text-lg font-bold text-black-color">
            Fiverr Freelancing Success: From Zero to Hero
          </p>

          <p className="mt-5 text-2xl font-bold text-primary">
            ৳ 2499{" "}
            <span className="text-sm font-semibold text-[#8A8A8A] line-through">
              ৳ 1,999
            </span>
          </p>
        </div>
        <div className="h-full w-full ">
          <Image
            className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
            src="/assets/bundel.png"
            width={318}
            height={230}
            alt="ictbangla"
          />

          <h4 className="text-[36px] font-bold text-black-color flex items-center gap-4">
            লাইভ ব্যাচ
            {/* <IconImage fileName="live_icon.svg" /> */}
          </h4>
          <p className="text-lg font-bold text-black-color">
            Fiverr Freelancing Success: From Zero to Hero
          </p>

          <p className="mt-5 text-2xl font-bold text-primary">
            ৳ 2499{" "}
            <span className="text-sm font-semibold text-[#8A8A8A] line-through">
              ৳ 1,999
            </span>
          </p>
        </div>
      </div>

      <button className="button-primary mt-6" type="button">
        কম্পেয়ার করুন
      </button>
    </div>
  );
};

export default CourseComparisoncard;
