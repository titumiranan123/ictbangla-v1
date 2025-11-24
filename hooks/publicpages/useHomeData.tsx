import { useQuery } from "@tanstack/react-query";
import { homedataFetch } from "./fetchfuncton/homdata";

export const useHomeData = (type: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`${type}`],
    queryFn: () => homedataFetch(type),
  });
  return { data, isError, isLoading };
};
