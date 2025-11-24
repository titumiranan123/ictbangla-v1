"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "../asynFunction/fetchHome";

const useHomeData = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["allHomedata"],
    queryFn: ()=>fetchHomeData()
    // staleTime: 1000*60*5,
    // gcTime:1000*60*5,
    // refetchOnWindowFocus:false,
    // retry:2
  });
  return { data, error, isLoading, isError, refetch };
};

export default useHomeData;
