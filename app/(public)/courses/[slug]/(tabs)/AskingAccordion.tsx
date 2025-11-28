/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface accordionProp {
  items: AccordionItem[];
}

const AskingAccordion: React.FC<accordionProp> = ({ items }) => {
  return (
    <div className=" p-6 w-full bg-[#F3F4F6] gap-3 mt-[41px] rounded-[24px]">
      {items?.map((item, index) => (
        <Items index={index} item={item} key={index} />
      ))}
    </div>
  );
};
const Items = ({ item, index }: { item: any; index: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={100 + index * 100}
      className="lg:max-w-full bg-white mt-3 min-h-[58px] w-full h-full rounded-[18px]"
      key={index}
    >
      <div
        key={index}
        className={`text-textPrimary ${
          openIndex === index ? "" : ""
        }  rounded-[18px]  overflow-hidden transition-colors duration-200 `}
      >
        <div
          className="cursor-pointer p-4 flex justify-between items-center"
          onClick={() => handleToggle(index)}
        >
          <div className="font-[600] poppins leading-[30px] md:text-[21px] text-[16px] flex items-center gap-4">
            <h3 className="font-[600]  leading-[24px] md:text-[18px] text-[16px] text-textPrimary   flex items-center gap-2">
              {item.question}
            </h3>
          </div>
          <div className="flex-shrink-0 ml-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className={`transform fill-white lucide lucide-chevron-down-icon lucide-chevron-down transition-transform duration-300 ${
                openIndex === index ? "-rotate-180" : "rotate-0"
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        <div
          ref={(el) => {
            contentRefs.current[index] = el;
          }}
          style={{
            maxHeight:
              openIndex === index
                ? `${contentRefs.current[index]?.scrollHeight}px`
                : "0px",
          }}
          className="transition-all duration-300 ease-in-out overflow-hidden opensans"
        >
          <div className="px-6 pb-6 pt-4">
            <p className="lg:text-[14px] lg:leading-[20px] text-[12px] font-opensans">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AskingAccordion;
