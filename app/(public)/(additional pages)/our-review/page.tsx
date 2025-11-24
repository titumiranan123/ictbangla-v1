"use client";
import React, { useState } from "react";

import Image from "next/image";
import mahfuz from "@/public/assets/review/Mahfuzul.png";
import Quazi from "@/public/assets/review/quazimohsin.png";
import Habiba from "@/public/assets/review/Habiba.png";
import Rabiul from "@/public/assets/review/Rabiul.png";
import user from "@/public/assets/review/user.png";
import ReactPlayer from "react-player";
import { RenderStars } from "@/components/(home)/shared/RenderStars";
import PluseIcon from "@/components/(home)/home/PulseIcon/PluseIcon";
import TopCourseSection from "@/components/(home)/home/TopCourseSection";

// Your complete testimonials data
const testimonials = [
  {
    author: "Md. Mahfuzul islam",
    position: "batch - FC2501",
    image: mahfuz,
    rating: 5,
    quote: `It was a nice learning journey with ICT bangla. Our mentor Mr. SOIKAT is a brilliant mentor. His way of teaching is much better than many other. I have a little knowledge on Capcut. But he touched every steps to make a simple video into eye catching one. I have learnt many tips from his teaching like, effect and transition apply, Color correction, video elements collection Process, sound editing, filter, keyframe, green screen remove and many many things. The remarkable point from his teaching is growing confidence in myself. Lastly his last class was on freelancing or client hunt Process. It added a huge point to this course.

    Best of luck everybody.
`,
  },
  {
    id: 2,
    quote: `অনলাইনে কোর্সটি করলেও মনে হয়েছে সরাসরি কোর্সটি শেষ করলাম। যদি কেউ নেওয়ার ক্ষেত্রে ঘাটতি থাকে এটি শিক্ষার্থীর দুর্বলতা। কৃতজ্ঞতা প্রকাশ করছি। ICTBangla.com প্রতি।
    দোয়া ও ভালোবাসা রইল নিরন্তর!
`,
    author: "Quazi Mohsin",
    image: Quazi,
    position: "batch-FC2501",
    rating: 5, // Added rating for consistency
  },
  {
    id: 3,
    image: Rabiul,
    quote: `আস সালামু আলাইকুম।
মেন্টর ছিলেন মেহেদী হাসান সৈকত ভাই।
তাঁর ধৈর্য, সাবলীল ধারাবাহিক উপস্থাপনা, ধী ও চিন্তাশক্তি, জ্ঞানের প্রগাঢ়তা, কোর্সের মেরিট বোঝা, নতুন বা পুরাতন যে হোক না কেন তাদের চাহিদা বুঝে উপস্থাপন, অতিরিক্ত ক্লাস নেওয়া, প্রশ্নোত্তর, হোম ওয়ার্ক করে পাঠ উপস্থাপন, বিনয়ী আচরণ, ভাষার মিষ্টতা, দক্ষতা এক কথায় অতুলনীয় ও অনির্বচনীয় এবং তাঁর জন্য কোন বিশেষণ প্রযোজ্য নয় কারণ তাঁর তুলনা তিনি নিজেই। আমি বহু ব্যস্ততার মাঝে তার ক্লাসগুলো করার যথাসাধ্য চেষ্টা করেছি। ২/৩টা ক্লাসের আংশিক মিস করেছিলাম দুর্বল নেটওয়ার্কের কারণে। পরে দেখে নিয়েছি। আমি একেবারে 0 ছিলাম। বর্তমানে আমি খুবই আনন্দিত। ধন্যবাদ ও কৃতজ্ঞতা রইল ICT Bangla কে এত সুন্দর একজন মেন্টরকে দেওয়ার জন্য। ICT Bangla পরিবারের সকলের নেক হায়াত কামনা করছি এবং উত্তরোত্তর সাফল্য কামনা করছি।
পরিশেষে ধন্যবাদ আয়েশা ম্যামকে তিনি অনেকবার ফোন করে রাজি করিয়েছিলেন আমাকে।
আবারও ICT Bangla এর সফলতা কামনা করছি। আমার জন্য সবাই দোয়া করবেন।
ধন্যবাদ ও কৃতজ্ঞতায়
মোঃ রবিউল ইসলাম`,
    author: "Md Rabiul Islam",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 4,
    image: Habiba,
    quote: `আলহামদুলিল্লাহ্ জীবনের প্রথম ইনকাম। তাও এই ভিডিও এডিটিং এর মাধ্যমে। আমার কি ভালো লাগছে তা বলে বুঝালে পারব না। প্রথমেই শুকরিয়া জানাই ICT Bangla কে। আমাকে ভিডিও এডিটিং এ দক্ষতা বৃদ্ধিতে সহায়তা করার জন্য।
তারপরে আমার মা-বাবা এবং আমার স্বামীকে ধন্যবাদ দিব। যিনি সবসময় আমার সকল কাজে প্রেরণা দিয়েছেন। **ক্লায়েন্ট আমার কাজ দেখে খুব খুশি হয়েছেন এবং সাথে সাথেই পেমেন্ট দিয়েছেন।
ক্লায়েন্ট শুধু স্ক্রিপ্ট দিয়েছেন। সবকিছু আমাকেই এড করতে হয়েছে।
`,
    author: "Habiba Nusrat",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 5,
    image: user,
    quote: ` ভালো লেগেছে, এবং নিজের মধ্যে একটা অভিজ্ঞতার চাপ এসেছে।
আর সবচেয়ে সুন্দর চিলো প্রিয় মেন্টরের সবকিছু সহজ এবং ক্লিয়ারলি বুঝিয়ে দেওয়া। ❤️
মিস করবো সবাইকে। যতটুকু শিখেছি সেটার উপর যাতে দক্ষতা অর্জন করতে পারি দোয়া চাই 🤲 ।
`,
    author: "উমর ফারুক আশিক ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 6,
    image: user,
    quote: `Alhamdulillah
অনেক ভালো ছিল এবং Mentor ছিল দুর্দান্ত, সৈকত ভাইয়া খুব সুন্দর করে আমাদের কে ক্লাস গুলো করিয়েছেন 🥰❤️ তবে নেক্সট সোশ্যাল মিডিয়া নিয়ে কোর্স করতে চাচ্ছি, আপনারা কোর্সটি কখন চালু করবেন?

`,
    author: "Ujjol Ahmed ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 7,
    image: user,
    quote: `খুবই ভালো একটা কোর্স ছিলো । এবং সৈকত ভাই খুবই বালো টিচার ছিলেন । যদি অ্যাডভান্স এডিটিং এর কুনু কোর্স চালু করেন তাহলে সৈকত ভাইকে টিচার হিসেবে রাকবেন । এডমিট হব insa Allah  ।

`,
    author: "Abu Bokor",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 8,
    image: user,
    quote: `আলহামদুলিল্লাহ ভালো লাগছে  ।

`,
    author: "Abu Bokor",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    // Note: Multiple IDs with 8. Consider making IDs unique in real data.
    id: 8,
    image: user,
    quote: `Alhamdulillah
অনেক ভালো ছিল এবং Mentor সৈকত ভাইয়া খুব সুন্দর করে আমাদের কে ক্লাস গুলো করিয়েছেন .


`,
    author: "Shahin Akter ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 9,
    image: user,
    quote: `সৈকত ভাইর বুঝানোর যে ব্যাপারটা

`,
    author: "ইবনে শাইখ ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 10,
    image: user,
    quote: `Alhamdulillah.
It was very good and Mentor Saikat Bhai conducted the classes for us very nicely.


`,
    author: "Mohammad Majharul Islam ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 11,
    image: user,
    quote: ` আলহামদুলিল্লাহ। খুবই ভালো। সৈকত ভাই খুবই ভালো মেন্টর। সে খুবই আন্তরিক। তার বোঝানোর কৌশল অনেক সুন্দর। পার্টিসিপ্যান্ট ফ্রেন্ডলি। ধন্যবাদ আইসিটি বাংলাকে।


`,
    author: "Rayhan Kabir ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 12,
    image: user,
    quote: ` অনেক ভালো একটা কোর্স ছিলো।
অসংখ্য ধন্যবাদ সৈকত ভাই কে❤️‍🩹
সৈকত ভাইয়ের সবকিছু তে অনেক ভালো রেসপন্স পাইছি❤️‍🩹🫶


`,
    author: "মোঃ শাহ আলম",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 13,
    image: user,
    quote: `আস সালামু আলাইকুম।
মেন্টর ছিলেন মেহেদী হাসান সৈকত ভাই।
তাঁর ধৈর্য, সাবলীল ধারাবাহিক উপস্থাপনা, ধী ও চিন্তাশক্তি, জ্ঞানের প্রগাঢ়তা, কোর্সের মেরিট বোঝা, নতুন বা পুরাতন যে হোক না কেন তাদের চাহিদা বুঝে উপস্থাপন, অতিরিক্ত ক্লাস নেওয়া, প্রশ্নোত্তর, হোম ওয়ার্ক করে পাঠ উপস্থাপন, বিনয়ী আচরণ, ভাষার মিষ্টতা, দক্ষতা এক কথায় অতুলনীয় ও অনির্বচনীয় এবং তাঁর জন্য কোন বিশেষণ প্রযোজ্য নয় কারণ তাঁর তুলনা তিনি নিজেই। আমি বহু ব্যস্ততার মাঝে তার ক্লাসগুলো করার যথাসাধ্য চেষ্টা করেছি। ২/৩টা ক্লাসের আংশিক মিস করেছিলাম দুর্বল নেটওয়ার্কের কারণে। পরে দেখে নিয়েছি। আমি একেবারে ০ ছিলাম। বর্তমানে আমি খুবই আনন্দিত। ধন্যবাদ ও কৃতজ্ঞতা রইল ICT Bangla কে এত সুন্দর একজন মেন্টরকে দেওয়ার জন্য। ICT Bangla পরিবারের সকলের নেক হায়াত কামনা করছি এবং উত্তরোত্তর সাফল্য কামনা করছি।
পরিশেষে ধন্যবাদ আয়েশা ম্যামকে তিনি অনেকবার ফোন করে রাজি করিয়েছিলেন আমাকে।
আবারও ICT Bangla এর সফলতা কামনা করছি। আমার জন্য সবাই দোয়া করবেন।
ধন্যবাদ ও কৃতজ্ঞতায়


`,
    author: "মোঃ রবিউল ইসলাম",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 14, // Assign a unique ID
    image: user,
    quote: `আলহামদুলিল্লাহ

`,
    author: "Mursalin Haq",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 15, // Assign a unique ID
    image: user,
    quote: `আলহামদুলিল্লাহ অনেক ভালো লেগেছে। ভাবতে পারিনি এতটা শিখব

`,
    author: "Asaduzzaman Khokon",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 16, // Assign a unique ID
    image: user,
    quote: `নতুন অবস্থায় অনেক কিছু শিখতে পেরেছি। ইনশাআল্লাহ ভবিষ্যতে আপনাদের সাথে থাকতে চাই। আরো নতুন কোর্স করতে চাই।

`,
    author: "Moral Mohammad Sohel",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 17, // Assign a unique ID
    image: user,
    quote: `অনলাইনে কোর্সটি করলেও মনে হয়েছে সরাসরি কোর্সটি শেষ করলাম। যদি কেউ নেওয়ার ক্ষেত্রে ঘাটতি থাকে এটি শিক্ষার্থীর দুর্বলতা। কৃতজ্ঞতা প্রকাশ করছি।
ICTBangla.com প্রতি।
দোয়া ও ভালোবাসা রইল নিরন্তর! #সৈকত


`,
    author: "Quazi Mohsin",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 18, // Assign a unique ID
    image: user,
    quote: `সৈকত ভাইয়ের মতো এমন মেন্টর পাওয়া ভাগ্যের বেপার কারন আমি আরো আগে একটা কোর্স করেছি তারা আমাদের সাথে এমন এমন ব্যাবহার করতো বলার বাহিরে তাদের এমনও নিয়ম ছিলো
ক্লাস শুরু হওয়ার ১০মিনিটের মধ্যে জয়েন হতে হতে আর তাড়া হুড়া করে কোনো রকম চালিয়ে যাইতো

`,
    author: "HM Rifat Hossain ",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 19, // Assign a unique ID
    image: user,
    quote: ` Alhamdulillah
অনেক ভালো ছিল এবং Mentor সৈকত ভাইয়া খুব সুন্দর করে আমাদের কে ক্লাস গুলো করিয়েছেন। ICTBangla.com এর জন্য অনেক অনেক শুভকামনা। সময় করে সামনের দিকে আরো কোর্স করব ইনশাআল্লাহ। সামনের দিকে এগিয়ে যাক প্রিয় প্রতিষ্ঠান ICT Bangla ❤️❤️❤️❤️❤️

`,
    author: "RJ Enam",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 20, // Assign a unique ID
    image: user,
    quote: `It was a great journey with the mentor Soikat bhai `,
    author: "Jumon Ahmed",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 21, // Assign a unique ID
    image: user,
    quote: `Good filling`,
    author: "Biplob Bairagi",
    position: "Batch - FC2501",
    rating: 5,
  },
  {
    id: 22, // Assign a unique ID
    image: user,
    quote: ` It was a nice learning journey with ICT bangla. Our mentor Mr. SOIKAT is a brilliant mentor. His way of teaching is much better than many other. I have a little knowledge on Capcut. But he touched every steps to make a simple video into eye catching one. I have learnt many tips from his teaching like, effect and transition apply, Color correction, video elements collection Process, sound editing, filter, keyframe, green screen remove and many many things. The remarkable point from his teaching is growing confidence in myself. Lastly his last class was on freelancing or client hunt Process. It added a huge point to this course.
Best of luck everybody.

`,
    author: "Md. Mahfuzul Islam ",
    position: "Batch - FC2501",
    rating: 5,
  },
];
const SuccessReviewData = [
  {
    id: "13",
    video_link: "https://youtu.be/vtpwfGLnIcE",
    thumbnail: "https://i.postimg.cc/fbyYsFYB/thum-1.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "14",
    video_link: "https://youtu.be/TEZ4NRtsR8g",
    thumbnail: "https://i.postimg.cc/SxDcwqYn/thum-2.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "15",
    video_link: "https://youtu.be/tUPjeUEFyJg",
    thumbnail: "https://i.postimg.cc/hP8L1VSb/thum-3.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "16",
    video_link: "https://youtu.be/WsfrWgVx7k8",
    thumbnail: "https://i.postimg.cc/k5YFt970/thum-4.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "17",
    video_link: "https://youtu.be/rcDN5qZZfHM",
    thumbnail: "https://i.postimg.cc/3wxFRWQj/thum-5.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "18",
    video_link: "https://youtu.be/bqsgNZuph1E",
    thumbnail: "https://i.postimg.cc/Hk2tdXRs/thum-6.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "19",
    video_link: "https://youtu.be/VayKrG-PJO8",
    thumbnail: "https://i.postimg.cc/k4VNQZ4B/thum-7.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "20",
    video_link: "https://youtu.be/G1439655_94",
    thumbnail: "https://i.postimg.cc/ZR0HfnfY/thum-8.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "21",
    video_link: "https://youtu.be/9DgrJf-GI9o",
    thumbnail: "https://i.postimg.cc/TPdCDCgD/thum-9.jpg",
    category: "capcut",
    title: "Customer Retention",
  },

  {
    id: "22",
    video_link: "https://youtu.be/-te2Ed0oyYA",
    thumbnail: "https://i.postimg.cc/y8XLxwgK/thum-10.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "23",
    video_link: "https://youtu.be/M7QOyyL2gFE",
    thumbnail: "https://i.postimg.cc/g2PMYY04/thum-11.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "24",
    video_link: "https://youtu.be/h5Hj--0Sib0",
    thumbnail: "https://i.postimg.cc/1zvn8t5S/thum-12.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "25",
    video_link: "https://youtu.be/-0CVLv2VQ2w",
    thumbnail: "https://i.postimg.cc/NjwrVSP3/thum-13.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "26",
    video_link: "https://youtu.be/hG4hFpoq_54",
    thumbnail: "https://i.postimg.cc/mrL1ZM4V/thum-14.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "27",
    video_link: "https://youtu.be/3cE-tbpbT34",
    thumbnail: "https://i.postimg.cc/jSVzTLCk/thum-15.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "28",
    video_link: "https://youtu.be/Rnxp7UOGSpE",
    thumbnail: "https://i.postimg.cc/PrDwSTKb/thum-16.jpg",
    category: "capcut",
    title: "Customer Retention",
  },
  {
    id: "1",
    video_link: "https://youtu.be/03e0XRqUJEo?si=ayHgufziMGDYzYKe",
    thumbnail: "https://i.postimg.cc/9XLcgB7z/review1.png",
    category: "call_center",
    title: "Customer Service Success Story",
  },
  {
    id: "2",
    video_link: "https://www.youtube.com/watch?v=M7yiBCQswhU",
    thumbnail: "https://i.postimg.cc/hjrKBLZy/review2.png",
    category: "sales",
    title: "Sales Team Transformation",
  },
  {
    id: "3",
    video_link: "https://www.youtube.com/watch?v=-kCkOZvk9oo",
    thumbnail: "https://i.postimg.cc/hvZgJSBV/review3.png",
    category: "support",
    title: "Technical Support Breakthrough",
  },
  {
    id: "4",
    video_link: "https://www.youtube.com/watch?v=Dch6jz74-QU",
    thumbnail: "https://i.postimg.cc/prLRXmg2/review4.png",
    category: "call_center",
    title: "Call Center Efficiency",
  },
  {
    id: "5",
    video_link: "https://www.youtube.com/watch?v=UweNaiMF6uQ",
    thumbnail: "https://i.postimg.cc/65TtkGrc/review5.jpg",
    category: "management",
    title: "Team Management Success",
  },
  {
    id: "6",
    video_link: "https://www.youtube.com/watch?v=hsPDrGX4cR4",
    thumbnail: "https://i.postimg.cc/T3DGwMHW/review6.png",
    category: "sales",
    title: "Record Sales Achievement",
  },
  {
    id: "7",
    video_link: "https://www.youtube.com/watch?v=H1UQXGrB0Wo",
    thumbnail: "https://i.postimg.cc/NMgwpyG1/review7.png",
    category: "support",
    title: "Customer Satisfaction",
  },
  {
    id: "8",
    video_link: "https://www.youtube.com/watch?v=HGSmVjehLJM",
    thumbnail: "https://i.postimg.cc/rFbMMFgk/review8.png",
    category: "call_center",
    title: "24/7 Support Excellence",
  },
  {
    id: "9",
    video_link: "https://www.youtube.com/watch?v=C0fTlI6WZBI",
    thumbnail: "https://i.postimg.cc/zfYNHt92/review9.jpg",
    category: "management",
    title: "Leadership Development",
  },
  {
    id: "10",
    video_link: "https://www.youtube.com/watch?v=Bznc6UgNEW8",
    thumbnail: "https://i.postimg.cc/6QVXrVKW/review10.jpg",
    category: "sales",
    title: "Sales Strategy Success",
  },
  {
    id: "11",
    video_link: "https://www.youtube.com/watch?v=TuqKSU3i-rA",
    thumbnail: "https://i.postimg.cc/zfYNHt92/review9.jpg",
    category: "support",
    title: "Technical Expertise",
  },
  {
    id: "12",
    video_link: "https://www.youtube.com/watch?v=M7yiBCQswhU",
    thumbnail: "https://i.postimg.cc/DZB3D2mR/review12.jpg",
    category: "call_center",
    title: "Customer Retention",
  },
];

