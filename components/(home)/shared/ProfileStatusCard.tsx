/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const ProfileStatusCard = ({
  image,
  title,
  amount,
}: {
  image: any;
  title: string;
  amount: string | number;
}) => {
  return (
    <div className="md:w-[300px] w-full border border-gray-200 h-[150px] p-8 flex items-center justify-start md:gap-5 gap-10 rounded-xl bg-[#f9f9fa]">
      <div className="bg-[#d1fadf] w-16 h-16 flex justify-between items-center p-4 rounded-full">
        <Image className="w-10 h-10" src={image} alt="title" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[16px] font-[400] text-[#1D2939]">{title}</h2>
        <p className="text-[26px] font-[600] text-[#1cab55]">{amount}</p>
      </div>
    </div>
  );
};

export default ProfileStatusCard;