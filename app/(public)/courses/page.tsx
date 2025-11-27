/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
// import Categoryfilter from "@/components/(home)/course/filter/Categoryfilter";
// import CourseRatingFilter from "@/components/(home)/course/CourseRatingFillter";
import axios from "axios";
import SortDropdown from "./ShortData";
import Sidebarfileter from "./Sidebarfileter";
import PageHeroSectionWithRings from "../(additional pages)/our-teams/pageHeroSectionWithRings";
import Coursecard from "../(home)/mobile/Coursecard";
// import useCategory from "@/hooks/public/useCategory";
// import { useFilteredCourses } from "@/utils/useFilteredCourse";
// import useSortedCourses from "@/utils/sortedCourses";
// import useInstructorlist from "@/hooks/public/useInstructorlist";
// import LevelFilter from "@/components/(home)/course/filter/LevelFilter";
// import PricingFilter from "@/components/(home)/course/filter/Pricefilter";
// import CourseFillter from "@/components/(home)/course/filter/CourseFilter";
// import { useURLFilters } from "./useURLFilters";
// import CoursesHeader from "./CoursesHeader";

// ⬇️ Wrapper to use useURLFilters inside Suspense
// const URLFilterLoader = ({
//   filters,
//   setFilters,
//   categories,
// }: {
//   filters: FilterState;
//   setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
//   categories: any[];
// }) => {
//   useURLFilters(filters, setFilters, categories);
//   return null; // Hook only, no UI
// };
interface Props {
  searchParams?: any;
}
export const dynamic = "force-dynamic";
const Courses = async ({ searchParams }: Props) => {
  // Hooks
  const {
    categories,
    // level,
    // sort,
    page = "1",
    perPage = "16",
  } = await searchParams;
  const cartegoryResult = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/category-list`
  );
  const categoriesList = cartegoryResult.data;

  // const queryParams = new URLSearchParams();
  const categoryId = categoriesList?.find(
    (cat: any) => cat.slug === categories
  );
  // if (categories) {
  //   queryParams.set("categorySlug", categoryId?._id);
  // }
  // console.log(queryParams.toString());
  // if (level) queryParams.set("level", categories);
  // if (sort) queryParams.set("sort", categories);
  // queryParams.set("page", page);
  // queryParams.set("perPage", perPage);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get-course/list?page=${page}&perPage=${perPage}&categorySlug=${categoryId?.slug}`,
    { cache: "no-store" }
  );

  const result = await res.json();
  // console.log("total data", result?.response?.length);
  const courseData = result;

  // console.log(courseData?.response);
  // const instructorResult = await axios.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/instructor-list`
  // );
  // const instructorsList = instructorResult.data;
  return (
    <div>
      <noscript>
        <style>{`
          [data-aos] {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>
      </noscript>
      <div className="bg-secondary/60">
        <PageHeroSectionWithRings
          buttonText="Live Course"
          subTitle="আপনার ক্যারিয়ার গড়তে প্রয়োজনীয় সব আধুনিক ও প্র্যাকটিক্যাল কোর্স এখন এক প্ল্যাটফর্মে।
          শুরু করুন শেখা, বদলে ফেলুন ভবিষ্যৎ।
          আপনার দক্ষতা বাড়াতে প্রতিটি কোর্স সাজানো হয়েছে বাজারের বর্তমান চাহিদা অনুযায়ী।
          লাইভ সাপোর্ট, প্রজেক্ট–বেইজড লার্নিং ও বাস্তব অভিজ্ঞতার মাধ্যমে পাবেন নিশ্চিত স্কিল ডেভেলপমেন্ট।
          আজই যোগ দিন—নিজেকে আপগ্রেড করার সেরা সময় এখনই।"
          title="আমাদের কোর্স সমূহ"
        />
        {/* <CoursesHeader
          categories={[
            {
              _id: "live101",
              title: "Live Course",
              slug: "live-video-editing-masterclass",
            },
            {
              _id: "live102",
              title: "Recorded Course",
              slug: "live-digital-marketing-bootcamp",
            },
          ]}
        /> */}
      </div>
      {/* Main Layout */}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="grid grid-cols-12  gap-6 relative container mx-auto px-4 sm:px-6 py-8"
      >
        {/* Sidebar Filter - Desktop */}
        <Sidebarfileter categories={categoriesList} />

        {/* Course List Content */}
        <main className="col-span-12 lg:col-span-9">
          {/* Header: Result Info + Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[#1D2939]">
                Showing {courseData?.response?.length} of{" "}
                {courseData?.totalCourses ?? 0} courses
              </p>
            </div>
            <SortDropdown />
          </div>

          {/* No Results */}
          {courseData?.response?.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-[#1D2939]">
                No courses found
              </h3>
              <p className="mt-1 text-sm text-[#1D2939]">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
              <div className="mt-6">
                <button
                  // onClick={resetFilters}
                  className="px-4 py-2 bg-[#1cab55] text-white rounded-md hover:bg-[#16d43b] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Course List */}

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto"
            role="list"
          >
            {courseData?.response?.map((course: any) => (
              <Coursecard key={course._id} data={course} />
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Filter Toggle Button */}
      {/* <button
        className="lg:hidden fixed right-4 top-[26%] bg-[#1cab55] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#16d43b] transition-colors"
        onClick={toggleSidebar}
        aria-label="Open filters"
      >
        <LuSettings2 size={24} />
      </button> */}

      {/* Mobile Sidebar Filter */}
      {/* {isSidebarOpen && <FilterSidebar mobile />} */}
    </div>
  );
};

export default Courses;
