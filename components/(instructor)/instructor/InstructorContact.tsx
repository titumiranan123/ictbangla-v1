import React from "react";
import instructor3 from "@/public/assets/instructors-03.jpg";
import Image from "next/image";

import facebook from "@/public/assets/icon/facebook.svg";
import twitter from "@/public/assets/icon/twitter.svg";
const InstructorContact: React.FC = () => {
  return (
    <div className="lg:w-[400px] lg:h-[776px] w-full h-full px-5 pt-4 pb-8  bg-white">
      <Image
        className="rounded-[12px]"
        src={instructor3}
        alt="instructor3"
        priority
        decoding="async"
      />
      <div className="text-[#131836] flex flex-col gap-2  px-[20px] py-[34px]">
        <h1 className="  font-[600]  text-[18px] leading-[50px]">Contact Me</h1>
        <div>
          <p className="text-[15px] font-[400]">
            PO Box 16122 Collins Street West Victoria
          </p>
        </div>
        <div>
          <p className="text-[15px] font-[400]">info@upskill.com</p>
        </div>
        <div>
          <p className="text-[15px] font-[400]">+89(619)076-2205</p>
        </div>
        <div>
          <p className="text-[15px] font-[400]">www.alitfn.com</p>
        </div>
        <div className="mt-4 border-t flex flex-col justify-center items-center h-full p-5 text-black">
          <p>Follow Me</p>
          <div className="text-[24px] text-black flex justify-center items-center mt-5 gap-2">
            <Image
              src={facebook}
              alt="facebook"
              className="border w-[44px]  h-[44px] p-2 rounded-full"
            />
            <Image
              src={twitter}
              alt="TWITTER"
              className="border w-[44px]  h-[44px] p-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorContact;
