import { api_url } from "../apiurl";

export const fetchHomeData = async () => {
      const response = await api_url.get("/v1/website/get/home-data");
      return response.data;
    }