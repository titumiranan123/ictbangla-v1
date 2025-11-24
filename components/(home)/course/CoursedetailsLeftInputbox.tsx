/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { api_url } from "@/hooks/apiurl";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CoursedetailsLeftInputbox = ({ courseId }: { courseId: string }) => {
  const [number, setNumber] = useState<string>(""); // string রাখা ভালো, কারণ number leading 0 lose করতে পারে
  const [loading, setLoading] = useState(false);

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
    <div className="space-y-2 mt-2">
      <p className="text-primary font-semibold">
        কোর্স সংক্রান্ত আরও তথ্য জানতে
      </p>
      <div className="flex gap-2">
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          placeholder="Enter your phone number"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CoursedetailsLeftInputbox;
