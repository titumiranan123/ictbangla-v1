import React from "react";
import InstructorSlider from "./InstructorSlider";
import IconImage from "../(additional pages)/about-us/iconImages";
const data = [
  {
    id: 1,
    name: "MD Naimul Islam",
    image: "https://i.postimg.cc/fR229hCk/mentor-intruduce-naimur.jpg",
    experience: "2+ years",
    specialize: "Video Editing, Instructor",
  },
  {
    id: 2,
    name: "Ashrafur Rahman",
    image: "https://i.postimg.cc/8PbnTvrR/mentor-intruduce-ashrafur.jpg",
    experience: "3+ years",
    specialize: "Digital Marketing, Instructor",
  },
  {
    id: 3,
    name: "Sadia Islam Promi",
    image: "https://i.postimg.cc/zfydwP27/mentor-intruduce-promi.jpg",
    experience: "2 years",
    specialize: "Fiverr Freelancing, Instructor",
  },
  {
    id: 4,
    name: "Arif M Rajon",
    image: "https://i.postimg.cc/kgXYG5xk/mentor-intruduce-Rajon.jpg",
    experience: "4 years",
    specialize: "Soft Skill, Instructor",
  },
  {
    id: 5,
    name: "Tahmid Arman",
    image: "https://i.postimg.cc/W4x556Qv/mentor-intruduce-Tahmid-arman.jpg",
    experience: "1.5 years",
    specialize: "AI Designer, Instructor",
  },
  {
    id: 6,
    name: "Md. Tahmidur Rahman",
    image: "https://i.postimg.cc/brh3hYyV/mentor-intruduce-tahmidur.jpg",
    experience: "2 years",
    specialize: "Excel Expert, Instructor",
  },
  {
    id: 7,
    name: "Tamim Asif Chowdhury",
    image: "https://i.postimg.cc/J05K4wtr/tamim.jpg",
    experience: "3 years",
    specialize: "Canva Design, Instructor",
  },
];
const TeachersSection = () => {
  return (
    <div className="sectionGap">
      <div className=" container">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-black-color">
            আমাদের এক্সপার্ট <span className="text-primary">ট্রেইনার</span>
          </h2>
          <button
            className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer"
            type="button"
          >
            সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
          </button>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-8">
          <InstructorSlider data={data} />
        </div>
      </div>
    </div>
  );
};

export default TeachersSection;
