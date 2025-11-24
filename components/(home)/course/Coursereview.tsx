import React from "react";
import InstructorTestimonial from "../../(instructor)/instructor/InstructorTestimonial";
import { FaStar } from "react-icons/fa";

const Coursereview = () => {
  return (
    <div className=" mt-10">
      <div className="text-[#131836] flex justify-between items-center">
        <h2 className="">Review</h2>
        <div className="text-[14px] flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <FaStar /> <span>4.9 course rating </span>
          </div>
          <div>
            <span>4k rating </span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-10">
        <InstructorTestimonial />
        <InstructorTestimonial />
      </div>
    </div>
  );
};

export default Coursereview;
