"use client";
import React, { useState } from "react";
import ScrollableTabs from "./ScrollableTabs";

interface Tab {
  section_title: string;
  section_content: string;
}

interface ScrollableTabsProps {
  tabs: Tab[];
}

const CourseInfoTab: React.FC<ScrollableTabsProps> = ({ tabs }) => {
  const [active, setActive] = useState(0);

  if (!tabs || tabs[0]?.section_title?.length === 0 || tabs.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <ScrollableTabs tabs={tabs} activeIndex={active} onTabClick={setActive} />
      <div
        dangerouslySetInnerHTML={{ __html: tabs[active]?.section_content }}
        style={{ padding: 20, fontSize: 18 }}
      ></div>
    </div>
  );
};

export default CourseInfoTab;
