import Image from "next/image";
import React from "react";
import { BiDislike, BiSolidLike } from "react-icons/bi";
import review from "@/public/assets/review-2.png";
import { FaStar } from "react-icons/fa";
const InstructorTestimonial = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between    md:gap-10 gap-4 lg:w-[900px] w-full ">
      <div className="rounded-full border md:w-[80px] md:h-[80px] w-[60px] h-[60px] flex justify-center items-center p-[1px]  border-[#FCADA9] ">
        <Image
          className="md:w-16 md:h-16 w-14 h-14 p-1 rounded-full "
          src={review}
          alt="user"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[18px] leading-[30px] font-[500] hover:text-[#FCADA9] duration-500 transition-all">
          Theresa Edin
        </h1>
        <div className="flex justify-start text-black items-center gap-2 text-[14px] leading-[28px]">
          <span>4.9</span>
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
          <span>2 months ago </span>
        </div>
        <p className="font-[500] text-black text-[14px] ">Excellent Course</p>
        <p className="text-[#585D69] text-[14px] font-[400] leading-[28px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          totam dolores dicta sit voluptatibus debitis, ea assumenda facilis?
        </p>
        <div className="text-[#585D69] flex justify-start items-center gap-6 leading-[28px]">
          <div className="flex justify-center items-center text-[14px] gap-2">
            <BiSolidLike /> <span>Helpful</span>
          </div>
          <div className="flex justify-center items-center text-[14px] gap-2">
            <BiDislike /> <span>Not helpful</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorTestimonial;
