"use client";
import TopBar from "@/components/(home)/Navbar/Topbar";
import { usePathname } from "next/navigation";
import React from "react";

const Topbar = () => {
  const path = usePathname();

  // Check if current path starts with /courses/
  const isCourseDetailPage =
    path.startsWith("/courses/") && path !== "/courses";

  // Don't render TopBar on course detail pages
  if (isCourseDetailPage) {
    return null;
  }

  return (
    <div className="sticky top-0 z-[20] bg-white transition-all duration-300">
      <TopBar />
    </div>
  );
};

export default Topbar;
