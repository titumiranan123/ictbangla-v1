import Image from "next/image";
import React from "react";
import instructor from "@/public/assets/instructors-03.jpg";
import { RenderStars } from "../shared/RenderStars";

const CourseInstructorCard = () => {
  return (
    <div className="mb-10 ">
      <h2 className=" text-black mt-5 mb-5">Instructor</h2>
      <section className="md:w-[759px]  w-full group md:h-[250px] h-[540px] rounded-lg flex gap-3 p-4 border  md:flex-row flex-col">
        <Image
          src={instructor}
          alt="Instructor Theresa Edin profile picture"
          className="md:w-[220px] md:h-[220px] w-full   rounded-[8px]"
        />

        <div className="flex flex-col gap-2 text-[#585d69]">
          <h3 className="text-[18px] font-[500] mt-3  hover: text-primary  cursor-pointer">
            Theresa Edin
          </h3>
          <p className="text-[14px] font-[400]">Professional Web Developer</p>

          <div className="flex items-center gap-3 md:flex-nowrap flex-wrap">
            <div className="flex items-center gap-1">
              <span>4.9</span> {RenderStars(3.9)} <span>315,254 Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="m7.5,13c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5-4.5,2.019-4.5,4.5,2.019,4.5,4.5,4.5Zm0-8c1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5-3.5-1.57-3.5-3.5,1.57-3.5,3.5-3.5Zm7.5,17.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-3.584-2.916-6.5-6.5-6.5s-6.5,2.916-6.5,6.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5Z" />
              </svg>
              <span>345 Students</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="12"
                height="12"
              >
                <path d="m16.55,10.435l-5.848-3.203c-.562-.316-1.228-.309-1.783.014-.556.325-.888.904-.888,1.548v6.411c0,.644.332,1.223.888,1.548.283.165.595.248.905.248.301,0,.6-.077.873-.23l5.857-3.208c.572-.322.914-.906.914-1.562s-.342-1.241-.919-1.565Z" />
              </svg>
              <span>34 Courses</span>
            </div>
          </div>

          <p className="line-clamp-3 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            perferendis optio velit reprehenderit eaque molestiae.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CourseInstructorCard;
