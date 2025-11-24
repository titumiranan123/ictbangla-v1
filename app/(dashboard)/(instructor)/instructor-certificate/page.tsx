/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useGetInstructorCertificate from "@/hooks/instructor/useInstructorGetStudentCertificate";
import useInstructorCertificateEnroled from "@/hooks/instructor/useInstructorCertificateCourse";
import CertificateModal from "./UpdateForm";

const CertificateStudent = () => {
  // 🔹 Filter states
  const [courseType, setCourseType] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [certificateId, setCertificateID] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  const { data: enrolledCourse } = useInstructorCertificateEnroled();

  // Initialize course with first available course
  useEffect(() => {
    if (enrolledCourse && enrolledCourse.length > 0 && !course) {
      setCourse(enrolledCourse[0].id);
    }
  }, [enrolledCourse, course]);

  // 🔹 Fetch certificates dynamically
  const { data, isLoading, isError } = useGetInstructorCertificate({
    course_type: courseType,
    course,
    status,
  });

  // Handle filter changes
  const handleCourseTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseType(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourse(e.target.value);
  };

  // Reset filters
  const resetFilters = () => {
    setCourseType("");
    setStatus("");
    if (enrolledCourse && enrolledCourse.length > 0) {
      setCourse(enrolledCourse[0].id);
    }
  };

  const handleApproveClick = () => {
    setIsOpen(true);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      APPROVED: "bg-green-100 text-green-800 border-green-200",
      PENDING: "bg-yellow-100 text-yellow-800 border-yellow-200",
      REJECT: "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium border ${
          statusConfig[status as keyof typeof statusConfig] ||
          "bg-gray-100 text-gray-800"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Certificate Management
        </h2>
        <p className="text-gray-600">Manage and approve student certificates</p>
      </div>

      {/* 🔹 Filter Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
        <div className="flex flex-wrap gap-4 items-end">
          {/* Course Type */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Type
            </label>
            <select
              value={courseType}
              onChange={handleCourseTypeChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="">All Types</option>
              <option value="LIVE">Live</option>
              <option value="RECORDED">Recorded</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={handleStatusChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="">All Status</option>
              <option value="APPROVED">Approved</option>
              <option value="PENDING">Pending</option>
              <option value="REJECT">Rejected</option>
            </select>
          </div>

          {/* Dynamic Course */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course
            </label>
            <select
              value={course}
              onChange={handleCourseChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              {enrolledCourse?.map((c: any) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters Button */}
          <div className="flex gap-3">
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Loading and Data Display */}
      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
        </div>
      )}

      {isError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 font-medium">
            Failed to load certificates. Please try again.
          </p>
        </div>
      )}

      {data && !isLoading && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Certificates
            </h3>
          </div>

          {/* Certificates List */}
          <div className="divide-y divide-gray-200">
            {data?.certificates?.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg font-medium">
                  No certificates found
                </p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your filters to see more results
                </p>
              </div>
            ) : (
              data?.certificates?.map((dt: any, idx: number) => (
                <div
                  key={idx}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    {/* Course Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={dt?.course_image}
                          alt={dt?.course_title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg mb-1">
                          {dt?.course_title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>ID: {dt?.certificate_uuId}</span>
                          <span>•</span>
                          <span>Issue: {dt?.issue_date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status and Actions */}
                    <div className="flex items-center gap-4">
                      {getStatusBadge(dt?.status)}

                      <button
                        onClick={() => {
                          setCertificateID(dt?._id);
                          handleApproveClick();
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <CertificateModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          id={certificateId}
        />
      )}
    </div>
  );
};

export default CertificateStudent;
