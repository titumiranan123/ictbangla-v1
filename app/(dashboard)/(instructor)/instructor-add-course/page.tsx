"use client";

import BasicInfo from "@/components/(instructor)/createCourse/Basicinfo";
import CourseInfo from "@/components/(instructor)/createCourse/Coureseinfo";
import Coursepricing from "@/components/(instructor)/createCourse/Coursepricing";
import MediaSEOForm from "@/components/(instructor)/createCourse/MediaSeo";
import Tab from "@/components/(instructor)/others/Tab";
import React, { useState } from "react";
const CreateCourse = () => {
  const [activeTab, setActiveTab] = useState("Basic Info");

  const tabData = [
    { label: "Basic Info", content: <BasicInfo setActiveTab={setActiveTab} /> },
    {
      label: "Media & Seo",
      content: <MediaSEOForm setActiveTab={setActiveTab} />,
    },
    { label: "Info", content: <CourseInfo setActiveTab={setActiveTab} /> },
    {
      label: "Pricing",
      content: <Coursepricing />,
    },
  ];
  return (
    <div>
      <Tab
        tabs={tabData}
        isClickAble={false}
        isTabCenter={false}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default CreateCourse;
