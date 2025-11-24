import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorlist = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["instructorlist"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/website/get/instructor-list"
      );
      return response.data;
    },
  });
  return { data, error, isLoading, isError, refetch };
};

export default useInstructorlist;
