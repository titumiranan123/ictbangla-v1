"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
interface navitemProp {
  title: string;
  href: string;
  className: string;
}
const InstructorNav = () => {
  const route = usePathname();
  const CustomNav = ({ title, href, className }: navitemProp) => {
    return (
      <Link
        href={`/${href}`}
        className={` ${className} hover:bg-[#2B304A] text-white py-3 easeInOut flex justify-start items-center px-4 w-full relative after:absolute after:w-[2px] after: bg-primary after:h-[100%] after:left-0  hover:after:scale-y-[100%] after:duration-500 mt-[1px] after:transition-transform after:origin-top  ${
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
    redirect("/signin");
  };
  return (
    <div className="lg:sticky lg:top-20 md:w-[280px] w-full h-[500px] bg-[#131836] p-[20px] rounded-[16px]">
      <h2 className="text-[#898C9B]">Instructor Profile</h2>
      <div className="mt-4">
        <CustomNav title="Dashboard" href="instructor-dashboard" className="" />
        <CustomNav
          title="My Courses"
          href="instructor-mycourses"
          className=""
        />
        <CustomNav title="My Schedule" href="instructor-calendar" className="" />
        <CustomNav title="Create Blog" href="instructor-blog" className="" />
        <CustomNav title="Setting" href="instructor-setting" className="" />
        <button
          onClick={handleLogout}
          className="hover:bg-[#2B304A] text-white py-3 flex justify-start items-center px-4 w-full relative after:absolute after:w-[2px] after: bg-primary after:h-[100%] after:left-0 after:scale-y-0 hover:after:scale-y-[100%] after:duration-100 after:transition-transform after:origin-top"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default InstructorNav;
