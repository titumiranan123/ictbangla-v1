"use client";
import React, { useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { initDataLayer } from "@/lib/Googletagm";
const GTM = () => {
  const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;
  // console.log("googleTagManagerId================>", googleTagManagerId);
  useEffect(() => {
    initDataLayer();
  }, []);

  return <GoogleTagManager gtmId={googleTagManagerId as string} />;
};

export default GTM;
