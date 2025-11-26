"use client";
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date; // Target date for countdown
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        // Countdown completed
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
        <h2 className="text-[32px] font-bold text-primary">
          {formatNumber(timeLeft.days)}
        </h2>
        <p className="text-[12px] font-bold text-primary">
          {timeLeft.days === 1 ? "Day" : "Days"}
        </p>
      </div>
      <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
        <h2 className="text-[32px] font-bold text-primary">
          {formatNumber(timeLeft.hours)}
        </h2>
        <p className="text-[12px] font-bold text-primary">
          {timeLeft.hours === 1 ? "Hour" : "Hours"}
        </p>
      </div>
      <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
        <h2 className="text-[32px] font-bold text-primary">
          {formatNumber(timeLeft.minutes)}
        </h2>
        <p className="text-[12px] font-bold text-primary">
          {timeLeft.minutes === 1 ? "Minute" : "Minutes"}
        </p>
      </div>
      <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
        <h2 className="text-[32px] font-bold text-primary">
          {formatNumber(timeLeft.seconds)}
        </h2>
        <p className="text-[12px] font-bold text-primary">
          {timeLeft.seconds === 1 ? "Second" : "Seconds"}
        </p>
      </div>
    </div>
  );
}

export default Countdown;
