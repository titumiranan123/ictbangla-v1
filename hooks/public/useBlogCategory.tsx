import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const fetchBlogCategroy = async () => {
  const res = await api_url.get("/v1/website/blog-categories");
  return res.data;
};

export default function useBlogCategory() {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["blogCategory"],
    queryFn:  () => fetchBlogCategroy(),
  });
  return { data, isError, isLoading, refetch };
}
