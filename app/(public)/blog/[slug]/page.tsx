/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Image from "next/image";
import axios from "axios";

const SingleBlog = async ({ params }: { params: any }) => {
  const { slug } = await params;
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/blog-details/${slug}`
  );
  const blog = data?.data?.blog;
  return (
    <div className="flex justify-center flex-col ">
      <div className="w-full h-[500px] relative">
        <Image
          className="object-cover"
          src={blog?.feature_image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 800px"
        />
      </div>
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
