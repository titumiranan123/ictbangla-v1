"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import bgimage from "@/public/assets/about_images/aboutbanner.png";
import { useSession } from "next-auth/react";
import Link from "next/link";
const Joinnow = () => {
  const {
    data,
    status,
  }: { data: any; status: "loading" | "authenticated" | "unauthenticated" } =
    useSession();
  return (
    <div
      style={{
        backgroundImage: `url(${bgimage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
      className="container section rounded-[12px]"
    >
      <div className="joinnow flex justify-between md:flex-row flex-col w-full h-[358px] lg:px-[120px] lg:py-[72px] px-2 py-10 rounded-lg text-white">
        <div className="lg:w-[623px] w-full  flex flex-col gap-4">
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-white ">
          জ্ঞানের আলোয় উদ্ভাসিত হোন - আপনার শেখার যাত্রা শুরু হোক এখানে!
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-white">
          নতুন দক্ষতা শেখা কঠিন—কিন্তু Signal-এর সাথে তা সহজ! আমাদের অ্যাসেসমেন্ট আপনার দক্ষতা ও উন্নতির ক্ষেত্র চিহ্নিত করে ব্যক্তিগত শেখার পথ তৈরি করে। আজই শুরু করুন এবং আরও সহজভাবে শিখুন!
          </p>
        </div>
        <Link
          href={
            status === "authenticated" ? data?.user?.role === "USER"
              ? "/student-dashboard"
              : "/instructor-dashboard" :"/sign-in"
          }
          data-aos="fade-up"
          data-aos-delay="100"
          className="capitalize text-white flex justify-center items-center   md:w-[260px] md:h-[54px] w-[190px] h-[48px] md:text-[16px] md:leading-[28px] text-[14px] leading-[24px] bg-primary hover:scale-105 mt-auto rounded-md transition-all duration-300 ease-in-out"
        >
          get started now
        </Link>
      </div>
    </div>
  );
};

export default Joinnow;
