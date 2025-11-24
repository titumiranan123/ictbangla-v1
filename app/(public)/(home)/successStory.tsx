"use client";
import Image from "next/image";
import React, { useState } from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const buttons = [
  {
    title: "সব",
  },
  {
    title: "ভিডিও এডিটিং (Capcut)",
  },
  {
    title: "ভিডিও এডিটিং",
  },
  {
    title: "এক্সেল",
  },
  {
    title: "কল সেন্টার ",
  },
];

//
//   {
//     id: "13",
//     video_link: "https://youtu.be/vtpwfGLnIcE",
//     thumbnail: "https://i.postimg.cc/fbyYsFYB/thum-1.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "14",
//     video_link: "https://youtu.be/TEZ4NRtsR8g",
//     thumbnail: "https://i.postimg.cc/SxDcwqYn/thum-2.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "15",
//     video_link: "https://youtu.be/tUPjeUEFyJg",
//     thumbnail: "https://i.postimg.cc/hP8L1VSb/thum-3.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "16",
//     video_link: "https://youtu.be/WsfrWgVx7k8",
//     thumbnail: "https://i.postimg.cc/k5YFt970/thum-4.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "17",
//     video_link: "https://youtu.be/rcDN5qZZfHM",
//     thumbnail: "https://i.postimg.cc/3wxFRWQj/thum-5.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "18",
//     video_link: "https://youtu.be/bqsgNZuph1E",
//     thumbnail: "https://i.postimg.cc/Hk2tdXRs/thum-6.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "19",
//     video_link: "https://youtu.be/VayKrG-PJO8",
//     thumbnail: "https://i.postimg.cc/k4VNQZ4B/thum-7.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "20",
//     video_link: "https://youtu.be/G1439655_94",
//     thumbnail: "https://i.postimg.cc/ZR0HfnfY/thum-8.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "21",
//     video_link: "https://youtu.be/9DgrJf-GI9o",
//     thumbnail: "https://i.postimg.cc/TPdCDCgD/thum-9.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },

