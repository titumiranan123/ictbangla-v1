/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import TeampInstructorcard from "@/components/(instructor)/instructor/TeampInstructorcard";
import { instructors } from "@/data/instructors";
import TopCourseSection from "@/components/(home)/home/TopCourseSection";
import PageHeroSectionWithRings from "@/components/(home)/pageHeroSectionWithRings";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Mentors | Learn From Industry Experts",
    description:
      "Meet our expert mentors who guide students with real-world experience and industry knowledge.",
    openGraph: {
      title: "Our Mentors | Learn From Industry Experts",
      description:
        "Meet our expert mentors who guide students with real-world experience and industry knowledge.",
      url: "https://ictbangla.com/our-mentors",
      type: "website",
    },
  };
}
const Instructors = () => {
  return (
    <div className="mb-10 overflow-hidden">
      <PageHeroSectionWithRings
        title="Our Expert Mentors"
        buttonText=""
        subTitle="যারা শিখতে চান—তাদের পাশে থাকে সেরা গাইড। আমাদের মেন্টররা শুধু শেখায় না, বরং ক্যারিয়ারে এগিয়ে যাওয়ার পথও দেখায়। আপনার সফলতার যাত্রায় তারাই হবে আপনার শক্তিশালী সহযাত্রী।"
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-2 mt-14">
          {instructors.map((instructor: any, idx: number) => (
            <TeampInstructorcard key={idx} instructor={instructor} />
          ))}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        /> */}
      </div>
      <TopCourseSection />
    </div>
  );
};

export default Instructors;
