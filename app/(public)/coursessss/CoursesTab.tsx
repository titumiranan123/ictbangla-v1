"use client";
import Image from "next/image";
import React from "react";

const CoursesTab = () => {
  return (
    <div className="flex items-center overflow-x-auto gap-4 mb-7 justify-between  scrollbar-hide ">
      <FilterItem
        className="bg-[#FFEEE3] rounded-lg"
        gifPath="live.gif"
        imagePath="live.png"
        width={40}
        height={40}
        title="লাইভ কোর্স"
      />
      <FilterItem
        className="bg-[#DED8FF] rounded-lg"
        gifPath="recorded.gif"
        imagePath="reocrded.png"
        width={40}
        height={40}
        title="রেকর্ডেড কোর্স"
      />
      <FilterItem
        className="bg-[#CEF6FF] rounded-lg"
        gifPath="dunddel.gif"
        imagePath="bundel.png"
        width={40}
        height={40}
        title="বান্ডেল কোর্স"
      />
      <FilterItem
        className="bg-[#F6FAD7] rounded-lg"
        gifPath="free.gif"
        imagePath="free.png"
        width={40}
        height={40}
        title="ফ্রি কোর্স"
      />
      <FilterItem
        className="bg-[#CBFAD6] rounded-lg"
        gifPath="subscription.gif"
        imagePath="subscription.png"
        width={40}
        height={40}
        title="সাবস্ক্রিপশন"
      />
    </div>
  );
};

const FilterItem = ({
  imagePath,
  gifPath,
  className,
  width,
  height,
  title,
}: {
  imagePath: string;
  gifPath: string;
  className?: string;
  width: number;
  height: number;
  title: string;
}) => {
  return (
    <div
      className={`relative w-fit h-[118px] hover:h-[140px] transition-all duration-300 flex justify-between py-4 items-center ${className} group flex-col gap-2 hover:gap-4 shrink-0 px-9`}
    >
      <Image
        src={`/assets/icon/gificon/${imagePath}`}
        alt={title}
        width={width}
        height={height}
        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
      />
      <p className="text-[20px] text-primary font-bold">{title}</p>
      <Image
        src={`/assets/icon/gificon/${gifPath}`}
        alt={`${title} GIF`}
        width={100}
        height={100}
        className="object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

export default CoursesTab;
