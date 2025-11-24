"use client";
import React, { useState, useRef } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Questionanswer: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-5">
      {items?.map((item, index) => (
        <div
          key={index}
          className={`${
            items?.length !== index + 1 ? "border-b-2" : "border-none"
          }`}
        >
          <div
            className="cursor-pointer p-4 py-4 flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <h4 className=" flex items-center gap-2 font-[500]">
              {item?.question}
            </h4>
            <div>
              <svg
                className={`transform ease-in-out transition-transform duration-300 ${
                  openIndex === index ? "-rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
              </svg>
            </div>
          </div>
          <div
            ref={(el) => {
              contentRefs.current[index] = el; // Just assign, no return
            }}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : "0px",
              transition: "max-height 0.5s ease-in-out, opacity 0.5s",
              opacity: openIndex === index ? 1 : 0,
            }}
            className="overflow-hidden"
          >
            <p className="ps-4 py-2 text-[16px]">{item?.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questionanswer;
