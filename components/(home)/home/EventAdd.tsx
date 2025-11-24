'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface EventCardProps {
  eventDate: Date;
  eventTitle: string;
  eventDescription: string;
  eventImage?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  eventDate,
  eventTitle,
  eventDescription,
  eventImage ,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer(); // initialize immediately
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  const formattedDate = eventDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const CountdownItem = ({ label, value }: { label: string; value: number }) => (
    <div className="text-center">
      <div className="text-2xl font-bold text-[#1cab55]">{value.toString().padStart(2, "0")}</div>
      <div className="text-xs text-[#1D2939]">{label}</div>
    </div>
  );

  return (
    <div className="container section mx-auto bg-secondary border border-[#d1fadf] rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row justify-between items-center p-4 gap-6">
      {/* Image */}
      <div className="relative md:w-[380px] md:h-[220px] w-full h-auto">
        <Image
          src={eventImage??''}
          alt={eventTitle}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-md"
        />
        <span className="text-sm bg-white px-2 py-1 rounded-md absolute top-2 left-2 font-semibold text-[#e1242c] shadow-sm">
          {formattedDate}
        </span>
      </div>

      {/* Event Info */}
      <div className="flex-1 flex flex-col justify-between gap-4 md:px-6">
        <h2 className="text-xl font-bold text-[#1D2939]">{eventTitle}</h2>
        <p className="text-[#1D2939]">{eventDescription}</p>

        {/* Countdown */}
        <div className="flex justify-between border border-[#d1fadf] rounded-md py-2 px-4 bg-white w-full max-w-[320px]">
          <CountdownItem label="Days" value={Math.max(0, timeLeft.days)} />
          <CountdownItem label="Hours" value={Math.max(0, timeLeft.hours)} />
          <CountdownItem label="Minutes" value={Math.max(0, timeLeft.minutes)} />
          <CountdownItem label="Seconds" value={Math.max(0, timeLeft.seconds)} />
        </div>
      </div>

      {/* Action */}
      <div className="w-full md:w-auto text-center">
        <button className="w-full md:w-[200px] bg-[#1cab55] hover:bg-[#16d43b] text-white font-medium py-2 px-4 rounded-lg transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
