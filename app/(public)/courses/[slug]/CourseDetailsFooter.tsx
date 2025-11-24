"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const CourseDetailsFooter = ({
  data,
  discountPrice,
  fbclid,
}: {
  data: any;
  discountPrice: number;
  fbclid: string;
}) => {
  return (
    <>
      {data?.basicInfo?.is_show_bottom_banner && (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white lg:h-[90px] h-full max-h-[120px] animate-fadeInUp z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <div className="max-w-[1535px] mx-auto py-2 md:py-2 lg:px-[120px] px-4 flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 gap-2">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <p className="text-md md:text-lg lg:text-xl font-bold text-black  rounded-lg animate-pulse whitespace-nowrap">
                কল করুন এই নাম্বারেঃ +880 13212-04263
              </p>

              <div className="lg:flex hidden items-center md:-mt-2 flex-wrap justify-center md:justify-start">
                {!data?.pricing.isFree ? (
                  <div className="flex gap-4 items-baseline">
                    <span className="text-lg md:text-xl lg:text-2xl text-primary font-bold transition-transform hover:scale-105 cursor-pointer">
                      Tk. {discountPrice.toFixed(2)}
                    </span>
                    {data?.pricing.price.isDiscount && (
                      <span className="text-xs md:text-sm text-black line-through">
                        Tk. {data?.pricing.price.main.toFixed(2)}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-medium text-[#1cab55] animate-bounce">
                    Free
                  </span>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-auto flex justify-center items-center lg:gap-10 lg:flex-row flex-col gap-2">
              <p className="text-md md:text-lg lg:text-xl font-bold text-black  rounded-lg animate-pulse whitespace-nowrap">
                সিট সংখ্যা শেষ হওয়ার আগে
              </p>
              <button
                // onClick={() => handleCheckout()}
                className="flex justify-center items-center gap-2 w-full md:w-auto px-6 py-1 border-2  text-white bg-red-500 transition-all rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 animate-wiggle text-sm md:text-base font-bold h-[50px] md:h-[50px] lg:h-[50px]"
              >
                এনরোল করুন
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsFooter;
