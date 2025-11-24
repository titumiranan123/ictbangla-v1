/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ClassSchedule from "@/components/(student)/studentDashborad/ClassSchedule";
import StudentStatusCard from "@/components/(student)/studentDashborad/Studentstatuscard";
import useUserDashboard from "@/hooks/student/useUserDashboard";
import play from "@/public/assets/icon/dashboard/play-circle.svg";
import pending from "@/public/assets/icon/dashboard/file-video.svg";
import React from "react";
import ClassScheduleSkeleton from "@/components/skeletonloader/CalendarSkeleton";
import StudentProfileStatuSkeleton from "@/components/skeletonloader/StudentProfileStatusSkeleton";
import { calculateProfileCompletion } from "@/utils/calculateProfileProgress";
import { useUserProfile } from "@/hooks/useUserProfile";
import useUserClassList from "@/hooks/student/useClasslist";
import { useSession } from "next-auth/react";

const StudentDashboard = () => {
  const {
    data,
    isLoading,
  }: {
    data: {
      totalCourse: number;
      totalPendingCourse: number;
      totalRunningCourse: number;
      totalCompletedCourse: number;
    };
    isLoading: boolean;
  } = useUserDashboard();
  const { data: studentProfile } = useUserProfile();
  const { data: classList, isLoading: classListLoading } = useUserClassList();

  const profileCompletion = calculateProfileCompletion(studentProfile);
  const { data: user }: { data: any } = useSession();

  return (
    <div className="mt-5">
      <h2>
        Welcome back,{" "}
        <span className="bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent font-bold">
          {user?.user?.first_name + user?.user?.last_name}
        </span>
        . Shall we continue your learning journey?
      </h2>
      {profileCompletion < 100 && (
        <div className="mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 mt-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Your profile is {profileCompletion ?? 0}% complete.{" "}
                {!studentProfile?.phone?.length &&
                  "Please add your mobile number to complete your profile."}
              </p>
            </div>
          </div>
        </div>
      )}
      {isLoading && classListLoading ? (
        <>
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
            {[...Array(4)].map((_, idx) => (
              <StudentProfileStatuSkeleton key={idx} />
            ))}
          </div>
          <ClassScheduleSkeleton />
        </>
      ) : (
        <>
          {" "}
          <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <StudentStatusCard
              image={play}
              title="Total Course"
              amount={data?.totalCourse}
            />
            <StudentStatusCard
              image={pending}
              title="Pending Course"
              amount={data?.totalPendingCourse}
            />
            <StudentStatusCard
              image={play}
              title="Running Course"
              amount={data?.totalRunningCourse}
            />
            <StudentStatusCard
              image={play}
              title="Complete Course"
              amount={data?.totalCompletedCourse}
            />
          </div>
          {<ClassSchedule data={classList} />}{" "}
        </>
      )}
    </div>
  );
};

export default StudentDashboard;
