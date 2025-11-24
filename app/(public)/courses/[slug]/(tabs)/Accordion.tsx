/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Accordion = ({ items }: any) => {
  return (
    <div className=" grid grid-cols-1 gap-3">
      {items?.map((item: any, index: number) => (
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
      className="lg:max-w-full bg-white  min-h-[58px] w-full h-full rounded-[18px] "
      key={index}
    >
      <div
        key={index}
        className={`text-[#8a8a8a] ${
          openIndex === index ? "" : ""
        }  rounded-[18px]  overflow-hidden transition-colors duration-200 `}
      >
        <div
          className="cursor-pointer p-4 flex justify-between items-center"
          onClick={() => handleToggle(index)}
        >
          <div className="font-[600] poppins leading-[30px] md:text-[21px] text-[16px] flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-lg flex flex-col justify-center items-center p-4 `}
              style={{ background: item.color }}
            >
              <p className="md:text-[12px]  text-[10px] leading-[14px] md:leading-[20px] font-[600]  text-white tracking-[1.5px]">
                সপ্তাহ
              </p>
              <p className="md:text-[12px]  text-[10px] leading-[14px] md:leading-[20px] font-bold   text-white">
                {item.sub_title}
              </p>
            </div>{" "}
            <h3 className="font-[500] md:text-lg  text-sm leading-[14px] md:leading-[20px] text-textPrimary   flex items-center gap-2">
              {item.question}
            </h3>
          </div>
          <div className="flex-shrink-0 ml-4 ">
            <Image
              className={`${
                openIndex === index ? "-rotate-180" : "rotate-0"
              } w-[12px] h-[6px]`}
              src={"/assets/icon/downarrow.png"}
              alt=""
              width={12}
              height={6}
            />
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
          className="transition-all duration-300 ease-in-out overflow-hidden "
        >
          <div className="px-6 pb-6 pt-4">
            <p className="md:text-[16px]  text-[14px] leading-[14px] md:leading-[24px] ">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
