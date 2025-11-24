"use client";
import { useState, useEffect } from "react";
import IconImage from "../../(additional pages)/about-us/iconImages";

export default function CourseTopTimeCount({
  class_start_date,
}: {
  class_start_date: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = class_start_date
      ? new Date(class_start_date).getTime()
      : new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [class_start_date]);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="w-full mt-0 bg-primary text-white flex lg:flex-row flex-col items-center justify-center gap-4 lg:py-2.5 py-5">
      <h4 className="md:text-2xl md:leading-[28px] md:flex hidden font-bold gap-2">
        <span className="underline"> ICTBANGLA </span> প্রমো এপলাই করলে ৩৫%
        ডিসকাউন্ট আর বাকি
      </h4>
      <h4 className="text-xl font-bold md:hidden flex flex-col justify-center items-center gap-2">
        <span className="underline">ICTBANGLA প্রমো এপলাই করলে </span>
        <span className="text-[48px] text-center"> ৩৫% ডিসকাউন্ট </span>
        <span className="text-[36px] text-center">আর বাকি</span>
      </h4>
      <button
        className="text-primary bg-white rounded-lg text-lg font-bold py-1 px-4 flex items-center gap-2 cursor-pointer"
        type="button"
      >
        <IconImage fileName="Clock-green-primary.svg" />
        <span>
          {formatTime(timeLeft.hours)}ঘ.{formatTime(timeLeft.minutes)}মি.
          {formatTime(timeLeft.seconds)}সে.
        </span>
      </button>
    </div>
  );
}
