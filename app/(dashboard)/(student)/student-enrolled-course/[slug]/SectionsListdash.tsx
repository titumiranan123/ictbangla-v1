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
}

interface Section {
  _id: string;
  title: string;
  lessons?: Lesson[];
}

interface SectionsListProps {
  sectionData: Section[];
  handleLessonClick: (lesson: Lesson) => void;
  currentLesson: Lesson | null;
  defaultExpandedSectionId?: string;
  isLoading: boolean; // expected "loading" | "success" | "error"
}

/* Skeleton Loader */
const SkeletonLoader: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="border rounded-lg overflow-hidden bg-white shadow-sm"
        >
          {/* Section Header Skeleton */}
          <div className="flex items-center justify-between p-4 bg-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div className="space-y-2">
                <div className="h-3 w-24 bg-gray-300 rounded" />
                <div className="h-2 w-16 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="w-4 h-4 bg-gray-300 rounded" />
          </div>

          {/* Lessons Skeleton */}
          <div className="p-4 space-y-3">
            {[1, 2].map((j) => (
              <div
                key={j}
                className="flex items-center gap-3 p-3 border rounded-md bg-white"
              >
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <div className="flex-grow space-y-2">
                  <div className="h-3 w-32 bg-gray-300 rounded" />
                  <div className="h-2 w-20 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SectionsListDash: React.FC<SectionsListProps> = ({
  sectionData,
  handleLessonClick,
  currentLesson,
  defaultExpandedSectionId,
  isLoading,
}) => {
  const safeSectionData = Array.isArray(sectionData) ? sectionData : [];

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() => {
    const initialState: Record<string, boolean> = {};
    if (currentLesson) {
      const sectionContainingCurrentLesson = safeSectionData.find((section) =>
        section?.lessons?.some((lesson) => lesson?._id === currentLesson?._id)
      );
      if (sectionContainingCurrentLesson) {
        initialState[sectionContainingCurrentLesson._id] = true;
      }
    } else if (defaultExpandedSectionId) {
      initialState[defaultExpandedSectionId] = true;
    } else if (safeSectionData.length > 0) {
      initialState[safeSectionData[0]._id] = true;
    }
    return initialState;
  });

  useEffect(() => {
    if (currentLesson) {
      const sectionContainingCurrentLesson = safeSectionData.find((section) =>
        section?.lessons?.some((lesson) => lesson?._id === currentLesson?._id)
      );
      if (
        sectionContainingCurrentLesson &&
        !expandedSections[sectionContainingCurrentLesson._id]
      ) {
        setExpandedSections((prev) => ({
          ...prev,
          [sectionContainingCurrentLesson._id]: true,
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

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (!sectionData || safeSectionData.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">No sections available</div>
    );
  }

  return (
    <div className="space-y-2">
      {safeSectionData.map((section) => (
        <div
          key={section._id}
          className="border rounded-lg overflow-hidden bg-white shadow-sm"
        >
          {/* Section Header */}
          <div
            onClick={() => toggleSection(section._id)}
            className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${
              expandedSections[section._id]
                ? "bg-orange-100"
                : "bg-white hover:bg-gray-50"
            }`}
            aria-expanded={expandedSections[section._id]}
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
            {expandedSections[section._id] ? (
              <FiChevronUp className="text-gray-500" />
            ) : (
              <FiChevronDown className="text-gray-500" />
            )}
          </div>

          {/* Lesson List */}
          {expandedSections[section._id] && (
            <div className="p-4 bg-gray-50 border-t border-gray-200 space-y-3">
              {section?.lessons?.map((lesson) => {
                const isActive = currentLesson?._id === lesson._id;
                return (
                  <div
                    key={lesson._id}
                    onClick={() => handleLessonClick(lesson)}
                    className={`flex items-center p-3 rounded-md transition cursor-pointer border ${
                      isActive
                        ? "bg-blue-100 border-blue-200"
                        : "bg-white border-gray-200 hover:border-secondary"
                    }`}
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
                      <h4 className="font-medium text-gray-700">
                        {lesson?.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>
                          {lesson?.duration || 0} min •{" "}
                          {lesson?.attachments?.length || 0} Resources
                        </span>
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

export default SectionsListDash;
