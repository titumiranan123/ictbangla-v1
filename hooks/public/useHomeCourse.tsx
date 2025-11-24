import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useHomeCourse = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/website/get-course/list?page=1&&perPage=30"
      );
      return response.data;
    },
    select: (data) => data.response,
  });
  return { data, error, isLoading, isError, refetch };
};

export default useHomeCourse;
