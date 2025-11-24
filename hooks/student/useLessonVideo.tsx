import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useLessonVideo = (id: string) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["classlist", id],
    queryFn: async () => {
      try {
        const res = await api_url.get(
          `/v1/user/get-enrolled-lesson/details/${id}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching section list:", error);
      }
    },
    enabled: !!id,
  });

  return { data, isError, isLoading };
};

export default useLessonVideo;
