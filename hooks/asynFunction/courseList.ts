import { api_url } from "../apiurl";

export const fetchCourse = async (orderby='FROM_NEW') => {
      const result = await api_url.get(
        `/v1/website/get-course/list?page=1&&perPage=20&&orderBy=${orderby}`
      );
      
      return result?.data?.response;
    }