import InstructorContact from "@/components/(instructor)/instructor/InstructorContact";
import InstructorTestimonial from "@/components/(instructor)/instructor/InstructorTestimonial";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import lesson from "@/public/assets/icon/lesson.svg";
// import clock from "@/public/assets/icon/clock-three.svg";
import student from "@/public/assets/icon/users.svg";
import { RenderStars } from "@/components/(home)/shared/RenderStars";
import Postcomment from "@/components/(home)/shared/Postcomment";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
const SingleCourse = async ({
  params,
}: {
  params: Promise<{ instructor_username: string }>;
}) => {
  const { instructor_username } = await params;
  return (
    <div>
      <div className="h-[260px] text-black bg-[#FFEFEA] pt-10 mb-10">
        {/* instructor header  */}
        <span>{instructor_username}</span>
        <div className="container flex justify-start  flex-col">
          <div className="flex gap-1 justify-start items-center  ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="14"
                height="14"
              >
                <path d="M14.5,18h-5c-.827,0-1.5-.673-1.5-1.5v-5c0-.827,.673-1.5,1.5-1.5h5c.827,0,1.5,.673,1.5,1.5v5c0,.827-.673,1.5-1.5,1.5Zm-5-7c-.275,0-.5,.225-.5,.5v5c0,.275,.225,.5,.5,.5h5c.275,0,.5-.225,.5-.5v-5c0-.275-.225-.5-.5-.5h-5Zm10,13H4.5c-2.481,0-4.5-2.019-4.5-4.5V9.561c0-1.497,.741-2.892,1.983-3.729L9.483,.771c1.527-1.033,3.505-1.033,5.034,0l7.499,5.061c1.242,.838,1.983,2.232,1.983,3.729v9.939c0,2.481-2.019,4.5-4.5,4.5ZM12,.996c-.682,0-1.363,.201-1.957,.603L2.542,6.659c-.966,.652-1.542,1.736-1.542,2.901v9.939c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5V9.561c0-1.165-.576-2.249-1.542-2.901L13.958,1.599c-.595-.401-1.276-.603-1.958-.603Z" />
              </svg>
            </div>
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />{" "}
            Pages{" "}
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <span>Instructor</span>
          </div>
          <h1 className="  mt-[10px] cardo">Hi, I Am Theresa Webb</h1>
          <p className="font-[400] lg:text-[16px] lg:leading-[20px] mt-[5px]  ">
            Developer and Teacher
          </p>
          <div className="flex items-center md:flex-nowrap flex-wrap gap-4 mt-10 text-[#585d69]">
            <div className="flex items-center gap-1">
              <span>4.9</span> {RenderStars(3.9)} <span>315,254 Reviews</span>
            </div>
            <div className="flex items-center gap-[6px] text-[14px]  ">
              <Image className="w-4 h-4" src={student} alt="" />
              <span>120</span> Students
            </div>
            <div className="flex items-center gap-[6px]">
              <Image className="w-4 h-4" src={lesson} alt="" />
              <span>40</span> Lessons
            </div>
          </div>
        </div>
      </div>
      {/* Instructor Content */}
      <div className=" flex justify-between lg:flex-row flex-col container relative gap-10">
        <div className="min-h-screen  flex-1">
          {/* Instructor about section */}
          <div className="">
            <h1 className="text-[22px] leading-[28px] font-[500] ">About Me</h1>
            <p className="text-[15px] leading-[28px] mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              illum exercitationem a soluta quaerat rem architecto, perspiciatis
              voluptatum pariatur accusantium tempora ab non porro earum ex
              debitis magnam animi laudantium harum explicabo.
              <br />
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              suscipit necessitatibus unde veritatis animi sint accusamus
              tempore? Quae, officiis atque!
            </p>
          </div>
          {/* Instructor suggested course */}
          <div className="h-[300px] mt-10">
            <h1 className="text-[22px] leading-[28px] font-[500] ">
              More Course By Theresa Edin
            </h1>
          </div>
          {/* Instructor review section */}
          <div>
            <div className="text-[#131836] flex justify-between items-center">
              <h1 className="text-[22px] leading-[28px] font-[500] ">Review</h1>
              <div className="text-[14px] flex justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-2">
                  <FaStar /> <span>4.9 course rating </span>
                </div>
                <div>
                  <span>4k rating </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <InstructorTestimonial />
              <InstructorTestimonial />
            </div>
          </div>
          <Postcomment />
        </div>

        {/* Instructor Information Section */}

        <div className="lg:sticky lg:top-10 lg:-mt-32 rounded-[12px] lg:right-0 lg:h-[780px] h-[680px] bg-white shadow-md p-4">
          <InstructorContact />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
