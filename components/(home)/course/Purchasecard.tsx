import Image from "next/image";
import Link from "next/link";
import React from "react";
import lesson from "@/public/assets/icon/lesson.svg";
import clock from "@/public/assets/icon/clock-three.svg";
import student from "@/public/assets/icon/users.svg";
import { RenderStars } from "../shared/RenderStars";
import Button from "../shared/Button";
import { IPurchasecard } from "@/utils/interface";
import { getAverageRating } from "@/utils/getAverageRating";
import CourseRating from "./CourseRating";

const PurchaseCard: React.FC<IPurchasecard> = ({ course }) => {
  return (
    <div className="md:w-[320px] w-full group lg:h-[420px] h-[518px] rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Thumbnail */}
      <div className="w-full md:h-52 overflow-hidden relative">
        <Image
          src={course?.course?.media?.thumbnail?.trim() ?? " "}
          alt={course?.course?.basicInfo?.title}
          width={320}
          height={208}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Course Stats */}
        <div className="flex gap-4 mt-2 text-[#585d69] text-sm flex-wrap">
          <span className="flex items-center gap-1">
            <Image className="w-4 h-4" src={student} alt="students" />
            <span>{course?.course?.students || 0}</span>
          </span>
          <div className="flex items-center gap-1">
            <Image className="w-4 h-4" src={lesson} alt="lessons" />
            <span>{course?.course?.lessons || 0}</span>
          </div>
          <span className="flex items-center gap-1">
            <Image className="w-4 h-4" src={clock} alt="duration" />
            <span>{course?.course?.hours || 0}h</span>
          </span>
        </div>

        {/* Course Title */}
        <Link
          href={`/courses/${course?.course?.basicInfo?.slug}`}
          className="block mt-3 text-lg font-medium text-[#131836] hover:text-primary  transition-colors duration-200 line-clamp-2"
        >
          {course?.course?.basicInfo?.title}
        </Link>

        {/* Rating */}
        <div className="mt-2 text-sm flex items-center gap-1">
          {RenderStars(getAverageRating(course?.course?.ratings) as number)}
          <span className="text-[#585d69] ml-1">
            ({course?.course?.ratings?.length ?? 0})
          </span>
        </div>

        {/* Price and Actions */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div>
            {course?.courseStatus === "COMPLETE" && (
              <CourseRating course={course} />
            )}
          </div>

          {course?.paymentStatus === "UNPAID" ? (
            <Button
              title="Complete Payment"
              className="hover:bg-primary  hover:text-white easeInOut px-4 py-2 border border-primary  text-primary  rounded-md"
              hoverColor="#e27447"
              href=""
            />
          ) : (
            <Button
              title="Access Content"
              className="hover:bg-primary  hover:text-white easeInOut px-4 py-2 border border-primary  text-primary  rounded-md"
              hoverColor="#e27447"
              href={`/student-enrolled-course/${course?._id}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
