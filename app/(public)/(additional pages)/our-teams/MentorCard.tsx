"use client";

import React from "react";
import Image from "next/image";

interface SocialLinks {
  website?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

interface Mentor {
  name: string;
  designation: string;
  speciality: string;
  about: string;
  image: string;
  socials: SocialLinks;
}

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white max-w-[291px] w-full h-[331px]  border-1 border-primary rounded-2xl p-3 flex flex-col items-center shadow-sm hover:shadow-md transition-all duration-300 mx-auto relative"
    >
      <div className="flex justify-between items-center gap-4">
        {/* Profile Image */}

        <Image
          src={"/assets/instructor.png"}
          alt={mentor?.name}
          width={60}
          height={60}
          className="object-cover w-[60px] h-[60px] p-1 border-1 border-primary rounded-full "
        />

        {/* Text Content */}
        <div className="text-left mt-4 space-y-0.5">
          <p className="text-primary text-[10px] font-semibold uppercase tracking-wide border border-dashed border-primary px-2 py-1 flex items-center gap-2 rounded-[4px]">
            <Image
              src={"/assets/icon/batch.png"}
              alt="designation"
              width={14}
              height={14}
            />{" "}
            <span className="text-[12px] leading-[18px]">
              {mentor?.designation}
            </span>
          </p>
          <h3 className="text-[14px] leading-[20px] font-bold text-gray-800">
            {mentor?.name}
          </h3>
          <p className="text-gray-600 text-[12px] leading-[18px]">
            {mentor?.speciality}
          </p>
        </div>
      </div>
      {/* About Section */}
      <div className="mt-2 w-full flex flex-col gap-1">
        <h4 className="text-primary font-semibold text-left mb-1 border-b border-primary text-lg">
          About
        </h4>
        <p className="text-sm text-gray-700 text-justify text-[12px] leading-[18px]">
          {mentor?.about?.length > 170
            ? `${mentor?.about?.slice(0, 170).trim()} …`
            : mentor?.about}
        </p>
      </div>

      {/* Buttons & Social Links */}
      <div className="mt-5 flex a items-center justify-between w-full absolute left-0 bottom-5 px-3">
        <a
          href={mentor?.socials?.website || "#"}
          className="bg-primary text-white px-4 py-2 rounded-md text-[12px] font-semibold hover:bg-primary transition-all"
        >
          সব কোর্স দেখুন
        </a>

        <div className="flex gap-3 text-primary text-lg ">
          {mentor?.socials?.facebook && (
            <a href={mentor?.socials?.facebook} target="_blank">
              <Image
                src={"/assets/icon/fb.png"}
                className="hover:text-green-700 transition-all"
                alt="facebook"
                width={24}
                height={24}
              />
            </a>
          )}
          {mentor?.socials?.instagram && (
            <a href={mentor?.socials?.instagram} target="_blank">
              <Image
                alt="insta"
                width={24}
                height={24}
                src={"/assets/icon/insta.png"}
                className="hover:text-green-700 transition-all"
              />
            </a>
          )}
          {mentor?.socials?.linkedin && (
            <a href={mentor?.socials?.linkedin} target="_blank">
              <Image
                src={"/assets/icon/link.png"}
                alt="linkdin"
                width={24}
                height={24}
                className="hover:text-green-700 transition-all"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
