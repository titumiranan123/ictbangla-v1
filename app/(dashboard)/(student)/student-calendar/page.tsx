/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MonthlySkeleton from "@/components/skeletonloader/MonthlySkeleton";
import useUserClassList from "@/hooks/student/useClasslist";
import Image from "next/image";
import React, { useState } from "react";

// Your JSON data

// Helper function to check if two dates are the same day
const isSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

// Helper function to format time (e.g., "16:10" → "4:10 PM")
const formatTime = (timeString: string) => {
  const [hours, minutes] = timeString.split(":");
  const hourNum = parseInt(hours, 10);
  const period = hourNum >= 12 ? "PM" : "AM";
  const displayHour = hourNum % 12 || 12;
  return `${displayHour}:${minutes} ${period}`;
};

const monthNames = (date: Date) => {
  return date?.toLocaleString("default", { month: "long", year: "numeric" });
};

const generateMonthDays = (date: Date) => {
  const year = date?.getFullYear();
  const month = date?.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDay?.getDay();
  const totalDays = lastDay?.getDate();

  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
};

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data: classList, isLoading: classListLoading } = useUserClassList();
  const classSchedule = classList?.map((item: any) => ({
    date: item?.date?.split("T")[0] ?? "",
    time: new Date(item?.start_time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
    link: "#",
    course: item?.title,
    duration: item?.duration,
    thumbnail: item?.courseId.media.thumbnail,
    instructor: `${item?.creator.first_name} ${item?.creator.last_name}`,
  }));
  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate?.setMonth(newDate?.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate?.setMonth(newDate?.getMonth() + 1);
      return newDate;
    });
  };

  const days = generateMonthDays(currentDate);

  return (
    <div>
      {classListLoading ? (
        <MonthlySkeleton />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-6">
            📅 Monthly Class Schedule
          </h2>
          <div className="flex items-center justify-center space-x-4 mt-5 mb-5">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Previous month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="font-medium text-gray-700">
              {monthNames(currentDate)}
            </div>

            <button
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Next month"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days?.map((day, index) => {
              if (!day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-24 p-2 border rounded bg-gray-100"
                  />
                );
              }

              const scheduleForDay = classSchedule?.find((item: any) => {
                const scheduleDate = new Date(item?.date);
                return isSameDay(scheduleDate, day);
              });

              const isToday = isSameDay(day, new Date());

              return (
                <div
                  key={day?.toString()}
                  className={`min-h-24 p-2 border rounded flex flex-col ${
                    isToday ? "bg-blue-100 font-bold" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="text-right">{day?.getDate()}</div>
                  {scheduleForDay && (
                    <div className="mt-1 p-1 bg-blue-50 rounded text-xs">
                      <div className="font-medium">{scheduleForDay?.course}</div>
                      <div>{formatTime(scheduleForDay?.time)}</div>
                      <div className="text-xs text-gray-500">
                        Duration: {scheduleForDay?.duration} mins
                      </div>
                      {scheduleForDay?.thumbnail && (
                        <Image
                          src={
                            scheduleForDay?.thumbnail?.trim() ??""
                          }
                          alt="Course thumbnail"
                          className="w-full h-10 object-cover mt-1 rounded"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Calendar;
