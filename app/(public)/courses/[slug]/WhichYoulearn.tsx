"use client";
import Image from "next/image";
import React from "react";

const WhichYoulearn = () => {
  return (
    <div className="max-w-[360px] w-full h-[154px] bg-neutral rounded-[8px] text-white flex flex-col justify-center p-6 mt-4">
      <h2 className="text-[18px] text-primary font-[700]">
        যে সকল সফ্টোয়ার শিখবেন
      </h2>
      <div className="border rounded-lg mt-2 border-primary px-2 py-1 flex justify-start items-center gap-3">
        <Image
          src={"/assets/aftereffect.png"}
          alt="after effect"
          width={24}
          height={24}
        />
        <h3 className="text-text-secondary text-[18px] font-[700] ">
          Adobe Premier Pro
        </h3>
      </div>
      <div className="border rounded-lg mt-2 border-primary px-2 py-1 flex justify-start items-center gap-3">
        <Image
          src={"/assets/aftereffect.png"}
          alt="after effect"
          width={24}
          height={24}
        />
        <h3 className="text-text-secondary text-[18px] font-[700] ">
          Adobe Premier Pro
        </h3>
      </div>
    </div>
  );
};

export default WhichYoulearn;
