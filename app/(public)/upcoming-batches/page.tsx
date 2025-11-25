import React from "react";
import UpcomingCourse from "./UpcomingCourse";
import PageHeroSectionWithRings from "@/components/(home)/pageHeroSectionWithRings";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Upcoming Batches | আমাদের আসন্ন ব্যাচসমূহ",
    description:
      "আমাদের আসন্ন ব্যাচগুলোর সময়সূচি, কোর্স তথ্য এবং রেজিস্ট্রেশনের আপডেট দেখুন। সীমিত সিট—তাই এখনই নিশ্চিত করুন।",
    openGraph: {
      title: "Upcoming Batches | আমাদের আসন্ন ব্যাচসমূহ",
      description:
        "নতুন ব্যাচ শুরুর সময়সূচি ও রেজিস্ট্রেশন ডিটেইলস দেখে নিন এক নজরে।",
      url: "https://ictbangla.com/upcoming-batches",
      type: "website",
    },
  };
}

const UpcomingBatch = () => {
  return (
    <div className="mt-20 container mx-auto ">
      <PageHeroSectionWithRings
        title="Upcoming Batches"
        buttonText=""
        subTitle="নতুন ব্যাচ শুরু হচ্ছে খুব শীঘ্রই। এখনই প্রস্তুতি নিন আপনার স্কিল উন্নত করার যাত্রা শুরু করার জন্য। সিট সীমিত — তাই আগে রেজিস্ট্রেশন করে জায়গা নিশ্চিত করুন।"
      />

      <UpcomingCourse />
    </div>
  );
};

export default UpcomingBatch;
