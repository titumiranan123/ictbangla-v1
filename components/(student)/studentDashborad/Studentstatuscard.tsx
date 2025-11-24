/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const StudentStatusCard = ({
  image,
  title,
  amount,

}: {
  image: any;
  title: string;
  amount: string | number;
}) => {
  return (
    <div className="md:w-[220px] w-full border border-slate-500 h-[120px] p-2 flex items-center justify-start md:gap-5 gap-10 rounded-xl">
      <div className="bg-secondary w-14 h-14 flex justify-between items-center p-[14px] rounded-full">
        <Image className="w-10 h-10" src={image} alt="title" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-[16px] font-[400]">{title}</h2>
        <p className="text-[26px] font-[600]  text-primary ">{amount}</p>
      </div>
    </div>
  );
};

export default StudentStatusCard;
