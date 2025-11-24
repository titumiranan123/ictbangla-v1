/* eslint-disable @typescript-eslint/no-explicit-any */
import { Course } from "@/utils/interface";
import React from "react";
import Pagination from "../../(home)/shared/Pagination";
import NewCourseCard from "../../(home)/course/NewCourseCard";
import PurchaseCard from "../../(home)/course/Purchasecard";
import Coursereviewcard from "../../(home)/course/Coursereviewcard";
import EditCourseCard from "../instructorDashboard/EditCoursecard";
import EditCourseCardSkeleton from "../../skeletonloader/EditCoursecardSkeleton";
import CourseCardSkeleton from "../../skeletonloader/CourseCardSkeleton";

interface CourseProps {
  courses: Course[];
  type?: "general" | "favorite" | "enrolled" | "course-complete" | "instructor";
  isLoading?: boolean;
  currentPage?: number;
  setCurrentPage?: (page: number) => void;
  itemsPerPage?: number;
  totalItems?: number;
}

const CourseContainer: React.FC<CourseProps> = ({
  courses,
  type = "general",
  isLoading,
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 10,
  totalItems = 0,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isEmpty = !isLoading && courses?.length === 0;

  const handlePageChange = (page: number) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {isEmpty ? (
        <div className="text-center text-gray-500 py-10">
          <p>No courses found.</p>
        </div>
      ) : (
        <div>
          <div
            className={
              type === "instructor"
                ? "grid grid-cols-1 gap-5"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            }
          >
            {type === "general" &&
              courses?.map((course: Course) => (
                <NewCourseCard key={course?._id} course={course} />
              ))}

            {type === "favorite" && !isLoading && (
              <>
                {courses?.map((course: Course) => (
                  <Coursereviewcard key={course?._id} course={course} />
                ))}
              </>
            )}

            {type === "enrolled" && !isLoading && (
              <>
                {courses?.map((course: any) => (
                  <PurchaseCard key={course?._id} course={course} />
                ))}
              </>
            )}

            {type === "instructor" && !isLoading && (
              <>
                {courses?.map((course: Course) => (
                  <EditCourseCard key={course?._id} data={course} />
                ))}
              </>
            )}

            {isLoading && (
              <>
                {[...Array(itemsPerPage)].map((_, idx) =>
                  type === "instructor" ? (
                    <EditCourseCardSkeleton key={idx} />
                  ) : (
                    <CourseCardSkeleton key={idx} />
                  )
                )}
              </>
            )}
          </div>

          {!isLoading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage ?? 1}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseContainer;
