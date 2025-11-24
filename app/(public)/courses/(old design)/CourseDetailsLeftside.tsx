/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseDetailsSectionAccordion from "@/components/(home)/coursedetails/CourseDetailsSectionAccordion";
import React from "react";
import ScrollableTabs from "./CourseInfoTab";
import CourseLearningSection from "@/components/(home)/home/additional/CourseLearningSection";
import CourseReviewSection from "@/components/(home)/home/additional/CourseReviewSection";
import MentorSection from "@/components/(home)/home/additional/MentorSection";
import WhatyouLearn from "@/components/(home)/course/WhatyouLearn";
import Requirement from "@/components/(home)/course/Requirement";
import Questionanswer from "@/components/(home)/coursedetails/QuestionanswerAccordion";
import Offersection from "./Offersection";
import CertificateSection from "@/components/(home)/home/additional/CertificateSection";
import offer from "@/public/assets/coursesinglepage/asset 3.png";

const CourseDetailsLeftside = ({
  data,
  skuId,
}: {
  data: any;
  skuId: string;
}) => {
  return (
    <div>
      <div className="">
        <ScrollableTabs tabs={data?.info?.description_sections} />
        {data?.basicInfo?.description && (
          <>
            <div
              className="mt-5 text-[18px] font-[500] text-[#1D2939]"
              dangerouslySetInnerHTML={{
                __html: data?.basicInfo?.description,
              }}
            ></div>
          </>
        )}
      </div>

      {/* additional images  */}
      {skuId === "ai-content-creation-with-capcut-live-course" && (
        <>
          <Offersection image={offer} />
          <CourseLearningSection />
          <CourseReviewSection />
          <MentorSection />
          <CertificateSection />
        </>
      )}
      <div className="border-b border-[#d1fadf] pb-10 mt-10">
        <WhatyouLearn data={data?.info?.outcomes} />
      </div>

      <div className="border-b border-[#d1fadf] pb-10 mt-10">
        <Requirement data={data?.info?.requirement} />
      </div>

      <div className="pb-10 mt-10">
        <h2 className="font-bold mb-5 text-[#1D2939]">FAQ – সাধারণ জিজ্ঞাসা</h2>
        <Questionanswer items={data?.info?.faq} />
      </div>

      <div>
        {data?.sections?.length > 0 && (
          <CourseDetailsSectionAccordion sections={data?.sections} />
        )}
      </div>
    </div>
  );
};

export default CourseDetailsLeftside;
