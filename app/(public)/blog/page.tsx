/* eslint-disable @typescript-eslint/no-explicit-any */

import Blogcard from "@/components/(home)/blog/Blogcard";
import TopCourseSection from "@/components/(home)/home/TopCourseSection";
import PageHeroSectionWithRings from "@/components/(home)/pageHeroSectionWithRings";

import axios from "axios";
import Link from "next/link";

export default async function Blog() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/blog-list?page=1&perPage=10`
  );
  const data = result.data;
  if (data?.blogs?.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="bg-secondary/60">
        <PageHeroSectionWithRings
          title="ব্লগসমূহ"
          buttonText=""
          subTitle="নতুনদের জন্য শেখার ও অনুপ্রেরণার উৎস — আমাদের ব্লগসমূহ।"
        />
      </div>
      <div className="container flex flex-col lg:flex-row justify-between mt-5 md:mt-10">
        <div className="w-full mx-auto gap-1 ">
          {data?.blogs.length > 0 ? (
            <>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {" "}
                {data?.blogs?.map((blog: any) => (
                  <Blogcard key={blog._id} blog={blog} />
                ))}
              </div>
              {/* {data?.totalPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={data?.totalPages || 1}
                  onPageChange={setPage}
                />
              )} */}
            </>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 sm:p-10 text-center shadow-sm flex justify-center items-center flex-col mx-auto">
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                📝 এখনো কোনো ব্লগ প্রকাশিত হয়নি
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                এদিকে তেমন কিছু নেই, তবে আমাদের{" "}
                <Link
                  href="/courses"
                  className="text-green-600 dark:text-green-400 font-semibold underline hover:text-green-800 transition"
                >
                  কোর্সসমূহ
                </Link>{" "}
                ঘুরে দেখতে পারো শেখার জন্য!
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        {/* <BlogFilter /> */}
        <TopCourseSection />
      </div>
    </div>
  );
}
