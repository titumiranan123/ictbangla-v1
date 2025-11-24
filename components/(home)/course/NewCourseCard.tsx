/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import lesson from "@/public/assets/icon/lesson.svg";
import clock from "@/public/assets/icon/clock-three.svg";
import student from "@/public/assets/icon/users.svg";
import { RenderStars } from "../shared/RenderStars";
import Button from "../shared/Button";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import { useDispatch } from "react-redux";
import { addToCart, setCheckOutCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { CoursePrefetchHandler } from "./CourseDetailsPrefetch";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { useSession } from "next-auth/react";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { makeHash } from "@/app/(public)/(additional pages)/checkout/makeHash";
import { getClientIP } from "@/utils/datalayer/IpReturn";

interface CourseCardProps {
  course: any;
}

const NewCourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { data: logged, status }: any = useSession();
  const calculateBasePrice = () => {
    if (course?.pricing.isFree) return 0;
    const originalPrice = course?.pricing.price.main;
    if (course?.pricing.price.percentage) {
      return course?.pricing.price.isDiscount
        ? originalPrice * (1 - course?.pricing.price.percentage / 100)
        : originalPrice;
    } else {
      return course?.pricing.price.isDiscount
        ? originalPrice - course?.pricing.price.discount
        : originalPrice;
    }
  };
  const finalPrice = calculateBasePrice();
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    pushToDataLayer({
      event: "AddToCart",
      content_ids: course?.basicInfo?.slug,
      content_name: course.basicInfo.title,
      content_type: "course",
      currency: "BDT",
      event_id: generateEventId(),
      value: calculateBasePrice(),
      name:
        status === "authenticated"
          ? await makeHash(
              `${logged?.user.first_name} ${logged?.user.last_name}`
            )
          : null,
      email:
        status === "authenticated" ? await makeHash(logged?.user?.email) : null,
      phone:
        status === "authenticated"
          ? await makeHash(logged?.user?.phones?.[0])
          : null,
      fbp: genFbp(),
      fbc: genFbc("fbcid"),
      click_id: genFbc("fbcid"),
      external_id: logged?.user?._id ?? generateExternalId(),
      client_ip_address: await getClientIP(),
    });
    dispatch(
      addToCart({
        id: course._id,
        name: course.basicInfo.title,
        slug: course.basicInfo.slug,
        price: !course.pricing.isFree ? course.pricing.price.main : 0,
        discount: course.pricing.price.discount ?? 0,
        percentage: course.pricing.price.percentage,
        isDiscount: course.pricing.price.isDiscount,
        thumbnail: course.media.thumbnail,
      })
    );
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
  const router = useRouter();
  const handleCheckout = async () => {
    pushToDataLayer({
      event: "InitiateCheckout",
      currency: "BDT",
      content_ids: [course?.basicInfo?.slug],
      content_name: course?.basicInfo?.title,
      content_type: "course",
      value: finalPrice,
      event_id: generateEventId(),
      num_items: 1,
      name:
        status === "authenticated"
          ? await makeHash(
              `${logged?.user.first_name} ${logged?.user.last_name}`
            )
          : null,
      email:
        status === "authenticated" ? await makeHash(logged?.user?.email) : null,
      phone:
        status === "authenticated"
          ? await makeHash(logged?.user?.phones?.[0])
          : null,
      fbp: genFbp,
      fbc: genFbc,
      click_id: genFbc,
      external_id: logged?.user?._id ?? generateExternalId(),
      client_ip_address: await getClientIP(),
    });
    // Save to Redux
    dispatch(
      setCheckOutCart([
        {
          id: course?._id,
          name: course?.basicInfo?.title,
          slug: course?.basicInfo?.slug,
          price: course?.pricing?.price?.main,
          discount: course?.pricing?.price?.discount,
          isDiscount: course?.pricing?.price?.isDiscount,
          percentage: course?.pricing?.price?.percentage,
          thumbnail: course?.media?.thumbnail,
        },
      ])
    );

    // Delay navigation so event can be sent to Facebook
    setTimeout(() => {
      router.push("/checkout");
    }, 100); // 100ms gives fbq time to send the event
  };

  return (
    <div className="max-w-[300px] mx-auto w-full p-3  group h-[410px] lg:h-[400px]  rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between flex-col ">
      {/* Thumbnail */}
      <div className="w-full md:h-52 h-48 overflow-hidden rounded-t-lg relative">
        <Link
          onMouseEnter={() => CoursePrefetchHandler(course?.basicInfo?.slug)}
          href={`/courses/${course?.basicInfo?.slug}`}
        >
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image
              src={course?.media?.thumbnail?.trim() ?? ""}
              alt={course?.basicInfo?.title || "card image"}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover transition-transform duration-500 w-full md:h-52 h-48 "
              priority
            />
          </div>
        </Link>
        <span
          onClick={() => handleAddToCart()}
          className="w-8 h-8 bg-white absolute top-14 right-3 flex justify-center rounded-full items-center transition-all duration-300 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-md hover:bg-[#f6fef9] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            strokeWidth={"1"}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z" />
          </svg>
        </span>
        <span
          onClick={() => makeFavourite(course._id)}
          className="w-8 h-8 bg-white absolute top-4 right-3 flex justify-center rounded-full items-center transition-all duration-300 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-md hover:bg-[#f6fef9] cursor-pointer"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
          </svg>
        </span>
      </div>

      {/* Course Content */}
      <div className="pt-4">
        {/* Course Stats */}
        <div className="flex gap-2  text-[#585d69] text-sm">
          <div className="flex items-center text-[15px] gap-[4px]">
            <Image className="w-[14px] h-[14px]" src={lesson} alt="lessons" />
            <span>{course?.total_lessons || 0}</span> Lessons
          </div>
          <span className="flex text-[15px] items-center gap-[4px]">
            <Image className="w-[14px] h-[14px]" src={clock} alt="clock" />
            <span>{course?.total_duration || 0}</span> hours
          </span>
        </div>

        {/* Course Title */}
        <Link
          onMouseEnter={() => CoursePrefetchHandler(course?.basicInfo?.slug)}
          href={`/courses/${course?.basicInfo?.slug}`}
          className="text-[18px] font-medium mt-2 block text-[#1D2939] hover:text-[#1cab55] transition-colors  line-clamp-10"
        >
          {course?.basicInfo?.title}
        </Link>

        {/* Rating */}
        <div className="mt-3 flex justify-between items-center gap-1 text-sm">
          <div className="flex items-center gap-1">
            {" "}
            {RenderStars(course?.ratting?.ratting_point ?? 0)} (
            {course?.ratting?.total_ratting ?? 0})
          </div>
          <span className="flex text-[15px] items-center gap-[4px]">
            <Image className="w-[15px] h-[15px]" src={student} alt="students" />
            <span>
              {(course?.total_students ?? 0) +
                (course?.basicInfo?.old_purchase ?? 0)}
            </span>{" "}
            Students
          </span>
        </div>

        {/* Instructor Name */}
        {/* <p className="text-[#585d69] text-sm mt-1">
          By: {course?.basicInfo?.creator?.first_name}{" "}
          {course?.basicInfo?.creator?.last_name}
        </p> */}

        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-2 pt-3 border-t border-[#d1fadf]">
          <div className="flex justify-between items-center">
            <h1 className="flex text-sm gap-2 items-baseline">
              {!course?.pricing.isFree ? (
                <>
                  <span className="text-[#1cab55] text-lg font-medium">
                    Tk. {finalPrice.toFixed(2)}
                  </span>
                  {/* {course?.pricing.price.isDiscount && (
                  <span className="text-[15px] font-[400] text-[#1D2939] line-through">
                    Tk. {course?.pricing.price.main.toFixed(2)}
                  </span>
                )} */}
                </>
              ) : (
                <span className="text-lg font-[500] text-[#1cab55]">Free</span>
              )}
            </h1>
            {/* {course?.pricing.price.isDiscount && (
            <span className="bg-[#1cab55] text-white px-2 py-1 rounded text-sm">
              {course?.pricing.price.discount ?? 0}% OFF
            </span>
          )} */}
          </div>
          <div className="cursor-pointer" onClick={() => handleCheckout()}>
            <Button
              title="এখনি ভর্তি হোন"
              className="text-white bg-[#1cab55] hover:bg-[#16d43b] px-4 py-2 rounded-md transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseCard;
