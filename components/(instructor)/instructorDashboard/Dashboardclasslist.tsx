/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useInstructorClassList from "@/hooks/instructor/useInstructorClassList";
import Image from "next/image";
import { useState, useEffect } from "react";
import InstructorclassSheduleSkeleton from "../../skeletonloader/InstructorclassSheduleSkeleton";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";

// Transform function to convert API data to our format
const transformClassData = (data: any[]) => {
  return data?.map((item) => ({
    _id: item?._id,
    courseId: item?.courseId,
    sectionId: item?.sectionId,
    title: item?.title,
    duration: item?.duration,
    creator: item?.creator,
    date: item?.date && item?.date.split("T")[0],
    time: new Date(item?.start_time)
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/^24:/, "00:"),
    link: item?.class_link,
    thumbnail: item?.courseId?.media?.thumbnail,
    coursetitle: item?.courseId?.basicInfo?.title,
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

const InstructorClassSchedule = () => {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [currentDate] = useState(new Date().toISOString().split("T")[0]);
  const { data, isLoading, refetch } = useInstructorClassList();

  const classSchedule = transformClassData(data);

  // Generate days for the current week view
  const generateWeekDays = (weekOffset = 0) => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + weekOffset * 7 - today.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day.toISOString().split("T")[0];
    });
  };

  const upcomingDays = generateWeekDays(currentWeekOffset);
  const weekStart = upcomingDays[0];
  const weekEnd = upcomingDays[6];

  // Filter classes for current week only
  const currentWeekClasses = classSchedule?.filter((cls) =>
    upcomingDays.includes(cls?.date)
  );

  // Categorize classes
  const todayClasses = currentWeekClasses?.filter(
    (cls) => cls?.date === currentDate
  );
  const upcomingClasses = currentWeekClasses?.filter(
    (cls) =>
      new Date(`${cls?.date}T${cls?.time}:00`) > new Date() &&
      cls?.date !== currentDate
  );
  const pastClasses = currentWeekClasses?.filter(
    (cls) =>
      new Date(`${cls?.date}T${cls?.time}:00`) < new Date() &&
      cls?.date !== currentDate
  );

  const handlePrevWeek = () => setCurrentWeekOffset((prev) => prev - 1);
  const handleNextWeek = () => setCurrentWeekOffset((prev) => prev + 1);

  return (
    <>
      {!isLoading ? (
        <div className="mx-auto bg-white p-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            📅 Weekly Class Schedule
          </h2>

          {/* Week Navigation */}
          <div className="flex items-center justify-center space-x-4 my-4">
            <button
              onClick={handlePrevWeek}
              className="p-2 rounded-full hover:bg-gray-100"
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
              {getWeekRange(weekStart, weekEnd)}
            </div>

            <button
              onClick={handleNextWeek}
              className="p-2 rounded-full hover:bg-gray-100"
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

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]?.map((day) => (
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

          {/* Class Cards */}
          <div className="space-y-6">
            {/* Today's Classes */}
            {todayClasses?.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  Today&apos;s Classes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {todayClasses?.map((cls) => (
                    <ClassCard
                      key={cls?._id}
                      cls={cls}
                      isToday={true}
                      refetch={refetch}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Classes */}
            {upcomingClasses?.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                  Upcoming Classes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingClasses?.map((cls) => (
                    <ClassCard key={cls?._id} cls={cls} refetch={refetch} />
                  ))}
                </div>
              </div>
            )}

            {/* Past Classes */}
            {pastClasses?.length > 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-3 h-3 bg-gray-400 rounded-full mr-2"></span>
                  Completed Classes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pastClasses?.map((cls) => (
                    <ClassCard
                      refetch={refetch}
                      key={cls?._id}
                      cls={cls}
                      isPast={true}
                    />
                  ))}
                </div>
              </div>
            )}

            {currentWeekClasses?.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No classes scheduled for this week
              </div>
            )}
          </div>
        </div>
      ) : (
        <InstructorclassSheduleSkeleton />
      )}
    </>
  );
};

// Class Card Component
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
  date: string;
  time: string;
  link: string;
  thumbnail: string;
  coursetitle: string;
  instructor: string;
}

