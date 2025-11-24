import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useSectionList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["section"],
    queryFn: async () => {
      try {
        const res = await api_url.get("/v1/instructor/get-section-list/?courseId=67d93834d16e110cbbda19ec");
        return res.data.sections;
      } catch (error) {
        console.error("Error fetching section list:", error);
        throw error; // This will properly handle the error in React Query
      }
    }
  });

  return { data, isError, isLoading };
};

export default useSectionList;