"use client";
import React, { useState } from "react";
import arrow from "@/public/assets/icon/angle-small-right.svg";
import Image from "next/image";
interface collapsProp {
  title: string;
  children: React.ReactNode;
}

const CollapsListitem: React.FC<collapsProp> = ({ title, children }) => {
  const [isToggole, setToggole] = useState(true);
  return (
    <div>
      <div
        onClick={() => setToggole(!isToggole)}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="text-[18px] font-[600] leading-[30px]">{title}</h1>
        <Image
          className={`easeInOut ${isToggole ? "-rotate-90 " : "rotate-90 "}`}
          src={arrow}
          alt="angle"
        />
      </div>
      <div
        className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
          isToggole ? "max-h-[500px] " : "max-h-0 "
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsListitem;