const ReviewPage = () => {
  const [activeTab, setActiveTab] = useState("video"); // 'text' or 'video'
  const [currentPage, setCurrentPage] = useState(1);
  const [videoSelect, setVideoSelect] = useState("all");
  const [videoIndex, setVideoIndex] = useState(6);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // For text reviews pagination
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = testimonials.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // For video reviews filtering
  const filteredVideos = SuccessReviewData.filter(
    (item) =>
      videoSelect === "all" ||
      (videoSelect === "video" && item.category === "support") ||
      (videoSelect === "excel" && item.category === "management") ||
      (videoSelect === "call" && item.category === "call_center") ||
      (videoSelect === "capcut" && item.category === "capcut")
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Reviews
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            What our students say about our courses
          </p>

          {/* Tabs to switch between text and video reviews */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-md ">
              <button
                onClick={() => setActiveTab("text")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "text"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 border border-primary hover:bg-gray-100"
                }`}
              >
                Text Reviews
              </button>
              <button
                onClick={() => setActiveTab("video")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "video"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-primary"
                }`}
              >
                Video Reviews
              </button>
            </div>
          </div>
        </div>

        {activeTab === "text" ? (
          <>
            {/* Text Reviews Section */}
            <div className="bg-white  rounded-lg overflow-hidden">
              {/* Review Stats */}
              <div className="bg-primary px-6 py-8 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">Overall Rating</h2>
                    <div className="flex items-center mt-2">
                      <span className="text-4xl font-bold mr-2">5.0</span>
                      <div className="flex">{RenderStars(5)}</div>
                    </div>
                    <p className="mt-1">
                      Based on {testimonials.length} reviews
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center mb-2">
                      <span className="w-12 text-sm">5 star</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5 mx-2">
                        <div
                          className="bg-yellow-400 h-2.5 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="w-8 text-sm text-right">
                        {testimonials.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Carousel */}

              {/* Desktop Reviews List */}
              <div className=" divide-y divide-gray-200">
                {currentReviews.map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-6 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <Image
                          alt={testimonial.author}
                          src={testimonial.image}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {testimonial.author}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {testimonial.position}
                            </p>
                          </div>
                          <div className="flex">
                            {testimonial.rating
                              ? RenderStars(testimonial.rating)
                              : RenderStars(5)}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600 whitespace-pre-line">
                          {testimonial.quote}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Batch FC2501</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination for text reviews */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{" "}
                      <span className="font-medium">
                        {indexOfFirstReview + 1}
                      </span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {Math.min(indexOfLastReview, testimonials.length)}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">{testimonials.length}</span>{" "}
                      reviews
                    </p>
                  </div>
                  <div>
                    <nav
                      className="relative z-0 inline-flex rounded-md  -space-x-px"
                      aria-label="Pagination"
                    >
                      <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">First</span>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5 -ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === page
                                ? "z-10 bg-primary border-primary text-white"
                                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}

                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Last</span>
                        <svg
                          className="h-5 w-5 -mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Video Reviews Section */}
            <div className="  overflow-hidden p-6">
              {/* Video Category Filters */}
              <div className="flex justify-center items-center flex-wrap gap-2 lg:gap-4 mb-8">
                {[
                  { id: "all", label: "All" },
                  { id: "capcut", label: "Video Editing (CapCut)" },
                  { id: "video", label: "Video Editing" },
                  { id: "excel", label: "Excel" },
                  { id: "call", label: "Call Center" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setVideoSelect(tab.id);
                      setVideoIndex(3);
                      setPlayingId(null);
                    }}
                    className={`py-2 px-4 lg:px-6 transition-all duration-300 text-sm lg:text-base font-medium rounded-lg ${
                      videoSelect === tab.id
                        ? "bg-[#3CB449] text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredVideos.slice(0, videoIndex)?.map((rev) => (
                  <div
                    key={rev.id}
                    className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video w-full">
                      <ReactPlayer
                        url={rev.video_link}
                        playing={playingId === rev.id}
                        light={rev.thumbnail}
                        playIcon={<PluseIcon />}
                        width="100%"
                        height="100%"
                        controls
                        onClickPreview={() => setPlayingId(rev.id)}
                        onPlay={() => setPlayingId(rev.id)}
                        onPause={() => setPlayingId(null)}
                        onEnded={() => setPlayingId(null)}
                        config={{
                          youtube: {
                            playerVars: {
                              modestbranding: 1,
                              showinfo: 0,
                              rel: 0,
                              fs: 1,
                              autoplay: playingId === rev.id ? 1 : 0,
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-900">{rev.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {rev.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Videos Button */}
              {videoIndex < filteredVideos.length && (
                <div className="flex justify-center items-center mt-10">
                  <button
                    onClick={() => setVideoIndex((prev) => prev + 3)}
                    className="py-2 px-6 rounded-lg bg-gradient-to-r from-[#099E47] to-[#29AE48] text-white 
                              hover:shadow-md transition-all duration-300 font-medium"
                  >
                    Load More
                  </button>
                </div>
              )}

              {filteredVideos.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                  No videos found in this category
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <TopCourseSection />
    </div>
  );
};

export default ReviewPage;
