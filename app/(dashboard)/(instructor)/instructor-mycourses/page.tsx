"use client";
import CourseContainer from "@/components/(instructor)/others/CourseContainer";
import Tab from "@/components/(instructor)/others/Tab";
import useInstructorCourse from "@/hooks/instructor/useInstructorCourse";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const InstructorMycourse = () => {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Publish Course");
  // Map tab labels to status values
  const statusMap: Record<string, string> = {
    "Publish Course": "PUBLISHED",
    "Active Course": "RUNNING",
    "Complete Course": "CLOSED",
    "Pending Course": "PENDING",
    "Rejected Course": "REJECTED",
  };

  const { data, isLoading } = useInstructorCourse(page, statusMap[activeTab]);

  const tabData = [
    {
      label: "Publish Course",
      content: (
        <CourseContainer
          currentPage={page ?? 1}
          setCurrentPage={setPage}
          isLoading={isLoading}
          type="instructor"
          courses={data?.courses || []}
          totalItems={data?.totalCourses || 0}
        />
      ),
    },
    {
      label: "Active Course",
      content: (
        <CourseContainer
          currentPage={page}
          setCurrentPage={setPage}
          isLoading={isLoading}
          type="instructor"
          courses={data?.courses || []}
          totalItems={data?.totalCount || 0}
        />
      ),
    },
    {
      label: "Complete Course",
      content: (
        <CourseContainer
          currentPage={page}
          setCurrentPage={setPage}
          isLoading={isLoading}
          type="instructor"
          courses={data?.courses || []}
          totalItems={data?.totalCount || 0}
        />
      ),
    },
    {
      label: "Pending Course",
      content: (
        <CourseContainer
          currentPage={page}
          setCurrentPage={setPage}
          isLoading={isLoading}
          type="instructor"
          courses={data?.courses || []}
          totalItems={data?.totalCount || 0}
        />
      ),
    },
    {
      label: "Rejected Course",
      content: (
        <CourseContainer
          currentPage={page}
          setCurrentPage={setPage}
          isLoading={isLoading}
          type="instructor"
          courses={data?.courses || []}
          totalItems={data?.totalCount || 0}
        />
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between   ">
        <h2 className="text-center">My Course</h2>
        <Link
          className=" py-2 px-4 border-primary rounded-lg border flex justify-center items-center gap-2"
          href={"/instructor-add-course"}
        >
          <FaPlus className="text-primary" /> Add Course
        </Link>
      </div>
      <div className="mt-8">
        <Tab
          tabs={tabData}
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default InstructorMycourse;
