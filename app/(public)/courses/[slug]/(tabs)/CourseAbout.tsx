/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import CourseReturn from "../CourseReturn";
import Whomeneeds from "../Whomeneeds";

const CourseAbout = ({
  description,
  othersContent,
  id,
}: {
  description: string;
  id: string;
  othersContent: any;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="relative w-full bg-white rounded-xl p-4 text-gray-700">
        <div
          className={`transition-all duration-300 overflow-hidden ${
            expanded ? "max-h-[800px]" : "max-h-[180px]"
          }`}
        >
          <p className="leading-relaxed text-textPrimary text-justify text-sm md:text-base lg:text-lg font-[500]">
            {description}
          </p>
        </div>

        {/* Gradient Fade at Bottom */}
        {!expanded && (
          <div className="absolute bottom-2  left-0 w-full h-[180px] bg-gradient-to-t from-[#ffffff] via-[#ffffffb5] to-transparent pointer-events-none rounded-b-xl"></div>
        )}

        {/* See More Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-textPrimary bg-textPrimary/5 font-semibold px-4 z-10 py-2 rounded-[24px] flex items-center gap-1  shadow-sm hover:shadow-md transition "
          >
            {expanded ? (
              <>
                See Less <ChevronUp className="w-4 h-4" />{" "}
              </>
            ) : (
              <>
                See More <ChevronDown className="w-4 h-4" />{" "}
              </>
            )}
          </button>
        </div>
      </div>
      {othersContent?.course_features !== undefined &&
        othersContent?.course_features?.length > 0 && (
          <CourseReturn course_features={othersContent?.course_features} />
        )}
      {othersContent?.target_audience !== undefined &&
        othersContent?.target_audience?.length > 0 && (
          <Whomeneeds
            target_audience={othersContent?.target_audience}
            courseId={id}
          />
        )}
    </div>
  );
};

export default CourseAbout;
