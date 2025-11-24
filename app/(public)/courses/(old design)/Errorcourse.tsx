import TopCourseSection from "@/components/(home)/home/TopCourseSection";
import React from "react";

const Errorcourse = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 w-full mt-20">
      <h1 className="text-2xl font-bold text-red-500 mb-4">
        🚫 কোনো কোর্স পাওয়া যায়নি
      </h1>
      <p className="text-gray-600 text-center mb-8">
        আপনি যে কোর্সটি খুঁজছেন সেটি এখন পাওয়া যাচ্ছে না। অনুগ্রহ করে পরে আবার
        চেষ্টা করুন বা আমাদের অন্য কোর্সগুলো দেখুন।
      </p>

      {/* নিচে সাজেশন কনটেন্ট */}
      <div className="w-full  space-y-6">
        <TopCourseSection />
      </div>
    </div>
  );
};

export default Errorcourse;