//   {
//     id: "22",
//     video_link: "https://youtu.be/-te2Ed0oyYA",
//     thumbnail: "https://i.postimg.cc/y8XLxwgK/thum-10.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "23",
//     video_link: "https://youtu.be/M7QOyyL2gFE",
//     thumbnail: "https://i.postimg.cc/g2PMYY04/thum-11.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "24",
//     video_link: "https://youtu.be/h5Hj--0Sib0",
//     thumbnail: "https://i.postimg.cc/1zvn8t5S/thum-12.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "25",
//     video_link: "https://youtu.be/-0CVLv2VQ2w",
//     thumbnail: "https://i.postimg.cc/NjwrVSP3/thum-13.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "26",
//     video_link: "https://youtu.be/hG4hFpoq_54",
//     thumbnail: "https://i.postimg.cc/mrL1ZM4V/thum-14.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "27",
//     video_link: "https://youtu.be/3cE-tbpbT34",
//     thumbnail: "https://i.postimg.cc/jSVzTLCk/thum-15.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "28",
//     video_link: "https://youtu.be/Rnxp7UOGSpE",
//     thumbnail: "https://i.postimg.cc/PrDwSTKb/thum-16.jpg",
//     category: "capcut",
//     title: "Customer Retention",
//   },
//   {
//     id: "1",
//     video_link: "https://youtu.be/03e0XRqUJEo?si=ayHgufziMGDYzYKe",
//     thumbnail: "https://i.postimg.cc/9XLcgB7z/review1.png",
//     category: "call_center",
//     title: "Customer Service Success Story",
//   },
//   {
//     id: "2",
//     video_link: "https://www.youtube.com/watch?v=M7yiBCQswhU",
//     thumbnail: "https://i.postimg.cc/hjrKBLZy/review2.png",
//     category: "sales",
//     title: "Sales Team Transformation",
//   },
//   {
//     id: "3",
//     video_link: "https://www.youtube.com/watch?v=-kCkOZvk9oo",
//     thumbnail: "https://i.postimg.cc/hvZgJSBV/review3.png",
//     category: "support",
//     title: "Technical Support Breakthrough",
//   },
//   {
//     id: "4",
//     video_link: "https://www.youtube.com/watch?v=Dch6jz74-QU",
//     thumbnail: "https://i.postimg.cc/prLRXmg2/review4.png",
//     category: "call_center",
//     title: "Call Center Efficiency",
//   },
//   {
//     id: "5",
//     video_link: "https://www.youtube.com/watch?v=UweNaiMF6uQ",
//     thumbnail: "https://i.postimg.cc/65TtkGrc/review5.jpg",
//     category: "management",
//     title: "Team Management Success",
//   },
//   {
//     id: "6",
//     video_link: "https://www.youtube.com/watch?v=hsPDrGX4cR4",
//     thumbnail: "https://i.postimg.cc/T3DGwMHW/review6.png",
//     category: "sales",
//     title: "Record Sales Achievement",
//   },
//   {
//     id: "7",
//     video_link: "https://www.youtube.com/watch?v=H1UQXGrB0Wo",
//     thumbnail: "https://i.postimg.cc/NMgwpyG1/review7.png",
//     category: "support",
//     title: "Customer Satisfaction",
//   },
//   {
//     id: "8",
//     video_link: "https://www.youtube.com/watch?v=HGSmVjehLJM",
//     thumbnail: "https://i.postimg.cc/rFbMMFgk/review8.png",
//     category: "call_center",
//     title: "24/7 Support Excellence",
//   },
//   {
//     id: "9",
//     video_link: "https://www.youtube.com/watch?v=C0fTlI6WZBI",
//     thumbnail: "https://i.postimg.cc/zfYNHt92/review9.jpg",
//     category: "management",
//     title: "Leadership Development",
//   },
//   {
//     id: "10",
//     video_link: "https://www.youtube.com/watch?v=Bznc6UgNEW8",
//     thumbnail: "https://i.postimg.cc/6QVXrVKW/review10.jpg",
//     category: "sales",
//     title: "Sales Strategy Success",
//   },
//   {
//     id: "11",
//     video_link: "https://www.youtube.com/watch?v=TuqKSU3i-rA",
//     thumbnail: "https://i.postimg.cc/zfYNHt92/review9.jpg",
//     category: "support",
//     title: "Technical Expertise",
//   },
//   {
//     id: "12",
//     video_link: "https://www.youtube.com/watch?v=M7yiBCQswhU",
//     thumbnail: "https://i.postimg.cc/DZB3D2mR/review12.jpg",
//     category: "call_center",
//     title: "Customer Retention",
//   },
// ];
const SuccessStory = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <div className="lg:mt-[100px] container">
      <h2 className="text-[32px] lg:text-[48px] font-bold text-black-color mb-6 text-center w-fit mx-auto relative">
        সাফল্যের <span className="text-primary">গল্প</span>
        <IconImage
          fileName="moon_mark.svg"
          className="!w-[111px] !h-[21px]  rotate-12 absolute top-[64px]  right-[-30px]"
        />
      </h2>
      <p className="text-xl font-bold text-[#707070] text-center">
        আমাদের শিক্ষার্থীদের সফলতার গল্পগুলো দেখে নিতে পারেন।
      </p>
      <div className="flex items-center justify-center gap-6 mt-8">
        {buttons?.map((i, idx) => (
          <button
            onClick={() => setSelectedButton(idx)}
            key={idx}
            className={`button-primary w-fit text-lg px-4 ${
              selectedButton !== idx ? "bg-[#D2D8D3] text-white" : ""
            }`}
            type="button"
          >
            {i?.title}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-10 mt-8">
        <div className="border border-primary rounded-2xl px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/demo-images/demo_student_image.png"
              height={48}
              width={48}
              alt="ictbangla"
              className="size-12 rounded-full border-2 border-primary"
            />
            <div>
              <div className="flex items-center gap-1 mb-1">
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
              </div>
              <button
                className="px-2 py-1 rounded-sm border border-dashed border-primary text-primary text-[8px] flex items-center gap-2 font-bold"
                type="button"
              >
                <IconImage
                  fileName="stylished_check.svg"
                  className="!w-[13px] !h-[13px]"
                />
                <span>Batch : 2025-01</span>
              </button>
              <h6 className="text-base font-bold text-black-color">
                মোঃ আবু সাঈদ মোল্লা
              </h6>
              <p className="text-[8px] font-bold text-[#707070]">
                Digital Marketing expert
              </p>
            </div>
          </div>

          <div className="mt-9">
            <Image
              src="/assets/demo-images/demo_video_cart_image.jpg"
              alt="ict bangla"
              height={162}
              width={337}
              className="w-full h-[162px]  rounded-2xl object-fill"
            />
          </div>
        </div>
        <div className="border border-primary rounded-2xl px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/demo-images/demo_student_image.png"
              height={48}
              width={48}
              alt="ictbangla"
              className="size-12 rounded-full border-2 border-primary"
            />
            <div>
              <div className="flex items-center gap-1 mb-1">
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
              </div>
              <button
                className="px-2 py-1 rounded-sm border border-dashed border-primary text-primary text-[8px] flex items-center gap-2 font-bold"
                type="button"
              >
                <IconImage
                  fileName="stylished_check.svg"
                  className="!w-[13px] !h-[13px]"
                />
                <span>Batch : 2025-01</span>
              </button>
              <h6 className="text-base font-bold text-black-color">
                মোঃ আবু সাঈদ মোল্লা
              </h6>
              <p className="text-[8px] font-bold text-[#707070]">
                Digital Marketing expert
              </p>
            </div>
          </div>

          <div className="mt-9">
            <Image
              src="/assets/demo-images/demo_video_cart_image.jpg"
              alt="ict bangla"
              height={162}
              width={337}
              className="w-full h-[162px]  rounded-2xl object-fill"
            />
          </div>
        </div>
        <div className="border border-primary rounded-2xl px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/demo-images/demo_student_image.png"
              height={48}
              width={48}
              alt="ictbangla"
              className="size-12 rounded-full border-2 border-primary"
            />
            <div>
              <div className="flex items-center gap-1 mb-1">
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
                <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
              </div>
              <button
                className="px-2 py-1 rounded-sm border border-dashed border-primary text-primary text-[8px] flex items-center gap-2 font-bold"
                type="button"
              >
                <IconImage
                  fileName="stylished_check.svg"
                  className="!w-[13px] !h-[13px]"
                />
                <span>Batch : 2025-01</span>
              </button>
              <h6 className="text-base font-bold text-black-color">
                মোঃ আবু সাঈদ মোল্লা
              </h6>
              <p className="text-[8px] font-bold text-[#707070]">
                Digital Marketing expert
              </p>
            </div>
          </div>

          <div className="mt-9">
            <Image
              src="/assets/demo-images/demo_video_cart_image.jpg"
              alt="ict bangla"
              height={162}
              width={337}
              className="w-full h-[162px]  rounded-2xl object-fill"
            />
          </div>
        </div>
      </div>

      <button
        className="border border-primary text-primary bg-white button-primary text-lg w-fit px-4 mx-auto mt-10"
        type="button"
      >
        সব দেখুন
      </button>
    </div>
  );
};

export default SuccessStory;
