"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CustomInputField from "./customInputField";
import IconImage from "../../(additional pages)/about-us/iconImages";

const Consultencypop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mounted, setMounted] = useState(false);

  // Set mounted to true when component mounts on client
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const ModalContent = () => (
    <div
      className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="max-w-[980px] h-[485px] bg-[#F3F4F6] rounded-xl p-8 relative flex justify-between mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Content */}
        <div className="flex-1 pr-8">
          <h2 className="text-[32px] font-[600] text-primary w-full">
            আজই আপনার বিনামূল্যে পরামর্শ নিন
          </h2>
          <p className="font-[500] text-[18px] text-text-secondary w-full md:w-[90%] mt-2">
            সাফল্যের দিকে প্রথম পদক্ষেপ নিন, আজই আপনার বিনামূল্যে পরামর্শের
            সময়সূচী নির্ধারণ করুন
          </p>
          <IconImage
            fileName="login_bg_icon.svg"
            className="!h-[322px] !w-full absolute bottom-[-60px] left-0"
          />
          <div className="flex items-center absolute bottom-8 left-8">
            <div className="flex items-center">
              <Image
                src={"/assets/user-1.png"}
                alt="user-1"
                width={40}
                height={40}
                className="border-2 border-white rounded-full"
              />
              <Image
                src={"/assets/user-2.png"}
                alt="user-2"
                width={40}
                height={40}
                className="-translate-x-3 border-2 border-white rounded-full"
              />
              <Image
                src={"/assets/user-2.png"}
                alt="user-3"
                width={40}
                height={40}
                className="-translate-x-6 border-2 border-white rounded-full"
              />
            </div>
            <p className="text-[16px] text-text-secondary ml-2">
              ১৫০০+ শিক্ষার্থী বিনামূল্যে পরামর্শ পেয়েছেন
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[331px] h-[432px] p-6 rounded-xl bg-white z-10">
          <h4 className="text-xl lg:text-2xl font-bold text-[#29AE48]">
            কল বুক করুন
          </h4>

          <div className="mt-5 space-y-4">
            <CustomInputField
              value={name}
              setValue={setName}
              name={"name"}
              label={"সম্পূর্ণ নাম"}
              showLabel
              placeholder="সম্পূর্ণ নাম বসান"
            />
            <CustomInputField
              value={email}
              setValue={setEmail}
              name={"email"}
              label={"ইমেইল"}
              showLabel
              placeholder="সম্পূর্ণ ইমেইল বসান"
            />
            <CustomInputField
              value={phone}
              setValue={setPhone}
              name={"phone"}
              label={"মোবাইল নম্বর"}
              isPhoneNumberField={true}
              showLabel
              placeholder="মোবাইল নম্বর বসান"
            />
          </div>

          <button className="w-full button-primary mt-6 py-3 px-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            এখনই সময়সূচী নির্ধারণ করুন
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="py-3 px-4 bg-primary rounded-lg flex justify-between items-center text-white mt-10 gap-2 hover:bg-primary/90 transition-colors"
      >
        <span className="font-bold">Free Career Consultancy</span>
        <Image
          src={"/assets/course/support_agent.png"}
          width={24}
          height={24}
          alt="support agent"
        />
      </button>

      {/* Render portal if mounted and modal is open */}
      {mounted && isOpen && createPortal(<ModalContent />, document.body)}
    </div>
  );
};

export default Consultencypop;
