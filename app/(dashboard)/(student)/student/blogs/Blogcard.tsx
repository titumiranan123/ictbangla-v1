/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryClient } from "@/utils/queryclient/queryClient";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaEye, FaTrash, FaEllipsisV } from "react-icons/fa";
import { MdPublish, MdUnpublished } from "react-icons/md";
import { fetchBlogBySlug } from "./fetchBlogBySlug";

// Interface for the component's props (no changes needed)
interface BlogCardProps {
  blog: any;
  onDelete: (id: string) => void;
  onEdit: (blog: any) => void;
  onTogglePublish: (id: string, published: boolean) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  onDelete,
  onEdit,
  onTogglePublish,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hook to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Centralized handler for all card actions
  const handleAction = (
    action: "view" | "edit" | "delete" | "toggle-publish"
  ) => {
    setShowDropdown(false); // Close dropdown on any action
    switch (action) {
      case "edit":
        onEdit(blog);
        break;
      case "delete":
        // Use a modern confirmation dialog or a custom modal in a real app
        if (window.confirm("Are you sure you want to delete this blog post?")) {
          onDelete(blog.id);
        }
        break;
      case "toggle-publish":
        onTogglePublish(blog.id, !blog.published);
        break;
    }
  };
  const handlePrefetch = async ()=>{
    if(blog?.slug){
      await queryClient.prefetchQuery({
        queryKey:['blog',blog._id],
        queryFn:()=>fetchBlogBySlug(blog._id)
      })
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl max-w-xs">
      {/* 1. Image Section */}
      <div className="relative w-full aspect-video">
        <Image
          src={blog?.card_image ?? ""}
          alt={blog?.title}
          width={330}
          height={256}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay for better text readability on the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Quick Publish/Unpublish Toggle Button */}
        <div className="absolute top-3 right-3 hidden">
          <button
            onClick={() => handleAction("toggle-publish")}
            className={`p-2.5 rounded-full shadow-lg ${
              blog.published
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-700/50 backdrop-blur-sm text-white hover:bg-gray-700/80"
            } transition-all duration-200`}
            aria-label={blog.published ? "Unpublish Post" : "Publish Post"}
            title={blog.published ? "Unpublish" : "Publish"}
          >
            {blog.published ? (
              <MdPublish size={18} />
            ) : (
              <MdUnpublished size={18} />
            )}
          </button>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-4 flex-grow">
        <Link
          href={`/student/blogs/${blog?._id}`}
          onMouseEnter={handlePrefetch}
          className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors cursor-pointer"
          title={blog?.title}
        >
          {blog?.title}
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3">
          {blog?.short_description}
        </p>
      </div>

      {/* 3. Footer Section with Status and Actions */}
      <div className="flex justify-between items-center p-4 pt-2">
        <span
          className={`px-3 py-1 text-xs rounded-full font-semibold ${
            blog.published
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {blog.published ? "Published" : "Draft"}
        </span>

        {/* Actions Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="More options"
            aria-expanded={showDropdown}
          >
            <FaEllipsisV size={16} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100 transition-opacity duration-200 animate-fadeIn">
              <ul className="py-1">
                <li>
                  <button
                    onClick={() => handleAction("view")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaEye className="mr-3 text-gray-400" />
                    <span>View Post</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleAction("edit")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <FaEdit className="mr-3 text-gray-400" />
                    <span>Edit</span>
                  </button>
                </li>
                <li>
                  <hr className="my-1 border-gray-100" />
                </li>
                <li>
                  <button
                    onClick={() => handleAction("delete")}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    <FaTrash className="mr-3" />
                    <span>Delete</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
