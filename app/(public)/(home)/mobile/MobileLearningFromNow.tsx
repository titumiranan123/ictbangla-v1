import React from "react";
import IconImage from "../../(additional pages)/about-us/iconImages";

const MobileLearningFromNow = () => {
  return (
    <>
      <div
        className="sectionGap  bg-no-repeat bg-cover bg-center py-8"
        style={{
          backgroundImage: "url('/assets/home/home_green_section_bg.svg')",
        }}
      >
        <div className="px-5">
          <h2 className="text-[24px] font-bold text-white text-center">
            শেখার যাত্রা শুরু এখানেই
          </h2>
          <div className="flex items-center gap-12 lg:gap-6 flex-col lg:flex-row mt-[60px]">
            <div className="rounded-xl border border-[#B7B189] p-3 relative class-background w-full">
              <button
                type="button"
                className="text-[16px] w-fit whitespace-nowrap font-semibold text-[#fff] bg-[#29AE48] rounded-full px-8  py-2.5 border border-[#B7B189] absolute top-[-26px] left-1/2 -translate-x-1/2"
              >
                ল্যাঙ্গুয়েজ স্কিল
              </button>

              <h3 className="mt-[32px] text-[#fff] font-bold text-[14px] lg:text-2xl text-center">
                অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
              </h3>
              <div className="mt-5 ">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-3 ">
                  <div className="border border-[#fff] rounded-[10px] h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center  class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      জাপানিজ
                    </h5>
                  </div>
                  <div className="border border-[#fff] rounded-[10px] h-24  md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      কোরিয়ান
                    </h5>
                  </div>
                  <div className="border col-span-2 md:col-span-1 border-[#fff] rounded-[10px]  h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      জার্মানি
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="pt-6 pb-7 text-[18px] font-bold text-[#fff] cursor-pointer flex items-center gap-2 mx-auto"
                type="button"
              >
                সব দেখুন{" "}
                <IconImage
                  fileName="arrow_outward_.svg"
                  className="!h-4 !w-4 lg:!h-6 lg:!w-6"
                />
              </button>
            </div>

            <div className="rounded-xl border border-[#B7B189] p-3 relative class-background w-full">
              <button
                type="button"
                className="text-lg w-fit whitespace-nowrap font-semibold text-[#fff] bg-[#29AE48] rounded-full px-8  py-2.5 border border-[#B7B189] absolute top-[-26px] left-1/2 -translate-x-1/2"
              >
                সফট স্কিল
              </button>

              <h3 className="mt-8 mb-5 text-[#fff] font-medium text-base lg:text-2xl text-center">
                অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
              </h3>
              <div className="mt-3.5 ">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-3 ">
                  <div className="border border-[#fff] rounded-[10px] h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center  class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      লিডারশিপ
                    </h5>
                  </div>
                  <div className="border border-[#fff] rounded-[10px] h-24  md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      সেলস
                    </h5>
                  </div>
                  <div className="border col-span-2 md:col-span-1 border-[#fff] rounded-[10px]  h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-[16px] lg:text-2xl font-bold text-[#fff] ">
                      বিজনেস
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="mt-4 pt-6 pb-7 text-[18px] font-bold text-[#fff] cursor-pointer flex items-center gap-2 mx-auto"
                type="button"
              >
                সব দেখুন{" "}
                <IconImage
                  fileName="arrow_outward_.svg"
                  className="!h-4 !w-4 lg:!h-6 lg:!w-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLearningFromNow;
