import React from "react";

import Button from "../../shared/Button";

import InstructorSlider from "./InstructorSlider";
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

const Aboutinstructors = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="container lg:mt-[120px] mt-[60px]"
    >
      <div className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4">
        <div>
          <h1 data-aos="fade-up" data-aos-delay="300" className="capitalize">
            আমাদের <span className="text-[#3CB449]">এক্সপার্ট</span> ট্রেইনার
          </h1>
        </div>
        <Button
          data-aos="fade-up"
          data-aos-delay="400"
          hoverColor="#ce2f2f"
          title="সব দেখুন"
          className=" text-[18px]"
          href={"/instructors"}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="mt-10">
        <InstructorSlider data={data} />
      </div>
    </div>
  );
};

export default Aboutinstructors;
