/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={blog.card_image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-2">
          {blog.category.title}
        </span>
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            {blog.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 mt-2">
          By {blog.creator.first_name} {blog.creator.last_name}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {blog.likes.length} Likes
            </span>
            <span className="text-sm text-gray-500">
              {blog.comments.length} Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
