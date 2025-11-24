import Image from "next/image";
import React from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const EStroeCard = () => {
  return (
    <div className="w-full max-w-[437px] bg-white p-4 rounded-2xl">
      <Image
        className="w-full  h-full max-h-[230px] rounded-2xl mb-4"
        src="/assets/bundel.png"
        width={405}
        height={166}
        alt="ictbangla"
      />

      <h4 className="text-lg font-bold text-black-color flex items-center gap-4">
        Capcut Premier pro
      </h4>
      <p className="text-[12px] font-bold text-black-color mt-2">
        Fiverr Freelancing Success: From Zero to Hero (LIVE-COURSE)
      </p>

      <div className="mt-8 flex items-center justify-between">
        <p className="mt-5 text-lg font-bold text-primary">
          ৳ 2499{" "}
          <span className="text-sm font-semibold text-[#8A8A8A] ">৳ 1,999</span>
        </p>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-lg border border-primary">
            <IconImage fileName="shopint_card_icon.svg" className="!w-5 !h-5" />
          </button>
          <button className="button-primary !w-fit px-8" type="button">
            কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default EStroeCard;
