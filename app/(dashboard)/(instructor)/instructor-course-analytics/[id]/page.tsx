"use client";
import AttendanceChart from "@/components/(instructor)/instructoranalytics/ClassAnalyticsChart";
import { useParams } from "next/navigation";

import React from "react";

const CourseAnalytics = () => {
  const { id } = useParams();

  return (
    <div>
      <AttendanceChart courseId={id as string} />
    </div>
  );
};

export default CourseAnalytics;
