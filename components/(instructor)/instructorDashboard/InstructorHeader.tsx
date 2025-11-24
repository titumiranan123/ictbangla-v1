"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import book from "@/public/assets/icon/book.svg";
import award from "@/public/assets/icon/award.svg";
import Button from "../../(home)/shared/Button";
import { InstructorHeaderSkeleton } from "../../skeletonloader/InstructorHeaderSkeleton";
const Instructorheader: React.FC = () => {
  const { data, status }: { data: any; status: string } = useSession();
  if (status === "loading") {
    return <InstructorHeaderSkeleton />;
  }
  return (
    <div className="bg-[#FFEFEA] md:py-[66px] py-10  ">
      <div className="max-w-[1280px] lg:h-[120px] mx-auto px-5">
        <div className="flex justify-between lg:items-center lg:flex-row flex-col items-start lg:gap-5 gap-10">
          <div className="flex gap-10 items-center">
            <div className="md:w-32 md:h-32 w-24 h-24 p-4 border-2 rounded-full border-orange-500">
              {data?.user?.image ? (
                <Image
                  className="w-32 h-32 rounded-full"
                  src={data?.user?.image ?? ""}
                  alt="image"
                />
              ) : (
                <div className="w-full h-full border rounded-full bg-gray-200 flex items-center justify-center font-bold">
                  <span>{data?.user?.first_name?.charAt(0) || "U"}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col  gap-1">
              <h1>
                Welcome, {data?.user?.first_name} {data?.user?.first_name}
              </h1>
              <div className="flex lg:flex-row flex-col lg:items-center gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <Image src={book} alt="book" /> <p>5 Courses Enroled</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={award} alt="awrd" /> <p>5 Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="btn-primary"
            title="Create Course"
            href="/instructor-add-course"
          />
        </div>
      </div>
    </div>
  );
};

export default Instructorheader;
