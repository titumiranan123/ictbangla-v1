import Image from "next/image";
import AdditionSection from "./additionSection";
import CertificateSection from "./Certificatesection";
import Herosection from "./Herosection";
import "./home.style.css";
import HomeAboutstate from "./mobile/HomeAboutstate";
import MobileAboutCommunity from "./mobile/MobileAboutComunity";
import MobileAdditionSection from "./mobile/MobileAdditionSection";
import MobileCertificateSection from "./mobile/MobileCertificateSection";
import MobileCoursebyCategory from "./mobile/MobileCoursebyCategory";
import MobileHerosection from "./mobile/MobileHerosection";
import MobileInfluncerTestimonial from "./mobile/MobileInfluncerTestimonial";
import MobilePaymentMethod from "./mobile/MobilePaymentMethod";
import MobileRecordedCourse from "./mobile/MobileRecordedCourse";
import MobileSkillTravelSection from "./mobile/MobileSkillTravelSection";
import MobileSuccessStory from "./mobile/MobileSucessStory";
import MobileTeacher from "./mobile/MobileTeacher";
import MobileTopCourse from "./mobile/MobileTopCourse";
import MobileUpcomingbatch from "./mobile/MobileUpcomingbatch";
import PartnerCompanyFast from "./PartnerCompanyFast";
import Paymentmethod from "./Paymentmethod";
import RecordedCourse from "./RecordedCourse";
import StudentReviewSection from "./studentReviewSection";
import SuccessStory from "./successStory";
import TeacherJoin from "./teacherJoin";
import TopCourseSection from "./TopCourseSection";
import UpcomingCourse from "./UpcomingSection";
import Aboutstate from "../(additional pages)/about-us/Aboutstate";
import HomeTestimonials from "./HomeTestimonial";
import Ourpatners from "../(additional pages)/about-us/Ourpatners";
import Aboutcomunity from "../(additional pages)/about-us/Aboutcomunity";
import CourseSlider from "./SwiperTab";
import axios from "axios";
import HowItWorkSection from "./howItWorkSection";

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
        <p className="container mt-8  w-full py-4 lg:py-3 text-center bg-[#F3F4F6] rounded-lg text-sm md:text-base lg:text-xl text-[#8A8A8A] font-medium tracking-[0.4px] whitespace-nowrap">
          All Our banners are Open, Please click to view more
        </p>
        <MobileTopCourse />
        <MobileUpcomingbatch />
        <MobileRecordedCourse />
        <MobileCoursebyCategory
          categories={resultcat.data}
          courseData={result.data.response}
        />
        <MobileSkillTravelSection />
        <HomeAboutstate />

        <MobileTeacher />
        <MobileInfluncerTestimonial />
        {/* <Ourpatners /> */}
        <MobileAdditionSection />
        <MobileSuccessStory />
        <MobileCertificateSection />
        {/* <MobileBlogSection /> */}
        <MobilePaymentMethod />
        <MobileAboutCommunity />
      </section>
      <section className="xl:block hidden ">
        <Herosection />
        <div className="container mt-8">
          <div className="   w-full py-3 bg-[#F3F4F6] rounded-lg ">
            <p className=" text-xl text-[#8A8A8A] font-medium  leading-[26px] english-text ms-[118px] ">
              All Our banners are Open, Please click to view more
            </p>
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
        <SuccessStory />
        <CertificateSection />
        {/* <BlogsSection /> */}
        <Paymentmethod />
        <TeacherJoin />
        <Aboutcomunity />
        {/* Hero Image with Layout Stability */}
        <div className="container mt-20">
          <Image
            src={"/assets/aboutlocation.svg"}
            alt={"about"}
            width={1240}
            height={450}
            layout="intrinsic" // Ensures image dimensions are known before loading
            priority // Preloads the image for faster display
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
