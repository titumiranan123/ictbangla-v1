/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useRef, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import MyTextEditor from "@/components/(instructor)/others/Texteditor";
import { api_url } from "@/hooks/apiurl";
import Image from "next/image";
import { FaPlus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { generateSlug } from "@/utils/sluggenerators";

type FormData = {
  title: string;
  slug?: string;
  category: string;
  sub_title: string;
  feature_image?: string;
  card_image?: string;
  description: string;
  short_description: string;
  learnPoints: string[];
  requirements: string[];
  content_image1: {
    image?: string;
    caption: string;
    file?: FileList;
  };
  content_image2: {
    image?: string;
    caption: string;
    file?: FileList;
  };
};

const BlogUploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({
    featureImage: 0,
    cardImage: 0,
    contentImage1: 0,
    contentImage2: 0,
  });
  const [isUploading, setIsUploading] = useState({
    featureImage: false,
    cardImage: false,
    contentImage1: false,
    contentImage2: false,
  });

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
      content_image1: { caption: "", image: "" },
      content_image2: { caption: "", image: "" },
    },
  });

  const featureImageFile = watch("feature_image");
  const cardImageFile = watch("card_image");
  const requirements = watch("requirements") || [];
  const learnPoints = watch("learnPoints") || [];
  const contentImage1 = watch("content_image1");
  const contentImage2 = watch("content_image2");

  const handleImageUpload = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      fieldName:
        | "feature_image"
        | "card_image"
        | "content_image1"
        | "content_image2",
      setPreview: (value: string | null) => void,
      currentImage: string | undefined
    ) => {
      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

      const file = e.target.files?.[0];
      if (!file) return;

      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        toast.error("Only JPG, PNG, and WEBP images are allowed");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error("File Too Large. Maximum file size is 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      const uploadKey =
        fieldName === "content_image1"
          ? "contentImage1"
          : fieldName === "content_image2"
          ? "contentImage2"
          : fieldName === "feature_image"
          ? "featureImage"
          : "cardImage";

      setIsUploading((prev) => ({ ...prev, [uploadKey]: true }));
      setUploadProgress((prev) => ({ ...prev, [uploadKey]: 0 }));

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await api_url.post<{ url: string }>(
          "/v1/file/upload-cloudinary",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / (progressEvent.total || 1)
              );
              setUploadProgress((prev) => ({
                ...prev,
                [uploadKey]: percentCompleted,
              }));
            },
          }
        );

        if (fieldName === "content_image1") {
          setValue("content_image1.image", response.data.url, {
            shouldValidate: true,
          });
        } else if (fieldName === "content_image2") {
          setValue("content_image2.image", response.data.url, {
            shouldValidate: true,
          });
        } else {
          setValue(fieldName, response.data.url, { shouldValidate: true });
        }

        toast.success("Image uploaded successfully!");
      } catch (error) {
        console.error("Upload failed:", error);
        setPreview(currentImage || null);
        toast.error("Failed to upload image");
      } finally {
        setIsUploading((prev) => ({ ...prev, [uploadKey]: false }));
      }
    },
    [setValue]
  );

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
      setValue("feature_image", "", { shouldValidate: true });
      if (featureImageInputRef.current) featureImageInputRef.current.value = "";
    } else if (fieldName === "card_image") {
      setValue("card_image", "", { shouldValidate: true });
      if (cardImageInputRef.current) cardImageInputRef.current.value = "";
    } else if (fieldName === "content_image1") {
      setValue("content_image1.image", "", { shouldValidate: true });
      if (contentImage1InputRef.current)
        contentImage1InputRef.current.value = "";
    } else if (fieldName === "content_image2") {
      setValue("content_image2.image", "", { shouldValidate: true });
      if (contentImage2InputRef.current)
        contentImage2InputRef.current.value = "";
    }
  };

  const triggerFileInput = (ref: any) => {
    if (ref.current) ref.current.click();
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const submissionData = {
        ...data,

        content_image1: {
          image: data.content_image1.image,
          caption: data.content_image1.caption,
        },
        content_image2: {
          image: data.content_image2.image,
          caption: data.content_image2.caption,
        },
      };
      const res = await api_url.post(`/v1/user/create/blog`, {
        ...submissionData,
        slug: generateSlug(data.category),
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

  const resetForm = () => {
    reset({
      title: "",

      category: "",
      sub_title: "",
      description: "",
      short_description: "",
      feature_image: "",
      card_image: "",
      learnPoints: [""],
      requirements: [""],
      content_image1: { caption: "", image: "" },
      content_image2: { caption: "", image: "" },
    });
    setSelectedFeatureImage(null);
    setSelectedCardImage(null);
    setSelectedContentImage1(null);
    setSelectedContentImage2(null);
    setUploadProgress({
      featureImage: 0,
      cardImage: 0,
      contentImage1: 0,
      contentImage2: 0,
    });
    if (featureImageInputRef.current) featureImageInputRef.current.value = "";
    if (cardImageInputRef.current) cardImageInputRef.current.value = "";
    if (contentImage1InputRef.current) contentImage1InputRef.current.value = "";
    if (contentImage2InputRef.current) contentImage2InputRef.current.value = "";
  };

  return (
    <div className="bg-[#f9f9fa] p-6 rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-[#1D2939] text-center">
        Create New Blog Post
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-[#1D2939] mb-1"
          >
            Category <span className="text-[#e1242c]">*</span>
          </label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
              errors.category ? "border-[#e1242c]" : "border-gray-300"
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="technology">Technology</option>
            <option value="business">Business</option>
            <option value="health">Health & Wellness</option>
            <option value="education">Education</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="other">Other</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-[#e1242c]">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-[#1D2939] mb-1"
          >
            Title <span className="text-[#e1242c]">*</span>
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
              errors.title ? "border-[#e1242c]" : "border-gray-300"
            }`}
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-[#e1242c]">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Sub Title */}
        <div>
          <label
            htmlFor="sub_title"
            className="block text-sm font-medium text-[#1D2939] mb-1"
          >
            Sub Title <span className="text-[#e1242c]">*</span>
          </label>
          <input
            id="sub_title"
            type="text"
            {...register("sub_title", { required: "Sub title is required" })}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
              errors.sub_title ? "border-[#e1242c]" : "border-gray-300"
            }`}
            placeholder="Enter a short sub title"
          />
          {errors.sub_title && (
            <p className="mt-1 text-sm text-[#e1242c]">
              {errors.sub_title.message}
            </p>
          )}
        </div>
        {/* Short Description */}
        <div>
          <label
            htmlFor="short_description"
            className="block text-sm font-medium text-[#1D2939] mb-1"
          >
            Short Description <span className="text-[#e1242c]">*</span>
          </label>
          <textarea
            id="short_description"
            {...register("short_description", {
              required: "Short description is required",
            })}
            rows={3}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
              errors.short_description ? "border-[#e1242c]" : "border-gray-300"
            }`}
            placeholder="Enter a short description for the blog card"
          />
          {errors.short_description && (
            <p className="mt-1 text-sm text-[#e1242c]">
              {errors.short_description.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-[#1D2939] mb-1">
            Description <span className="text-[#e1242c]">*</span>
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
                  <p className="mt-1 text-sm text-[#e1242c]">{error.message}</p>
                )}
              </div>
            )}
          />
        </div>
        {/* Feature Image Section */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#1D2939] mb-1">
            Feature Image <span className="text-[#e1242c]">*</span>
            {isUploading.featureImage && (
              <span className="ml-2 text-sm text-gray-500">
                Uploading: {uploadProgress.featureImage}%
              </span>
            )}
          </label>

          <div>
            <label className="block text-sm font-medium text-[#1D2939] mb-1">
              Upload Image
              {isUploading.featureImage && (
                <span className="ml-2 text-sm text-gray-500">
                  Uploading: {uploadProgress.featureImage}%
                </span>
              )}
            </label>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-[#1cab55] transition cursor-pointer"
              onClick={() => triggerFileInput(featureImageInputRef)}
            >
              <input
                id="featureImageFile"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImageUpload(
                    e,
                    "feature_image",
                    setSelectedFeatureImage,
                    featureImageFile
                  )
                }
                disabled={isUploading.featureImage}
                ref={featureImageInputRef}
              />
              <div className="flex flex-col items-center justify-center">
                {selectedFeatureImage ? (
                  <div className="mb-2 relative h-40 w-full">
                    <Image
                      src={(selectedFeatureImage ?? "").trim()}
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
                      <span className="font-semibold text-[#1cab55]">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG (Max. 5MB)</p>
                  </>
                )}
              </div>
            </div>
            {(selectedFeatureImage || featureImageFile) && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("feature_image", setSelectedFeatureImage)
                }
                className="mt-2 text-sm text-[#e1242c] hover:text-[#c41a1a]"
              >
                Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Card Image Section */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[#1D2939] mb-1">
            Card Image <span className="text-[#e1242c]">*</span>
            {isUploading.cardImage && (
              <span className="ml-2 text-sm text-gray-500">
                Uploading: {uploadProgress.cardImage}%
              </span>
            )}
          </label>

          <div>
            <label className="block text-sm font-medium text-[#1D2939] mb-1">
              Upload Image
              {isUploading.cardImage && (
                <span className="ml-2 text-sm text-gray-500">
                  Uploading: {uploadProgress.cardImage}%
                </span>
              )}
            </label>
            <div
              className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-[#1cab55] transition cursor-pointer"
              onClick={() => triggerFileInput(cardImageInputRef)}
            >
              <input
                id="cardImageFile"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) =>
                  handleImageUpload(
                    e,
                    "card_image",
                    setSelectedCardImage,
                    cardImageFile
                  )
                }
                disabled={isUploading.cardImage}
                ref={cardImageInputRef}
              />
              <div className="flex flex-col items-center justify-center">
                {selectedCardImage ? (
                  <div className="mb-2 relative h-40 w-full">
                    <Image
                      src={(selectedCardImage ?? "").trim()}
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
                      <span className="font-semibold text-[#1cab55]">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG (Max. 5MB)</p>
                  </>
                )}
              </div>
            </div>
            {(selectedCardImage || cardImageFile) && (
              <button
                type="button"
                onClick={() =>
                  handleRemoveImage("card_image", setSelectedCardImage)
                }
                className="mt-2 text-sm text-[#e1242c] hover:text-[#c41a1a]"
              >
                Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Content Image 1 */}
        <div className="border p-4 rounded-lg bg-[#f6fef9] border-[#d1fadf]">
          <h3 className="text-lg font-medium mb-3 text-[#1D2939]">
            Content Image 1
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1D2939] mb-1">
                Upload Image
                {isUploading.contentImage1 && (
                  <span className="ml-2 text-sm text-gray-500">
                    Uploading: {uploadProgress.contentImage1}%
                  </span>
                )}
              </label>
              <div
                className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-[#1cab55] transition cursor-pointer"
                onClick={() =>
                  !isUploading.contentImage1 &&
                  triggerFileInput(contentImage1InputRef)
                }
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
                      setSelectedContentImage1,
                      contentImage1?.image
                    )
                  }
                  disabled={isUploading.contentImage1}
                  ref={contentImage1InputRef}
                />
                <div className="flex flex-col items-center justify-center">
                  {selectedContentImage1 || contentImage1?.image ? (
                    <div className="mb-2 relative h-40 w-full">
                      <Image
                        src={(
                          (selectedContentImage1 || contentImage1?.image) ??
                          ""
                        ).trim()}
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
                        <span className="font-semibold text-[#1cab55]">
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
              {(selectedContentImage1 || contentImage1?.image) && (
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      "content_image1",
                      setSelectedContentImage1
                    )
                  }
                  className="mt-2 text-sm text-[#e1242c] hover:text-[#c41a1a]"
                >
                  Remove Image
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D2939] mb-1">
                Caption
              </label>
              <input
                type="text"
                {...register("content_image1.caption")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition border-gray-300"
                placeholder="Enter image caption"
              />
            </div>
          </div>
        </div>

        {/* Content Image 2 */}
        <div className="border p-4 rounded-lg bg-[#f6fef9] border-[#d1fadf]">
          <h3 className="text-lg font-medium mb-3 text-[#1D2939]">
            Content Image 2
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1D2939] mb-1">
                Upload Image
                {isUploading.contentImage2 && (
                  <span className="ml-2 text-sm text-gray-500">
                    Uploading: {uploadProgress.contentImage2}%
                  </span>
                )}
              </label>
              <div
                className="border-2 border-dashed rounded-md p-4 text-center border-gray-300 hover:border-[#1cab55] transition cursor-pointer"
                onClick={() =>
                  !isUploading.contentImage2 &&
                  triggerFileInput(contentImage2InputRef)
                }
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
                      setSelectedContentImage2,
                      contentImage2?.image
                    )
                  }
                  disabled={isUploading.contentImage2}
                  ref={contentImage2InputRef}
                />
                <div className="flex flex-col items-center justify-center">
                  {selectedContentImage2 || contentImage2?.image ? (
                    <div className="mb-2 relative h-40 w-full">
                      <Image
                        src={(
                          (selectedContentImage2 || contentImage2?.image) ??
                          ""
                        ).trim()}
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
                        <span className="font-semibold text-[#1cab55]">
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
              {(selectedContentImage2 || contentImage2?.image) && (
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      "content_image2",
                      setSelectedContentImage2
                    )
                  }
                  className="mt-2 text-sm text-[#e1242c] hover:text-[#c41a1a]"
                >
                  Remove Image
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D2939] mb-1">
                Caption
              </label>
              <input
                type="text"
                {...register("content_image2.caption")}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition border-gray-300"
                placeholder="Enter image caption"
              />
            </div>
          </div>
        </div>

        {/* Learning Points */}
        <div>
          <label className="block text-sm font-medium text-[#1D2939] mb-1">
            What You&apos;ll Learn <span className="text-[#e1242c]">*</span>
          </label>
          <div className="space-y-4">
            {learnPoints.map((_, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="mt-3 mr-2 w-2 h-2 bg-[#1cab55] rounded-full block"></span>
                <div className="flex-1">
                  <input
                    {...register(`learnPoints.${index}`)}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
                      errors.learnPoints?.[index]
                        ? "border-[#e1242c]"
                        : "border-gray-300"
                    }`}
                    placeholder={`Learning point ${index + 1}`}
                  />
                  {errors.learnPoints?.[index] && (
                    <p className="mt-1 text-sm text-[#e1242c]">
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
                    className="ml-2 p-2 text-[#e1242c] hover:text-[#c41a1a]"
                  >
                    <FaTrash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setValue("learnPoints", [...learnPoints, ""])}
              className="flex items-center px-3 py-1.5 bg-[#d1fadf] text-[#1D2939] rounded-lg hover:bg-[#b8f5d0] transition-colors text-sm"
            >
              <FaPlus className="w-3 h-3 mr-1" />
              Add Learning Point
            </button>
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-[#1D2939] mb-1">
            Requirements <span className="text-[#e1242c]">*</span>
          </label>
          <div className="space-y-4">
            {requirements.map((_, index) => (
              <div key={index} className="flex gap-4 group">
                <span className="mt-3 mr-2 w-2 h-2 bg-[#1cab55] rounded-full block"></span>
                <div className="flex-1">
                  <input
                    {...register(`requirements.${index}`)}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#1cab55] focus:border-[#1cab55] outline-none transition ${
                      errors.requirements?.[index]
                        ? "border-[#e1242c]"
                        : "border-gray-300"
                    }`}
                    placeholder={`Requirement ${index + 1}`}
                  />
                  {errors.requirements?.[index] && (
                    <p className="mt-1 text-sm text-[#e1242c]">
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
                    className="ml-2 p-2 text-[#e1242c] hover:text-[#c41a1a]"
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
