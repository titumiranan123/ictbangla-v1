import Image from "next/image";
import AdditionSection from "./additionSection";
import CertificateSection from "./Certificatesection";
import Herosection from "./Herosection";
import "./home.style.css";
import HomeAboutstate from "./mobile/HomeAboutstate";
import MobileAdditionSection from "./mobile/MobileAdditionSection";
import MobileCertificateSection from "./mobile/MobileCertificateSection";
import MobileInfluncerTestimonial from "./mobile/MobileInfluncerTestimonial";
import MobilePaymentMethod from "./mobile/MobilePaymentMethod";
import MobileTeacher from "./mobile/MobileTeacher";
import PartnerCompanyFast from "./PartnerCompanyFast";
import Paymentmethod from "./Paymentmethod";
import RecordedCourse from "./RecordedCourse";
import StudentReviewSection from "./studentReviewSection";
import TeacherJoin from "./teacherJoin";
import TopCourseSection from "./TopCourseSection";
import UpcomingCourse from "./UpcomingSection";
import Aboutstate from "../(additional pages)/about-us/Aboutstate";
import HomeTestimonials from "./HomeTestimonial";
import Aboutcomunity from "../(additional pages)/about-us/Aboutcomunity";
import CourseSlider from "./SwiperTab";
import axios from "axios";
import HowItWorkSection from "./howItWorkSection";
import Successsection from "@/components/(home)/home/Successsection";
import MobileHerosection from "./MobileHerosection";
import MobileTopCourse from "./MobileTopCourse";
import MobileUpcomingbatch from "./MobileUpcomingbatch";
import MobileRecordedCourse from "./MobileRecordedCourse";
import MobileCoursebyCategory from "./MobileCoursebyCategory";
import StepByStepBanner from "./Homestepchangetext";

const HomePage = async () => {
  const result = await axios.get(
    `https://api.ictbangla.com/v1/website/get-course/list?page=1&perPage=30`
  );

  const resultcat = await axios.get(
    `https://api.ictbangla.com/v1/website/category-list`
  );

  return (
    <>
      <section className="xl:hidden block">
        <MobileHerosection />
        <div className="container mt-8 mb-8">
          <div className=" w-full py-3 lg:px-0 px-1 bg-[#F3F4F6] rounded-lg ">
            <StepByStepBanner />
          </div>
        </div>
        <MobileTopCourse />
        <MobileUpcomingbatch />
        <MobileRecordedCourse />
        <MobileCoursebyCategory
          categories={resultcat?.data}
          courseData={result?.data?.response}
        />

        <HomeAboutstate />
        <MobileTeacher />
        <MobileInfluncerTestimonial />
        {/* <Ourpatners /> */}
        <MobileAdditionSection />
        <Successsection />
        <MobileCertificateSection />
        {/* <MobileBlogSection /> */}
        <MobilePaymentMethod />
        <Aboutcomunity />
        {/* Hero Image with Layout Stability */}
        <div className="container lg:h-[480px] overflow-hidden flex justify-center items-center mt-10 ">
          <Image
            src={"/assets/aboutlocation.svg"}
            alt={"about"}
            width={900}
            height={400}
            className="lg:h-[400px] max-w-[900px] w-full"
            layout="intrinsic" // Ensures image dimensions are known before loading
            priority // Preloads the image for faster display
          />
        </div>
      </section>
      <section className="xl:block hidden ">
        <Herosection />
        <div className="container mt-8">
          <div className="   w-full py-3 bg-[#F3F4F6] rounded-lg ">
            <StepByStepBanner />
          </div>
        </div>
        <TopCourseSection />
        <UpcomingCourse />
        <RecordedCourse />
        {/* <LearningFromNow /> */}
        <CourseSlider
          categories={resultcat.data}
          courseData={result.data.response}
        />
        <Aboutstate />
        {/* <SkillTravelSection /> */}
        <PartnerCompanyFast />

        {/* <TeachersSection /> */}
        <HomeTestimonials />
        <HowItWorkSection />

        {/* <Ourpatners /> */}
        <StudentReviewSection />
        <AdditionSection />
        <Successsection />
        <CertificateSection />
        {/* <BlogsSection /> */}
        <Paymentmethod />
        <TeacherJoin />
        <Aboutcomunity />
        {/* Hero Image with Layout Stability */}
        <div className="container h-[480px] overflow-hidden flex justify-center items-center mt-10 ">
          <Image
            src={"/assets/aboutlocation.svg"}
            alt={"about"}
            width={900}
            height={400}
            className="h-[400px] w-[900px]"
            layout="intrinsic" // Ensures image dimensions are known before loading
            priority // Preloads the image for faster display
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
