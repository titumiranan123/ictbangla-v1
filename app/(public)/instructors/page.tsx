/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Pagetitle from "@/components/(home)/shared/pagetitle";
import Pagination from "@/components/(home)/shared/Pagination";
import TeampInstructorcard from "@/components/(instructor)/instructor/TeampInstructorcard";
import { instructors } from "@/data/instructors";
import TopCourseSection from "@/components/(home)/home/TopCourseSection";

const Instructors = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const items_per_page = 10;

  const totalPages = Math.ceil(instructors.length / items_per_page);
  const startIndex = (currentPage - 1) * items_per_page;
  const selectedInstructors = instructors.slice(
    startIndex,
    startIndex + items_per_page
  );

  return (
    <div className="mb-10 overflow-hidden">
      <Pagetitle
        pageName="ইনস্ট্রাক্টর"
        pagePragraph="প্ল্যাটফর্মটিতে রয়েছে বিভিন্ন বিষয়ের উপর প্রশিক্ষণ প্রদানকারী অভিজ্ঞ ও পেশাদার ইন্সট্রাক্টরদের সমৃদ্ধ তালিকা।"
        pageTitle="ইনস্ট্রাক্টর"
      />

      <div className="container">
        <div className="flex justify-between lg:flex-row flex-col lg:items-center items-start gap-6 text-black">
          {/* <div className="relative">
            <div className="text-[15px] relative font-[500]    flex  items-center ">
              Sort by
              <button
                onClick={() => setSort(!isSort)}
                className=" rounded-md px-6 py-3 flex items-center gap-1"
              >
                {sortBy === "" && "Default"}
                {sortBy === "name-asc" && "Name (A-Z)"}
                {sortBy === "name-desc" && "Name (Z-A)"}
                {sortBy === "rating-asc" && "Rating (Low to High)"}
                {sortBy === "rating-desc" && "Rating (High to Low)"}
                <Image className="w-5 h-5" src={down} alt="arrow" />
              </button>
            </div>
            <div
              className={`absolute w-[280px] flex flex-col gap-2  px-5 py-8 bg-white border rounded-[12px] top-16 left-0 transition-all duration-300 ease-in-out  ${
                isSort
                  ? "translate-y-0 opacity-100 visible"
                  : "translate-y-10 opacity-0 invisible"
              }`}
            >
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBy === ""}
                  onChange={() => setSortBy("")}
                />
                <span>Default</span>
              </label>
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBy === "name-asc"}
                  onChange={() => setSortBy("name-asc")}
                />
                <span>Name (A-Z)</span>
              </label>
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBy === "name-desc"}
                  onChange={() => setSortBy("name-desc")}
                />
                <span>Name (Z-A)</span>
              </label>
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBy === "rating-asc"}
                  onChange={() => setSortBy("rating-asc")}
                />
                <span>Rating (Low to High)</span>
              </label>
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={sortBy === "rating-desc"}
                  onChange={() => setSortBy("rating-desc")}
                />
                <span>Rating (High to Low)</span>
              </label>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-2 mt-14">
          {selectedInstructors.map((instructor: any, idx: number) => (
            <TeampInstructorcard key={idx} instructor={instructor} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <TopCourseSection />
    </div>
  );
};

export default Instructors;
