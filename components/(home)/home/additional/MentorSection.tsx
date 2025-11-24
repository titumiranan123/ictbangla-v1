/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import img1 from "@/public/assets/coursesinglepage/asset 4.png";
import img2 from "@/public/assets/coursesinglepage/asset 5.png";
import img3 from "@/public/assets/coursesinglepage/asset 6.png";
import MentorCard from "./MentorCard";
const mentor = [
  {
    image: img1,
    profileLink: "https://www.linkedin.com/in/md-naimul-islam-188a13132/",
    description:
      "ভিডিও ইডিটিং নিয়ে ২০১৭ সাল থেকে ফুল-টাইম ফ্রিল্যান্সার হিসেবে আমি কাজ করছি এবং এখন Fiverr-এ Level 2 Seller হিসেবে আছি। পেশাগত জীবনে আমি Pran RFL-এ মোশন গ্রাফিক্স ও ভিডিও এডিটর হিসেবে কাজ করেছি এবং ঢাকা বিশ্ববিদ্যালয়ের টেলিভিশন, ফিল্ম এবং ফটোগ্রাফি বিভাগ থেকে স্নাতকোত্তর সম্পন্ন করেছি। পাঁচ বছরের বেশি সময় ধরে Instructory, Lead Academy, Learning Bangladesh, UY Lab, এবং ব্যক্তিগত প্রশিক্ষণের মাধ্যমে ১০,০০০+ শিক্ষার্থীকে প্রশিক্ষণ দিয়েছি। এই কোর্সে মোবাইল সিনেমাটোগ্রাফি থেকে শুরু করে Capcut দিয়ে A 2 Z সব কিছুর উপর ক্লাসে আমি থাকছি তোমাদের সাথে।",
  },
  {
    image: img2,
    profileLink: "https://www.linkedin.com/in/ashrafur1230/",
    description:
      "৭ বছরের ডিজিটাল মার্কেটিং ক্যারিয়ারে আমি একদিকে যেমন একজন প্রশিক্ষক, তেমনি অন্যদিকে একজন দক্ষ ইন্ডাস্ট্রি এক্সপার্ট হিসেবে কাজ করেছি। দুই বছরের বেশি সময় ধরে বাংলাদেশ কম্পিউটার কাউন্সিল (BCC) ও জাতীয় যুব উন্নয়ন ইনস্টিটিউটে (NIYD) প্রশিক্ষক হিসেবে কাজ করেছি, যেখানে হাজার হাজার শিক্ষার্থীকে ডিজিটাল মার্কেটিং শিখিয়েছি। পাশাপাশি, গত পাঁচ বছর ধরে বিভিন্ন ই-কমার্স, টিভি মিডিয়া, কর্পোরেট এজেন্সি ইন্ডাস্ট্রিতে কাজের মাধ্যমে আমি প্র্যাকটিক্যাল অভিজ্ঞতা অর্জন করেছি ও নিজের একটি দক্ষ টীম নিয়ে আমার এজেন্সীতে সময় দিচ্ছি। এই অভিজ্ঞতার আলোকে এই কোর্সে ফেসবুক ও ইউটিউবের উপর স্পেশাল ক্লাসে আমি থাকছি।",
  },
  {
    image: img3,
    profileLink: "https://www.behance.net/mdabsar",
    description:
      "গ্রাফিক ডিজাইনার হিসেবে পাঁচ বছরের অভিজ্ঞতা সহ, প্রশিক্ষক হিসেবে গত দুই বছরেরও বেশি সময়ে UY Lab এবং ব্যক্তিগত প্রশিক্ষণের মাধ্যমে ৩,০০০+ শিক্ষার্থীকে প্রশিক্ষণ দিয়েছি। বর্তমানে Musa Group এ গ্রাফিক ডিজাইনার হিসেবে কর্মরত এবং Fiverr, Freepik,Adobe stock সহ বেশ কয়েকটি মার্কেট প্লেসে-এ সক্রিয়ভাবে ফ্রিল্যান্সিং করছি। পূর্বে পেশাগত জীবনে Azeen,Prossod Prokashon, Bangladesh Vascular Centre সহ বিভিন্ন প্রতিষ্ঠানে কাজ করেছি। এই কোর্সে Ai দিয়ে ভিডিও কে আরও নেক্সট লেভেলে নিতে আমি ক্লাসে থাকছি।",
  },
];

const MentorSection = () => {
  return (
    <div className="lg:mt-30 mt-14">
      <h2 className="font-[600]">
        দেখে নিন কাদের হাত ধরে শিখবেন{" "}
        <span className="bg-red-500 text-white px-2 rounded-lg">কনটেন্ট</span>{" "}
        ক্রিয়েশন
      </h2>
      <div className="mt-16">
        {mentor.map((mt: any, idx: number) => (
          <MentorCard key={idx} data={mt} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
