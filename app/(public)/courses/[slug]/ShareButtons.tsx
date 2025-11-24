/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Sharebutton from "@/components/(home)/course/Sharebutton";
import Image from "next/image";
import React from "react";

const ShareButtons = ({ data }: { data: any }) => {
  return (
    <div className="flex gap-2 ">
      <Image
        src={"/assets/icon/cart.png"}
        alt="cart"
        priority
        width={24}
        height={24}
      />
      <Sharebutton
        url={`https://ictbangla.com/courses/${data?.basicInfo?.slug}`}
      />
    </div>
  );
};

export default ShareButtons;
