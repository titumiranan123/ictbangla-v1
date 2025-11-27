import React from "react";
import success from "@/public/successicon.png";
import Image from "next/image";
import SuccessClient from "./SuccessClient";

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

const Successsection: React.FC = () => {
  return (
    <div className="container section">
      <div className="flex justify-center items-center flex-col text-center">
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="capitalize text-textPrimary text-5xl leading-[60px] font-bold mb-0">
            সাফল্যের <span className="text-primary">গল্প</span>
          </h2>
          <Image
            className="mb-1 w-[80px] h-[12px] ms-44 -rotate-12"
            src={success}
            alt="Success icon"
            width={70}
            height={40}
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className=" text-xl text-textPrimary max-w-2xl mt-1"
        >
          আমাদের শিক্ষার্থীদের সফলতার গল্পগুলো দেখে নিতে পারেন।
        </p>
      </div>

      {/* এই অংশটা client component এ পাঠাও */}
      <SuccessClient data={SuccessReviewData} />
    </div>
  );
};

export default Successsection;
