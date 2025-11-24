"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useState } from "react";

interface navitemProp {
  title: string;
  href: string;
  className: string;
}

const Dashboardnav = () => {
  const route = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const CustomNav = ({ title, href, className }: navitemProp) => {
    return (
      <Link
        href={`/${href}`}
        className={`${className} hover:bg-[#2B304A] text-white py-3 easeInOut flex justify-start items-center px-4 w-full relative after:absolute after:w-[2px] after: bg-primary after:h-[100%] after:left-0 hover:after:scale-y-[100%] after:duration-500 mt-[1px] after:transition-transform after:origin-top ${
          route === `/${href}`
            ? "after:scale-y-[100%] bg-[#2B304A]"
            : "after:scale-y-0"
        }`}
      >
        {title}
      </Link>
    );
  };

  const handleLogout = () => {
    signOut();
    redirect("/");
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className=" sticky top-20  md:w-[340px] w-full lg:h-[500px] bg-[#131836] lg:py-[30px] lg:px-[30px]   py-4  px-5 rounded-[16px]">
      <div className="flex justify-between items-center mt-2 lg:mt-0">
        <h2 className="text-[#898C9B]">Student Profile</h2>
        <button
          onClick={toggleMobileNav}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileNavOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ${
          isMobileNavOpen ? "h-auto" : "h-0 md:h-auto"
        }`}
      >
        <CustomNav title="Dashboard" href="student-dashboard" className="" />
        <CustomNav title="My Courses" href="student-mycourses" className="" />
        <CustomNav title="My Schedule" href="student-calendar" className="" />
        <CustomNav title="Create Blog" href="student-blog" className="" />
        <CustomNav title="Wishlist" href="student-wishlist" className="" />
        <CustomNav title="Order" href="student-order" className="" />
        <CustomNav title="Setting" href="student-setting" className="" />

        <div
          onClick={handleLogout}
          className="hover:bg-[#2B304A] text-white py-3 flex justify-start items-center px-4 w-full relative after:absolute after:w-[2px] after: bg-primary after:h-[100%] after:left-0 after:scale-y-0 hover:after:scale-y-[100%] after:duration-100 after:transition-transform after:origin-top cursor-pointer"
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Dashboardnav;
