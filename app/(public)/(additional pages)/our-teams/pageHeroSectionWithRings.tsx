import React from "react";
import IconImage from "../about-us/iconImages";

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
        <div className="px-5 relative z-20 flex flex-col justify-center items-center py-12">
          <h1 className="text-2xl md:text-3xl lg:text-[48px] text-primary font-bold text-center  mb-4 md:mb-8">
            {title}
          </h1>

          <p className="text-base lg:text-xl font-medium text-[#8A8A8A] text-center w-full max-w-[1060px] mx-auto mb-4 md:mb-4">
            {subTitle}
          </p>
          <div className="flex items-center justify-center cursor-pointer  ">
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
          className="!h-[300px] !w-[300px] hidden lg:block absolute left-[-10px] top-[-30px] z-10"
        />
        <IconImage
          fileName="circle-header-bottom-icon.svg"
          className="!h-[300px] !w-[300px] hidden lg:block absolute right-[-90px] bottom-0 z-10"
        />
      </div>
    </>
  );
};

export default PageHeroSectionWithRings;
