/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import lesson from "@/public/assets/icon/lesson.svg";
import clock from "@/public/assets/icon/clock-three.svg";
import student from "@/public/assets/icon/users.svg";
import { RenderStars } from "../shared/RenderStars";
import Button from "../shared/Button";
import toast from "react-hot-toast";
import { Course } from "@/utils/interface";
import { api_url } from "@/hooks/apiurl";

interface CourseCardProps {
  course: Course;
}
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}
const Coursereviewcard: React.FC<CourseCardProps> = ({ course }: any) => {
  const addToCart = (course: CartItem) => {
    try {
      const storedCart = localStorage.getItem("cart");
      let updatedCart: CartItem[] = [];

      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          updatedCart = parsedCart;
        }
      }

      const existingItem = updatedCart.find((item) => item.id === course.id);

      if (existingItem) {
        toast.error("Course already in cart!");
        return;
      } else {
        updatedCart.push({ ...course, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Course added to cart! 🎉");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add course to cart! ❌");
    }
  };

  const makeFavourite = async (id: string) => {
    try {
      const response = await api_url.post(`/v1/user/create/favorite-course`, {
        courseId: id,
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Course added to your wishlist! 🎉");
      } else {
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to add course to wishlist! ❌");
      }
    }
  };

  return (
    <div className="md:w-[320px]  p-3 w-full group min-h-[410px] lg:h-auto  rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between flex-col">
      {/* Thumbnail */}
      <div className="w-full md:h-52 h-48 overflow-hidden rounded-t-lg relative">
        <Link href={`/courses/${course?.course?.basicInfo?.slug ?? ""}`}>
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={course?.course?.media?.thumbnail?.trim() ?? ""}
              alt={course?.course?.basicInfo?.title || "card image"}
              width={300}
              height={252}
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover transition-transform duration-500 "
            />
          </div>
        </Link>

        <span
          onClick={() => makeFavourite(course?._id)}
          className="w-8 h-8 bg-white absolute top-4 right-3 flex justify-center rounded-full items-center transition-all duration-300 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-md hover:bg-[#f6fef9] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-[#1cab55]  transition-colors"
            width={20}
            height={20}
          >
            <path d="M17.75,1c-2.504,0-4.777,1.851-5.75,4.354-.973-2.504-3.246-4.354-5.75-4.354C2.804,1,0,3.804,0,7.25c0,6.76,9.754,14.07,11.709,15.466l.291,.208,.291-.208c1.956-1.396,11.709-8.707,11.709-15.466,0-3.446-2.804-6.25-6.25-6.25Zm-5.75,20.693C6.859,17.958,1,12.022,1,7.25,1,4.355,3.355,2,6.25,2c2.748,0,5.25,2.86,5.25,6h1c0-3.14,2.502-6,5.25-6,2.895,0,5.25,2.355,5.25,5.25,0,4.772-5.859,10.708-11,14.443Z" />
          </svg>
        </span>
      </div>

      {/* Course Content */}
      <div className="p-4">
        {/* Course Stats */}
        <div className="flex gap-4  text-[#585d69] text-sm">
          <span className="flex items-center gap-[6px]">
            <Image className="w-4 h-4" src={student} alt="students" />
            <span>{course?.course?.totalStudent || 0}</span> Students
          </span>
          <div className="flex items-center gap-[6px]">
            <Image className="w-4 h-4" src={lesson} alt="lessons" />
            <span>{course?.course?.totalLessons || 0}</span> Lessons
          </div>
          <span className="flex items-center gap-[6px]">
            <Image className="w-4 h-4" src={clock} alt="clock" />
            <span>{course?.course?.hours || 0}</span> hours
          </span>
        </div>

        {/* Course Title */}
        <Link
          href={`/courses/${course?.course?.basicInfo?.slug}`}
          className="text-[18px] font-medium mt-2 block text-[#1D2939] hover:text-[#1cab55] transition-colors  line-clamp-6"
        >
          {course?.course?.basicInfo?.title ?? ""}
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1 text-sm">
          {RenderStars(course?.course?.ratings?.length ?? 0)} (
          {course?.course?.ratings?.length ?? 0})
        </div>

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t border-[#d1fadf]">
          <p className="text-[#1cab55] text-lg font-medium">
            Tk. {course?.course?.pricing?.price?.main ?? ""}
          </p>
          <div
            className="cursor-pointer"
            onClick={() =>
              addToCart({
                id: course?.course?._id,
                name: course?.course?.basicInfo.title,
                price: !course?.course?.pricing.isFree
                  ? course?.course?.pricing.price.main
                  : 0,
                quantity: 1,
                thumbnail: course?.course?.media.thumbnail,
              })
            }
          >
            <Button
              title="Add to Cart"
              className="text-white bg-[#1cab55] hover:bg-[#16d43b] px-4 py-2 rounded-md transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursereviewcard;
