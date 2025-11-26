import Herosection from "@/components/(home)/home/Herosection";
import CourseSlider from "@/components/(home)/home/SwiperTab";
import WhyStudyWithUs from "@/components/(home)/home/WhyStudyWithUs";
import Statesection from "@/components/(home)/home/Statesection";
import PartnerCompanyFast from "@/components/(home)/home/OurPatner";
import Aboutinstructors from "@/components/(home)/about/old/Aboutinstructors";
import HomeTestimonials from "@/components/(home)/home/HomeTestimonial";
import Studenttestimonialsection from "@/components/(home)/home/Studenttestimonialsection";
import Admission from "@/components/(home)/home/Admission";
import Successsection from "@/components/(home)/home/Successsection";
import Certificatesection from "@/components/(home)/home/Certificatesection";
import LatestBlog from "@/components/(home)/home/LatestSection";
import BecomeAInstructor from "@/components/(home)/home/BecomeAInstructor";
import Paymentmethod from "@/components/(home)/paymentMethod/Paymentmethod";
import Callinfo from "@/components/(home)/home/Callinfo";
import Supportsection from "@/components/(home)/home/Supportsection";
import RecordedCourse from "@/components/(home)/home/RecordedCourse";
import TopCourseSection from "@/components/(home)/home/TopCourseSection";
import UpcomingCourse from "@/components/(home)/home/UpcomingSection";
import { headers } from "next/headers";
import MobileHeader from "@/components/(home)/mobile/MobileHeader";
import Footerpop from "@/components/(home)/pop/Footerpop";

const Home = async () => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  let deviceType: "desktop" | "mobile" | "tablet" = "desktop";

  if (/mobile/i.test(userAgent)) {
    deviceType = "mobile";
  } else if (/ipad|tablet|playbook|silk/i.test(userAgent)) {
    deviceType = "tablet";
  } else {
    deviceType = "desktop";
  }

  return (
    <div className="relative z-10 overflow-hidden">
      {deviceType === "mobile" ? <MobileHeader /> : <Herosection />}
      {/* Sections */}
      <div id="target">
        <TopCourseSection />
      </div>
      <UpcomingCourse />
      <RecordedCourse />
      <CourseSlider />
      <WhyStudyWithUs />
      <Statesection />
      <PartnerCompanyFast />
      <Aboutinstructors />
      <HomeTestimonials />
      {/* <Ourpatners /> */}
      <Studenttestimonialsection />
      <Admission />
      <Successsection />
      <Certificatesection />
      <LatestBlog />
      <BecomeAInstructor />
      <Paymentmethod />
      <Callinfo />
      <Supportsection />
      <Footerpop />
    </div>
  );
};

export default Home;
