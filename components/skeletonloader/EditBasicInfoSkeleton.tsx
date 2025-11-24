import React from "react";

const EditBasicInfoSkeleton = () => {
  return (
    <div className="w-full mt-5 ">
      <form className="flex flex-col gap-12 w-full">
        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>
        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>
        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>

        {/* Replace the description Input with the Quill Editor */}
        <div className="w-full bg-slate-300 animate-pulse h-20 rounded-lg"></div>

        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>
        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>

        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>
        <div className="w-full bg-slate-300 animate-pulse h-9 rounded-lg"></div>

        <button className="py-4 px-5 w-full bg-slate-300 animate-pulse h-9 rounded-lg"></button>
      </form>
    </div>
  );
};

export default EditBasicInfoSkeleton;
