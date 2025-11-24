"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCourse } from "@/redux/courseSlice";
import Tab from "@/components/(instructor)/others/Tab";
import useInstructorCourseDetails from "@/hooks/instructor/useInstructorCourseDetails";
import { useParams } from "next/navigation";
import EditBasicInfoSkeleton from "@/components/skeletonloader/EditBasicInfoSkeleton";
import BasicInfo from "@/components/(instructor)/editCourse/EditBasicinfo";
import MediaSEOForm from "@/components/(instructor)/editCourse/MediaSeo";
import CourseInfo from "@/components/(instructor)/editCourse/Coureseinfo";
import UpdateCoursepricing from "@/components/(instructor)/createCourse/Update/UpdateCoursePricing";

// Lazy-loaded components with proper suspense fallback

const EditCourse = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Basic Info");
  const { id } = useParams();
  const { data, isLoading } = useInstructorCourseDetails(id as string);
  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setCourse(data));
    }
  }, [data, isLoading, dispatch]);

  if (isLoading || !data) {
    return (
      <div>
        <EditBasicInfoSkeleton />
      </div>
    );
  }

  const tabData = [
    {
      label: "Basic Info",
      content: <BasicInfo data={data?.basicInfo} setActiveTab={setActiveTab} />,
    },
    {
      label: "Media & Seo",
      content: <MediaSEOForm setActiveTab={setActiveTab} />,
    },
    {
      label: "Info",
      content: <CourseInfo setActiveTab={setActiveTab} />,
    },
    {
      label: "Pricing",
      content: <UpdateCoursepricing />,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto border border-slate-300 lg:p-5 rounded-lg">
      <Tab
        tabs={tabData}
        isTabCenter={false}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default EditCourse;
