"use client";
import { api_url } from "@/hooks/apiurl";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import toast from "react-hot-toast";

const RightSideLeadsubmit = ({ courseId }: { courseId: string }) => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const handleSubmit = async () => {
    if (!number.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    try {
      setLoading(true);
      const res = await api_url.post(
        "/v1/website/submit-phone-under-course-details",
        {
          course_id: courseId,
          number,
        }
      );

      if (res.status === 200 || res.status === 201) {
        setNumber("");
        toast.success("Number saved successfully!");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-between gap-2 mt-3">
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        className="border border-[#9DCAB0] focus:outline-none outline-none rounded-[8px] px-3 flex-1"
        placeholder="ফোন নাম্বার দিন"
      />
      <button
        disabled={loading}
        onClick={() => handleSubmit()}
        className="text-[14px] rounded-lg w-[110px] py-3 px-2 bg-primary hover:bg-primary text-white font-bold disabled:cursor-not-allowed"
      >
        সাবমিট
      </button>
    </div>
  );
};

export default RightSideLeadsubmit;
