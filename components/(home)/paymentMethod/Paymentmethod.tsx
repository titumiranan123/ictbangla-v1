/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import nogad from "@/public/assets/payment/nogad.png";
import bkash from "@/public/assets/payment/bkash.png";
import roket from "@/public/assets/payment/rocket.png";
import ssl from "@/public/assets/payment/ssl.png";
import Image from "next/image";
const Paymentmethod = () => {
  return (
    <div className="section container">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 data-aos="fade-up" data-aos-delay="200">
          পেমেন্ট মেথড
        </h1>
        <p data-aos="fade-up" data-aos-delay="300" className="mt-2 max-w-2xl">
          পেমেন্ট করুন ঝামেলামুক্ত ও নিরাপদে
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-5 lg:mt-16 mt-10">
        <div data-aos="fade-up" data-aos-delay="400" className="w-full mx-auto">
          <PaymentCard
            className="w-[130px] h-[40px]"
            src={ssl}
            number={"Card "}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <PaymentCard
            className="w-[130px] h-[45px]"
            src={bkash}
            number={"01973-173371"}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <PaymentCard
            className="w-[90px] h-[45px]"
            src={roket}
            number={"01973-173371"}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <PaymentCard
            className="w-[130px] h-[45px]"
            src={nogad}
            number={"01973-173371"}
          />
        </div>
      </div>
    </div>
  );
};

const PaymentCard = ({
  src,
  number,
  className,
}: {
  src: any;
  number: string;
  className: string;
}) => {
  return (
    <div className="animate-strock mx-auto w-[280px] h-[150px]  flex justify-center items-center  rounded-xl  overflow-hidden z-20 p-[2px]">
      <div
        style={{ background: "#E3FCEC" }}
        className={`  z-30  w-[276px] mx-auto h-[146px] rounded-lg bg-secondary/60 flex flex-col justify-center items-center  gap-3 hover:scale-105 transition-all duration-300 `}
      >
        <Image
          src={src}
          alt={`${number}`}
          width={130}
          height={50}
          className={` ${className}`}
        />
        <p className="bg-primary text-white text-lg rounded-full w-[120px] py-1 px-1 text-center before:absolute before:right-0 before:-top-2 before:h-[80px]  before:w-6 before:translate-x-20 before:rotate-[20deg]  before:bg-white before:opacity-60 before:blur-[3px] before:duration-700 hover:before:-translate-x-56 relative before:content-[''] overflow-hidden">
          {number}
        </p>
      </div>
    </div>
  );
};
export default Paymentmethod;
