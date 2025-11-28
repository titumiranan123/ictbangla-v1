/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const Courseproject = ({ data }: { data: any }) => {
  return (
    <div className="  w-full bg-[#F3F4F6] rounded-[24px] lg:px-10 px-2 py-8 lg:py-11">
      <p className="md:text-[32px] text-[24px] text-left text-primary font-[600]">
        {data?.section_title}
      </p>
      <div className="w-full  mx-auto grid md:mt-14 mt-10 grid-cols-1 md:grid-cols-3 gap-4">
        {data?.projects?.map((dt: any, idx: number) => (
          <div
            key={idx}
            className="border flex justify-between items-center md:w-[245px] w-[90%] h-[71px]  border-primary rounded-lg p-4  mx-auto"
          >
            <h2 className="font-[700] text-[14px] leading-[20px] text-textPrimary">
              {dt?.title}
            </h2>
            <div className="bg-bg-secondary w-[87px] h-[49px] rounded-[8px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courseproject;
