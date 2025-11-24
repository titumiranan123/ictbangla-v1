"use client";

import React, { useState } from "react";
import TeamMembersCard from "./teamMembersCard";
import MentorCard from "./MentorCard";

interface MembersCategoryType {
  title: string;
  id: number | string;
}

const membersCategory: MembersCategoryType[] = [
  { title: "Marketing Team", id: 1 },
  { title: "Sales Team", id: 2 },
  { title: "Development Team", id: 3 },
  { title: "Mentors", id: 4 },
  { title: "HR Team", id: 5 },
  { title: "Moderators", id: 6 },
];
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
const TeamMembersList = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | string>(1);
  const [isOpenModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className=" w-full overflow-x-auto flex items-center gap-4 scrollbar-hide">
        {membersCategory?.map((i: MembersCategoryType) => (
          <button
            className={`text-lg font-bold text-white cursor-pointer px-4 py-2.5 rounded-lg w-full whitespace-nowrap ${
              selectedCategory === i?.id ? "bg-primary" : "bg-[#D2D8D3]"
            }`}
            onClick={() => setSelectedCategory(i?.id)}
            key={i?.id}
            type="button"
          >
            {i?.title}
          </button>
        ))}
      </div>

      <div className=" mt-8  md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10 md:gap-4 lg:gap-6">
        {data?.map((dt, idx) => (
          <div key={idx} onClick={() => setOpenModal(!isOpenModal)}>
            {" "}
            <TeamMembersCard member={dt} />{" "}
          </div>
        ))}
      </div>
      {isOpenModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="w-screen fixed inset-0 h-screen bg-black/10 backdrop-blur-2xl z-40 flex justify-center items-center"
        >
          <div onClick={(e) => e.stopPropagation()}>
            <MentorCard
              mentor={{
                name: "Abu Altamas",
                designation: "Lead Instructor",
                speciality: "IT & Freelancing Trainer",
                about:
                  "Abu Altamas is an experienced freelancer and trainer helping students start their online careers through practical freelancing and skill-building courses.",
                image: "/assets/mentors/abu-altamas.png",
                socials: {
                  website: "#",
                  facebook: "https://facebook.com/",
                  instagram: "https://instagram.com/",
                  linkedin: "https://linkedin.com/",
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembersList;
