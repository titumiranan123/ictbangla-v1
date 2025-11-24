"use client";
import { useState } from "react";
import IconImage from "./iconImages";

const steps = [
  {
    number: 1,
    title: "Our Goal",
    icon: "flug_for_about_page.svg",
  },
  {
    number: 2,
    title: "Our Vision",
    icon: "eye_tracking_for_about.svg",
  },
  {
    number: 3,
    title: "Our History",
    icon: "price_batch_choice_about.svg",
  },
  {
    number: 4,
    title: "Our Values",
    icon: "madel_icon_for_about.svg",
  },
];

export default function AboutSteps() {
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <div className="flex flex-col gap-4 lg:gap-6 w-full relative">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-3 lg:gap-6 w-full">
          {/* Step button */}
          <div
            onClick={() => setSelectedStep(step.number)}
            className="flex flex-col items-center z-10 cursor-pointer"
          >
            {step.number !== selectedStep ? (
              <button className="w-6 lg:w-10 h-6 lg:h-10 flex items-center justify-center rounded-full border border-[#D2D8D3] bg-white text-sm font-medium text-[#707070]">
                {step.number}
              </button>
            ) : (
              <IconImage fileName="check_mark_icon.svg" className="w-6 h-6 lg:w-10 lg:h-10" />
            )}
          </div>

          {/* Step content */}
          <div className="flex-1">
            <div
              className={`${
                step.number !== selectedStep
                  ? "bg-[#F3F4F6] text-[#707070]"
                  : "bg-[#29AE48] text-white"
              } rounded-xl shadow-sm pt-[11px] lg:pt-[20px] pb-[17px] lg:pb-[31px] px-4 hover:shadow-md transition flex items-center gap-2 w-full`}
            >
              <div className="h-6 lg:h-10 w-6 lg:w-10 rounded-full bg-white border border-[#D2D8D3] flex items-center justify-center">
                <IconImage fileName={step.icon} className="!w-[14px] !h-[14px]  lg:hidden" />
                <IconImage fileName={step.icon} className="w-[24px] h-[24px] hidden lg:block" />
              </div>
              <p className="text-sm md:text-lg lg:text-2xl font-bold">{step.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
