import Image from "next/image";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddCompare = ({ data }: { data: any }) => {
  return (
    <div className="max-w-[960px] w-full lg:max-h-[80px] h-full  border-l-8 border-[#29AE48] flex justify-between lg:flex-nowrap flex-wrap  items-center gap-4 mt-1 px-5 py-6 bg-white">
      <button className="bg-[#29AE48] rounded-[8px] py-[10px] px-4 text-white ">
        {data?.batch_name}
      </button>

      <div className="flex flex-col ">
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/icon/calendar.png"}
            alt="calender"
            className="w-6 h-6"
            width={24}
            height={24}
          />
          <p className="font-[700] text-[12px]  text-[#707070]">শুরু হবে</p>
        </div>
        <p className="text-[18px] font-[700] text-[#707070]">
          {" "}
          {data?.class_start_date}
        </p>
      </div>
      <div className="flex flex-col  gap-1">
        <div className="flex gap-2">
          <Image
            src={"/assets/icon/calendar.png"}
            alt="calender"
            className="w-6 h-6"
            width={24}
            height={24}
          />
          <p className="font-[700] text-[12px]  text-[#707070]">ক্লাস শিডিউল</p>
        </div>
        <p className="text-[18px] font-[700] text-[#707070]">
          {data?.course_schedule}
        </p>
      </div>
      {/* <button className="bg-[#29AE48]  rounded-[8px] py-[10px] px-4 flex gap-1 items-center">
        <span className="text-white">Add To Compare </span>
        <CirclePlus className="text-red-500" />
      </button> */}
    </div>
  );
};

export default AddCompare;
