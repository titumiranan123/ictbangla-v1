import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaCalendar, FaUser } from "react-icons/fa";
import Link from "next/link";

interface Creator {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image?: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: string;
  card_image: string | StaticImageData;
  category: string;
  createdAt: string;
  creator: Creator;
}

interface CardProps {
  blog: Blog;
}

const SingleBlogcard: React.FC<CardProps> = ({ blog }) => {
  // Format date to readable format
  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-full max-w-xs rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      {/* Image with category tag */}
      <div className="relative h-48 w-full">
        <Image
          src={blog?.card_image ?? ""}
          alt={blog?.title}
          fill
          className="object-cover"
          sizes="(max-width: 320px) 100vw, 320px"
        />
        <span className="absolute top-2 left-2 bg-[#1cab55] text-white text-xs px-2 py-1 rounded">
          {blog?.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#1D2939] mb-2 line-clamp-2">
          {blog?.title?.slice(0,60)} {blog?.title?.length > 60 ? ". . . . . . . . .":''}
        </h3>
        
        {/* Meta info */}
        <div className="flex justify-between text-sm text-[#585d69] mb-3">
          <div className="flex items-center gap-1">
            <FaCalendar className="text-[#1cab55]" size={12} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUser className="text-[#1cab55]" size={12} />
            <span>{blog?.creator?.first_name}</span>
          </div>
        </div>

        {/* Simple button */}
        <Link
          href={`/blog/${blog?.slug}`}
          className="block w-full text-center py-2 bg-[#f6fef9] text-[#1cab55] rounded hover:bg-[#d1fadf] transition-colors border border-[#1cab55]"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default SingleBlogcard;