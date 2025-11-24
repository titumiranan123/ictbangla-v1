
import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useCourseClassAnalytics = (id:string) => {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["instructor-class"],
    queryFn: async () => {
      const result = await api_url.get(
        `/v1/instructor/get-class-overview/${id}`
      );
      return result.data;
    },
  });
  return { data, error, isError, isLoading, refetch };
};


export default useCourseClassAnalytics;