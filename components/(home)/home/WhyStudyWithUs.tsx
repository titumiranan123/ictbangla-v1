/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import instructor from "@/public/assets/icon/instructoricon.svg";
import topNotch from "@/public/assets/icon/TopNotchCourse.svg";
import globalComunity from "@/public/assets/icon/globalcomunity.svg";
const WhyStudyWithUs = () => {
  return (
    <div className="section container">
      <div className="center-content gap-2">
        <h1 data-aos="fade-up" data-aos-delay="400">
          দক্ষতার যাত্রা, ICTBangla-তে কেন ?
        </h1>
        {/* <p data-aos="fade-up" data-aos-delay="500">
          Become a valuable expert with Upskill
        </p> */}
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="responsive-row justify-around mt-20 gap-10"
      >
        {[
          {
            image: instructor,
            title: "দেশসেরা ইন্সট্রাক্টরদের গাইডেন্স",
            description:
              "বাস্তব অভিজ্ঞতা সম্পন্ন প্রশিক্ষকদের সরাসরি গাইডলাইন ও হাতে-কলমে দক্ষতার নিশ্চয়তা",
          },
          {
            image: topNotch,
            title: "কর্পোরেট বা ফ্রিল্যান্সিং ডিমান্ডিং কোর্স",
            description:
              "জব মার্কেট বা ফ্রিল্যান্সিং প্ল্যাটফর্মের চাহিদা অনুযায়ী প্রজেক্ট-ভিত্তিক স্কিল ডেভেলপমেন্ট",
          },
          {
            image: globalComunity,
            title: "প্রফেশনাল নেটওয়ার্কিং",
            description:
              "লার্নিং ও ক্যারিয়ার গ্রোথে সহায়ক কমিউনিটি যেখানে স্টুডেন্ট টু প্রফেশনাল সব এক জায়গায়",
          },
        ].map((item, index) => (
          <ComponentCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const ComponentCard = (data: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex-col-center gap-10">
      <div className="w-[60px] h-[60px] flex justify-center items-center relative after:absolute after:w-[50px] after:h-[50px] after:bg-secondary after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:top-[80%] after:left-[50%] after:rounded-full after:-z-10 z-10 after:content-['']">
        <Image
          src={data?.image ?? ""}
          alt="Instructor"
          className=" w-[50px] h-[50px] object-cover rounded-full z-20"
        />
      </div>

      <div className="lg:w-[400px] w-full">
        <h2 className="text-center">{data.title}</h2>
        <p className="text-center mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default WhyStudyWithUs;
