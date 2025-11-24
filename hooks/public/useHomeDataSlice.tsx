"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useHomeData from "./useAllHomeData";


export const useHomeDataSlice = <K extends keyof any>(key: K) => {
  const { data, ...query } = useHomeData();

  return {
    data: data?.[key],
    ...query,
  };
};
