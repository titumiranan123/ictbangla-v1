"use client";
import useOrderHistory from "@/hooks/student/useOrderHistory";
import React from "react";
import CourseEnrollmentCards from "./CourseEnrollmenthistory";

const StudentOrders = () => {
  const { data, isLoading } = useOrderHistory();
 
 
  return (
    <div className="p-6">
      <h2>Order History</h2>
      <div className="flex justify-center items-center ">
        {isLoading ? (
          <div className="gap-5  grid grid-cols-1 md:grid-cols-2 font-sans mt-10">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="w-[550px] flex border border-gray-200 rounded-lg overflow-hidden shadow-sm animate-pulse"
              >
                {/* Image Skeleton */}
                <div className="w-36 h-36 bg-gray-200 flex-shrink-0"></div>

                {/* Content Skeleton */}
                <div className="p-4 flex flex-col flex-1 space-y-3">
                  {/* Title */}
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                  {/* Price */}
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>

                  <div className="mt-auto flex justify-between items-center">
                    {/* Payment Status */}
                    <div className="h-5 bg-gray-200 rounded w-20"></div>

                    {/* Course Status */}
                    <div className="h-5 bg-gray-200 rounded w-20"></div>

                    {/* Pay Now Button */}
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CourseEnrollmentCards enrollments={data} />
        )}
      </div>
    </div>
  );
};

export default StudentOrders;
