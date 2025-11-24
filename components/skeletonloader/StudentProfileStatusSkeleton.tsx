
import React from "react";

const StudentProfileStatuSkeleton = () => {
  return (
    <div className="md:w-[220px] animate-pulse w-full border border-slate-400 h-[150px] p-3 flex items-center justify-center md:gap-5 gap-10 rounded-xl">
      <div className="bg-[#e98b6f] w-14 h-14 flex justify-center items-center p-4 rounded-full bg-opacity-30">
        <div className="w-10 h-10"   />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="w-28 h-8 bg-slate-300 rounded-xl"></h2>
        <p className="text-[26px] font-[600] w-20 h-8  rounded-xl  bg-primary bg-opacity-30"></p>
      </div>
    </div>
  );
};

export default StudentProfileStatuSkeleton;
