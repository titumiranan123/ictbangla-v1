import React from "react";
import Mediacard from "./Mediacard";

const Aboutmedia = () => {
  return (
    <div className="container sectionGap">
      <h2 className="md:text-[40px] text-[24px] lg:text-[48px] font-bold text-center text-primary">
        ICT Bangla তে মিডিয়া
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16 ">
        <Mediacard />
        <Mediacard />
        <Mediacard />
      </div>
    </div>
  );
};

export default Aboutmedia;
