"use client";
import React, { useState } from "react";
import arrow from "@/public/assets/icon/angle-small-right.svg";
import Image from "next/image";

interface Props {
  onFilterChange: (selectedItems: string[]) => void;
  title: string;
  isLoading: boolean;
  data: {
    _id: string;
    title: string;
  }[];
  selectedItems: string[]; // Add this prop
}

const CourseFillter: React.FC<Props> = ({
  onFilterChange,
  data,
  title,
  isLoading,
  selectedItems,
}) => {
  const [isToggole, setToggole] = useState(true);

  const handleCheckboxChange = (_id: string) => {
    const newSelectedItems = selectedItems.includes(_id)
      ? selectedItems.filter((c) => c !== _id)
      : [...selectedItems, _id];
    onFilterChange(newSelectedItems);
  };

  return (
    <div className="border-b p-5 text-black">
      <div
        onClick={() => setToggole(!isToggole)}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="text-[18px] font-[600] leading-[30px]">{title}</h1>
        <Image
          className={`ease-in-out ${isToggole ? "-rotate-90 " : "rotate-90 "}`}
          src={arrow}
          alt="angle"
        />
      </div>
      <div
        className={`duration-500 easeInOut overflow-hidden ${
          isToggole ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {isLoading ? (
          <>
            {[...Array(6)].map((_, idx) => (
              <p
                key={idx}
                className="w-full h-6 bg-slate-300 animate-pulse mt-1 rounded-lg"
              ></p>
            ))}
          </>
        ) : (
          <>
            {data?.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between mt-2 gap-1"
              >
                <label className="flex items-center gap-4 text-[15px] font-[500]">
                  <input
                    className="accent-black"
                    type="checkbox"
                    checked={selectedItems.includes(item._id)}
                    onChange={() => handleCheckboxChange(item._id)}
                  />
                  <span className="capitalize">{item.title}</span>
                </label>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseFillter;
