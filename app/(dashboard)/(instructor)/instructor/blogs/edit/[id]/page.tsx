/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import Editor from "../../../create/Editor";
import useBlogCategory from "@/hooks/public/useBlogCategory";
import { api_url } from "@/hooks/apiurl";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../../fetchBlogBySlug";

interface FormData {
  title: string;
  category: string;
  description: string;
  short_description: string;
  feature_image?: FileList;
  card_image?: FileList;
}

const BlogEdit = () => {
  const { id } = useParams();
  const { data: blog, isLoading } = useQuery({
    queryKey: ["blogbyId", id],
    queryFn: () => fetchBlogBySlug(id as string),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFeatureImage, setSelectedFeatureImage] = useState<
    string | null
  >(null);
  const [selectedCardImage, setSelectedCardImage] = useState<string | null>(
    null
  );

  const { data } = useBlogCategory();
  const featureImageInputRef = useRef<any>(null);
  const cardImageInputRef = useRef<any>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      short_description: "",
    },
  });

  // ✅ When blog data loads, reset form with values
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title,
        category: blog.category?._id || "",
        description: blog.description,
        short_description: blog.short_description || "",
      });

      setSelectedFeatureImage(blog.feature_image || null);
      setSelectedCardImage(blog.card_image || null);
    }
  }, [blog, reset]);

  // ✅ File validation and preview
  const handleFile = useCallback(
    (file: File, setPreview: (value: string | null) => void) => {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error("Only JPG, PNG, and WEBP images are allowed");
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File too large. Maximum file size is 5MB");
        return false;
      }

      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);

      return true;
    },
    []
  );

  // ✅ Handle input upload
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: "feature_image" | "card_image",
    setPreview: (value: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!handleFile(file, setPreview)) return;

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    setValue(fieldName, dataTransfer.files);
  };

  // ✅ Handle drag and drop
  const handleDrop = useCallback(
    (
      e: React.DragEvent<HTMLDivElement>,
      fieldName: "feature_image" | "card_image",
      setPreview: (value: string | null) => void,
      inputRef: React.RefObject<HTMLInputElement>
    ) => {
      e.preventDefault();
      e.stopPropagation();

      const file = e.dataTransfer.files?.[0];
      if (!file) return;
      if (!handleFile(file, setPreview)) return;

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      setValue(fieldName, dataTransfer.files);
      if (inputRef.current) inputRef.current.files = e.dataTransfer.files;
    },
    [handleFile, setValue]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // ✅ Remove image
  const handleRemoveImage = (
    fieldName: "feature_image" | "card_image",
    setPreview: (value: string | null) => void
  ) => {
    setPreview(null);
    setValue(fieldName, undefined);
    if (fieldName === "feature_image" && featureImageInputRef.current) {
      featureImageInputRef.current.value = "";
    }
    if (fieldName === "card_image" && cardImageInputRef.current) {
      cardImageInputRef.current.value = "";
    }
  };

  // ✅ Submit handler
  const onSubmit = async (formValues: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", formValues.title);
      formData.append("category", formValues.category);
      formData.append("description", formValues.description);
      formData.append("short_description", formValues.short_description);

      if (formValues.feature_image?.[0]) {
        formData.append("feature_image", formValues.feature_image[0]);
      }
      if (formValues.card_image?.[0]) {
        formData.append("card_image", formValues.card_image[0]);
      }

      const res = await api_url.patch(
        `/v1/user/update/blog/${blog._id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Blog created! Wait for publish.");
        resetForm();
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Blog create failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Reset form
  const resetForm = () => {
    reset({
      title: "",
      category: "",
      description: "",
      short_description: "",
    });
    setSelectedFeatureImage(null);
    setSelectedCardImage(null);
    if (featureImageInputRef.current) featureImageInputRef.current.value = "";
    if (cardImageInputRef.current) cardImageInputRef.current.value = "";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Blog Post</h1>
      {isLoading ? (
        <p className="text-center">Loading blog...</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary outline-none ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary outline-none ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="" disabled>
                Select a category
              </option>
              {data?.map((p: any) => (
                <option key={p._id} value={p._id}>
                  {p.title}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Feature Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Feature Image <span className="text-red-500">*</span>
            </label>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer"
              onDrop={(e) =>
                handleDrop(
                  e,
                  "feature_image",
                  setSelectedFeatureImage,
                  featureImageInputRef
                )
              }
              onDragOver={handleDragOver}
              onClick={() => featureImageInputRef.current?.click()}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("feature_image")}
                ref={featureImageInputRef}
                onChange={(e) =>
                  handleImageUpload(e, "feature_image", setSelectedFeatureImage)
                }
              />
              {selectedFeatureImage ? (
                <div className="mb-2 relative h-40 w-full">
                  <Image
                    src={selectedFeatureImage}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <p className="text-gray-500">Click or drag image here</p>
              )}
            </div>
            {selectedFeatureImage && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("feature_image", setSelectedFeatureImage)
                }
                className="mt-2 text-sm text-red-500"
              >
                Remove Image
              </button>
            )}
          </div>

          {/* Card Image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Image <span className="text-red-500">*</span>
            </label>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center cursor-pointer"
              onDrop={(e) =>
                handleDrop(
                  e,
                  "card_image",
                  setSelectedCardImage,
                  cardImageInputRef
                )
              }
              onDragOver={handleDragOver}
              onClick={() => cardImageInputRef.current?.click()}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("card_image")}
                ref={cardImageInputRef}
                onChange={(e) =>
                  handleImageUpload(e, "card_image", setSelectedCardImage)
                }
              />
              {selectedCardImage ? (
                <div className="mb-2 relative h-40 w-full">
                  <Image
                    src={selectedCardImage}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <p className="text-gray-500">Click or drag image here</p>
              )}
            </div>
            {selectedCardImage && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("card_image", setSelectedCardImage)
                }
                className="mt-2 text-sm text-red-500"
              >
                Remove Image
              </button>
            )}
          </div>

          {/* Short Description */}
          <div>
            <label
              htmlFor="short_description"
              className="block text-sm font-medium mb-1"
            >
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="short_description"
              {...register("short_description", {
                required: "Short description is required",
              })}
              rows={3}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary outline-none ${
                errors.short_description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.short_description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.short_description.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Editor
                    setContentHtml={field.onChange}
                    initialContent={field.value}
                  />
                  {error && (
                    <p className="mt-1 text-sm text-red-600">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 bg-primary text-white rounded-md ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-primary-dark"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Update Blog"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BlogEdit;
