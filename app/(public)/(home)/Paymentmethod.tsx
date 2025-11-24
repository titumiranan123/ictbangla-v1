/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import nogad from "@/public/assets/payment/nogad.png";
import bkash from "@/public/assets/payment/bkash.png";
import roket from "@/public/assets/payment/rocket.png";
import ssl from "@/public/assets/payment/ssl.png";
import Image from "next/image";
const Paymentmethod = () => {
  return (
    <div className="mt-[100px] container">
      <div className="flex flex-col justify-center items-center text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[48px] leading-[60px] text-black-color font-bold"
        >
          পেমেন্ট মেথড
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-2 max-w-2xl text-lg lg:text-xl leading-[20px] font-medium text-[#8A8A8A]"
        >
          পেমেন্ট করুন ঝামেলামুক্ত ও নিরাপদে
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-5 lg:mt-16 mt-10">
        <div data-aos="fade-up" data-aos-delay="400" className="w-full mx-auto">
          <PaymentCard
            className="w-[130px] h-[40px]"
            src={ssl}
            key={3}
            number={"Card "}
            bgcolor="#CEF6FF"
            color=" linear-gradient(64.45deg, #4DABC0 7.02%, #CEF6FF 60.48%) "
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <PaymentCard
            key={2}
            className="w-[130px] h-[45px] "
            src={bkash}
            number={"01973-173371"}
            bgcolor="#FFDDDD"
            color="linear-gradient(64.45deg, #AD6161 7.02%, #FFDDDD 60.48%)"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <PaymentCard
            key={1}
            className="w-[90px] h-[45px]"
            src={roket}
            number={"01973-173371"}
            color="linear-gradient(64.45deg, #7B6EBF 7.02%, #DED8FF 60.48%)"
            bgcolor="#DED8FF"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <PaymentCard
            className="w-[130px] h-[45px]"
            src={nogad}
            number={"01973-173371"}
            color="linear-gradient(102.15deg, #FFB281 8.91%, rgba(255, 178, 128, 0) 70.39%)"
            bgcolor="#FFEEE3"
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
  color,
  bgcolor,
}: {
  src: any;
  number: string;
  className: string;
  color: string;
  bgcolor?: string;
}) => {
  return (
    <div
      className="animate-strock hover:scale-105 duration-400 transition-all mx-auto w-[280px] h-[150px] flex justify-center items-center rounded-[16px] overflow-hidden z-20 p-[2px] cursor-pointer "
      style={
        {
          "--card-color": color,
          "--card-bg": bgcolor,
        } as React.CSSProperties
      }
    >
      <style>
        {`
          @keyframes spin-slow {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .animate-strock {
            position: relative;
            background: var(--card-bg);
          }
          .animate-strock::after {
            position: absolute;
            content: '';
            width: 350px;
            height: 350px;
            background: var(--card-color);
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>

      <div
        style={{ background: bgcolor }}
        className="z-30 w-[276px] mx-auto h-[146px] rounded-[16px] bg-secondary/60 flex flex-col justify-center items-center gap-3  transition-all duration-300"
      >
        <Image
          src={src}
          alt={`${number}`}
          width={130}
          height={50}
          className={className}
        />
        <p className="bg-primary text-white text-lg rounded-full w-[160px] py-1 px-1 text-center relative overflow-hidden">
          {number}
        </p>
      </div>
    </div>
  );
};

export default Paymentmethod;
