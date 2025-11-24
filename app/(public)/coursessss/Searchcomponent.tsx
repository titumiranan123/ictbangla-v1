"use client";
import { Search } from "lucide-react";
import React from "react";

const Searchcomponent = () => {
  return (
    <div className="w-full flex justify-start items-center px-3 py-2 rounded-[8px] border border-slate-300 gap-2 md:hidden  ">
      <Search />
      <input
        type="text"
        placeholder="কোর্স সার্চ করুন"
        className="w-full focus:outline-none"
      />
    </div>
  );
};

export default Searchcomponent;
