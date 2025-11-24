"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface PropsType {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  containerClass?: string;
}

const DropDownSection: React.FC<PropsType> = ({
  title,
  children,
  defaultOpen = true,
  className,
  containerClass,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`w-full ${containerClass}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`${className} w-full flex items-center justify-between  gap-4 text-left  hover:scale-100 `}
        aria-expanded={open}
      >
        <span className="2xl:text-lg text-[16px] leading-[18px] 2xl:leading-[20px] font-semibold w-full text-black-color">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500  transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`${!open ? "overflow-hidden" : ""} `}>{children}</div>
      </div>
    </div>
  );
};

export default DropDownSection;
