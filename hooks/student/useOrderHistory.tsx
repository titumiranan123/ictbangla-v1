import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useOrderHistory = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["orderhistory"],
    queryFn: async () => {
      try {
        const res = await api_url.get("/v1/user/get/purchase-history");
        return res.data;
      } catch (error) {
        console.error("Error fetching section list:", error)
      }
    }
  });

  return { data, isError, isLoading };
};

export default useOrderHistory;