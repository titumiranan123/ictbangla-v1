import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useBlogs = (page: number) => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["blogs", page],
    queryFn: async () => {
      const response = await api_url.get(`/v1/website/get/blog-list?page=${page}&perPage=4`);
      return response.data;
    },
    staleTime: Infinity, 
  });

  return { data, error, isLoading, isError, refetch };
};
export default useBlogs
