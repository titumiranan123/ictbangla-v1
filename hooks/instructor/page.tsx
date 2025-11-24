/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import useCertificateEnroled from "@/hooks/student/useCertificateCourse";
import useGetStudentCertificate from "@/hooks/student/useGetStudentCertificate";
import Image from "next/image";

const CertificateStudent = () => {
  // 🔹 Filter states
  const [courseType, setCourseType] = useState("LIVE");
  const [status, setStatus] = useState("APPROVED");
  const [course, setCourse] = useState<string>("");
  const { data: enrolledCourse } = useCertificateEnroled();

  // 🔹 Fetch certificates dynamically
  const { data, isLoading, isError } = useGetStudentCertificate({
    course_type: courseType,
    course,
    status,
  });

  // Example dynamic course list (you can fetch it from API too)

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Certificate List</h2>

      {/* 🔹 Filter Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Course Type */}
        <select
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option disabled>Select Type</option>
          <option value="LIVE">Live</option>
          <option value="RECORDED">Recorded</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option disabled>Select Status</option>
          <option value="APPROVED">Approved</option>
          <option value="PENDING">Pending</option>
          <option value="REJECT">Rejected</option>
        </select>

        {/* Dynamic Course */}
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2"
        >
          <option disabled>Select Course</option>
          {enrolledCourse?.map((c: any) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Loading and Data Display */}
      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-500">Failed to load certificates.</p>}
      {data && !isLoading && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Certificates:</h3>
          {data?.map((dt: any, idx: number) => (
            <div
              key={idx}
              className="flex justify-around items-center bg-green-100 rounded-xl py-2 px-3"
            >
              <div className="flex  gap-6">
                <Image
                  src={dt?.course_image}
                  alt={dt?.course_title}
                  width={80}
                  height={80}
                />
                <div>
                  <p>{dt?.course_title}</p>
                  <p>Certificate Id: {dt?.certificate_uuId}</p>
                </div>
              </div>
              <p>Issue: {dt?.issue_date}</p>
            </div>
          ))}
          {/* <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre> */}
        </div>
      )}
    </div>
  );
};

export default CertificateStudent;
