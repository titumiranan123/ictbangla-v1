import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useInstructorDetails = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["instructor", id],
    queryFn: async () => {
      const res = await api_url.get(`/v1/website/get/instructor-details/${id}`);
      return res.data;
    },
  });
  return { data, isLoading, isError };
};

export default useInstructorDetails;
