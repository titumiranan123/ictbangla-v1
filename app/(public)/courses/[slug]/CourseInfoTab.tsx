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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Ensure refs length equals data length
  useEffect(() => {
    if (data) {
      sectionRefs.current = sectionRefs.current.slice(0, data.length);
    }
  }, [data]);

  // Main Intersection Observer
  useEffect(() => {
    // Disconnect previous observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Debug: Check all refs
    console.log("=== Setting up observer ===");
    sectionRefs.current.forEach((ref, index) => {
      console.log(
        `Section ${index} (${data[index]?.tabe_name}):`,
        ref ? "✓ Has ref" : "✗ No ref"
      );
    });

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        console.log("Observer triggered, entries:", entries.length);

        // Skip if user just clicked a tab
        if (isScrollingRef.current) {
          console.log("Skipping - user is clicking tab");
          return;
        }

        // Track all visible sections with their details
        const visibleSections: Array<{
          index: number;
          ratio: number;
          top: number;
          bottom: number;
          height: number;
          name: string;
        }> = [];

        entries.forEach((entry) => {
          const index = sectionRefs.current.findIndex(
            (ref) => ref === entry.target
          );

          console.log(
            `Entry: ${data[index]?.tabe_name}, isIntersecting: ${
              entry.isIntersecting
            }, ratio: ${entry.intersectionRatio.toFixed(2)}`
          );

          if (index !== -1 && entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            visibleSections.push({
              index,
              ratio: entry.intersectionRatio,
              top: rect.top,
              bottom: rect.bottom,
              height: rect.height,
              name: data[index]?.tabe_name || "",
            });
          }
        });

        console.log(
          "Visible sections:",
          visibleSections.map((s) => s.name)
        );

        // If we have visible sections, find the best one to highlight
        if (visibleSections.length > 0) {
          // Define the "active zone" - just below the sticky header
          // Sticky header is ~140px, so active zone starts there
          const activeZoneTop = 140;
          const activeZoneBottom = window.innerHeight * 0.4;

          // Find sections that have their top edge in or near the active zone
          const sectionsInActiveZone = visibleSections.filter(
            (section) =>
              section.top <= activeZoneBottom && section.bottom > activeZoneTop
          );

          let bestSection;

          if (sectionsInActiveZone.length > 0) {
            // Prefer the section whose top is closest to (but just below) the sticky header
            bestSection = sectionsInActiveZone.reduce((prev, current) => {
              const currentDist = Math.abs(current.top - activeZoneTop);
              const prevDist = Math.abs(prev.top - activeZoneTop);

              // If current section's top is closer to activeZoneTop, prefer it
              if (currentDist < prevDist) {
                return current;
              }

              // If distances are similar, prefer the one that's below (not above) header
              if (Math.abs(currentDist - prevDist) < 50) {
                if (
                  current.top >= activeZoneTop - 20 &&
                  prev.top < activeZoneTop - 20
                ) {
                  return current;
                }
                if (
                  prev.top >= activeZoneTop - 20 &&
                  current.top < activeZoneTop - 20
                ) {
                  return prev;
                }
              }

              return prev;
            });
          } else {
            // Fallback: choose the section that's most visible
            bestSection = visibleSections.reduce((prev, current) =>
              current.ratio > prev.ratio ? current : prev
            );
          }

          console.log(
            "Best section selected:",
            bestSection.name,
            "Index:",
            bestSection.index
          );
          setActive(bestSection.index);
        }
      },
      {
        // Use fewer thresholds for better performance with large sections
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
        // Match the sticky header height (top-20 = 80px + tab height ~60px = ~140px total)
        rootMargin: "-140px 0px -50% 0px",
      }
    );

    // Observe all valid sections
    const validRefs = sectionRefs.current.filter((ref) => ref !== null);
    console.log("Observing", validRefs.length, "sections");

    validRefs.forEach((ref) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [data]);

  const handleTabClick = (index: number): void => {
    setActive(index);
    isScrollingRef.current = true;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Match with sticky header: top-20 (80px) + tab bar (~60px) = 140px
    const headerOffset = 140;
    const element = sectionRefs.current[index];

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset scroll flag after smooth scroll completes
      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
    <div className="mb-8 max-w-[982px] w-full relative">
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
            className="scroll-mt-[140px] min-h-[200px]"
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
