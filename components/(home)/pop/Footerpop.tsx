/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import usePopUpPurchase from "@/hooks/(home)/usePopUpPurchase";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Footerpop = () => {
  const { data: dataList, isLoading } = usePopUpPurchase();
  const [showPopup, setShowPopup] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);

  useEffect(() => {
    if (!dataList || dataList.length === 0) return; // No data → don't run

    let index = 0;

    const showAndHide = () => {
      setCurrentData(dataList[index] || null);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 5000);

      index = (index + 1) % dataList.length;
    };

    showAndHide();
    const interval = setInterval(showAndHide, 10000);

    return () => clearInterval(interval);
  }, [dataList]);

  // 🛑 Don't render until loading is done & we have data
  if (isLoading || !dataList || dataList.length === 0 || !currentData) {
    return null;
  }
  return (
    <Link
      href={`/courses/${currentData?.slug || ""}`}
      className={`fixed bottom-8 md:left-5 left-2 border border-green-200 bg-white shadow-lg rounded-lg md:p-4 p-2 md:w-[300px] w-[290px] flex items-center gap-3 transition-transform duration-500 ${
        showPopup
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0 duration-100"
      }`}
      style={{ zIndex: 9 }}
    >
      <Image
        src={currentData?.thumbnail || "/placeholder.png"}
        alt={currentData?.title || "কোর্সের থাম্বনেইল"}
        width={56}
        height={56}
        className="w-14 h-14 object-cover rounded"
      />
      <div>
        <p className="text-[15px] leading-[20px] text-green-600 mt-1">
          🎉 <strong>{currentData?.name || "একজন ব্যবহারকারী"}</strong>
          <span> </span>সম্প্রতি এই কোর্সটি কিনেছে!
        </p>
        <p className="text-sm text-gray-600">
          {currentData?.title || "কোর্সের শিরোনাম নেই"}
        </p>
        {/* <p className="text-xs text-gray-500">
          {currentData?.ago_time || "এখনই"}
        </p> */}
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setShowPopup(false);
        }}
        className="absolute md:-top-5 md:-right-4 -top-2 -right-1 bg-green-200 w-6 h-6 rounded-full flex justify-center items-center"
      >
        &#10006;
      </button>
    </Link>
  );
};

export default Footerpop;
