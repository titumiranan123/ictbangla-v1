'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import arrow from "@/public/assets/icon/angle-small-right.svg";

interface Props {
  onFilterChange: (selectedItems: string[]) => void;
  title: string;
  isLoading: boolean;
  selectedItems: string[];
}

const pricingOptions = [
  { _id: 1, title: "Free Courses", value: "FREE" },
  { _id: 2, title: "Paid Courses", value: "PAID" },

];

const PricingFilter: React.FC<Props> = ({
  onFilterChange,
  title,
  isLoading,
  selectedItems,
}) => {
  const [isToggle, setToggle] = useState(true);

  const handleCheckboxChange = (value: string) => {
    const newSelectedItems = selectedItems.includes(value)
      ? selectedItems.filter((c) => c !== value)
      : [...selectedItems, value];
    onFilterChange(newSelectedItems);
  };

  return (
    <div className="border-b p-5 text-black">
      <div
        onClick={() => setToggle(!isToggle)}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="text-[18px] font-[600] leading-[30px]">{title}</h1>
        <Image
          className={`ease-in-out ${isToggle ? "-rotate-90" : "rotate-90"}`}
          src={arrow}
          alt="angle"
          width={20}
          height={20}
        />
      </div>
      <div
        className={`duration-500 ease-in-out overflow-hidden ${
          isToggle ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {isLoading ? (
          [...Array(4)].map((_, idx) => (
            <p key={idx} className="w-full h-6 bg-slate-300 animate-pulse mt-1 rounded-lg"></p>
          ))
        ) : (
          pricingOptions.map((item) => (
            <div key={item._id} className="flex items-center justify-between mt-2 gap-1">
              <label className="flex items-center gap-4 text-[15px] font-[500]">
                <input
                  className="accent-black"
                  type="checkbox"
                  checked={selectedItems.includes(item.value)}
                  onChange={() => handleCheckboxChange(item.value)}
                />
                <span>{item.title}</span>
              </label>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PricingFilter;