/* eslint-disable @typescript-eslint/no-explicit-any */
import { api_url } from "@/hooks/apiurl";

export const coursedetailsFetch = async (sku: string) => {
  try {
    const result = await api_url.get(`/v1/website/get-course/details/${sku}`);
    return result.data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
