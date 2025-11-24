import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorCourse = (pageNumber?: number, status?: string) => {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["instructorCourse", pageNumber, status],
    queryFn: async () => {
      const result = await api_url.get(
        `/v1/instructor/get-course-list?page=${pageNumber}&perPage=10${
          status ? `&status=${status}` : ""
        }`
      );

      return result.data;
    },
  });
  return { data, error, isError, isLoading, refetch };
};

export default useInstructorCourse;
