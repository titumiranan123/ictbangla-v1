"use client";

import Image from "next/image";
import { useState } from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const steps = [
  {
    id: 1,
    step: "১",
    title: "একটি অ্যাকাউন্ট তৈরি করুন ",
    icon: "pencile_icon_primary.svg",
  },
  {
    id: 2,
    step: "২",
    title: "পছন্দের কোর্সটি সিলেক্ট করুন  ",
    icon: "data_check_icon.svg",
  },
  {
    id: 3,
    step: "৩",
    title: "কোর্সে এনরোল করুন ",
    icon: "play_circle_button_icon.svg",
  },
  {
    id: 4,
    step: " ৪",
    title: "কোর্স ড্যাশবোর্ড খুলুন  ",
    icon: "menubar_icon.svg",
  },
];

const HowItWorkSection = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="container mt-[100px]">
      <div className=" bg-[#F3F4F6] border border-primary rounded-2xl px-10 py-12 flex flex-col lg:flex-row items-stretch gap-10">
        <Image
          src="/assets/home/direction_user_image.svg"
          alt="ictbangla"
          width={668}
          height={500}
          className="h-full w-full max-w-[668px] lg:w-[50%] rounded-2xl"
        />
        <div className="border border-[#D2D8D3] rounded-2xl bg-white p-10 w-full lg:w-[50%]">
          <div className="relative">
            <div className="absolute left-[19px] top-1/2 -translate-y-1/2 border-l-2 border-dashed border-[#D2D8D3] h-[300px] "></div>

            <div className="space-y-6 relative z-10">
              {steps?.map((step) => {
                const isActive = step.id === currentStep;

                return (
                  <div key={step.id} className="flex items-center gap-9">
                    <div className="w-fit">
                      {isActive ? (
                        <IconImage
                          fileName="check_mark_icon.svg"
                          className="!w-10 !h-10"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#D2D8D3] bg-white `}
                        >
                          <span className="text-lg font-bold text-[#707070]">
                            {step.id}
                          </span>
                        </div>
                      )}
                    </div>

                    <div
                      onClick={() => setCurrentStep(step.id)}
                      className={` p-4 rounded-lg  w-full flex items-center gap-6 cursor-pointer ${
                        isActive ? "bg-primary" : "bg-[#D2D8D3]"
                      }`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                        <IconImage fileName={step.icon} className="" />
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold ${
                            isActive ? "text-white" : "text-[#8A8A8A]"
                          }`}
                        >
                          স্টেপ {step?.step}
                        </p>
                        <h4
                          className={`text-2xl font-bold ${
                            isActive ? "text-white" : "text-[#707070]"
                          } mt-1 `}
                        >
                          {step.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
