"use client";

import React, { useState } from "react";
import Image from "next/image";
import arrow from "@/public/assets/icon/angle-small-right.svg";
import { AiFillStar } from "react-icons/ai";

interface Props {
  title?: string;
}

const CourseRatingFilter: React.FC<Props> = ({ title = "Rating" }) => {
  const [isToggle, setToggle] = useState(true);

  const handleCheckboxChange = (rating: number) => {
    // const newSelectedRatings = selectedRatings.includes(rating)
    //   ? selectedRatings.filter((r) => r !== rating)
    //   : [...selectedRatings, rating];
    console.log(rating);
  };

  return (
    <div className="border-b p-5 text-black">
      <div
        onClick={() => setToggle(!isToggle)}
        className="flex justify-between cursor-pointer"
      >
        <h1 className="text-[18px] font-[600] leading-[30px]">{title}</h1>
        <Image
          className={`ease-in-out ${isToggle ? "-rotate-90 " : "rotate-90 "}`}
          src={arrow}
          alt="angle"
        />
      </div>

      <div
        className={`duration-500 ease-in-out overflow-hidden ${
          isToggle ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {[5, 4, 3, 2, 1].map((rating) => (
          <div
            key={rating}
            className="flex items-center justify-between mt-2 gap-1"
          >
            <label className="flex items-center gap-4 text-[15px] font-[500]">
              <input
                className="accent-black"
                type="checkbox"
                // checked={selectedRatings.includes(rating)}
                onChange={() => handleCheckboxChange(rating)}
              />
              <span className="flex items-center gap-1">
                {[...Array(rating)].map((_, i) => (
                  <AiFillStar key={i} className="text-yellow-500" />
                ))}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRatingFilter;
