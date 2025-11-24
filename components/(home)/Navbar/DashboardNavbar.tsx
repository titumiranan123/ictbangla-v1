/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import CustomLink from "./CustomLink";
import Link from "next/link";
import Mobiletoggole from "./Mobiletoggole";
import NextSearch from "./NextSearch";
import { useSession } from "next-auth/react";

const DashboardNavbar = () => {
  const [isActive, setActive] = useState(false);
  const [isSearch, setActiveSeach] = useState(false);

  const {
    data,
    status,
  }: { data: any; status: "loading" | "authenticated" | "unauthenticated" } =
    useSession();

  return (
    <div className="sticky top-0 z-30 w-full bg-white shadow-sm">
      <div className="max-w-[1536px] mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Logo */}
        <Link
          className="flex items-center w-[100px] h-auto md:w-[200px] lg:h-[40px] lg:ms-0 ms-16"
          href="/"
        >
          <Image className="w-[130px] h-[48px] " src={logo} alt="logo" priority />
        </Link>

        {/* Desktop Links */}
        <div className="hidden  gap-5 items-center">
          <CustomLink href="/" title="হোম" />
          <CustomLink href="/courses" title="সব কোর্স" />
          <CustomLink href="/about-us" title="আমাদের সম্পর্কে" />
          <CustomLink href="/blog" title="ব্লগ" />
          <CustomLink href="/contact" title="যোগাযোগ" />
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search Icon */}
          <button
            onClick={() => setActiveSeach(!isSearch)}
            className="text-2xl text-black hover:text-gray-600 transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
            </svg>
          </button>

          {/* Cart Icon */}
          <Link href="/cart" className="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
            >
              <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z" />
            </svg>
          </Link>

          {/* User Profile / Login Buttons */}
          <div className="flex items-center gap-2">
            {status === "loading" ? (
              <>
                <div className="w-[70px] h-8 bg-gray-300 animate-pulse rounded-md"></div>
                <div className="w-[70px] h-8 bg-gray-300 animate-pulse rounded-md"></div>
              </>
            ) : status === "authenticated" ? (
              <Link
                href={
                  data?.user?.role === "USER"
                    ? "/student-dashboard"
                    : "/instructor-dashboard"
                }
              >
                {data?.user?.image ? (
                  <Image
                    className="w-10 h-10 rounded-full border"
                    src={data.user.image}
                    alt={data.user.first_name || "User"}
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span>{data.user?.first_name?.charAt(0) || "U"}</span>
                  </div>
                )}
              </Link>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="px-4 py-2 text-sm border border-slate-300 rounded-md hover:bg-slate-200"
                >
                  Login
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 text-sm text-white bg-black rounded-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <Mobiletoggole isActive={isActive} setActive={setActive} />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <NextSearch isSearch={isSearch} setActiveSearch={setActiveSeach} />
    </div>
  );
};

export default DashboardNavbar;
