import { api_url } from "@/hooks/apiurl"

export const blogFetch = async() =>{
    const res = await api_url.get("/v1/user/get/blog-list")
    return res?.data
}