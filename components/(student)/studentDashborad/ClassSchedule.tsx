/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

import ClassCard from "./Classcard";

interface ClassDetails {
  _id: string;
  courseId: {
    _id: string;
    media: {
      thumbnail: string;
    };
  };
  sectionId: {
    _id: string;
    title: string;
    slug: string;
  };
  title: string;
  duration: number;
  creator: {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: {
      number: string;
      is_verified: boolean;
      is_primary_number: boolean;
      _id: string;
    }[];
    profile_image: string;
  };
  date: string; // just date part (YYYY-MM-DD)
  start_time: string; // full ISO string
  time: string; // display string
  link: string;
  thumbnail: string;
  instructor: string;
}

const transformClassData = (data: any[]): ClassDetails[] => {
  return data?.map((item) => ({
    _id: item?._id,
    courseId: item?.courseId,
    sectionId: item?.sectionId,
    title: item?.title,
    duration: item?.duration,
    creator: item?.creator,
date: item?.date ? new Date(item.date)?.toISOString()?.split('T')?.[0] ?? '' : '',
    start_time: item?.start_time, // full ISO datetime string
    time: new Date(item?.start_time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
    link: item?.class_link ? item?.class_link : "#",
    thumbnail: item?.courseId?.media?.thumbnail,
    instructor: `${item?.creator?.first_name} ${item?.creator?.last_name}`,
  }));
};

const getMonthName = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

const getWeekRange = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.getMonth() === end.getMonth()) {
    return getMonthName(startDate);
  }
  return `${getMonthName(startDate)} - ${getMonthName(endDate)}`;
};

const ClassSchedule = ({ data }: { data: any[] }) => {
  const classSchedule = transformClassData(data);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [currentDate] = useState(new Date().toLocaleDateString("en-CA"));

  const generateWeekDays = (weekOffset = 0) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + weekOffset * 7 - today.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day.toLocaleDateString("en-CA");
    });
  };

  const upcomingDays = generateWeekDays(currentWeekOffset);
  const weekStart = upcomingDays[0];
  const weekEnd = upcomingDays[6];

  const currentWeekClasses = classSchedule?.filter((cls) =>
    upcomingDays.includes(cls?.date)
  );

  const now = new Date();

  const todayClasses = currentWeekClasses?.filter(
    (cls) =>
      new Date(cls?.start_time).toLocaleDateString("en-CA") === currentDate
  );

  const upcomingClasses = currentWeekClasses?.filter((cls) => {
    const dt = new Date(cls?.start_time);
    return dt > now && dt.toLocaleDateString("en-CA") !== currentDate;
  });

  const pastClasses = currentWeekClasses?.filter((cls) => {
    const dt = new Date(cls?.start_time);
    return dt < now && dt.toLocaleDateString("en-CA") !== currentDate;
  });

  const handlePrevWeek = () => setCurrentWeekOffset((prev) => prev - 1);
  const handleNextWeek = () => setCurrentWeekOffset((prev) => prev + 1);

  return (
    <div className="mx-auto bg-white p-4">
      <h2 className="text-2xl font-bold text-center mb-6">
        📅 Weekly Class Schedule
      </h2>

      <div className="flex items-center justify-center space-x-4 my-4">
        <button
          onClick={handlePrevWeek}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          ←
        </button>
        <div className="font-medium text-gray-700">
          {getWeekRange(weekStart, weekEnd)}
        </div>
        <button
          onClick={handleNextWeek}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          →
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

        {upcomingDays?.map((day) => {
          const isToday = day === currentDate;
          const hasClass = classSchedule?.some((cls) => cls?.date === day);
          const dayNumber = new Date(day).getDate();

          return (
            <div
              key={day}
              className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-200 border h-14 ${
                isToday
                  ? "border-green-500 bg-green-50"
                  : hasClass
                  ? "border-blue-200 bg-blue-50 hover:bg-blue-100"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span
                className={`text-sm ${
                  isToday
                    ? "bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    : "text-gray-700"
                }`}
              >
                {dayNumber}
              </span>
              {hasClass && (
                <div className="absolute bottom-1 w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </div>
          );
        })}
      </div>

      <div className="space-y-6">
        {todayClasses?.length > 0 && (
          <ClassSection
            title="Today's Classes"
            color="green"
            classes={todayClasses}
            isToday
          />
        )}
        {upcomingClasses?.length > 0 && (
          <ClassSection
            title="Upcoming Classes"
            color="blue"
            classes={upcomingClasses}
          />
        )}
        {pastClasses?.length > 0 && (
          <ClassSection
            title="Completed Classes"
            color="gray"
            classes={pastClasses}
            isPast
          />
        )}
        {currentWeekClasses?.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No classes scheduled for this week
          </div>
        )}
      </div>
    </div>
  );
};

const ClassSection = ({
  title,
  color,
  classes,
  isToday = false,
  isPast = false,
}: {
  title: string;
  color: string;
  classes: ClassDetails[];
  isToday?: boolean;
  isPast?: boolean;
}) => (
  <div>
    <h3 className="text-xl font-bold mb-4 flex items-center">
      <span className={`w-3 h-3 bg-${color}-500 rounded-full mr-2`}></span>
      {title}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {classes?.map((cls) => (
        <ClassCard key={cls?._id} cls={cls} isToday={isToday} isPast={isPast} />
      ))}
    </div>
  </div>
);

export default ClassSchedule;
