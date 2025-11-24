import AboutFirstSection from "@/components/(home)/about/old/AboutFirstSection";
import Aboutinstructors from "@/components/(home)/about/old/Aboutinstructors";
import Abouts from "@/components/(home)/about/old/Abouts";
import OurVision from "@/components/(home)/about/old/OurVision";
import Pagetitle from "@/components/(home)/shared/pagetitle";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | আইসিটি বাংলা",
  description:
    "আইসিটি বাংলা প্ল্যাটফর্মের উদ্দেশ্য, লক্ষ্য এবং আমাদের টিম সম্পর্কে জানুন",
};
const Aboutus = () => {
  return (
    <div className="overflow-hidden">
      <Pagetitle
        pageName="about-us"
        pagePragraph="শিখতে এবং শিখাতেই বদলে দিন অন্যের সাথে নিজের জীবনও "
        pageTitle="আমাদের সম্পর্কে "
      />
      <AboutFirstSection />
      <Abouts />
      <OurVision />
      <Aboutinstructors />
      {/* <Testimonials /> */}
      {/* <Joinnow /> */}
    </div>
  );
};

export default Aboutus;
