/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MonthlySkeleton from "@/components/skeletonloader/MonthlySkeleton";
import useInstructorClassList from "@/hooks/instructor/useInstructorClassList";
import Image from "next/image";
import React, { useState } from "react";

interface ClassScheduleItem {
  date: string;
  time: string;
  link: string;
  course: string;
  duration: number;
  thumbnail?: string;
  instructor: string;
}

// Helper function to check if two dates are the same day
const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

// Helper function to format time (e.g., "16:10" → "4:10 PM")
const formatTime = (timeString: string): string => {
  if (!timeString) return "";
  const [hours, minutes] = timeString?.split(":");
  const hourNum = parseInt(hours, 10);
  if (isNaN(hourNum)) return timeString; // Return original if parsing fails
  
  const period = hourNum >= 12 ? "PM" : "AM";
  const displayHour = hourNum % 12 || 12;
  return `${displayHour}:${minutes} ${period}`;
};

const monthNames = (date: Date): string => {
  return date?.toLocaleString("default", { month: "long", year: "numeric" }) || "";
};

const generateMonthDays = (date: Date): (Date | null)[] => {
  if (!date) return [];
  
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const days: (Date | null)[] = [];

  // Add null for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }

  // Add all days of the month
  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
};

const InstructorMonthlyCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { data, isLoading } = useInstructorClassList();
  
  const classSchedule: ClassScheduleItem[] = React.useMemo(() => {
    if (!data) return [];
    
    return data.map((item: any) => ({
      date: item?.date && item?.date?.split("T")[0] || "",
      time: item?.start_time 
        ? new Date(item?.start_time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        : "",
      link: item?.class_link || "#",
      course: item?.title || "Untitled Course",
      duration: item?.duration || 0,
      thumbnail: item?.courseId?.media?.thumbnail,
      instructor: item?.creator 
        ? `${item.creator.first_name || ""} ${item?.creator?.last_name || ""}`.trim()
        : "Unknown Instructor",
    }));
  }, [data]);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate?.getMonth() + 1);
      return newDate;
    });
  };

  const days = generateMonthDays(currentDate);

  return (
    <>
      {isLoading ? (
        <MonthlySkeleton />
      ) : (
        <div className="max-w-4xl mx-auto">
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

              const scheduleForDay = classSchedule.find((item) => {
                if (!item?.date) return false;
                try {
                  const scheduleDate = new Date(item?.date);
                  return isSameDay(scheduleDate, day);
                } catch {
                  return false;
                }
              });

              const isToday = isSameDay(day, new Date());

              return (
                <div
                  key={day.toString()}
                  className={`min-h-24 p-2 border rounded flex flex-col ${
                    isToday ? "bg-blue-100 font-bold" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="text-right">{day?.getDate()}</div>
                  {scheduleForDay && (
                    <div className="mt-1 p-1 bg-blue-50 rounded text-xs">
                      <div className="font-medium truncate">
                        {scheduleForDay?.course}
                      </div>
                      <div>{formatTime(scheduleForDay?.time)}</div>
                      <div className="text-xs text-gray-500">
                        Duration: {scheduleForDay?.duration} mins
                      </div>
                      {scheduleForDay?.thumbnail && (
                        <div className="mt-1">
                          <Image
                            src={scheduleForDay?.thumbnail}
                            alt="Course thumbnail"
                            className="w-full h-10 object-cover rounded"
                            width={200}
                            height={100}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorMonthlyCalendar;