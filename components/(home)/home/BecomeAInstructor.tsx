/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
const BecomeAInstructor = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/home-data`
  );
  const data = result?.data?.dynamicSections;
  const skillsection = data?.find(
    (section: any) => section?.section_type === "BECOME_INSTRUCTOR"
  );

  return (
    <div className=" lg:mt-[160px] container section rounded-[12px] bg-secondary overflow-hidden">
      <div className=" responsive-row w-full lg:h-[328px] h-[240px] lg:px-[60px] lg:py-[92px] px-2 py-10 md:pb-0  rounded-lg ">
        <div className="lg:w-[525px] mt-3 w-full  flex flex-col gap-1 text-black">
          <h1 data-aos="fade-up" data-aos-delay="300" className=" ">
            {skillsection?.title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="400" className="">
            {skillsection?.sub_title}
          </p>

          <Link
            href={"/join-as-a-instructor"}
            className="flex justify-start mt-4 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <button className="bg-gradient-to-r from-[#099E47] to-[#29AE48] py-3 px-5 rounded-lg text-white before:absolute before:right-0 before:-top-2 before:h-[80px]  before:w-6 before:translate-x-20 before:rotate-[20deg]  before:bg-white before:opacity-60 before:blur-[3px] before:duration-700 hover:before:-translate-x-56 relative before:content-[''] overflow-hidden">
              জয়েন করুন
            </button>
          </Link>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-delay="700"
          className=" lg:block hidden -mt-10"
          src={skillsection?.image ?? ""}
          alt="instructor"
          width={704}
          height={321}
          priority
        />
      </div>
    </div>
  );
};

export default BecomeAInstructor;
