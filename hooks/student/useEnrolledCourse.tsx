import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useEnrolledCourse = (id: string) => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["enrolled", id],
    queryFn: async () => {
      try {
        const res = await api_url.get(
          `/v1/user/get-enrolled-course/details/${id}`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { data, isError, isLoading, refetch };
};

export default useEnrolledCourse;
