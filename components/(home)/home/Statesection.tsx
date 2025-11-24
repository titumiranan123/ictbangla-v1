/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import Image from "next/image";
import React from "react";
import Counter from "./Counter";

const Statesection = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/home-data`
  );
  const data = result?.data?.dynamicSections;

  const stateSection = data?.find(
    (section: any) => section?.section_type === "STATE_SECTION"
  );

  if (!stateSection || !stateSection.is_active) {
    return null;
  }
  return (
    <div className="container section lg:h-[455px] h-auto bg-bgPrimary lg:px-0 px-4 responsive-row">
      <div className="max-w-[686px] max-h-[652px] w-full h-full relative">
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src={stateSection?.image?.trim() ?? ""}
          alt="login"
          className="img-rounded-left object-cover "
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 686px"
        />
      </div>
      <div className="lg:w-[715px] lg:rounded-r-[12px] rounded-b-[12px] lg:h-[651px]  w-full lg:pt-[40px] pt-[30px] lg:px-[60px] px-[0px] lg:pb-[60px] pb-[40px] flex justify-center items-start flex-col gap-2">
        <h1 data-aos="fade-up" data-aos-delay="400" className="capitalize ">
          {stateSection.title}
        </h1>
        <p data-aos="fade-up" data-aos-delay="500" className="">
          {stateSection.sub_title}
        </p>
        <div className="grid grid-cols-2 gap-x-20 gap-y-8 w-full mt-5">
          {stateSection?.content?.map((stat: any, i: number) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={500 + i * 100}
              className="flex flex-col relative ps-4 after:w-[5px] after:h-full after:bg-primary after:absolute after:left-0 after:rounded-full after:top-0"
            >
              <Counter stat={stat} />
              <p className="text-[15px] lg:text-[16px] font-[400] text-gray-700">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statesection;
