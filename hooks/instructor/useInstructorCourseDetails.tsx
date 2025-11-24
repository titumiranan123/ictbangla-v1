
import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorCourseDetails = (id: string) => {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["instructorCourse",id],
    queryFn: async () => {
      const result = await api_url.get(
        `/v1/instructor/get-course-details/${id}`
      );
      return result.data;
    },
    staleTime:0
  });
  return { data, error, isError, isLoading, refetch };
};

export default useInstructorCourseDetails;
