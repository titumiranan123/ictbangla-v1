import React from "react";
import Button from "../shared/Button";
import HeaderCarsoul from "../home/HeaderCarsoul";
import HeaderButton from "../home/HeaderButton";
import axios from "axios";

const MobileHeader = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=FEATURES_COURSES`
  );
  console.log(result.data);
  return (
    <div className="herosection relative md:min-h-[1200px] lg:min-h-[680px] min-h-[850px] h-auto   overflow-hidden bg-[#D9FDE5] pt-10">
      <div
        style={{ zIndex: 99 }}
        className="container z-30 relative  responsive-row  gap-6 overflow-hidden "
      >
        <div className="lg:w-1/2  flex w-full flex-col gap-4">
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
            className=" lg:text-[65px] font-[600] lg:leading-[80px] text-[25px] leading-[44px]"
          >
            স্মার্ট লার্নিং এখন আপনার হাতের মুঠোয়
          </h1>

          {/* <p data-aos="fade-up" className="hidden" data-aos-delay="300">
            বর্তমান সময়ে ক্যারিয়ার ডেভেলপ করতে প্রয়োজন সময়োপযোগী দক্ষতা। এই
            প্ল্যাটফর্মে নিজের সুবিধামতো সময়ে ঘরে বসে, অফিসে কিংবা বাইরে
            আন্তর্জাতিক মানের কোর্স করে ক্যারিয়ার গড়া বা ফ্রিল্যান্সিং করা
            সম্ভব।
          </p> */}

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex   lg:items-center  gap-5"
          >
            <Button
              hoverColor=""
              href="/courses"
              isIcon={false}
              title="চলুন শুরু করি"
              className="w-[160px] bg-gradient-to-r from-[#099E47] to-[#29AE48] h-[48px] btn-primary text-[18px] "
            />
            <HeaderButton />
          </div>
          {/* <div className="lg:w-[35%]  relative  w-full lg:h-[530px] h-[520px]    md:hidden block"> */}
          <HeaderCarsoul data={result?.data} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
