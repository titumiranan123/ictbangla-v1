"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
  moduleNumber: number;
  color: string;
}

interface accordionProp {
  items: AccordionItem[];
}

const CourseContentAccordion: React.FC<accordionProp> = ({ items }) => {
  return (
    <div className=" grid grid-cols-1 gap-3">
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
                {index + 1}
              </p>
            </div>{" "}
            <h3 className="font-[500] md:text-[12px]  text-[10px] leading-[14px] md:leading-[20px] text-text-neutral  flex-col  flex items-start gap-2">
              {item.title}
              <span className="w-[154px] h-[22px] bg-[#D2D8D3] text-[#667269] text-[12px] font-[600] rounded-[2px] flex items-center justify-center gap-2 ">
                <Image
                  src={"/assets/icon/recorded.png"}
                  alt=""
                  width={12}
                  height={12}
                />
                40 Recorded Video
              </span>
            </h3>
          </div>
          <div className="flex-shrink-0 ml-4 ">
            <Image
              className={`${
                openIndex === index ? "-rotate-180" : "rotate-0"
              } w-[10px] h-[5px]`}
              src={"/assets/icon/downarrow.png"}
              alt=""
              width={10}
              height={5}
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
            <p className="md:text-[12px]  text-[10px] leading-[14px] md:leading-[20px] ">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContentAccordion;
