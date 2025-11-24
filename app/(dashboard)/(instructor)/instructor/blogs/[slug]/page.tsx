"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../fetchBlogBySlug";

const SingleBlog = () => {
  const { slug } = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug as string),
  });

  if (isLoading) {
    return <>Loading..........</>;
  }

  return (
    <div className="flex justify-center flex-col">
      <Image
        className="w-full h-[500px]"
        src={blog?.feature_image}
        alt=""
        width={800}
        height={500}
      />
      <div className="flex flex-col gap-4 mt-10 lg:px-40 px-2 space-y-2">
        <h2 className="text-3xl ">{blog?.title}</h2>
        <h3>{blog?.sub_title}</h3>
        <div
          className="
          prose
          prose-lg
          prose-indigo
          prose-ul:list-disc
          prose-ol:list-decimal
          prose-blockquote:border-l-4
          prose-blockquote:text-gray-600
          prose-blockquote:italic
          prose-a:text-blue-500
          prose-a:underline
          prose-headings:text-gray-800
          prose-p:text-gray-700
          prose-li:my-1
        "
          dangerouslySetInnerHTML={{ __html: blog?.description }}
        ></div>
      </div>
    </div>
  );
};

export default SingleBlog;
