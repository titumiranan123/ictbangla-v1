/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import { useHomeDataSlice } from "@/hooks/public/useHomeDataSlice";
import HomelatestedskillSkeleton from "../../skeletonloader/Homelatestedskillskeleton";
const LatesedSkill = () => {
  const { data, isLoading } = useHomeDataSlice("dynamicSections");

  if (isLoading) {
    return <HomelatestedskillSkeleton />;
  }
  const skillsection = data?.find(
    (section: any) => section?.section_type === "TOW_COLUMN_BANNER"
  );
  return (
    <div className="container section flex lg:flex-row  flex-col-reverse justify-between items-center ">
      <div className="lg:w-[715px] lg:rounded-l-[12px] lg:rounded-b-[0] rounded-b-[12px] lg:h-[651px] bg-[#D6EBF4] w-full lg:pt-[137px] pt-[30px] lg:px-[60px] px-[20px] lg:pb-[60px] pb-[40px] flex justify-center  items-start flex-col gap-6">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="capitalize lg:w-[360px] w-full"
        >
          {skillsection?.title}
        </h1>
        <p data-aos="fade-up" data-aos-delay="200">
          {skillsection?.sub_title}
        </p>
        <div>
          <Button
            data-aos="fade-up"
            data-aos-delay="300"
            title="Get Started"
            className="btn-primary w-[180px] h-[58px]"
            href="/courses"
          />
        </div>
      </div>
      <Image
        src={skillsection?.image ?? ""}
        alt="login"
        className="lg:w-[685px]  lg:h-[651px]  lg:rounded-r-[12px]  rounded-t-[12px] lg:rounded-t-[0]"
        width={685}
        height={651}
      />
    </div>
  );
};

export default LatesedSkill;
