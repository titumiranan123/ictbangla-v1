/* eslint-disable @typescript-eslint/no-explicit-any */
import { api_url } from "@/hooks/apiurl"
import toast from "react-hot-toast";

export const addSection = async (courseId: string, data: any) => {
    const res = await api_url.post(
        `/v1/instructor/create-section-for-course`,{courseId, ...data}
    );
    if (res.status === 201) {
        toast.success("Section added successfully");
        return res.data;
    }else{
        toast.error(res.data.message);
        return res.data;
    }
}
export const updateSection = async (sectionid: string, data: any) => {
    const res = await api_url.post(
        `/v1/instructor/update-section/${sectionid}`,{data}
    );
    if (res.status === 201) {
        toast.success("Section updated successfully");
        return res.data;
    }else{
        toast.error(res.data.message);
        return res.data;
    }
}

export const deleteSection = async (sectionId: string) => {
    const res = await api_url.delete(
        `/v1/instructor/delete-section/${sectionId}`
    );
    if (res.status === 201) {
        toast.success("Section deleted successfully");
        return res.data;
    }else{
        toast.error(res.data.message);
        return res.data;
    }
}