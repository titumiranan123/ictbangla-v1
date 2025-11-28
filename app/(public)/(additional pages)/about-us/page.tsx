import Image from "next/image";
import React from "react";
import Aboutcomunity from "./Aboutcomunity";
import AboutHeader from "./AboutHeader";
import Aboutmedia from "./Aboutmedia";
import Timeline from "./Abouttimeline";
import CertificateSection from "./Certificatesection";
import HomeTestimonials from "./HomeTestimonial";
import Ourpatners from "./Ourpatners";
import MobileInfluncerTestimonial from "./MobileInfluncerTestimonial";

const Aboutus = () => {
  return (
    <div className="lg:mt-10 mt-8">
      <AboutHeader />
      <div className="hidden lg:block">
        <HomeTestimonials />
      </div>
      <div className="lg:hidden block">
        <MobileInfluncerTestimonial />
      </div>
      <Ourpatners />
      {/* <OurGoal /> */}

      <div className="mt-20 container">
        <h2 className=" text-2xl md:text-4xl lg:text-[48px]  text-primary font-bold text-center">
          দক্ষতার যাত্রা, <br className="md:hidden" /> ICTBangla-তে কেন ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8 mt-10">
          <div className="text-center">
            <h4 className="text-xl font-bold text-black-color">
              দেশসেরা ইন্সট্রাক্টরদের গাইডেন্স
            </h4>
            <p className="text-lg mt-2 text-text-neutral">
              বাস্তব অভিজ্ঞতা সম্পন্ন প্রশিক্ষকদের সরাসরি গাইডলাইন ও হাতে-কলমে
              দক্ষতার নিশ্চয়তা
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-black-color">
              কর্পোরেট বা ফ্রিল্যান্সিং ডিমান্ডিং কোর্স
            </h4>
            <p className="text-lg mt-2 text-text-neutral">
              জব মার্কেট বা ফ্রিল্যান্সিং প্ল্যাটফর্মের চাহিদা অনুযায়ী
              প্রজেক্ট-ভিত্তিক স্কিল ডেভেলপমেন্ট
            </p>
          </div>

          <div className="text-center md:col-span-2 lg:col-span-1">
            <h4 className="text-xl font-bold text-black-color">
              প্রফেশনাল নেটওয়ার্কিং
            </h4>
            <p className="text-lg mt-2 text-text-neutral">
              লার্নিং ও ক্যারিয়ার গ্রোথে সহায়ক কমিউনিটি যেখানে স্টুডেন্ট টু
              প্রফেশনাল সব এক জায়গায়
            </p>
          </div>
        </div>
      </div>

      <CertificateSection />
      <Aboutmedia />
      <Timeline />
      <Aboutcomunity />

      <div className="container sectionGap pb-20 mt-10 lg:mt-30">
        <Image
          src={"/assets/aboutlocation.svg"}
          alt={"about"}
          width={1240}
          height={450}
        />
      </div>
    </div>
  );
};

export default Aboutus;
