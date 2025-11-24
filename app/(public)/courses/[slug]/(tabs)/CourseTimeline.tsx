"use client";
import React from "react";

interface TimelineItem {
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "ইউজার রিসার্চ",
    description: "ইউজারদের প্রয়োজনগুলো বুঝে এবং গবেষণা করে নেয়া হয়।",
  },
  {
    title: "ডিজাইন ফাউন্ডেশন",
    description:
      "রঙের থিম, টাইপোগ্রাফি, এবং ভিজ্যুয়াল ব্যালেন্স নির্ধারণ করা হয়।",
  },
  {
    title: "ইনফরমেশন আর্কিটেকচার (IA)",
    description: "ইউজারদের জন্য তথ্য সহজভাবে সাজানো হয়।",
  },
  {
    title: "ওয়্যারফ্রেমিং & প্রোটোটাইপিং",
    description: "প্রথম ভিজ্যুয়াল কনসেপ্ট তৈরি করে আইডিয়াগুলো পরীক্ষা করা হয়।",
  },
  {
    title: "ইন্টারফেস ডিজাইন",
    description: "UI ডিজাইনের মাধ্যমে ভিজ্যুয়াল ইন্টারফেস তৈরি করা হয়।",
  },
  {
    title: "ভিজ্যুয়াল ডিজাইন",
    description: "রঙ, আইকন, এবং ইমেজ ব্যবহার করে ডিজাইনকে আকর্ষণীয় করা হয়।",
  },
  {
    title: "ইউজার টেস্টিং",
    description: "ইউজারদের দিয়ে পরীক্ষা করে ফাইনাল ফিডব্যাক নেয়া হয়।",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="bg-neutral py-10 rounded-[24px]">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Center vertical line */}
        <div className="absolute lg:block hidden left-1/2 transform -translate-x-1/2 h-full border-[2px] border-primary" />
        <div className="space-y-2">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 !== 0;
            return (
              <div
                key={index}
                className={`flex items-center justify-between w-full relative  gap-2 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Box */}
                <div
                  className={`md:w-5/12 w-[95%]  bg-white border border-dashed border-primary rounded-md px-6 py-4 shadow-sm`}
                >
                  <h3 className="text-primary text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Circle connector */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white border-[3px] border-primary z-10"></div>
                <div className="w-5/12 lg:block hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
