/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const MentorCard = ({ data, idx }: { data: any; idx: number }) => {
  return (
    <div
      className={`flex justify-between items-center p-2 flex-col mx-auto gap-6 lg:flex-row mt-3 ${
        idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="image w-full lg:w-[46%]">
        <Image
          className="md:w-[492px] md:h-[296px] w-full h-full rounded-lg"
          src={data.image}
          alt="instructor"
          width={492}
          height={296}
        />
      </div>
      <div className=" w-full lg:w-[52%]">
        <h2 className="font-[600] text-[22px]">Instructor </h2>
        <p className="text-[18px] font-[500] mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default MentorCard;
