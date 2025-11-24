/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const StudentReviewCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white border border-primary rounded-2xl py-[15px] px-[15px]  h-full md:w-[405px] w-[300px] max-h-[250px] transition-all  duration-500 ease-in-out">
      <div className="flex items-center gap-3">
        <Image
          src={data?.image ?? ""}
          height={48}
          width={48}
          alt="ictbangla"
          className="size-12 rounded-full border-2 border-primary"
        />
        <div>
          <div className="flex items-center gap-1 mb-1">
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
          </div>
          <button
            className="px-2 py-1 rounded-sm border border-dashed border-primary text-primary text-[8px] flex items-center gap-2 font-bold"
            type="button"
          >
            <IconImage
              fileName="stylished_check.svg"
              className="!w-[13px] !h-[13px]"
            />
            <span>{data?.position}</span>
          </button>
          <h6 className="text-base font-bold text-black-color">
            {data?.author}
          </h6>
          {/* <p className="text-[8px] font-bold text-[#707070]">
            Digital Marketing expert
          </p> */}
        </div>
      </div>
      <hr className="my-[10px] h-[1px] border-0 bg-gradient-to-r from-[#29AE48] to-[#ffffff]" />
      <style>
        {`
          .student::-webkit-scrollbar {
            width: 2px;
            height: 6px;
          }
          .student::-webkit-scrollbar-thumb {
            background: #8A8A8A;
            border-radius: 12px;
          }
          `}
      </style>
      <p className="text-[12px] font-[500] leading-[18px] md:h-[110px] h-[98px] overflow-hidden hover:overflow-y-scroll  text-[#8A8A8A] student w-[99%]">
        {data?.quote}
      </p>
    </div>
  );
};

export default StudentReviewCard;
