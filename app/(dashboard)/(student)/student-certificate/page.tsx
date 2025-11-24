/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import useCertificateEnroled from "@/hooks/student/useCertificateCourse";
import useGetStudentCertificate from "@/hooks/student/useGetStudentCertificate";
import Image from "next/image";
import Link from "next/link";

const CertificateStudent = () => {
  // 🔹 Filter states
  const [courseType, setCourseType] = useState("");
  const [status, setStatus] = useState("");
  const [course, setCourse] = useState<string>("");
  const { data: enrolledCourse } = useCertificateEnroled();
  useEffect(() => {
    setCourse(enrolledCourse?.[0].id);
  }, [enrolledCourse]);
  // 🔹 Fetch certificates dynamically
  const { data, isLoading, isError } = useGetStudentCertificate({
    course_type: courseType,
    course,
    status,
  });

  // console.log("data", data);
  // Example dynamic course list (you can fetch it from API too)

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Certificate List
      </h2>

      {/* 🔹 Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Course Type */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Course Type
          </label>
          <select
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 w-48"
          >
            <option value="">All Types</option>
            <option value="LIVE">Live</option>
            <option value="RECORDED">Recorded</option>
          </select>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 w-48"
          >
            <option value="">All Status</option>
            <option value="APPROVED">Approved</option>
            <option value="PENDING">Pending</option>
            <option value="REJECT">Rejected</option>
          </select>
        </div>

        {/* Dynamic Course */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Course
          </label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 w-64"
          >
            <option value="">All Courses</option>
            {enrolledCourse?.map((c: any) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
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
            Failed to load certificates.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      )}

      {data && !isLoading && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Your Certificates
          </h3>
          {data?.map((dt: any, idx: number) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-green-50">
                  <Image
                    src={dt?.course_image}
                    alt={dt?.course_title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {dt?.course_title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Certificate ID:{" "}
                    <span className="font-mono text-green-600">
                      {dt?.certificate_uuId}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  Issue: {dt?.issue_date}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    dt?.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : dt?.status === "PENDING"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {dt?.status || "PENDING"}
                </span>
                <Link
                  className="px-3 py-1 rounded-full text-sm font-medium text-white bg-green-600"
                  target="_blank"
                  href={`/certificates/${dt.certificate_uuId}`}
                >
                  View Certificate
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {data && data.length === 0 && !isLoading && (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-24 h-24 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
            <span className="text-3xl">📄</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            No Certificates Found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateStudent;
