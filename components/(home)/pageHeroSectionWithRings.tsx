import IconImage from "@/app/(public)/(additional pages)/about-us/iconImages";
import React from "react";

interface PropsType {
  title: string;
  subTitle: string;
  buttonText: string;
}

const PageHeroSectionWithRings: React.FC<PropsType> = ({
  title,
  subTitle,
  buttonText,
}) => {
  return (
    <>
      <div className="w-full bg-gradient-to-t from-[#CFFAD9] to-white relative  z-0 overflow-hidden">
        <div className="px-5 relative z-20">
          <h1 className="text-2xl md:text-3xl lg:text-[48px] text-primary font-bold text-center pt-4 md:pt-8 lg:pt-[24px] mb-4 md:mb-6 lg:mb-8">
            {title}
          </h1>

          <p className="text-base lg:text-xl font-medium text-[#8A8A8A] text-center w-full max-w-[1060px] mx-auto mb-4 md:mb-5 lg:mb-[48px]">
            {subTitle}
          </p>

          {/* <div className="flex items-center justify-center">
            <button className="py-2.5 px-4 rounded-lg bg-white text-primary text-lg font-bold border-2 border-primary cursor-pointer ">
              {buttonText}
            </button>
          </div> */}

          <div className="flex items-center justify-center cursor-pointer mb-6 md:mb-8 lg:mb-28">
            <div className="animate-stroke  duration-400 transition-all flex justify-center items-center rounded-[8px] overflow-hidden z-20 p-[1.5px] cursor-pointer relative ">
              <style>
                {`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-stroke {
          position: relative;
          background: transparent;
          border-radius: 8px;
        }
        .animate-stroke::before {
          content: '';
          position: absolute;
          top: -76px;
          width: 186px;
          height: 186px;
          background: conic-gradient(from 0deg, #29AE48, #FFFFFF, #29AE48);
          animation: spin-slow 4s linear infinite;
        }
      `}
              </style>

              <button className="relative z-10 bg-white rounded-[8px] py-[10px] px-[16px] text-primary text-lg font-bold whitespace-nowrap">
                {buttonText}
              </button>
            </div>
          </div>
        </div>

        <IconImage
          fileName="circle-header-top-icon.svg"
          className="!h-[400px] !w-[400px] hidden lg:block absolute left-[-100px] top-[-100px] z-10"
        />
        <IconImage
          fileName="circle-header-bottom-icon.svg"
          className="!h-[400px] !w-[400px] hidden lg:block absolute right-[-160px] bottom-0 z-10"
        />
      </div>
    </>
  );
};

export default PageHeroSectionWithRings;
