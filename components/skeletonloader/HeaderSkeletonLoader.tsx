import React from "react";

export const HeaderSkeletonLoader = () => {
  return (
    <div className="relative animate-pulse flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-200 md:w-[320px] w-full  group  lg:h-[420px] h-[468px] rounded-lg p-2"
          >
            <div className="w-full h-52 bg-gray-300 rounded-lg" />
            <div className="flex justify-between mt-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-6 w-20 bg-gray-300 rounded" />
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-6 w-5/6 bg-gray-300 rounded-md" />
              <div className="h-4 w-3/4 bg-gray-300 rounded-md" />
              <div className="h-3 w-1/2 bg-gray-300 rounded-md" />
            </div>

            <div className="flex justify-between mt-4">
              <div className="h-8 w-28 bg-primary bg-opacity-30 rounded" />
              <div className="h-8 w-28 bg-gray-300 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -bottom-[66px] left-1 flex items-center gap-4">
        <button className="w-16 opacity-90 animate-pulse bg-secondary border border-slate-200  px-3 py-2 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 h-10"></button>
        <button className="w-16 opacity-90 animate-pulse  bg-secondary border border-slate-200  px-3 py-2 rounded-full z-10 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 h-10"></button>
      </div>
    </div>
  );
};
