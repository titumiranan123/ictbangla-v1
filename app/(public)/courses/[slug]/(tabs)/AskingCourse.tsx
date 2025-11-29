"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Askingtab from "./Askingtab";
import AskingAccordion from "./AskingAccordion";
import Image from "next/image";
import Link from "next/link";

const AskingCourse = ({ data }: { data: any }) => {
  const [isAsking, setAsking] = useState(true);
  return (
    <div className="  w-full bg-[#F3F4F6] rounded-[24px] lg:px-10 px-2 py-3 lg:py-11">
      <Askingtab isActive={isAsking} setActive={setAsking} />
      <AskingAccordion
        items={isAsking ? data?.common_faq : data?.payment_faq}
      />
      <div className="mt-20">
        <p className="text-primary text-[24px] font-[600]">
          আরো জিজ্ঞাসা আছে ?
        </p>
        <Link
          href={"tel:+8801321204263"}
          className="w-[144px] h-[44px] rounded-[8px] bg-primary flex justify-center items-center text-white gap-2 mt-6"
        >
          {" "}
          <Image
            src={"/assets/icon/call.png"}
            width={24}
            height={24}
            alt="d"
          />{" "}
          কল করুন{" "}
        </Link>
      </div>
    </div>
  );
};

export default AskingCourse;
