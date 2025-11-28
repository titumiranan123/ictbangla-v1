/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollableTabs from "./ScrollableTabs";
import CourseAbout from "./(tabs)/CourseAbout";
import Coursecurriculam from "./(tabs)/Coursecurriculam";
import CourseInstructor from "./(tabs)/CourseInstructor";
import PreviewClass from "./PreviewClass";
import AskingCourse from "./(tabs)/AskingCourse";
import CertificateSection from "./(tabs)/CertificateSection";
import Courseproject from "./(tabs)/Courseproject";
import CourseStudentReview from "./(tabs)/CourseStudentreview";

// Define proper types
interface TabData {
  tabe_name: string;
  description?: string;
  [key: string]: unknown;
}

interface CourseInfoTabProps {
  tabs: string[];
  data: TabData[];
  tools?: any;
  othersContent?: any;
  id: string;
}

const CourseInfoTab: React.FC<CourseInfoTabProps> = ({
  tabs,
  data,
  tools,
  othersContent,
  id,
}) => {
  const [active, setActive] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef<boolean>(false);

  // Ensure refs length equals data length
  useEffect(() => {
    if (data) {
      sectionRefs.current = sectionRefs.current.slice(0, data.length);
    }
  }, [data]);

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only update active state if user is not clicking tabs
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActive(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [data]);

  const handleTabClick = (index: number): void => {
    setActive(index);
    isScrollingRef.current = true;

    const headerOffset = 100; // Adjust based on your sticky header height
    const element = sectionRefs.current[index];

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset scroll flag after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const renderSection = (dt: TabData): React.ReactNode => {
    if (dt.tabe_name === "কোর্স সম্পর্কে") {
      return (
        <CourseAbout
          description={dt?.description ?? ""}
          othersContent={othersContent}
          id={id}
        />
      );
    }
    if (dt.tabe_name === "কারিকুলাম") {
      return <Coursecurriculam data={dt} tools={tools} />;
    }
    if (dt.tabe_name === "ইন্সট্রাক্টর") {
      return <CourseInstructor instructors={dt} />;
    }
    if (dt.tabe_name === "ডেমো ক্লাস") {
      return <PreviewClass data={dt} />;
    }
    if (dt.tabe_name === "রিভিউ") {
      return <CourseStudentReview reviews={dt} />;
    }
    if (dt.tabe_name === "জিজ্ঞাসা") {
      return <AskingCourse data={dt} />;
    }
    if (dt.tabe_name === "সার্টিফিকেট") {
      return <CertificateSection />;
    }
    if (dt.tabe_name === "প্রজেক্ট") {
      return <Courseproject data={dt} />;
    }
    return null;
  };

  if (!tabs || tabs.length === 0 || !data || data.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 max-w-[982px] w-full relative ">
      {/* TOP TAB BAR */}
      <div className="top-20 sticky z-20 bg-white/10 pb-2 backdrop-blur-lg">
        <ScrollableTabs
          tabs={tabs}
          activeIndex={active}
          onTabClick={handleTabClick}
        />
      </div>

      {/* SECTIONS */}
      <div className="mt-2 space-y-8">
        {data?.map((dt: TabData, index: number) => (
          <div
            key={`${dt.tabe_name}-${index}`}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="scroll-mt-24"
            id={`section-${index}`}
          >
            {renderSection(dt)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfoTab;
