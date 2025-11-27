/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircleCheck } from "lucide-react";
import React from "react";
import Consultencypop from "./Consultencypop";

const Whomeneeds = ({
  target_audience,
  courseId,
}: {
  target_audience: any[];
  courseId: string;
}) => {
  return (
    <div className="bg-neutral  rounded-lg border border-primary p-8 mt-14">
      <h2 className="text-[24px]  text-primary font-[600]">কাদের প্রয়োজন</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        {target_audience?.map((dt, idx) => (
          <div key={idx} className="flex items-start gap-1">
            <CircleCheck className="text-primary fill-bg-secondary" />
            <span className="text-text-secondary font-[500] text-[18px]">
              {dt?.title}
            </span>
          </div>
        ))}
      </div>
      <Consultencypop courseId={courseId} />
    </div>
  );
};

export default Whomeneeds;
