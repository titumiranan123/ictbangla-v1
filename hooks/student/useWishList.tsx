/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { api_url } from "../apiurl";

const useWishList = () => {
  const { data: session }: any = useSession();
  const token = session?.user?.token;
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await api_url.get(
        "/v1/user/get/favorite-course",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    enabled: !!token,
  });
  return { data, error, isLoading, isError, refetch };
};

export default useWishList;
