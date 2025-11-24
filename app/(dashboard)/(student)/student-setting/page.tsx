"use client";
import React, { useState } from "react";
import Tab from "@/components/(instructor)/others/Tab";
import Changepassword from "@/components/(student)/studentDashborad/ChangePassword";

import { ProfileUpdate } from "@/components/(student)/studentDashborad/Studentprofile";
import { useUserProfile } from "@/hooks/useUserProfile";

import Profileprogress from "@/components/(student)/studentDashborad/Profileprogress";
// Constants

const StudentProfile = () => {
  // State
  const [activeTab, setActiveTab] = useState("Profile");

  // Data hooks
  const { data, refetch } = useUserProfile();
  // console.log(data);
  const TAB_DATA = [
    {
      label: "Profile",
      content: <ProfileUpdate profile={data} refetch={refetch} />,
    },
    { label: "Password", content: <Changepassword /> },
  ];

  const MainContent = () => (
    <div className="lg:w-[1000px] border rounded-xl p-5">
      <div className="h-80 w-full mb-16">
        <Profileprogress {...data} />
      </div>
      <Tab tabs={TAB_DATA} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );

  return (
    <div>
      <MainContent />
    </div>
  );
};

export default StudentProfile;
