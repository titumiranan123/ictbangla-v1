import Accordion from "@/components/(instructor)/others/Accordion";
import React from "react";
import home from "@/public/assets/icon/house-window.svg";
import Image from "next/image";
import search from "@/public/assets/icon/search.svg";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import Link from "next/link";
const accordionItems = [
  {
    title: "High-Quality Video Lessons",
    content: "This is the content for item 1.",
  },
  {
    title: "Personalized Feedack and Support",
    content: "This is the content for item 2.",
  },
  {
    title: "Access to Course Materials and Resources",
    content: "This is the content for item 3.",
  },
  {
    title: "Can I distribute this product?",
    content: "This is the content for item 1.",
  },
  {
    title: "What is your refund policy?",
    content:
      "Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt laboredolore magna aliquaenim ad minim eniam.",
  },
];
const HelpCenter = () => {
  return (
    <div>
      <div className="h-[340px] bg-secondary pt-10 mb-10">
        <div className="container flex justify-center items-center flex-col">
          <div className="flex gap-1  text-center items-center   text-black">
            <Link href={"/"}>
              <Image
                className="w-[14px] h-[14px]"
                src={home}
                alt="home"
                priority
                decoding="async"
              />
            </Link>
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            Pages{" "}
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <Link href={"/help-center"}>Help</Link>
          </div>
          <h1 className="md:text-[20px] text-[18px]  mt-[40px] font-[600] capitalize">
            Help Center
          </h1>
          <p className="font-[400] lg:text-[16px] lg:leading-[20px] mt-[5px] text-[14px]  text-center">
            We&apos;re on a mission to deliver engaging, curated courses at a
            reasonable price.
          </p>
          <div className="md:h-[78px] h-[50px] flex justify-between items-center px-1 bg-white rounded-full lg:w-[900px] w-full mt-8 gap-3">
            <input
              className="px-4 md:text-[18px] text-[14px]  w-[90%]"
              type="text"
              placeholder="Cancellation,meeting point, etc."
            />
            <button className="flex bg-black justify-center items-center md:h-[70px] md:w-[70px] h-[50px] w-[50px] rounded-full">
              <Image
                className="md:w-6 md:h-6 w-4 h-4"
                src={search ?? ""}
                alt="search"
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="flex justify-center items-center flex-col gap-2 mt-[120px] ">
          <h1 className="text-[36px] font-bold leading-[50px] cardo  text-center">
            Frequently Asked <span className=" text-primary ">Questions</span>
          </h1>
          <p className="  text-[15px] font-[400px]">
            Here are the questions about this template.
          </p>
        </div>
        <div className="w-full   mt-20 lg:p-14 p-4 max-w-[900px] h-auto mx-auto  bg-secondary mb-10 rounded-[12px]">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
