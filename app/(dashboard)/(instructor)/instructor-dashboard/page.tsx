"use client";
import ProfileStatusCard from "@/components/(home)/shared/ProfileStatusCard";
import useInstructorCourse from "@/hooks/instructor/useInstructorCourse";

import React from "react";
import play from "@/public/assets/icon/dashboard/play-circle.svg";
import pending from "@/public/assets/icon/dashboard/file-video.svg";
import publishCourse from "@/public/assets/icon/dashboard/alarm-clock.svg";
import studentInprogress from "@/public/assets/icon/dashboard/graduation-cap.svg";
import totalStudent from "@/public/assets/icon/dashboard/total-strudent.svg";
import complete from "@/public/assets/icon/dashboard/check-strudent.svg";
import ProfileStatuSkeleton from "@/components/skeletonloader/ProfileStatusSkeleton";
import InstructorClassSchedule from "@/components/(instructor)/instructorDashboard/Dashboardclasslist";
const InstructorDashboard = () => {
  const { data, isLoading } = useInstructorCourse();
  return (
    <div>
      {isLoading ? (
        <div className="animate-pulse  mt-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
          {[...Array(6)].map((_, idx) => (
            <ProfileStatuSkeleton key={idx} />
          ))}{" "}
        </div>
      ) : (
        <>
          <div className="mt-2  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
            <ProfileStatusCard
              amount={data?.courses?.length}
              image={play}
              title="Total Course"
            />
            <ProfileStatusCard
              amount={data?.totalPurchased?.length || 0}
              image={publishCourse}
              title="Publish Course"
            />
            <ProfileStatusCard
              amount={data?.totalPurchased?.length || 0}
              image={pending}
              title="Pending Course"
            />
            <ProfileStatusCard
              amount={data?.totalPurchased?.length || 0}
              image={totalStudent}
              title="Total Student"
            />
            <ProfileStatusCard
              amount={data?.totalPurchased?.length || 0}
              image={complete}
              title="Student Completed"
            />
            <ProfileStatusCard
              amount={data?.totalPurchased?.length || 0}
              image={studentInprogress}
              title="Student In-progress"
            />
          </div>
        </>
      )}
      <div className="mt-10">
        <InstructorClassSchedule />
      </div>
    </div>
  );
};

export default InstructorDashboard;
