"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CountUp from "react-countup";

const Counter: React.FC<{ stat: any }> = ({ stat }) => {
  return (
    <h3 className="text-[18px] lg:text-[26px] font-[600]  mb-1">
      <noscript>
        <span>
          {stat.sub_title} {stat?.icon || ""}
        </span>
      </noscript>
      <CountUp
        start={1}
        end={stat.sub_title}
        suffix={` ${stat?.icon}`}
        duration={2.75}
        enableScrollSpy
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </h3>
  );
};

export default Counter;
