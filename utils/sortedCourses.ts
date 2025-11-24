/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";

const useSortedCourses = (filteredCourses: any[], sortOption: string) => {
  const sortedCourses = useMemo(() => {
    const courses = [...filteredCourses];
    switch (sortOption) {
      case "lowToHigh":
        return courses.sort(
          (a, b) => a?.pricing?.price?.main - b?.pricing?.price?.main
        );
      case "highToLow":
        return courses?.sort(
          (a, b) => b?.pricing?.price?.main - a?.pricing?.price?.main
        );
    //   case "titleAsc":
    //     return courses?.sort((a, b) => a?.title?.localeCompare(b?.title));
    //   case "titleDesc":
    //     return courses?.sort((a, b) => b?.title?.localeCompare(a?.title));
    case "ratingLowToHigh":
        return courses?.sort((a, b) =>
          getAverageRating(a?.ratings) - getAverageRating(b?.ratings)
        );
      case "ratingHighToLow":
        return courses?.sort((a, b) =>
          getAverageRating(b?.ratings) - getAverageRating(a?.ratings)
        );

      default:
        return courses;
    }
  }, [filteredCourses, sortOption]);
  return sortedCourses
};


const getAverageRating = (ratings: { rating: number }[] = []) => {
    if (ratings?.length === 0) return 0;
    const sum = ratings?.reduce((acc, curr) => acc + curr?.rating, 0);
    return sum / ratings?.length;
  };
export default useSortedCourses;
