"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Sidebar = ({ isHeroVisible }: { isHeroVisible: boolean }) => {
  return (
    <>
      {/* Right Sidebar */}
      <div
        style={{
          backgroundImage: "url(/assets/right.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          width: "50px",
        }}
        className={`absolute right-0 top-[38%] h-[250px] transition-transform duration-500 ease-in-out
        md:flex hidden justify-center items-center gap-3 flex-col
        ${isHeroVisible ? "translate-x-0" : "translate-x-full"}`}
      >
        <Link href={"https://www.facebook.com/ictbangla247"}>
          <FaFacebook className="text-white text-2xl " />
        </Link>
        <div className="bg-white h-[2px] w-full"></div>
        <Link href={"https://www.instagram.com/ictbangladotcom/"}>
          <FaInstagram className="text-white text-2xl" />
        </Link>
        <div className="bg-white h-[2px] w-full"></div>
        <Link href={"https://www.youtube.com/@ictbangla247"}>
          <FaYoutube className="text-white text-2xl" />
        </Link>
        <div className="bg-white h-[2px] w-full"></div>
        <Link href={"https://www.linkedin.com/company/ictbangla247/"}>
          <FaLinkedin className="text-white text-2xl" />
        </Link>
      </div>

      {/* Left Sidebar */}
      <Link
        href={"https://www.facebook.com/groups/ictbanglastudentscommunity"}
        style={{
          backgroundImage: "url(/assets/leftside.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          width: "50px",
        }}
        className={`absolute left-0 top-[40%] cursor-pointer text-white transition-transform duration-500 ease-in-out
        md:flex hidden items-center justify-center
        ${isHeroVisible ? "translate-x-0" : "-translate-x-full"}`}
      >
        <span className="transform -rotate-90 whitespace-nowrap tracking-wider font-[500] text-[17px] uppercase">
          কমিউনিটিতে ঘুরে আসুন 🚀
        </span>
      </Link>
    </>
  );
};

export default Sidebar;
