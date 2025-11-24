import { api_url } from "@/hooks/apiurl"

export const fetchBlogBySlug = async(id:string)=>{
    const res = await api_url.get(`/v1/user/get/blog-details/${id}`)
    return res.data
}