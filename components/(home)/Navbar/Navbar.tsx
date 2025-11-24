/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/public/assets/logo.png";
import CustomLink from "./CustomLink";
import Mobiletoggole from "./Mobiletoggole";
import NextSearch from "./NextSearch";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Searchcomponent from "./NavSearch";

interface MoreLink {
  href: string;
  title: string;
}

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isSearch, setActiveSearch] = useState(false);

  const length = useSelector((state: RootState) => state?.items?.carts?.length);
  const path = usePathname();
  const { data: session, status }: any = useSession();

  const moreLinks: MoreLink[] = [
    { href: "/about-us", title: "আমাদের সম্পর্কে" },
    { href: "/blog", title: "ব্লগ" },
    { href: "/contact", title: "যোগাযোগ" },
  ];
  const router = useRouter();
  const isMoreActive = moreLinks.some((link) => path.startsWith(link.href));
  const handleClick = async () => {
    if (session?.user?.role === "ADMIN") {
      await signOut({ redirect: false }); // Session clear
      window.location.href = "https://admin.ictbangla.com/sign-in"; // Redirect
    } else if (session?.user?.role === "USER") {
      router.push("/student-dashboard");
    } else {
      router.push("/instructor-dashboard");
    }
  };

  return (
    <header className="border-b border-[#e5e7eb] relative   shadow-sm">
      {/* <div
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      /> */}
      <div className="container w-full flex justify-between items-center lg:py-2 py-2">
        {/* Logo and Mobile Toggle */}
        <div className="flex lg:w-[500px] justify-between items-center lg:gap-4 gap-4">
          <button
            onClick={() => setActive(!isActive)}
            className="lg:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={isActive}
          >
            <span className="bg-[#1a2e35] h-[2px] w-6 transition-all duration-300" />
            <span className="bg-[#1a2e35] h-[2px] w-6 transition-all duration-300" />
            <span className="bg-[#1a2e35] h-[2px] w-6 transition-all duration-300" />
          </button>

          <Link
            href="/"
            className="flex justify-start items-start md:w-[145px] lg:h-[50px] w-[90px] h-[30px] overflow-hidden"
            aria-label="Home"
          >
            <Image
              className="w-full h-full object-contain"
              src={logo}
              alt="Website Logo"
              width={145}
              height={50}
              priority
            />
          </Link>

          <button
            className="hidden lg:flex"
            onClick={() => setActiveSearch(!isSearch)}
          >
            <Searchcomponent />
          </button>

          <button
            onClick={() => setActiveSearch(!isSearch)}
            className=" w-10 py-2 px-3 rounded-lg border border-slate-300 lg:hidden flex"
            aria-label="Search"
            aria-expanded={isSearch}
          >
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="lg:flex lg:w-[500px] w-full justify-start hidden gap-6 me-16 items-center">
          <CustomLink href="/" title="হোম" />
          <CustomLink href="/courses" title="সব কোর্স" />

          <div className="group cursor-pointer relative">
            <button
              className={`${
                isMoreActive ? " text-green-600" : ""
              } font-medium lg:text-lg text-lg flex items-center gap-2`}
              aria-haspopup="true"
              aria-expanded={isMoreActive}
            >
              আরো <FaAngleDown className="text-green-600" />
            </button>

            <ul
              className="absolute bg-white p-4 w-[220px] top-full left-0 rounded-lg flex flex-col gap-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 shadow-lg z-50"
              role="menu"
            >
              {moreLinks?.map((link) => (
                <li key={link.href} role="none">
                  <CustomLink
                    href={link.href}
                    title={link.title}
                    role="menuitem"
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="lg:flex hidden items-center justify-center gap-5">
          {/* Cart Button */}
          <Link
            href="/cart"
            className="text-[#4b5563] hover:text-[#29AE48] transition-colors relative"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z" />
            </svg>
            <p className="absolute -top-2.5 -right-5 bg-primary rounded-full p-1 text-white  flex justify-center items-center text-sm h-5 w-5">
              {length}
            </p>
          </Link>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-2">
            {status === "loading" ? (
              <div
                className="flex gap-2"
                aria-label="Loading authentication status"
              >
                <div className="w-20 h-9 bg-[#f3f4f6] animate-pulse rounded-md" />
                <div className="w-20 h-9 bg-[#f3f4f6] animate-pulse rounded-md" />
              </div>
            ) : status === "authenticated" ? (
              <button
                onClick={handleClick}
                className="flex items-center gap-2 group"
                aria-label="User dashboard"
              >
                {session?.user?.image ? (
                  <Image
                    className="w-9 h-9 rounded-full object-cover border-2 border-[#f3f4f6] group-hover:border-[#29AE48] transition-colors"
                    src={session.user.image}
                    alt={session.user.name || "User profile"}
                    width={36}
                    height={36}
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#29AE48] hover:bg-[#1f8a3a] text-white flex items-center justify-center font-medium border-2 border-[#f3f4f6] group-hover:border-[#29AE48] transition-colors">
                    {session?.user?.name?.charAt(0) || "U"}
                  </div>
                )}
              </button>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/sign-in"
                  className="py-2 w-32 px-4 flex justify-center items-center rounded-md text-base font-medium text-center text-white bg-[#29AE48] hover:bg-[#1f8a3a] transition-all shadow-md"
                  aria-label="Sign in"
                >
                  লগ ইন
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <Mobiletoggole isActive={isActive} setActive={setActive} />

        {/* Search Modal */}
        <NextSearch isSearch={isSearch} setActiveSearch={setActiveSearch} />
      </div>
    </header>
  );
};

export default Navbar;
