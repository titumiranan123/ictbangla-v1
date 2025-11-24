import React from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const LearningFromNow = () => {
  return (
    <>
      <div
        className="sectionGap  bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/home/home_green_section_bg.svg')",
        }}
      >
        <div className="container py-14">
          <h2 className="lg:text-[48px] text-[22px] md:text-3xl font-bold text-[#fff] text-center mb-[84px]">
            শেখার যাত্রা শুরু এখানেই
          </h2>
          <div className="flex items-center gap-12 lg:gap-6 flex-col lg:flex-row w-full">
            <div className="rounded-3xl w-full border border-[#B7B189]  p-6 relative class-background">
              <button
                type="button"
                className="text-sm lg:text-lg font-semibold text-[#fff] bg-[#29AE48] rounded-full px-4 lg:px-8 py-2.5 border border-[#B7B189] absolute top-[-22px] lg:top-[-26px] left-1/2 -translate-x-1/2"
              >
                ল্যাঙ্গুয়েজ স্কিল
              </button>

              <h3 className="mt-[74px] text-[#fff] font-medium text-lg text-center">
                অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
              </h3>
              <div className="my-8 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-4 ">
                  <div className="border border-[#fff] rounded-2xl h-24   md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center  class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff] ">
                      জাপানিজ
                    </h5>
                  </div>
                  <div className="border border-[#fff] rounded-2xl h-24   md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff] ">
                      কোরিয়ান
                    </h5>
                  </div>
                  <div className="border col-span-2 md:col-span-1 border-[#fff] rounded-2xl  h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff]  ">
                      জার্মানি
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="text-xs md:text-sm lg:text-[18px] font-bold text-[#fff] cursor-pointer flex items-center gap-2 mx-auto"
                type="button"
              >
                সব দেখুন{" "}
                <IconImage
                  fileName="arrow_outward_.svg"
                  className="!h-4 !w-4 lg:!h-6 lg:!w-6"
                />
              </button>
            </div>

            <div className="rounded-3xl w-full border border-[#B7B189]  p-6 relative class-background">
              <button
                type="button"
                className="text-sm lg:text-lg font-semibold text-[#fff] bg-[#29AE48] rounded-full px-4 lg:px-8 py-2.5 border border-[#B7B189] absolute top-[-22px] lg:top-[-26px] left-1/2 -translate-x-1/2"
              >
                সফট স্কিল
              </button>

              <h3 className="mt-[74px] text-[#fff] font-medium text-lg text-center">
                পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
              </h3>
              <div className="my-8 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-4 ">
                  <div className="border border-[#fff] rounded-2xl h-24   md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center  class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff] ">
                      লিডারশিপ
                    </h5>
                  </div>
                  <div className="border border-[#fff] rounded-2xl h-24   md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff] ">
                      সেলস{" "}
                    </h5>
                  </div>
                  <div className="border col-span-2 md:col-span-1 border-[#fff] rounded-2xl  h-24 md:h-[175px] p-2 lg:p-6 w-full md:max-w-[209px] flex items-end justify-center class-background">
                    <h5 className="text-sm lg:text-base font-medium text-[#fff]  ">
                      বিজনেস
                    </h5>
                  </div>
                </div>
              </div>
              <button
                className="text-xs md:text-sm lg:text-[18px] font-bold text-[#fff] cursor-pointer flex items-center gap-2 mx-auto"
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

export default LearningFromNow;
