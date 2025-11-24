"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegClock, FaRegUser, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

type BlogCardProps = {
  id: string;
  title: string;
  slug: string;
  category: string;
  subTitle: string;
  shortDescription: string;
  cardImage: string;
  author: string;
  date: string;
  readTime: string;
  onDelete?: (id: string) => Promise<void>;
  isAdmin?: boolean;
};

const UserBlogCard = ({
  id,
  title,
  slug,
  category,
  subTitle,
  shortDescription,
  cardImage,
  author,
  date,
  readTime,
  onDelete,
  isAdmin = false,
}: BlogCardProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        if (onDelete) {
          await onDelete(id);
          toast.success("Blog post deleted successfully");
        }
      } catch (error) {
        toast.error("Failed to delete blog post");
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={cardImage || "/default-blog-image.jpg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md capitalize">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm italic mb-2 line-clamp-1">
          {subTitle}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {shortDescription}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3 mt-auto">
          <div className="flex items-center space-x-2">
            <FaRegUser className="text-gray-400" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{new Date(date).toLocaleDateString()}</span>
            <div className="flex items-center space-x-1">
              <FaRegClock className="text-gray-400" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <Link
            href={`/blog/${slug}`}
            className="flex items-center justify-center gap-1 flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md transition-colors text-sm"
          >
            <FaEye className="text-sm" />
            View
          </Link>

          {isAdmin && (
            <>
              <button
                onClick={() => router.push(`/admin/blog/edit/${id}`)}
                className="flex items-center justify-center gap-1 flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-3 rounded-md transition-colors text-sm"
              >
                <FaEdit className="text-sm" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center justify-center gap-1 flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md transition-colors text-sm"
              >
                <FaTrash className="text-sm" />
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBlogCard;