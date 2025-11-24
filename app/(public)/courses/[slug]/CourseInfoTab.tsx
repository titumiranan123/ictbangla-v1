"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollableTabs from "./ScrollableTabs";
import CourseAbout from "./(tabs)/CourseAbout";
import Coursecurriculam from "./(tabs)/Coursecurriculam";
import CourseInstructor from "./(tabs)/CourseInstructor";
import PreviewClass from "./PreviewClass";
import StudentReview from "./(tabs)/StudentReview";
import AskingCourse from "./(tabs)/AskingCourse";
import CertificateSection from "./(tabs)/CertificateSection";
import Courseproject from "./(tabs)/Courseproject";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseInfoTab = ({ tabs, data }: { tabs: string[]; data: any }) => {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Ensure refs length equals tabs length
  useEffect(() => {
    if (tabs) {
      sectionRefs.current = sectionRefs.current.slice(0, tabs.length);
    }
  }, [tabs]);

  const handleTabClick = (index: number) => {
    setActive(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Guard: if no valid content
  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="mb-8 max-w-[882px] w-full">
      {/* TOP TAB BAR */}
      <ScrollableTabs
        tabs={tabs}
        activeIndex={active}
        onTabClick={handleTabClick}
      />
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((dt: any) => {
          return (
            <>
              {dt.tabe_name === "কোর্স সম্পর্কে" && (
                <CourseAbout description={dt?.description} />
              )}
              {dt.tabe_name === "কারিকুলাম" && <Coursecurriculam data={dt} />}
              {dt.tabe_name === "ইন্সট্রাক্টর" && <CourseInstructor />}
              {dt.tabe_name === "ডেমো ক্লাস" && <PreviewClass />}
              {dt.tabe_name === "রিভিউ" && <StudentReview />}
              {dt.tabe_name === "জিজ্ঞাসা" && <AskingCourse data={dt} />}
              {dt.tabe_name === "সার্টিফিকেট" && <CertificateSection />}
              {dt.tabe_name === "প্রজেক্ট" && <Courseproject data={dt} />}
            </>
          );
        })
      }
    </div>
  );
};

export default CourseInfoTab;
