import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorCertificateEnroled = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["certificateEnrollcoures"],
    queryFn: async () => {
      try {
        const res = await api_url.get(`/v1/instructor/instructor-course-list`);
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { data, isError, isLoading, refetch };
};

export default useInstructorCertificateEnroled;
