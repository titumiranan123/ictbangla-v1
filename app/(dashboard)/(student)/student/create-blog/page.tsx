/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useRef, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { api_url } from "@/hooks/apiurl";
import Image from "next/image";
import { FaPlus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import MyTextEditor from "@/components/(instructor)/others/Texteditor";
import useBlogCategory from "@/hooks/public/useBlogCategory";

type FormData = {
  title: string;
  // slug: string;
  category: string;
  sub_title: string;
  feature_image?: FileList | null;
  card_image?: FileList | null;
  description: string;
  short_description: string;
  learnPoints: string[];
  requirements: string[];
  content_image1: {
    image?: FileList | null;
    caption: string;
  };
  content_image2: {
    image?: FileList | null;
    caption: string;
  };
};

const BlogUploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFeatureImage, setSelectedFeatureImage] = useState<
    string | null
  >(null);
  const [selectedCardImage, setSelectedCardImage] = useState<string | null>(
    null
  );
  const [selectedContentImage1, setSelectedContentImage1] = useState<
    string | null
  >(null);
  const [selectedContentImage2, setSelectedContentImage2] = useState<
    string | null
  >(null);
  const { data } = useBlogCategory();
  const featureImageInputRef = useRef<HTMLInputElement>(null);
  const cardImageInputRef = useRef<HTMLInputElement>(null);
  const contentImage1InputRef = useRef<HTMLInputElement>(null);
  const contentImage2InputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      learnPoints: [""],
      requirements: [""],
      content_image1: { caption: "", image: null },
      content_image2: { caption: "", image: null },
    },
  });

  const requirements = watch("requirements") || [];
  const learnPoints = watch("learnPoints") || [];

  // Handle file validation and preview
  const handleFile = useCallback(
    (file: File, setPreview: (value: string | null) => void) => {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error("Only JPG, PNG, and WEBP images are allowed");
        return false;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error("File Too Large. Maximum file size is 5MB");
        return false;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      return true;
    },
    []
  );

  // Handle image upload via file input
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName:
      | "feature_image"
      | "card_image"
      | "content_image1"
      | "content_image2",
    setPreview: (value: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!handleFile(file, setPreview)) return;

    // Update form value
    if (fieldName === "content_image1" || fieldName === "content_image2") {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      setValue(`${fieldName}.image` as any, dataTransfer.files);
    } else {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      setValue(fieldName, dataTransfer.files);
    }
  };

  // Handle drag and drop
  const handleDrop = useCallback(
    (
      e: React.DragEvent<HTMLDivElement>,
      fieldName:
        | "feature_image"
        | "card_image"
        | "content_image1"
        | "content_image2",
      setPreview: (value: string | null) => void,
      inputRef: React.RefObject<HTMLInputElement>
    ) => {
      e.preventDefault();
      e.stopPropagation();

      const file = e.dataTransfer.files?.[0];
      if (!file) return;

      if (!handleFile(file, setPreview)) return;

      // Update form value
      if (fieldName === "content_image1" || fieldName === "content_image2") {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        setValue(`${fieldName}.image` as any, dataTransfer.files);
      } else {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        setValue(fieldName, dataTransfer.files);
      }

      // Update input ref if needed
      if (inputRef.current) {
        inputRef.current.files = e.dataTransfer.files;
      }
    },
    [handleFile, setValue]
  );

  // Handle drag over
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // Handle image removal
  const handleRemoveImage = (
    fieldName:
      | "feature_image"
      | "card_image"
      | "content_image1"
      | "content_image2",
    setPreview: (value: string | null) => void
  ) => {
    setPreview(null);

    if (fieldName === "feature_image") {
      setValue("feature_image", null);
      if (featureImageInputRef.current) featureImageInputRef.current.value = "";
    } else if (fieldName === "card_image") {
      setValue("card_image", null);
      if (cardImageInputRef.current) cardImageInputRef.current.value = "";
    } else if (fieldName === "content_image1") {
      setValue("content_image1.image", null);
      if (contentImage1InputRef.current)
        contentImage1InputRef.current.value = "";
    } else if (fieldName === "content_image2") {
      setValue("content_image2.image", null);
      if (contentImage2InputRef.current)
        contentImage2InputRef.current.value = "";
    }
  };

  // Submit handler
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Append all text fields
      formData.append("title", data.title);
      // formData.append("slug", data.slug);
      formData.append("category", data.category);
      formData.append("sub_title", data.sub_title);
      formData.append("description", data.description);
      formData.append("short_description", data.short_description);

      // Append arrays
      data.learnPoints.forEach((point, index) => {
        formData.append(`learn_points[${index}]`, point);
      });

      data.requirements.forEach((requirement, index) => {
        formData.append(`requirements[${index}]`, requirement);
      });

      // Append feature image if it's a file
      if (data.feature_image && data.feature_image.length > 0) {
        formData.append("feature_image", data.feature_image[0]);
      }

      // Append card image if it's a file
      if (data.card_image && data.card_image.length > 0) {
        formData.append("card_image", data.card_image[0]);
      }

      // Append content images
      if (data.content_image1) {
        formData.append("content_image1[caption]", data.content_image1.caption);
        if (data.content_image1.image && data.content_image1.image.length > 0) {
          formData.append("content_image1", data.content_image1.image[0]);
        }
      }

      if (data.content_image2) {
        formData.append("content_image2[caption]", data.content_image2.caption);
        if (data.content_image2.image && data.content_image2.image.length > 0) {
          formData.append("content_image2", data.content_image2.image[0]);
        }
      }

      const res = await api_url.post(`/v1/user/create/blog`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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

  // Reset form with all new states
  const resetForm = () => {
    reset({
      title: "",
      // slug: "",
      category: "",
      sub_title: "",
      description: "",
      short_description: "",
      feature_image: null,
      card_image: null,
      learnPoints: [""],
      requirements: [""],
      content_image1: { caption: "", image: null },
      content_image2: { caption: "", image: null },
    });
    setSelectedFeatureImage(null);
    setSelectedCardImage(null);
    setSelectedContentImage1(null);
    setSelectedContentImage2(null);

    if (featureImageInputRef.current) featureImageInputRef.current.value = "";
    if (cardImageInputRef.current) cardImageInputRef.current.value = "";
    if (contentImage1InputRef.current) contentImage1InputRef.current.value = "";
    if (contentImage2InputRef.current) contentImage2InputRef.current.value = "";
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Create New Blog Post
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Slug */}
        {/* <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            type="text"
            {...register("slug", { required: "Slug is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
              errors.slug ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter URL slug (e.g., mastering-javascript)"
          />
          {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug.message}</p>}
        </div> */}

        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
              errors.category ? "border-red-500" : "border-gray-300"
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {data?.map((p: any) => (
              <option key={p?._id} value={p?._id}>
                {p?.title}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Sub Title */}
        <div>
          <label
            htmlFor="sub_title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Sub Title <span className="text-red-500">*</span>
          </label>
          <input
            id="sub_title"
            type="text"
            {...register("sub_title", { required: "Sub title is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
              errors.sub_title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter a short sub title"
          />
          {errors.sub_title && (
            <p className="mt-1 text-sm text-red-600">
              {errors.sub_title.message}
            </p>
          )}
        </div>

        {/* Feature Image Section */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Feature Image <span className="text-red-500">*</span>
          </label>
          <div>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-gray-400 transition cursor-pointer"
              onDrop={(e) =>
                handleDrop(
                  e,
                  "feature_image",
                  setSelectedFeatureImage,
                  featureImageInputRef as any
                )
              }
              onDragOver={handleDragOver}
              onClick={() => featureImageInputRef.current?.click()}
            >
              <input
                id="featureImageFile"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("feature_image")}
                onChange={(e) =>
                  handleImageUpload(e, "feature_image", setSelectedFeatureImage)
                }
                ref={featureImageInputRef}
              />
              <div className="flex flex-col items-center justify-center">
                {selectedFeatureImage ? (
                  <div className="mb-2 relative h-40 w-full">
                    <Image
                      src={selectedFeatureImage}
                      alt="Preview"
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold text-primary">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG (Max. 5MB)</p>
                  </>
                )}
              </div>
            </div>
            {selectedFeatureImage && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("feature_image", setSelectedFeatureImage)
                }
                className="mt-2 text-sm text-red-500 hover:text-red-700"
              >
                Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Card Image Section */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Image <span className="text-red-500">*</span>
          </label>
          <div>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-gray-400 transition cursor-pointer"
              onDrop={(e) =>
                handleDrop(
                  e,
                  "card_image",
                  setSelectedCardImage,
                  cardImageInputRef as any
                )
              }
              onDragOver={handleDragOver}
              onClick={() => cardImageInputRef.current?.click()}
            >
              <input
                id="cardImageFile"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("card_image")}
                onChange={(e) =>
                  handleImageUpload(e, "card_image", setSelectedCardImage)
                }
                ref={cardImageInputRef}
              />
              <div className="flex flex-col items-center justify-center">
                {selectedCardImage ? (
                  <div className="mb-2 relative h-40 w-full">
                    <Image
                      src={selectedCardImage}
                      alt="Preview"
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-400 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-semibold text-primary">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG (Max. 5MB)</p>
                  </>
                )}
              </div>
            </div>
            {selectedCardImage && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("card_image", setSelectedCardImage)
                }
                className="mt-2 text-sm text-red-500 hover:text-red-700"
              >
                Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label
            htmlFor="short_description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Short Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="short_description"
            {...register("short_description", {
              required: "Short description is required",
            })}
            rows={3}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
              errors.short_description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter a short description for the blog card"
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
                <MyTextEditor
                  error={error?.message || ""}
                  value={field.value}
                  onChange={field.onChange}
                />
                {error && (
                  <p className="mt-1 text-sm text-red-600">{error.message}</p>
                )}
              </div>
            )}
          />
        </div>

        {/* Content Image 1 */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Content Image 1</h3>
          <div className="space-y-4">
            <div>
              <div
                className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-gray-400 transition cursor-pointer"
                onDrop={(e) =>
                  handleDrop(
                    e,
                    "content_image1",
                    setSelectedContentImage1,
                    contentImage1InputRef as any
                  )
                }
                onDragOver={handleDragOver}
                onClick={() => contentImage1InputRef.current?.click()}
              >
                <input
                  id="contentImage1File"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleImageUpload(
                      e,
                      "content_image1",
                      setSelectedContentImage1
                    )
                  }
                  ref={contentImage1InputRef}
                />
                <div className="flex flex-col items-center justify-center">
                  {selectedContentImage1 ? (
                    <div className="mb-2 relative h-40 w-full">
                      <Image
                        src={selectedContentImage1}
                        alt="Preview"
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold text-primary">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG (Max. 5MB)
                      </p>
                    </>
                  )}
                </div>
              </div>
              {selectedContentImage1 && (
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      "content_image1",
                      setSelectedContentImage1
                    )
                  }
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove Image
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caption
              </label>
              <input
                type="text"
                {...register("content_image1.caption")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition border-gray-300"
                placeholder="Enter image caption"
              />
            </div>
          </div>
        </div>

        {/* Content Image 2 */}
        <div className="border p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Content Image 2</h3>
          <div className="space-y-4">
            <div>
              <div
                className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-gray-400 transition cursor-pointer"
                onDrop={(e) =>
                  handleDrop(
                    e,
                    "content_image2",
                    setSelectedContentImage2,
                    contentImage2InputRef as any
                  )
                }
                onDragOver={handleDragOver}
                onClick={() => contentImage2InputRef.current?.click()}
              >
                <input
                  id="contentImage2File"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    handleImageUpload(
                      e,
                      "content_image2",
                      setSelectedContentImage2
                    )
                  }
                  ref={contentImage2InputRef}
                />
                <div className="flex flex-col items-center justify-center">
                  {selectedContentImage2 ? (
                    <div className="mb-2 relative h-40 w-full">
                      <Image
                        src={selectedContentImage2}
                        alt="Preview"
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold text-primary">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG (Max. 5MB)
                      </p>
                    </>
                  )}
                </div>
              </div>
              {selectedContentImage2 && (
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      "content_image2",
                      setSelectedContentImage2
                    )
                  }
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove Image
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Caption
              </label>
              <input
                type="text"
                {...register("content_image2.caption")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition border-gray-300"
                placeholder="Enter image caption"
              />
            </div>
          </div>
        </div>

        {/* Learning Points */}
        <div>
          <label className="block text-sm font-medium mb-1">
            What You&apos;ll Learn <span className="text-red-500">*</span>
          </label>
          <div className="space-y-4">
            {learnPoints.map((_, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="mt-3 mr-2 w-2 h-2 bg-primary rounded-full block"></span>
                <div className="flex-1">
                  <input
                    {...register(`learnPoints.${index}`, {
                      required: "Learning point cannot be empty",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
                      errors.learnPoints?.[index]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder={`Learning point ${index + 1}`}
                  />
                  {errors.learnPoints?.[index] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.learnPoints[index]?.message}
                    </p>
                  )}
                </div>
                {learnPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...learnPoints];
                      updated.splice(index, 1);
                      setValue("learnPoints", updated);
                    }}
                    className="ml-2 p-2 text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setValue("learnPoints", [...learnPoints, ""])}
              className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              <FaPlus className="w-3 h-3 mr-1" />
              Add Learning Point
            </button>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-1">
            Requirements <span className="text-red-500">*</span>
          </label>
          <div className="space-y-4">
            {requirements.map((_, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="mt-3 mr-2 w-2 h-2 bg-primary rounded-full block"></span>
                <div className="flex-1">
                  <input
                    {...register(`requirements.${index}`, {
                      required: "Requirement cannot be empty",
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition ${
                      errors.requirements?.[index]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder={`Requirement ${index + 1}`}
                  />
                  {errors.requirements?.[index] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.requirements[index]?.message}
                    </p>
                  )}
                </div>
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...requirements];
                      updated.splice(index, 1);
                      setValue("requirements", updated);
                    }}
                    className="ml-2 p-2 text-red-500 hover:text-red-700"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setValue("requirements", [...requirements, ""])}
              className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              <FaPlus className="w-3 h-3 mr-1" />
              Add Requirement
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Blog"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogUploadForm;
