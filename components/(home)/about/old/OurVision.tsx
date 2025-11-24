import React from "react";
import vision from "@/public/assets/about_images/vision.jpg";
import Image from "next/image";
import { RiFlashlightLine } from "react-icons/ri";
const OurVision = () => {
  return (
    <div className="container flex justify-between items-center lg:gap-[147px] gap-[40px] lg:mt-[120px] mt-[40px] lg:flex-row flex-col">
      <Image
      data-aos="fade-up"
            data-aos-delay="300"
        className="flex-1 lg:w-[686px] lg:h-[550px] rounded-xl"
        src={vision}
        alt="vision"
        priority
        decoding="async"
      />
      <div className="lg:w-[576px] flex gap-4 flex-col">
        <button data-aos="fade-up"
            data-aos-delay="300" className="flex items-center justify-center lg:justify-start gap-2 bg-primary text-white px-4 py-2 rounded-full md:w-[140px] w-[130px] md:text-[16px] text-sm">
          <RiFlashlightLine /> <span>Our Vision</span>
        </button>
        <h1 data-aos="fade-up"
            data-aos-delay="400" className="capitalize">
          বাংলাদেশকে গ্লোবাল ডিজিটাল ইকোনমিতে সফল করা 
        </h1>
        <p data-aos="fade-up"
            data-aos-delay="500">
          আমরা বিশ্বাস করি প্রতিটি বাংলাদেশী তরুণ-তরুণীর মধ্যে রয়েছে অসীম সম্ভাবনা। ICT Bangla সেই সম্ভাবনাকে বাস্তবে রূপ দিতে প্রতিদিন কাজ করে যাচ্ছে। আমাদের লক্ষ্য হলো দেশের প্রতিটি কোণে দক্ষতাভিত্তিক শিক্ষা পৌঁছে দেওয়া এবং কর্মসংস্থানের সুযোগ সৃষ্টি করা।
        </p>
        <ul className="list-disc ms-4">
          <li data-aos="fade-up"
            data-aos-delay="600"> ইন্ডাস্ট্রি এক্সপার্ট নেতৃত্বে আধুনিক ডিজিটাল স্কিল শিক্ষার অভিজ্ঞতা ।</li>
          <li data-aos="fade-up"
            data-aos-delay="700">ট্র্যাডিশনাল শিক্ষার পাশাপাশি ফিউচার ডিমান্ডিং স্কিল ডেভেলপমেন্ট । </li>
          <li data-aos="fade-up"
            data-aos-delay="700">আত্মনির্ভরশীল উদ্যোক্তা হিসেবে নিজেকে প্রতিষ্ঠিত করা ।</li>
          <li data-aos="fade-up"
            data-aos-delay="700">সকল আর্থিক স্তরের জন্য সাশ্রয়ী ডিজিটাল শিক্ষার সুযোগ ।</li>
        </ul>
      </div>
    </div>
  );
};

export default OurVision;
