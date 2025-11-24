"use client";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const PartnerCompanyFast = () => {
  const items = [
    'রিভিউ ক্লাস',
    'সাপ্তাহিক লাইভ সাপোর্ট ক্লাস',
    'জব প্লেসমেন্ট',
    'ক্লাস রেকর্ড',
    'কমিউনিটি গ্রুপ',
    'One 2 One সাপোর্ট',
    'সার্টিফিকেট',
    'ইন্টার্নশিপ',
    'ফ্রিল্যান্সিং ক্লাস',
    'কোর্স ম্যাটারিয়াল',
    'রিসোর্স ফাইল',
    'ক্যারিয়ার কাউন্সেলিং',
    'আপডেট মডিউল'
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="300" className="relative md:h-[200px] section  h-[120px]  overflow-hidden flex justify-center items-center">
    <h1 className="lg:text-[180px] font-[900] lg:block  opacity-10 lg:mt-10  text-center text-[54px] leading-[100px] lg:leading-[240px]">কোর্স ফেসিলিটিস</h1>
      <div className="w-full absolute -top-4  lg:h-16 h-10 lg:-rotate-[2.2deg] -rotate-[5.2deg] section lg:mb-10 overflow-hidden bg-gradient-to-r from-[#099E47] to-[#29AE48] flex justify-center items-center">
      <Marquee
        speed={50}
        pauseOnHover={true}
        gradient={false}
      >
        {items.map((text, index) => (
          <div
            key={index}
            className="mx-5 px-4 py-2 flex  justify-center items-center gap-2 rounded shadow  text-white"
            style={{ minWidth: '100px', textAlign: 'center' }}
          >
           <FaStar /> {text}
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default PartnerCompanyFast;