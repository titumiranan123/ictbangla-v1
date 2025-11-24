import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const usePurchaseCourse = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["enrolledcourses"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/user/get-enrolled-course/list?page=1&perPage=20"
      );
      return response.data;
    },
  });
  return { data, error, isLoading, isError, refetch };
};

export default usePurchaseCourse;
