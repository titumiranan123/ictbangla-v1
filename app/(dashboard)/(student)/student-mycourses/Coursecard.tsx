"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";
import ProgressBar from "./ProgressBar";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";

const Coursecard: React.FC<{ data: any }> = ({ data }) => {
  const handleGetCertificate = async () => {
    try {
      const result = await api_url.post("/v1/user/get-certificate", {
        courseId: data?.course?._id,
        purchaseId: data?._id,
      });

      if (result.status === 200 || result.status === 201) {
        const imageUrl = result.data?.certificate_image;

        // 🔹 fetch করে blob বানিয়ে download করব
        const response = await fetch(imageUrl, { mode: "cors" });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${result.data?.certificate_uuId}.png`;
        document.body.appendChild(link);
        link.click();

        // cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        toast.success("Certificate downloaded successfully!");
        return;
      }

      toast.error("Failed to download certificate");
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-secondary rounded-lg mt-1 p-4 md:w-[580px] md:h-[230px] overflow-hidden flex md:flex-row flex-col justify-center items-center gap-4">
      <Image
        className="md:w-[230px] md:h-[200px] w-full h-auto rounded-lg"
        src={data?.course?.media?.thumbnail}
        width={250}
        height={120}
        alt={`${data?.course?.basicInfo?.title}`}
      />
      <div className="flex-1 flex gap-5 flex-col">
        <h2 className="text-xl font-semibold ">
          {data?.course?.basicInfo?.title}
        </h2>
        <div>
          <ProgressBar percentage={10} />
        </div>
        <div className="flex gap-2">
          <Link
            href={`/student-enrolled-course/${data?._id}`}
            className="bg-gradient-to-l to-green-400 from-green-600 py-2 px-4 rounded-full w-[130px] h-[45px] text-slate-100 font-[500] flex justify-center items-center"
          >
            Continue
          </Link>
          {data?.courseStatus === "COMPLETE" && (
            <button
              onClick={() => handleGetCertificate()}
              className="border border-green-500 py-2 px-4 rounded-full gap-1 h-[45px]  font-[500] flex justify-center items-center"
            >
              {data?.course?.basicInfo?.course_type === "LIVE_COURSE" ? (
                <>Request For Certificate</>
              ) : (
                <>
                  <FaDownload /> Get Certificate
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
