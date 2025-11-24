import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";

interface ClassDetails {
  _id?: string;
  title: string;
  start_time: string; // ISO date string (e.g. "2025-06-20T16:41:00.000Z")
  duration: number; // in minutes
  thumbnail?: string;
  instructor?: string;
  link?: string;
}

interface Props {
  cls: ClassDetails;
  isToday?: boolean;
  isPast?: boolean;
}

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const ClassCard = ({ cls, isToday = false, isPast = false }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isOngoing, setIsOngoing] = useState(false);
  const [isJoinWindowClosed, setIsJoinWindowClosed] = useState(false);

  useEffect(() => {
    const calculateTimeState = () => {
      const now = new Date();
      const classStart = new Date(cls.start_time);
      const classEnd = new Date(classStart.getTime() + cls.duration * 60000);
      const joinEnd = new Date(classStart.getTime() + 20 * 60000);
      const countdownStart = new Date(classStart.getTime() - 20 * 60000);

      if (now >= classStart && now <= joinEnd) {
        // Class ongoing (within 20 min window)
        setIsOngoing(true);
        setTimeLeft(Math.floor((joinEnd.getTime() - now.getTime()) / 1000));
        setIsJoinWindowClosed(false);
      } else if (now >= countdownStart && now < classStart) {
        // Countdown phase (20 min before start)
        setIsOngoing(false);
        setTimeLeft(Math.floor((classStart.getTime() - now.getTime()) / 1000));
        setIsJoinWindowClosed(false);
      } else if (now > joinEnd && now < classEnd) {
        // Class is ongoing but join window has closed
        setIsOngoing(false);
        setTimeLeft(null);
        setIsJoinWindowClosed(true);
      } else {
        // Outside all active windows
        setIsOngoing(false);
        setTimeLeft(null);
        setIsJoinWindowClosed(now > joinEnd);
      }
    };

    // Calculate immediately to avoid initial delay
    calculateTimeState();

    const interval = setInterval(calculateTimeState, 1000);
    return () => clearInterval(interval);
  }, [cls?.start_time, cls?.duration]);

  const getCardBorderStyle = () => {
    if (isToday) return "border-green-300 bg-green-50";
    if (isPast) return "border-gray-300 bg-gray-50";
    return "border-blue-300 bg-blue-50";
  };

  const renderTimeStatus = () => {
    if (timeLeft === null) {
      if (isPast || isJoinWindowClosed) {
        return (
          <p className="text-sm text-gray-500 text-center mt-2">
            Class completed
          </p>
        );
      }
      return null;
    }

    return isOngoing ? (
      <>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full rounded-full transition-all"
            style={{
              width: `${100 - (timeLeft / (20 * 60)) * 100}%`,
            }}
          />
        </div>
        <button
          className="mt-3 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium shadow transition-colors"
          disabled={!cls.link}
        >
          {cls.link ? (
            <span onClick={() => handleJoin()}>{`Join Now ${formatTime(
              timeLeft
            )} remaining`}</span>
          ) : (
            <>Join Link Not Available</>
          )}
        </button>
      </>
    ) : (
      <p className="text-sm text-blue-700 font-medium mt-1 text-center">
        Starts in: {formatTime(timeLeft)}
      </p>
    );
  };
  const handleJoin = async () => {
    try {
      const res = await api_url.post(`/v1/user/join/class/${cls._id}`);
    
      if (res.status === 201) {
        window.open(res?.data?.class_link, "_blank");
      }
    } catch (error) {
      console.log(error);
      toast.error("Class join failed ! Contact Support");
    }
  };
  return (
    <div
      className={`p-5 rounded-xl border shadow-sm transition-all duration-300 ${getCardBorderStyle()}`}
    >
      <div className="flex items-start gap-4">
        {cls?.thumbnail && (
          <Image
            src={cls?.thumbnail}
            alt={`${cls?.title} thumbnail`}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-md"
            priority={isToday && !isPast}
          />
        )}

        <div className="flex-1">
          <h4 className="font-semibold text-lg">{cls?.title}</h4>
          {cls?.instructor && (
            <p className="text-sm text-gray-600">Mentor: {cls.instructor}</p>
          )}
          <p className="text-sm mt-1 text-gray-700">
            {new Date(cls.start_time).toLocaleString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Duration: {cls.duration} minutes
          </p>
        </div>
      </div>

      <div className="mt-4">{renderTimeStatus()}</div>
    </div>
  );
};

export default ClassCard;
