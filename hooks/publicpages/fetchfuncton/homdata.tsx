import { api_url } from "@/hooks/apiurl";

export const homedataFetch = async (type: string) => {
  const res = await api_url.get(`/v1/website/home/courses?type=${type}`);
  return res?.data || [];
};
