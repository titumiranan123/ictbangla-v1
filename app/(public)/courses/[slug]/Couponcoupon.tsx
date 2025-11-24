"use client";
import Image from "next/image";
import React from "react";

const CourseCoupon = () => {
  return (
    <div className="flex justify-between gap-2">
      <button className="text-white font-[500] w-full text-[14px] rounded-[8px] bg-primary py-2 px-4 flex items-center gap-2">
        <Image src={"/assets/cupon.png"} alt="coupon" width={18} height={18} />{" "}
        কুপন এপ্লাইড
      </button>
      <button className="text-primary  font-[600] text-[18px] rounded-[8px] border border-primary py-2 px-4 w-full flex">
        <Image
          src={"/assets/couponbatch.png"}
          alt="batch"
          width={24}
          height={24}
        />{" "}
        <span>ICTBANGLA</span>
      </button>
    </div>
  );
};

export default CourseCoupon;
