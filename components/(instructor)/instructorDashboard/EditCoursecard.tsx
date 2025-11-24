/* eslint-disable @typescript-eslint/no-explicit-any */
import { api_url } from "@/hooks/apiurl";
import useInstructorCourse from "@/hooks/instructor/useInstructorCourse";
import { showConfirmToast } from "@/utils/ShowConfirmToast";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaUser, FaTag, FaListUl, FaClock } from "react-icons/fa";

const EditCourseCard: React.FC<any> = ({ data }) => {
  // Status color mapping
  const statusColors: Record<string, string> = {
    published: "bg-green-100 text-green-800",
    draft: "bg-yellow-100 text-yellow-800",
    archived: "bg-gray-100 text-gray-800",
    pending: "bg-blue-100 text-blue-800",
  };

  const statusColor =
    statusColors[data?.basicInfo?.status?.toLowerCase()] ||
    "bg-gray-100 text-gray-800";
  const { refetch } = useInstructorCourse();
  const handleDeleteCourse = async (courseId: string): Promise<void> => {
    return new Promise((resolve) => {
      showConfirmToast(courseId, async () => {
        try {
          const res = await api_url.delete(
            `/v1/instructor/delete-course/${courseId}`
          );
          if (res.status === 201) {
            refetch();
            toast.success("Course deleted successfully");
          } else {
            toast.error(res.data.message);
          }
        } catch (error: any) {
          toast.error(
            error?.data?.message || "Something went wrong while deleting"
          );
        } finally {
          resolve();
        }
      });
    });
  };

  return (
    <div className="max-w-[100%] w-full border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-[#f9f9fa] transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail with status badge */}
        <div className="relative w-full md:w-48 h-48 flex-shrink-0 overflow-hidden">
          <Image
            src={data?.media?.thumbnail?.trim() ?? ""}
            alt={data?.basicInfo?.title ?? ""}
            width={400}
            height={240}
            className="w-full h-full object-cover"
            priority
          />
          <span
            className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full ${statusColor}`}
          >
            {data?.basicInfo?.status ?? ""}
          </span>
        </div>

        {/* Course Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Title and Creator */}
          <div className="mb-3">
            <h2 className="text-xl font-bold text-[#1D2939] line-clamp-2">
              {data?.basicInfo?.title}
            </h2>
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaUser className="mr-2 text-[#1cab55]" size={12} />
              <span>
                {data?.basicInfo?.creator?.first_name}{" "}
                {data?.basicInfo?.creator?.last_name}
              </span>
            </div>
          </div>

          {/* Pricing and Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center bg-[#f6fef9] px-3 py-2 rounded-lg">
              <FaTag className="mr-2 text-[#1cab55]" />
              {data?.pricing?.isFree ? (
                <span className="font-bold text-green-600">Free</span>
              ) : (
                <div className="flex items-baseline">
                  <span className="font-bold text-[#1D2939]">
                    Tk. {data?.pricing?.price?.main.toFixed(2)}
                  </span>
                  {data?.pricing?.price?.isDiscount ? (
                    <span className="ml-2 text-sm text-[#e1242c] line-through">
                      Tk.{data?.pricing?.price?.discount?.toFixed(2)}
                    </span>
                  ) : (
                    <>
                      <span className="ml-2 text-sm text-[#e1242c] line-through">
                        {data?.pricing?.price?.percentage} %
                      </span>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center bg-[#f6fef9] px-3 py-2 rounded-lg text-sm text-gray-600">
              <FaListUl className="mr-2 text-[#1cab55]" />
              <span>{data?.total_sections} sections</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>{data?.total_lessons} lessons</span>
              <span className="mx-2 text-gray-400">|</span>
              <span>{data?.total_students} Students</span>
              <span className="mx-2 text-gray-400">|</span>
              <FaClock className="mr-2 text-[#1cab55]" />
              <span>{data?.total_duration} Duration</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <Link
              href={`/instructor-edit-course/${data._id}`}
              passHref
              className="flex-1 flex items-center justify-center gap-2 bg-[#1cab55] hover:bg-[#16d43b] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium min-w-[120px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path>
              </svg>{" "}
              Edit Course
            </Link>
            <Link
              href={`/instructor-edit-course/add-section/${data._id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-[#d1fadf] text-[#1cab55] border border-[#1cab55] px-4 py-2 rounded-lg transition-colors text-sm font-medium min-w-[140px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
              </svg>{" "}
              Add Content
            </Link>
            <Link
              href={`/instructor-course-preview/${data._id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-[#d1fadf] text-[#1cab55] border border-[#1cab55] px-4 py-2 rounded-lg transition-colors text-sm font-medium min-w-[140px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
              </svg>{" "}
              Course Preview
            </Link>
            <Link
              href={`/instructor-course-analytics/${data._id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-[#d1fadf] text-[#1cab55] border border-[#1cab55] px-4 py-2 rounded-lg transition-colors text-sm font-medium min-w-[140px]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128z"></path>
              </svg>{" "}
              Course Analytics
            </Link>
            <button
              onClick={() => handleDeleteCourse(data._id)}
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-[#e1242c] hover:bg-[#f6fef9] px-4 py-2 rounded-lg transition-colors border border-gray-200 hover:border-[#e1242c] text-sm font-medium"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
              </svg>{" "}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourseCard;
