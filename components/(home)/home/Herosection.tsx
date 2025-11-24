/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Button from "../shared/Button";
import bg from "@/public/assets/hero-bg.png";
import RadioWaves from "@/app/(public)/Wave";
import Counter from "./Counter";
import HeaderCarsoul from "./HeaderCarsoul";
import axios from "axios";
import HeaderButton from "./HeaderButton";
const Herosection = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=FEATURES_COURSES`
  );

  return (
    <>
      <div
        className="herosection relative md:min-h-[1200px] lg:min-h-[680px] min-h-[650px] h-auto  overflow-hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: "no-repeat",
          padding: "34px  0 0px 0",
        }}
      >
        <div
          style={{ zIndex: 99 }}
          className="container z-30 relative  responsive-row  gap-6 overflow-hidden "
        >
          <div className="lg:w-1/2  flex w-full flex-col gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-[165px] rounded-full h-[35px] text-[16px] border border-slate-300 flex items-center  justify-between px-3 gap-4 "
            >
              <span className="h-3 w-3 font-[600] bg-red-600 rounded-full flex justify-center items-center live"></span>{" "}
              <span className="font-[600]">স্কিল শিখুন</span>
              <span className="text-red-500 -ms-[10px] font-[600] ">লাইভে</span>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className=" lg:text-[65px] font-[600] lg:leading-[80px] text-[28px] leading-[44px]"
            >
              স্মার্ট লার্নিং এখন আপনার হাতের মুঠোয়
            </h1>

            <p data-aos="fade-up" data-aos-delay="300">
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
                className="w-[200px] bg-gradient-to-r from-[#099E47] to-[#29AE48] h-[58px] btn-primary text-[18px] "
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
                  <Counter stat={stat} />
                  <p className="text-[15px] lg:text-[16px] lg:leading-[26px] font-[400] text-gray-700">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeaderCarsoul data={result.data} />
        </div>
        <div className="lg:absolute z-0 hidden md:block   bottom-7 left-[50%]">
          <RadioWaves />
        </div>
        <div
          className="lg:block md:hidden hidden"
          style={{ zIndex: 999999999 }}
        >
          {/* <Sidebar isHeroVisible={isHeroVisible} /> */}
        </div>
      </div>
    </>
  );
};

export default Herosection;
