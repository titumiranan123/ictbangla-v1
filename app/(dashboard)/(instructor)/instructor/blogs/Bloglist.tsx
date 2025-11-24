/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useInstructorBlog } from "@/hooks/instructor/useInstructorblog";
import { api_url } from "@/hooks/apiurl";
import Blogcard from "./Blogcard";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  [key: string]: any;
}

const Bloglist: React.FC = () => {
  const { data, isLoading, refetch } = useInstructorBlog();
  const router = useRouter();
  // ✅ Delete Handler
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await api_url.delete(`/v1/user/delete/blog/${id}`);
        if (res.status === 200 || res.status === 201) {
          Swal.fire("Deleted!", "The blog has been deleted.", "success");
          refetch?.();
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the blog.", "error");
        console.error("Delete blog error:", error);
      }
    }
  };

  // ✅ Edit Handler
  const handleEdit = async (blog: Blog) => {
    router.push(`/instructor/blogs/edit/${blog._id}`);
  };

  // ✅ Publish/Unpublish Handler
  const handleTogglePublish = async (id: string, published: boolean) => {
    const result = await Swal.fire({
      title: published ? "Unpublish this blog?" : "Publish this blog?",
      text: published
        ? "It will be hidden from public view."
        : "It will be visible to everyone.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: published ? "Unpublish" : "Publish",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const res = await api_url.patch(`/v1/user/toggle-publish/${id}`, {
          published: !published,
        });

        if (res.status === 200) {
          Swal.fire(
            published ? "Unpublished!" : "Published!",
            `The blog has been ${published ? "unpublished" : "published"}.`,
            "success"
          );
          refetch?.(); // Refresh the blog list after publish toggle
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to update publish status.", "error");
        console.error("Toggle publish error:", error);
      }
    }
  };

  return (
    <div>
      {/* ✅ Create Blog Button */}
      <div className="flex justify-end items-center">
        <Link
          href="/instructor/create"
          className="border border-green-500 py-2 px-4 rounded-lg text-lg text-green-500 hover:bg-green-50 transition"
        >
          Create Blog
        </Link>
      </div>

      {/* ✅ Blog Grid */}
      <div className="mt-10">
        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.blogs?.map((blog: Blog) => (
              <Blogcard
                key={blog._id}
                blog={blog}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onTogglePublish={handleTogglePublish}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bloglist;
