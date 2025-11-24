"use client";
import CourseContainer from "@/components/(instructor)/others/CourseContainer";
import useWishList from "@/hooks/student/useWishList";
import React from "react";

const StudentWishlist = () => {
  const { data, isLoading } = useWishList();

  return (
    <div className="p-6">
      <h2>Favorite Courses</h2>
      <div className="mt-8">
        <CourseContainer
          type="favorite"
          courses={data?.courses}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default StudentWishlist;
