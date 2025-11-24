/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiPlay } from "react-icons/fi";

interface Lesson {
  _id: string;
  title: string;
  duration?: number;
  isLocked?: boolean;
  isPreview?: boolean;
  attachments?: any[];
  // Add other lesson properties as needed
}

interface Section {
  _id: string;
  title: string;
  lessons?: Lesson[];
  // Add other section properties as needed
}

interface SectionsListProps {
  sectionData: Section[];
  handleLessonClick: (lesson: Lesson) => void;
  currentLesson: Lesson | null;
  defaultExpandedSectionId?: string; // Optional prop to control default expanded section
}

const SectionsList: React.FC<SectionsListProps> = ({
  sectionData,
  handleLessonClick,
  currentLesson,
  defaultExpandedSectionId,
}) => {
  // Initialize with the first section expanded by default if no current lesson
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() => {
    const initialState: Record<string, boolean> = {};

    // If there's a current lesson, expand its section
    if (currentLesson) {
      const sectionContainingCurrentLesson = sectionData?.find((section) =>
        section?.lessons?.some((lesson) => lesson?._id === currentLesson?._id)
      );
      if (sectionContainingCurrentLesson) {
        initialState[sectionContainingCurrentLesson?._id] = true;
      }
    }
    // Otherwise use the defaultExpandedSectionId or first section
    else if (defaultExpandedSectionId) {
      initialState[defaultExpandedSectionId] = true;
    } else if (sectionData?.length > 0) {
      initialState[sectionData[0]?._id] = true;
    }

    return initialState;
  });

  // Update expanded state when currentLesson changes
  useEffect(() => {
    if (currentLesson) {
      const sectionContainingCurrentLesson = sectionData?.find((section) =>
        section?.lessons?.some((lesson) => lesson?._id === currentLesson?._id)
      );

      if (
        sectionContainingCurrentLesson &&
        !expandedSections[sectionContainingCurrentLesson?._id]
      ) {
        setExpandedSections((prev) => ({
          ...prev,
          [sectionContainingCurrentLesson?._id]: true,
        }));
      }
    }
  }, [currentLesson, sectionData]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  if (!sectionData || sectionData?.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No sections available</div>
    );
  }

  return (
    <div className="space-y-2">
      {sectionData?.map((section) => (
        <div key={section?._id} className="border rounded-lg overflow-hidden">
          {/* Section Header */}
          <div
            onClick={() => toggleSection(section?._id)}
            className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${
              expandedSections[section?._id]
                ? "bg-orange-100"
                : "bg-white hover:bg-gray-50"
            }`}
            aria-expanded={expandedSections[section?._id]}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-blue-100 text-primary font-semibold">
                {section?.title?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{section?.title}</h3>
                <p className="text-xs text-gray-500 mt-1">
                  {section?.lessons?.length || 0} Lessons
                </p>
              </div>
            </div>
            {expandedSections[section?._id] ? (
              <FiChevronUp className="text-gray-500" />
            ) : (
              <FiChevronDown className="text-gray-500" />
            )}
          </div>

          {/* Lesson List */}
          {expandedSections[section?._id] && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
              {section?.lessons?.map((lesson) => {
                const isActive = currentLesson?._id === lesson?._id;
                const isLocked = lesson?.isLocked;
                const isPreview = lesson?.isPreview && !isLocked;

                return (
                  <div
                    key={lesson?._id}
                    onClick={() => !isLocked && handleLessonClick(lesson)}
                    className={`flex items-center p-3 rounded-md transition cursor-pointer border ${
                      isActive
                        ? "bg-blue-100 border-blue-200"
                        : "bg-white border-gray-200 hover:border-secondary"
                    } ${isLocked ? "opacity-70 cursor-not-allowed" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <div className="flex-shrink-0 mr-3">
                      <div
                        className={`p-2 rounded-full ${
                          isActive
                            ? "bg-blue-200 text-blue-800"
                            : "bg-blue-100 text-primary"
                        }`}
                      >
                        <FiPlay size={16} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4
                        className={`font-medium ${
                          isLocked ? "text-gray-500" : "text-gray-800"
                        }`}
                      >
                        {lesson?.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>
                          {lesson?.duration || 0} min •{" "}
                          {lesson?.attachments?.length || 0} Resources
                        </span>
                        {isPreview && (
                          <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            Preview
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionsList;
