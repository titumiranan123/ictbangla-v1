import { coursedetailsFetch } from "@/hooks/public/publicFetchfun/coursedetailsfetch";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export const CoursePrefetchHandler = (slug: string) => {
  if (!queryClient.getQueryData(["course", slug])) {
    queryClient.prefetchQuery({
      queryKey: ["course", slug],
      queryFn: () => coursedetailsFetch(slug),
      staleTime: 1000 * 60 * 5,
    });
  } else {
    console.log("already Prefetch");
  }
};
