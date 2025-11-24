/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseDetails from "@/components/(home)/course/CourseDetails";

import React from "react";

const CourseDetailsSidebar = ({ data }: { data: any }) => {
  return (
    <>
      <CourseDetails
        courseName={data?.basicInfo?.title}
        courseId={data?._id}
        slug={data?.basicInfo?.slug}
        pricing={data?.pricing}
        media={data?.media}
        totalLesson={data?.total_lessons}
        features={{
          videoHours: 24,
          articles: 5,
          resources: 50,
        }}
      />
    </>
  );
};

export default CourseDetailsSidebar;
