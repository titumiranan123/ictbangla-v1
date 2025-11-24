import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";
const useUserDashboard = () => {

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["user_dashboard"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/user/get/dashboard-overview"
      );
      return response.data;
    },

  });
  return { data, error, isLoading, isError, refetch };
};

export default useUserDashboard;
