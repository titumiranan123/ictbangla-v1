"use client";
import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiPlay,
  FiLock,
  FiX,
} from "react-icons/fi";
import ReactPlayer from "react-player";

interface Lesson {
  _id: string;
  sectionId?: string;
  title: string;
  duration: number;
  isFree: boolean;
  isLocked?: boolean;
  isPreview?: boolean;
  videoId?: {
    url: string;
  };
  video: string;
}

interface Section {
  _id: string;
  title: string;
  slug: string;
  courseId: string;
  lessons: Lesson[];
}

const CourseDetailsSectionAccordion: React.FC<{ sections: Section[] }> = ({
  sections,
}) => {
  // Process sections with default values
  const processedSections = sections?.map((section) => ({
    ...section,
    lessons: section?.lessons?.map((lesson) => ({
      ...lesson,
      isLocked: lesson?.isLocked ?? !lesson?.isFree,
      isPreview: lesson?.isPreview ?? false,
    })),
  }));

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLessonClick = (lesson: Lesson) => {
    setShowPreviewModal(true);
    setCurrentLesson(lesson);
  };

  if (!processedSections) {
    return null;
  }

  return (
    <div className="w-full overflow-y-auto">
      <h2 className="mb-6 text-[#1D2939]">Content Section</h2>
      <div className="space-y-2">
        {processedSections?.map((section) => (
          <div key={section?._id} className="border rounded-lg overflow-hidden">
            <div
              onClick={() => toggleSection(section?._id)}
              className={`flex justify-between items-center p-4 cursor-pointer ${
                expandedSections[section?._id]
                  ? "bg-secondary"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-blue-100 text-primary">
                  {section?.title.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    {section?.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {section?.lessons?.length} Lessons
                  </p>
                </div>
              </div>
              {expandedSections[section?._id] ? (
                <FiChevronUp className="text-gray-500" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </div>

            {expandedSections[section?._id] && (
              <div className="p-4 bg-gray-50 border-t border-secondary space-y-3">
                {section?.lessons?.length > 0 ? (
                  section?.lessons?.map((lesson) => (
                    <div
                      key={lesson?._id}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        handleLessonClick(lesson);
                      }}
                      className={`flex items-center p-3 rounded-md transition cursor-pointer ${
                        currentLesson?._id === lesson?._id
                          ? "bg-blue-100 border border-blue-200"
                          : "bg-white border border-gray-200 hover:border-secondary"
                      } ${
                        lesson?.isLocked && !lesson?.isPreview
                          ? "opacity-70 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0 mr-3">
                        <div
                          className={`p-2 rounded-full ${
                            lesson?.isLocked && !lesson?.isPreview
                              ? "bg-gray-200 text-gray-500"
                              : "bg-secondary text-primary"
                          }`}
                        >
                          {lesson?.isLocked && !lesson?.isPreview ? (
                            <FiLock size={16} />
                          ) : (
                            <FiPlay size={16} />
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4
                          className={`font-medium ${
                            lesson?.isLocked && !lesson?.isPreview
                              ? "text-gray-500"
                              : "text-gray-800"
                          }`}
                        >
                          {lesson?.title}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {lesson?.duration} min
                          </span>
                          {lesson?.isPreview && (
                            <span className="ml-2 px-2 py-0.5 bg-secondary text-primary text-xs rounded-full">
                              Preview
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic text-sm py-2">
                    No lessons available in this section
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold">{currentLesson?.title}</h3>
              <button
                onClick={() => {
                  setShowPreviewModal(false);
                  setCurrentLesson(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="aspect-video bg-black rounded-md overflow-hidden">
              {currentLesson?.videoId?.url || currentLesson?.video ? (
                <ReactPlayer
                  url={currentLesson?.videoId?.url || currentLesson?.video}
                  width="100%"
                  height="100%"
                  controls={true}
                  playing={true}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  Video URL not available
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsSectionAccordion;
