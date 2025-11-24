import { useQuery } from "@tanstack/react-query";
import { api_url } from "../apiurl";

const useGetInstructorCertificate = ({
  course_type,
  course,
  status,
}: {
  course_type: string;
  course: string;
  status: string;
}) => {
  const queryParams = new URLSearchParams();
  if (status) queryParams.set("status", status);
  if (course) queryParams.set("course", course);
  if (course_type) queryParams.set("course_type", course_type);
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["certificateEnrollCourses", course_type, course, status],
    queryFn: async () => {
      try {
        const res = await api_url.get(
          `/v1/instructor/certificate-request?${queryParams.toString()}`
        );
        return res.data;
      } catch (error) {
        console.error("Error fetching certificate enrollments:", error);
        throw error;
      }
    },
  });

  return { data, isError, isLoading, refetch };
};

export default useGetInstructorCertificate;
