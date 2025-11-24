/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Button from "./Button";
import HeaderButton from "./HeaderButton";
import Image from "next/image";
const Herosection = async () => {
  return (
    <>
      <Image
        src={"/assets/headerelips.png"}
        alt="he"
        width={712}
        height={712}
        className="absolute  -top-[220px] -left-[340px] -rotate-[22deg]"
      />
      <div className=" lg:h-[700px] h-full overflow-hidden bg  ">
        <div
          // style={{ zIndex: 99 }}
          className="container z-30 relative  flex justify-between items-center  gap-6 overflow-hidden  lg:mt-[72px] "
        >
          <style>
            {`
           .ringbg {
            border: 20px solid;
            border-image: linear-gradient(336deg, #C1EFCC, #FFFFFF) 1;
            border-radius: 50%;
            width: 200px;
            height: 200px;
          }
          .bg {
            background: linear-gradient(360deg, #CFFAD9 4.75%, #FFFFFF 100%);
            }
          `}
          </style>
          <div className="xl:max-w-[834px] md:max-w-[600px]   flex w-full flex-col gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-[161px] rounded-full h-[36px]  border border-slate-300 flex items-center  justify-between px-3 gap-1 text-[16px] font-[700]"
            >
              <span className="!h-3 !w-3 font-[600] bg-red-600 rounded-full flex justify-center items-center live"></span>{" "}
              <div className="flex gap-1">
                {" "}
                <span className="text-nowrap">স্কিল শিখুন</span>
                <span className="text-red-500">লাইভে</span>
              </div>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className=" text-5xl lg:text-[50px] xl:text-[72px]  font-bold text-[#313131] xl:leading-[80px] lg:leading-[60px]"
            >
              স্মার্ট লার্নিং এখন আপনার হাতের মুঠোয়
            </h1>

            <p
              className="xl:text-xl lg:text-[16px] xl:leading-[26px] lg:leading-[22.5px] font-medium text-[#8A8A8A]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              বর্তমান সময়ে ক্যারিয়ার ডেভেলপ করতে প্রয়োজন সময়োপযোগী দক্ষতা। এই
              প্ল্যাটফর্মে নিজের সুবিধামতো সময়ে ঘরে বসে, অফিসে কিংবা বাইরে
              আন্তর্জাতিক মানের কোর্স করে ক্যারিয়ার গড়া বা ফ্রিল্যান্সিং করা
              সম্ভব।
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex lg:flex-row  lg:items-center flex-col gap-5"
            >
              <Button
                hoverColor=""
                href="/courses"
                isIcon={false}
                title="চলুন শুরু করি"
                className="w-[233px] bg-gradient-to-r from-[#099E47] to-[#29AE48] h-[63px] bg-[#1cab55] hover:bg-[#077c1f] text-white rounded-[4px] text-[18px] leading-[23px] font-[700] px-4 py-3 inline-flex items-center justify-center  shadow-[0px_6px_1px_#127239]  active:translate-y-[2px] active:shadow-none transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
              />
              <HeaderButton />
            </div>
            <div className="grid grid-cols-2 max-w-[350px] ">
              {[
                { title: "মোট ফলোয়ার", sub_title: "100", icon: "K" },
                {
                  title: "মোট রিভিউ",
                  sub_title: "200",
                  icon: "+",
                },
              ].map((stat: any, i: number) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={500 + i * 100}
                  className="flex mt-2 flex-col relative ps-4 after:w-[5px] after:h-full after:bg-primary after:absolute after:left-0 after:rounded-full after:top-0"
                >
                  <CounterNumber
                    number={Number(stat.sub_title)}
                    title={stat.title}
                    icon={stat.icon}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 mx-auto  flex justify-start items-center  w-full relative  potti">
            <Image
              src={"/assets/headercircle.png"}
              alt="headercircle"
              width={363}
              height={363}
              className="2xl:translate-x-[170px] xl:translate-x-4 translate-x-16 -translate-y-5"
            />
            <div className="flex justify-end items-center   absolute -top-20 2xl:-right-28 xl:-right-[105px]  lg:-right-[74px] z-10   ">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-TtxUA15mMzDW4Ui5dsxJ0vi2/"
                frameBorder="0"
                width="560"
                height="450"
                className="z-20   "
              ></iframe>
            </div>
          </div>
        </div>

        <style>{`
              .potti:after{
                content: "";
                position: absolute;
                width: 11rem; 
                height: 2.5rem; 
                background: linear-gradient(180deg, #DEFCE5 0%, #D4FBDD 100%);
                bottom: 11px;   
                right: -7.5rem;  
                z-index: 40;  
              }
              .headerpolygon:after {
                position: absolute;
                content: "";
                bottom: -154px;
                left: 0;
                right: 0;
                border-top: 1px dashed #16a34a;
                height: 124px;
                background-color: white;
                clip-path: polygon(0 66.39%, 100% 0, 100% 100%, 0 100%);
                z-index: 5;
            }
        `}</style>
        <div className="lg:block md:hidden hidden relative headerpolygon"></div>
      </div>
    </>
  );
};
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

const CounterNumber = ({
  title,
  number,
  icon,
}: {
  title: string;
  number: number;
  icon: string;
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 text-primary justify-start">
        <CountingNumber
          number={number}
          inView={true}
          className="text-[32px] !font-[700] leading-[40px] text-center english-text text-[#313131]"
          transition={{ stiffness: 100, damping: 30 }}
        />
        <p className="text-[32px] font-bold english-text text-[#313131]">
          {icon}
        </p>
      </div>
      <p className="text-[18px] leading-[23px] font-[700] text-[#313131]">
        {title}
      </p>
    </div>
  );
};

export default Herosection;
