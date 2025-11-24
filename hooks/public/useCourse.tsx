import { useQuery } from "@tanstack/react-query";
import { fetchCourse } from "../asynFunction/courseList";

const useCourse = (orderBy = "FROM_NEW") => {
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["coursess", orderBy],
    queryFn: () => fetchCourse(orderBy),
  });
  return { data, error, isError, isLoading, refetch };
};

export default useCourse;
