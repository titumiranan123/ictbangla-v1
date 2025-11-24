import { useQuery } from "@tanstack/react-query"
import { blogFetch } from "../fetchfunctions/instructor/blogfetch"

export const useInstructorBlog =()=>{
    const {data,isLoading,refetch} = useQuery({
        queryKey:["blogs"],
        queryFn:()=>blogFetch()
    })
    return {data,isLoading,refetch}
}