import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useHomeSetting = () => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["setting"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/website/get/settings-data"
      );
      return response.data;
    },
  });
  return { data, error, isLoading, isError, refetch };
};

export default useHomeSetting;
