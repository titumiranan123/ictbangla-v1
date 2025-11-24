import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorSection = (id:string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["instructorSection",id],
    queryFn: async () => {
      const response = await api_url.get(`/v1/instructor/get-section-list?courseId=${id}`);
      return response.data;
    },
  });
  return { data, isLoading, refetch };
};

export default useInstructorSection;
