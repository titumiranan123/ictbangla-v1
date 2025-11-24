import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useBlogDetails = (slug: string) => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const response = await api_url.get(`/v1/website/get/blog-details/${slug}`);
      return response.data;
    },
  });

  return { data, error, isLoading, isError, refetch };
};
export default useBlogDetails
