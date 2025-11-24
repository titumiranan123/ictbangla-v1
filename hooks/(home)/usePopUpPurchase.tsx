import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const usePopUpPurchase = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["popup"],
    queryFn: async () => {
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${
        today.getDate() - 7
      }`;

      try {
        const res = await api_url.get(
          `/v1/website/get-purchase-history/for-home-popup?date=${formattedDate}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching section list:", error);
      }
    },
  });

  return { data, isError, isLoading };
};

export default usePopUpPurchase;