const ClassCard = ({
  cls,
  isToday = false,
  refetch,
}: {
  cls: ClassDetails;
  isToday?: boolean;
  isPast?: boolean;
  refetch: () => void;
}) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isOngoing, setIsOngoing] = useState(false);
  const [canJoin, setCanJoin] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [updatedLink, setUpdatedLink] = useState(cls?.link);
  const [isLinkMissing, setIsLinkMissing] = useState(!cls?.link);
  const [isBlinking, setIsBlinking] = useState(false);

  // Format time for display
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}m ${s}s`;
  };

  // Blink effect for missing link
  useEffect(() => {
    if (isLinkMissing) {
      const interval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLinkMissing]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const classTime = new Date(`${cls?.date}T${cls?.time}:00`);
      const classEndTime = new Date(
        classTime.getTime() + cls?.duration * 60000
      );

      // Time thresholds
      const twentyMinutesBefore = new Date(classTime.getTime() - 20 * 60000);
      const twentyMinutesAfterStart = new Date(
        classTime.getTime() + 20 * 60000
      );

      // Reset all states first
      setTimeLeft(null);
      setIsOngoing(false);
      setCanJoin(false);
      setShowCountdown(false);

      if (now < twentyMinutesBefore) {
      } else if (now >= twentyMinutesBefore && now < classTime) {
        setTimeLeft(Math.floor((classTime.getTime() - now.getTime()) / 1000));
        setShowCountdown(true);
      } else if (now >= classTime && now <= twentyMinutesAfterStart) {
        // First 20 minutes of class (join window)
        setTimeLeft(
          Math.floor((twentyMinutesAfterStart.getTime() - now.getTime()) / 1000)
        );
        setIsOngoing(true);
        setCanJoin(true);
      } else if (now > twentyMinutesAfterStart && now <= classEndTime) {
        // After join window but class still ongoing
        setIsOngoing(true);
      } else if (now > classEndTime) {
        // Class ended
        // All states remain reset
      }

      // Check if link is missing
      setIsLinkMissing(!cls?.link);
    }, 1000);

    return () => clearInterval(interval);
  }, [cls]);

  const handleUpdateLink = async () => {
    cls.link = updatedLink;
    setIsLinkMissing(!updatedLink);
    setEditMode(false);
    const updatedData = {
      class_link: updatedLink,
      courseId: cls?.courseId._id,
    };

    try {
      const res = await api_url.patch(
        `/v1/instructor/update-lesson/${cls?._id}`,
        updatedData
      );
      if (res.status === 201 || res.status === 200) {
        toast.success("Lesson updated successfully");
        refetch();
      } else {
        toast.error(res.data.message || "Failed to update lesson");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border ${
        // For completed classes, always use gray border regardless of link status
        new Date(`${cls?.date}T${cls?.time}:00`).getTime() +
          cls?.duration * 60000 <
        Date.now()
          ? "border-gray-300"
          : isLinkMissing && isBlinking
          ? "border-red-500"
          : isToday
          ? "border-green-300"
          : "border-blue-300"
      } ${
        // For completed classes, always use gray background regardless of link status
        new Date(`${cls?.date}T${cls?.time}:00`).getTime() +
          cls?.duration * 60000 <
        Date.now()
          ? "bg-gray-50"
          : isLinkMissing
          ? "bg-red-50"
          : isToday
          ? "bg-green-50"
          : "bg-blue-50"
      } transition-all duration-1000`}
    >
      <div className="flex flex-col items-start">
        <div className="flex flex-col w-full">
          {cls?.thumbnail && (
            <Image
              src={cls?.thumbnail ?? ""}
              alt="Course thumbnail"
              className="w-full h-[217px] scale-100 object-cover rounded"
              width={300}
              height={217}
            />
          )}
          <h3 className="font-medium text-lg mt-2">{cls?.coursetitle}</h3>
        </div>
        <div className="flex-1 w-full mt-2">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">{cls?.title}</h4>

            <p className="text-sm mt-1">
              {new Date(`${cls?.date}T${cls?.time}:00`).toLocaleString(
                "en-US",
                {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </p>
          </div>

          {/* Link edit section */}
          <div className="mt-2">
            {editMode ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={updatedLink}
                  onChange={(e) => setUpdatedLink(e.target.value)}
                  className="w-full p-2 border rounded text-sm"
                  placeholder="Enter class link (Zoom/Google Meet)"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdateLink}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm flex-1"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-300 px-3 py-1 rounded text-sm flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center bg-white p-2 rounded">
                <p
                  className={`text-sm truncate ${
                    isLinkMissing ? "text-red-500 italic" : "text-blue-600"
                  }`}
                >
                  {cls?.link || "No link provided - please add"}
                </p>
                <button
                  onClick={() => setEditMode(true)}
                  className="text-blue-500 text-sm ml-2 whitespace-nowrap"
                >
                  {cls?.link ? "Edit Link" : "Add Link"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3">
        {isOngoing && canJoin && timeLeft !== null && (
          <>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{
                  width: `${100 - (timeLeft / (20 * 60)) * 100}%`, // 20 minutes progress
                }}
              ></div>
            </div>
            <button
              className={`mt-2 w-full py-2 rounded text-sm font-medium ${
                canJoin
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              onClick={() => canJoin && window.open(cls?.link, "_blank")}
              disabled={!canJoin || isLinkMissing}
            >
              {isLinkMissing
                ? "Please Add Link First"
                : `Join Now (${formatTime(timeLeft)} left to join)`}
            </button>
          </>
        )}

        {showCountdown && timeLeft !== null && (
          <p className="text-sm text-blue-600 mt-1">
            Starts in: {formatTime(timeLeft)}
          </p>
        )}

        {isOngoing && !canJoin && (
          <p className="text-sm text-gray-500 mt-1">
            Join window closed (first 20 minutes only)
          </p>
        )}

        {!isOngoing &&
          !showCountdown &&
          new Date(`${cls?.date}T${cls?.time}:00`).getTime() +
            cls?.duration * 60000 <
            Date.now() && (
            <p className="text-sm text-gray-500 mt-1">Class completed</p>
          )}

        {!isOngoing &&
          !showCountdown &&
          new Date(`${cls?.date}T${cls?.time}:00`).getTime() +
            cls?.duration * 60000 >
            Date.now() && (
            <p className="text-sm text-gray-500 mt-1">Class will begin soon</p>
          )}
      </div>
    </div>
  );
};

export default InstructorClassSchedule;
