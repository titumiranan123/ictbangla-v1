/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const Offersection = ({ image }: { image?: any }) => {
  if (!image) {
    return null;
  }
  return (
    <div className="w-full h-auto max-w-[1200px] max-h-[500px] lg:mt-30 mt-14">
      <Image
        className="w-full h-auto max-w-[1200px] max-h-[500px] rounded-lg"
        src={image}
        alt="offer images"
        width={1200}
        height={600}
      />
    </div>
  );
};

export default Offersection;
