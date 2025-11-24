import Image from "next/image";
import React from "react";

const MobileDevelopmentEventSection = () => {
  return (
    <>
      <div className="bg-[#EAF7ED] py-6 px-5 sectionGap">
        <Image
          src="/assets/demo-images/demo-card-image.jpg"
          height={261}
          width={411}
          alt="ictbangla.com"
          className="size-full rounded-xl "
        />

        <div className=" mt-6">
          <div>
            <h3 className="text-[24px] my-[23px] font-bold text-black-color text-center whitespace-nowrap">
              Development Event
            </h3>
            <p className=" text-[14px] font-[500] text-center text-[#8A8A8A] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s
            </p>
          </div>
          <div className="mt-4">
            <div className="border-[#29AE48] bg-[#fff] border rounded-[8px] py-5 px-4 flex items-center justify-between ">
              <div className="text-center">
                <h4 className="text-[32px] font-bold text-[#29AE48] ">26</h4>
                <p className="text-sm font-bold text-[#8A8A8A] ">Days</p>
              </div>
              <div className="text-center">
                <h4 className="text-[32px] font-bold text-[#29AE48] ">14</h4>
                <p className="text-sm font-bold text-[#8A8A8A] ">Hours</p>
              </div>
              <div className="text-center">
                <h4 className="text-[32px] font-bold text-[#29AE48] ">04</h4>
                <p className="text-sm font-bold text-[#8A8A8A] ">Minutes</p>
              </div>
              <div className="text-center">
                <h4 className="text-[32px] font-bold text-[#29AE48] ">31</h4>
                <p className="text-sm font-bold text-[#8A8A8A] ">Seconds</p>
              </div>
            </div>
            <button className="button-primary mt-2 px-4 text-lg" type="button">
              বিস্তারিত
            </button>
            <button
              className="button-primary mt-2 px-4 bg-[#fff] text-[#29AE48] text-lg border border-[#29AE48]"
              type="button"
            >
              আরো দেখুন
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDevelopmentEventSection;
