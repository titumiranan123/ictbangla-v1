/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useEnrolledCourse from "@/hooks/student/useEnrolledCourse";
// import useSectionList from "@/hooks/studentDashboard/useSectionList";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import TabContent from "./TabContent";
import useLessonVideo from "@/hooks/student/useLessonVideo";
import SectionsListDash from "./SectionsListdash";
import { api_url } from "@/hooks/apiurl";

const CoursePlayer = () => {
  const { slug } = useParams();

  const {
    data: sectionData,
    isLoading: sectionLoading,
    refetch: sectionRefetch,
  } = useEnrolledCourse(slug as string);
  // console.log("data ============>", sectionData);
  const [currentLesson, setCurrentLesson] = useState<any>(null);
  useEffect(() => {
    if (sectionData?.sections?.length > 0) {
      setCurrentLesson(sectionData?.sections[0]?.lessons?.[0]);
    }
  }, [sectionData]);
  const [activeTab, setActiveTab] = useState("lesson");
  const handleLessonClick = (lesson: any) => {
    setCurrentLesson(lesson);
  };
  // Flatten all lessons across sections
  const allLessons =
    sectionData?.sections?.flatMap((section: any) => section.lessons) ?? [];

  const { data, isLoading } = useLessonVideo(currentLesson?._id);
  const handleNext = async () => {
    if (!currentLesson) return;
    const currentIndex = allLessons.findIndex(
      (lesson: any) => lesson._id === currentLesson._id
    );
    if (currentIndex < allLessons.length - 1) {
      setCurrentLesson(allLessons[currentIndex + 1]);
    }
    const res = await api_url.post(
      `/v1/user/play-new-class/${currentLesson._id}`,
      {
        courseId: sectionData?.course_id,
        purchaseId: sectionData?.purchase_id,
      }
    );
    if (res.status === 201 || res.status === 200) {
      sectionRefetch();
    }
    // console.log(res);
  };
  const handlePrevious = () => {
    if (!currentLesson) return;
    const currentIndex = allLessons.findIndex(
      (lesson: any) => lesson._id === currentLesson._id
    );
    if (currentIndex > 0) {
      setCurrentLesson(allLessons[currentIndex - 1]);
    }
  };

  return (
    <div className="w-full flex lg:flex-row flex-col gap-5 mt-8">
      {/* Left Panel: Video Player */}
      <div className="lg:w-2/3 w-full">
        <div className="sticky top-0 pb-4">
          {isLoading ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {currentLesson?.title}
              </h2>
              <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 animate-pulse">
                <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
              </div>
              <div className="flex justify-end items-center mt-2 gap-2">
                <button className="py-2 px-4 rounded-lg border border-slate-500 disabled:opacity-50 max-w-[120px] w-full h-[40px] animate-pulse bg-slate-500"></button>
                <button className="py-2 px-4 rounded-lg border border-slate-500 disabled:opacity-50 max-w-[120px] w-full h-[40px] animate-pulse bg-slate-500"></button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {currentLesson?.title}
              </h2>
              {data?.videoId?.url || data?.video ? (
                <div>
                  <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden border border-gray-800 bg-black">
                    <ReactPlayer
                      url={data?.videoId?.url ?? data?.video}
                      className="react-player"
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={true}
                      config={{
                        youtube: {
                          playerVars: {
                            modestbranding: 1,
                            rel: 0,
                            enablejsapi: 1,
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="flex justify-end items-center mt-5 gap-2">
                    <button
                      onClick={handlePrevious}
                      disabled={
                        allLessons.findIndex(
                          (l: any) => l._id === currentLesson?._id
                        ) === 0
                      }
                      className="py-2 px-4 rounded-lg border border-slate-500 disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      // disabled={
                      //   allLessons.findIndex(
                      //     (l: any) => l._id === currentLesson?._id
                      //   ) ===
                      //   allLessons.length - 1
                      // }
                      className="py-2 px-4 rounded-lg border border-slate-500 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <p
                  className="text-white p-4 flex justify-center items-center h-full text-2xl
              "
                >
                  কোনো ভিডিও পাওয়া যাইনি ।
                  <br />
                  ক্লাস সম্পর্কিত তথ্য নিচে দেওয়া আছে ।
                </p>
              )}
            </div>
          )}

          {/* Lesson Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("lesson")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "lesson"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Lesson Content
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "resources"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Resources
              </button>
              {currentLesson?.quiz?.length > 0 && (
                <button
                  onClick={() => setActiveTab("quiz")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "quiz"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Quiz
                </button>
              )}
            </nav>
          </div>
          <TabContent activeTab={activeTab} currentLesson={currentLesson} />
        </div>
      </div>
      {/* Right Panel: Section & Lessons */}
      <div className="lg:w-1/3 p-4 overflow-y-auto border-l border-gray-200">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Course Content
          </h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{sectionData?.totalLesson ?? 0} Lessons</span>
            <span className="mx-2">•</span>
            <span>
              {sectionData?.totalLesson && sectionData.totalLesson > 0
                ? `${Math.round(
                    ((sectionData.completedLesson ?? 0) /
                      sectionData.totalLesson) *
                      100
                  )}% Complete`
                : "0% Complete"}
            </span>
          </div>
        </div>

        <SectionsListDash
          sectionData={sectionData?.sections}
          handleLessonClick={handleLessonClick}
          currentLesson={currentLesson}
          isLoading={sectionLoading}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
