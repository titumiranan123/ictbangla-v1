import Image from "next/image";
import React from "react";
const CourseLearningSection = () => {
  const goLearn = [
    {
      image: "/assets/coursesinglepage/asset-7.png",
      title: "CapCut Hidden Tips",
      description:
        "CapCut-এর বেসিক থেকে অ্যাডভান্স টুলস এবং ফিচারগুলো শেখানো হবে,, যা একজন প্রফেশনাল ভিডিও এডিটর হয়ে ওঠার জন্য যথেষ্ট। এছাড়া, CapCut-এর কিছু গোপন ট্রিক এবং টিপস শিখবেন, যা আপনাকে অন্যদের থেকে এগিয়ে রাখবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-8.png",
      title: "Learn CapCut, Earn Money",
      description:
        "নতুনদের কথা মাথায় রেখে এমনভাবে কোর্সটি তৈরি করা হয়েছে যাতে সহজে এবং দ্রুত শিখতে পারেন। CapCut-এর অ্যাডভান্স ফিচার শিখে পেশাদার ভিডিও এডিটর হয়ে কিভাবে আয় করতে পারেন তা শিখানো হবে। এছাড়া ফাইবার মার্কেট প্লেইস থেকে কিভাবে আয় করা যায়, তার উপর বিশেষ ক্লাস থাকবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-9.png",
      title: "Ai Content Creation with Cinetomagraphy",
      description:
        " মোবাইলের ক্যামেরা ব্যবহার করে কিভাবে প্রো মুড অন রেখে প্রফেশনাল ভিডিও তৈরি করা যায় তা দেখানো হবে। একই সাথে এই রিয়েল প্রোজেক্ট গুলো ক্যাপকাট দিয়ে ইডিট করে তা একটি পরিপুর্ণ আকর্ষণীয় ভিডিও বানাতে পারবেন।",
    },
    {
      image: "/assets/coursesinglepage/asset-10.png",
      title: "Video Cutting and Audio Editing",
      description:
        "কীভাবে ভিডিওকে সঠিকভাবে কাটিং এবং টাইমলাইনে সাজিয়ে পেশাদার মানের আউটপুট তৈরি করবেন তা শিখবেন। সাথে ভিডিওর সাথে সিঙ্ক করা, অডিও ক্লিন করা এবং ব্যাকগ্রাউন্ড মিউজিক এড করা শেখানো হবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-11.png",
      title: "AI Voice Over and Storytelling",
      description:
        "CapCut এবং অন্যান্য টুল ব্যবহার করে AI দিয়ে ভয়েসওভার এবং স্ক্রিপ্ট রাইটিং শিখবেন। একই সাথে একটি ভিডিও তৈরী করার আগে সেই ভিডিও তে কিভাবে আবেগ, মূল থিম ফুটে তোলা যায়, তাই স্টোরিটেলিং শিখানো হবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-12.png",
      title: "Real Live Project And Editing Sessions",
      description:
        "৪টি রিয়েল লাইফ প্রোজেক্ট থাকবে, যেখানে ক্লায়েন্ট এর কাজ গুলো সরাসরি করিয়ে দেখানো হবে ও এসাইনমেন্ট এর জন্য প্রয়োজনীয় রিসোর্স ও ম্যাটারিয়াল ফাইল দেওয়া হবে। তার সাথে বায়ারসের সাথে কমিউনিকেশনের স্পেশাল টিপস ও থাকবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-13.png",
      title: "5x Speeding Edit with CapCut",
      description:
        "CapCut-এর স্মার্ট ফিচার ব্যবহার করে ৫ গুণ দ্রুত ভিডিও এডিট করার কৌশল শিখবেন। এডিটিং স্পিড বাড়াতে কিভাবে শর্টকাট, ওয়ার্কফ্লো অপ্টিমাইজ করবেন এবং কন্টেন্ট প্ল্যানিং কৌশলতা অবলম্বন করবেন এই কোর্সে জানতে পারবেন।",
    },
    {
      image: "/assets/coursesinglepage/asset-14.png",
      title: "Video & Other Resource Sourcing",
      description:
        "সাউন্ড এফেক্ট এবং অডিও এডিটিং, কালার কারেকশন ও কালার গ্রাডিয়েন্ট থেকে ভিডিও পরিপূর্ণ করতে কোথায়, কিভাবে কপিরাইট ভিডিও, সাউন্ড, আইকন সহ অন্যান্য জিনিস কালেক্ট করবেন তা দেখানো হবে।",
    },
    {
      image: "/assets/coursesinglepage/asset-15.jpeg",
      title: "ফিউচার ইজ শর্টস অর রিলস",
      description:
        "শর্ট ভিডিও বা রিলসের চাহিদা দিন দিন বেড়েই চলছে। CapCut ব্যবহার করে দ্রুত এবং মানসম্পন্ন ভিডিও তৈরি করে Trend-এ থাকা সম্ভব।",
    },
    {
      image: "/assets/coursesinglepage/asset-16.png",
      title: "নিজস্ব ইউটিউব চ্যানেল গ্রো",
      description:
        "CapCut দিয়ে ইউনিক কনটেন্ট তৈরি করে ইউটিউব চ্যানেলের Viewer বৃদ্ধি করতে পারবেন। Professional Video Editing সহজেই দর্শকদের মন জয় করবে।",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url("/assets/coursesinglepage/asset-34.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        transform: "translateZ(0)", // Helps with performance
      }}
      className="min-h-screen rounded-lg bg-fixed lg:mt-30 mt-20 lg:p-10 p-5 mx-auto max-w-[1200px]"
    >
      <h2 className="font-[600] text-white text-center">
        Ai Content Creation with Capcut কোর্সে কি কি বিষয় শেখানো হবে ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto gap-8 mt-10">
        {goLearn.map((ld, idx) => (
          <div
            className="lg:w-[410px] w-full bg-white lg:p-6 p-4 flex flex-col gap-2 justify-center items-start rounded-lg  backdrop-blur-sm"
            key={idx}
          >
            <Image src={ld.image} width={60} height={60} alt={`img-${idx}`} />
            <h2>{ld.title}</h2>
            <h3>{ld.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLearningSection;
