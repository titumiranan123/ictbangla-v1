/* eslint-disable @typescript-eslint/no-explicit-any */
import { setMedia, setSEO } from "@/redux/courseSlice";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Image from "next/image";
import CreatableSelect from "react-select/creatable";

import { RootState } from "@/redux/store";
import VideoUpload from "../createCourse/Videouplaod";
import MediaUpload from "../createCourse/MediaUplaod";

interface IFormData {
  media: {
    video: string | null;
    thumbnail: File | null;
    temp_img: string;
    temp_video: string;
    videoId: any;
  };
  seo: {
    description: string;
    keywords: string[];
  };
}

const MediaSEOForm = ({
  setActiveTab,
}: {
  setActiveTab: (label: string) => void;
}) => {
  const { media, seo } = useSelector((state: RootState) => state?.course);

  const [videoId, setVideoId] = useState("");

  const [imagePreview, setImagePreview] = useState<any>(media?.thumbnail || "");
  const [videoPreview, setVideoPreview] = useState<any>(
    media?.videoId?.url || ""
  );

  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      media: { ...media },
      seo: { ...seo },
    },
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: IFormData) => {
    // Save data to redux
    dispatch(
      setMedia({
        video: videoId,
        thumbnail: imageFile,
        temp_video: videoPreview || "",
      })
    );
    dispatch(
      setSEO({ description: data.seo.description, keywords: data.seo.keywords })
    );
    setActiveTab("Info");
  };

  const handleTagsChange = (newValue: any) => {
    setValue(
      "seo.keywords",
      newValue.map((item: any) => item.value)
    );
  };

  const handleImageUpload = (file: File) => {
    setImageFile(file);
    const imageUrl = URL.createObjectURL(file);
    dispatch(setMedia({ temp_img: imageUrl }));
    setImagePreview(imageUrl);
    setValue("media.thumbnail", file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageFile(null);
    setValue("media.thumbnail", null, { shouldValidate: true });
  };

  return (
    <div className="w-full mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        {/* Thumbnail */}
        <div className="flex justify-around">
          <MediaUpload
            id="image-upload"
            label="Thumbnail *"
            accept="image/*"
            preview={imagePreview}
            onFileChange={handleImageUpload}
            onRemove={handleRemoveImage}
            previewComponent={
              <Image
                src={imagePreview || ""}
                alt="Preview"
                className="h-[212px] w-[355px] object-cover rounded-md"
                width={300}
                height={220}
              />
            }
            helpText="JPG, PNG, WEBP up to 5MB"
          />

          {/* Video Upload */}
          <VideoUpload
            setVideoId={setVideoId}
            videoId={videoId}
            videoPreview={videoPreview}
            setVideoPreview={setVideoPreview}
          />
        </div>

        <Controller
          name="seo.description"
          control={control}
          rules={{ required: "SEO Description is required" }}
          render={({ field }) => (
            <div className="mb-4">
              <label className="block text-sm font-medium text-black mb-1">
                SEO Description: <span className="text-red-500">*</span>
              </label>
              <textarea
                {...field}
                rows={4}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 ${
                  errors.seo?.description
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary focus:border-primary"
                }`}
              />
              {errors.seo?.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.seo.description.message}
                </p>
              )}
            </div>
          )}
        />

        {/* SEO Keywords */}
        <label className="block">
          <span>SEO Keywords:</span>
          <Controller
            name="seo.keywords"
            control={control}
            render={({ field }) => (
              <CreatableSelect
                isMulti
                onChange={handleTagsChange}
                options={[]}
                value={field.value?.map((keyword) => ({
                  value: keyword,
                  label: keyword,
                }))}
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Type and press enter to add tags..."
                noOptionsMessage={() => "Type to create tags"}
                formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
              />
            )}
          />
        </label>

        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        >
          Save & Continue to Info
        </button>
      </form>
    </div>
  );
};

export default MediaSEOForm;
