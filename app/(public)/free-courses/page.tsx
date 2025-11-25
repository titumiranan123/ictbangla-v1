import Link from "next/link";
import React from "react";
import RecordedCourse from "../(home)/RecordedCourse";
import PageHeroSectionWithRings from "@/components/(home)/pageHeroSectionWithRings";

const AllFreecourses = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900  mt-20 lg:mt-30">
      <PageHeroSectionWithRings
        title="ফ্রি কোর্সসমূহ"
        buttonText=""
        subTitle="নতুনদের জন্য শেখার ও অনুপ্রেরণার উৎস — আমাদের ব্লগসমূহ।"
      />

      <div className="bg-gray-50 mt-5 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-10 text-center shadow-sm w-full max-w-lg">
        <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          🎓 চিন্তা নেই! নতুন ফ্রি কোর্স শিগগিরই যুক্ত হচ্ছে — সঙ্গে থাকুন!
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
          আরও গভীরভাবে শেখার জন্য আমাদের{" "}
          <Link
            href="/courses"
            className="text-green-600 dark:text-green-400 font-semibold underline hover:text-green-800 transition"
          >
            প্রিমিয়াম কোর্সসমূহ
          </Link>{" "}
          একবার ঘুরে দেখুন।
        </p>
        <Link href="/courses">
          <button className="mt-4 inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition">
            প্রিমিয়াম কোর্স ব্রাউজ করুন
          </button>
        </Link>
      </div>

      <RecordedCourse />
    </div>
  );
};

export default AllFreecourses;
