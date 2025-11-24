/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import UpdateContentFormModal from "../instructorDashboard/UpdateSection";
import AddLessonForm from "../instructorDashboard/AddLesson";
import UpdateLessonForm from "../instructorDashboard/UpdateLesson";
import { ISection } from "@/interface/interface";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";
import { showConfirmToast } from "@/utils/ShowConfirmToast";

interface AccordionProps {
  items: AccordionItem[];
  handleDeleteSection: (sectionId: string) => Promise<void>;
  refetch: () => void;
  courseId: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Lesson {
  _id?: string;
  courseId?: string;
  sectionId?: string;
  title: string;
  description: string;
  video: string;
  duration: number;
  isFree: boolean;
  isPreview: boolean;
  isLocked: boolean;
  videoId: any;
  attachments: string[];
  class_link: string;
  date: string;
  start_time: string;
  is_class_end: boolean;
  quiz: {
    questions: QuizQuestion[];
    totalMarks: number;
    passingMarks: number;
  };
}

interface AccordionItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  lessons: Lesson[];
}

const SectionAccordion: React.FC<AccordionProps> = ({
  items,
  handleDeleteSection,
  refetch,
  courseId,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [contentHeights, setContentHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Separate modal states
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [showUpdateLessonModal, setShowUpdateLessonModal] = useState(false);
  const [showUpdateSectionModal, setShowUpdateSectionModal] = useState(false);

  const [currentSection, setCurrentSection] = useState<ISection | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);

  useEffect(() => {
    const newHeights = contentRefs.current.map((el) =>
      el ? el.scrollHeight : 0
    );
    setContentHeights(newHeights);
  }, [items, openIndex]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleDeleteLesson = async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      showConfirmToast(id, async () => {
        try {
          const res = await api_url.delete(
            `/v1/instructor/delete-lesson/${id}`
          );
          if (res.status === 201 || res.status === 200) {
            refetch();
            toast.success("Lesson deleted successfully");
          } else {
            toast.error("Lesson deletion failed");
          }
        } catch {
          toast.error("Something went wrong while deleting");
        } finally {
          resolve();
        }
      });
    });
  };

  const handleOpenUpdateSection = (section: ISection) => {
    setCurrentSection(section);
    setShowUpdateSectionModal(true);
  };

  const handleOpenAddLesson = (section: ISection) => {
    setCurrentSection(section);
    setShowAddLessonModal(true);
    setTimeout(() => {
      const newHeights = contentRefs.current.map((el) =>
        el ? el.scrollHeight : 0
      );
      setContentHeights(newHeights);
    }, 100);
  };

  const handleOpenUpdateLesson = (lesson: Lesson) => {
    setCurrentLesson(lesson);
    setShowUpdateLessonModal(true);
  };

  const closeAllModals = () => {
    setShowAddLessonModal(false);
    setShowUpdateLessonModal(false);
    setShowUpdateSectionModal(false);
    setCurrentLesson(null);
    setCurrentSection(null);
  };

  return (
    <div>
      {items?.length > 0 ? (
        items.map((item, index) => (
          <div
            key={item._id}
            className={`${
              items.length !== index + 1 ? "border-b-2 border-gray-200" : ""
            } border px-3 bg-secondary rounded-xl py-3 mt-4`}
          >
            <div
              className="cursor-pointer p-1 py-4 flex justify-between items-center"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
            >
              <h3 className="text-xl flex items-center gap-2">
                <span
                  className={`w-1 h-5 rounded-md transition duration-300 ${
                    openIndex === index ? "bg-orange-400" : "bg-[#131836]"
                  }`}
                ></span>
                {item.title}
              </h3>
              <div className="flex items-center gap-5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenUpdateSection(item);
                  }}
                  className="w-6 h-6 bg-secondary flex justify-center items-center p-1 rounded-full"
                  title="Edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    fill="none"
                    className="w-5 h-5 fill-black text-black hover:text-red-500 transition-colors duration-300"
                  >
                    <path d="m4.5,1h5.515c.334,0,.663.03.985.088v5.412c0,1.378,1.122,2.5,2.5,2.5h5.411c.033.178.057.359.071.541.022.275.274.479.539.458.275-.022.48-.264.458-.539-.125-1.536-.793-2.981-1.883-4.07l-3.485-3.485c-1.228-1.228-2.86-1.904-4.596-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h4c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-4c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5Zm12.889,5.096c.545.545.965,1.195,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368c.706.273,1.353.692,1.904,1.243l3.485,3.485Zm5.878,5.636c-.943-.944-2.592-.944-3.535,0l-7.707,7.707c-.661.661-1.025,1.54-1.025,2.475v1.586c0,.276.224.5.5.5h1.586c.935,0,1.814-.364,2.475-1.025l7.707-7.707c.472-.472.732-1.1.732-1.768s-.26-1.296-.732-1.768Zm-.707,2.828l-7.707,7.707c-.472.472-1.1.732-1.768.732h-1.086v-1.086c0-.668.26-1.295.732-1.768l7.707-7.707c.566-.566,1.555-.566,2.121,0,.283.283.439.66.439,1.061s-.156.777-.439,1.061Z" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSection(item._id);
                  }}
                  className="w-7 h-7 bg-secondary flex justify-center items-center p-1 rounded-full"
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    fill="none"
                    className="w-6 h-6 fill-black text-black hover:text-red-500 transition-colors duration-300"
                  >
                    <path d="m15.854,10.854l-3.146,3.146,3.146,3.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-3.146-3.146-3.146,3.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l3.146-3.146-3.146-3.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l3.146,3.146,3.146-3.146c.195-.195.512-.195.707,0s.195.512,0,.707Zm7.146-6.354c0,.276-.224.5-.5.5h-1.5c0,.015,0,.03-.002.046l-1.37,14.867c-.215,2.33-2.142,4.087-4.481,4.087h-6.272c-2.337,0-4.263-1.754-4.48-4.08l-1.392-14.873c-.001-.016-.002-.031-.002-.047h-1.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5.028c.25-2.247,2.16-4,4.472-4h2c2.312,0,4.223,1.753,4.472,4h5.028c.276,0,.5.224.5.5Zm-15.464-.5h8.928c-.243-1.694-1.704-3-3.464-3h-2c-1.76,0-3.221,1.306-3.464,3Zm12.462,1H4.002l1.387,14.826c.168,1.81,1.667,3.174,3.484,3.174h6.272c1.82,0,3.318-1.366,3.485-3.179l1.366-14.821Z" />
                  </svg>
                </button>
                <div
                  className="w-6 h-6 bg-secondary flex justify-center items-center p-1 rounded-full"
                  title="Expand/Collapse"
                >
                  <svg
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "-rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              style={{
                maxHeight:
                  openIndex === index ? `${contentHeights[index]}px` : "0px",
                transition: "max-height 0.3s ease, opacity 0.3s ease",
                opacity: openIndex === index ? 1 : 0,
                overflow: "hidden",
              }}
              className="px-4 py-1"
            >
              {item.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson._id || lessonIndex}
                  className="mb-4 p-4 border rounded-md shadow-sm flex justify-between"
                >
                  <div>
                    <p className="text-lg font-semibold mb-1">{lesson.title}</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${lesson.description?.slice(0, 100)}.......`,
                      }}
                      className="text-sm text-gray-600 mb-2"
                    ></div>
                  </div>
                  <div className="flex gap-4 justify-end items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenUpdateLesson(lesson);
                      }}
                      className="px-3 py-1 bg-primary text-white rounded hover:bg-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteLesson(lesson._id as string);
                      }}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenAddLesson(item);
                  }}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Add Lesson
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          No section found ☹️. Please add section.
        </div>
      )}

      {/* Modals */}
      {showUpdateSectionModal && currentSection && (
        <UpdateContentFormModal
          onClose={closeAllModals}
          refetch={refetch}
          data={currentSection}
        />
      )}

      {showUpdateLessonModal && currentLesson && (
        <UpdateLessonForm
          lessonData={currentLesson}
          onClose={closeAllModals}
          refetch={refetch}
        />
      )}

      {showAddLessonModal && currentSection && (
        <AddLessonForm
          courseId={courseId}
          sectionId={currentSection._id}
          onClose={closeAllModals}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default SectionAccordion;
