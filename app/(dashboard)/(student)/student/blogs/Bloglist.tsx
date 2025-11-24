/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useInstructorBlog } from "@/hooks/instructor/useInstructorblog";
import React from "react";
import Blogcard from "./Blogcard";
import Swal from "sweetalert2";

const Bloglist = () => {
  const { data, isLoading } = useInstructorBlog();

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure ?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // Delete logic here
      Swal.fire("Deleted!", "The blog has been deleted.", "success");
      console.log("Deleted blog ID:", id);
    }
  };

  const handleEdit = async (blog: any) => {
    await Swal.fire({
      title: "Edit Blog",
      text: `You are about to edit the blog: ${blog.title}`,
      icon: "info",
      confirmButtonText: "Proceed",
    });

    // Open edit modal or navigate
    // console.log(blog);
  };

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
      // Update publish status in backend
      Swal.fire(
        published ? "Unpublished!" : "Published!",
        `The blog has been ${published ? "unpublished" : "published"}.`,
        "success"
      );
    }
  };

  return (
    <div>
      {!isLoading ? (
        data?.blogs?.map((bg: any) => (
          <Blogcard
            key={bg._id}
            blog={bg}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onTogglePublish={handleTogglePublish}
          />
        ))
      ) : (
        <>Loding ........</>
      )}
    </div>
  );
};

export default Bloglist;
