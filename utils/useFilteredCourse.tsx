/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useMemo } from "react";

type PriceFilterOption = "FREE" | "PAID";

const matchesPrice = (priceFilters: PriceFilterOption[], isFree: string | boolean): boolean => {
  if (priceFilters.length === 0) return true;
  const isFreeBool = typeof isFree === 'string' ? isFree === 'true' : isFree;
  
  return priceFilters.some((p) => {
    if (p === "FREE") {
      return isFreeBool; // ফ্রী কোর্স হলে true রিটার্ন
    } else if (p === "PAID") {
      return !isFreeBool; // পেইড কোর্স হলে false রিটার্ন
    }
    return false;
  });
};

export const useFilteredCourses = (courseData: any, filters: any) => {
  return useMemo(() => {
    if (!courseData) {
      return [];
    }
    return courseData.filter((course: any) => {
      const { category, instructor, price, level, rating } = filters;
      const matchesCategory =
        category.length === 0 ||
        category.some((cat: string) =>
          course?.basicInfo?.category?.includes(cat)
        );

      const matchesInstructor =
        instructor.length === 0 ||
        instructor.includes(
          `${course?.basicInfo?.creator?.first_name} ${course?.basicInfo?.creator?.last_name}`
        );
      const matchesPriceValue = matchesPrice(price, course?.pricing?.isFree);
      const averageRating =
        course?.ratings?.length > 0
          ? course.ratings.reduce(
              (acc: number, cur: any) => acc + cur.rating,
              0
            ) / course.ratings.length
          : 0;

      const matchesRating = !rating || averageRating >= rating;

      const matchesLevel =
        level.length === 0 || level.includes(course?.basicInfo?.level);

      return (
        matchesCategory &&
        matchesInstructor &&
        matchesPriceValue &&
        matchesLevel &&
        matchesRating
      );
    });
  }, [courseData, filters]);
};
