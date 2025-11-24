"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PartnerCompanyFast = () => {
  const items = [
    "রিভিউ ক্লাস",
    "সাপ্তাহিক লাইভ সাপোর্ট ক্লাস",
    "জব প্লেসমেন্ট",
    "ক্লাস রেকর্ড",
    "কমিউনিটি গ্রুপ",
    "One 2 One সাপোর্ট",
    "সার্টিফিকেট",
    "ইন্টার্নশিপ",
    "ফ্রিল্যান্সিং ক্লাস",
    "কোর্স ম্যাটারিয়াল",
    "রিসোর্স ফাইল",
    "ক্যারিয়ার কাউন্সেলিং",
    "আপডেট মডিউল",
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative max-w-[1972px] h-[300px] overflow-hidden flex justify-center items-center mx-auto mt-[100px]"
    >
      {/* MAIN TEXT - FIXED SIZE + CENTER */}
      <Image
        src="/assets/কোর্স-ফ্যাসিলিটিস-main-text.svg"
        width={1399}
        height={202}
        alt="course main text"
        className="absolute z-10 top-2 left-1/2 -translate-x-1/2"
      />

      {/* MARQUEE (Middle Layer) */}
      <div
        className="
          absolute top-[30%]
          w-full 
          lg:h-16 h-10 
          -rotate-[4deg]
          overflow-hidden 
          bg-[linear-gradient(90deg,#29AE48_0%,#327D43_100%)]
          z-20
        "
      >
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {items.map((text, i) => (
            <div
              key={i}
              className="mx-5 px-4 py-2 flex items-center gap-2 text-white text-sm lg:text-base whitespace-nowrap"
            >
              <Star size={16} /> {text}
            </div>
          ))}
        </Marquee>
      </div>

      {/* BORDER TEXT - FIXED SIZE + CENTER (Top layer) */}
      <Image
        src="/assets/কোর্স-ফ্যাসিলিটিস-border-text.svg"
        width={1399}
        height={202}
        alt="course border text"
        className="absolute top-2 z-[30] left-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default PartnerCompanyFast;
