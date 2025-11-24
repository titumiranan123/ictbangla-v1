/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import Input from "../others/Input";
import MyTextEditor from "../others/Texteditor";
import { setBasicInfo } from "@/redux/courseSlice";
import { useDispatch } from "react-redux";
import useCategory from "@/hooks/public/useCategory";

type CourseLevel =
  | "BEGINNER"
  | "INTERMEDIATE"
  | "ADVANCED"
  | "EXPERT/SPECIALIZED";
type CourseStatus = "PENDING" | "PUBLISHED" | "UPCOMING" | "REJECTED";

interface IBasicInfo {
  title: string;
  short_description: string;
  description: string;
  category: string;
  level: CourseLevel;
  status: CourseStatus;
  topCourse: boolean;
  is_show_bottom_banner: boolean;
}

const BasicInfo = ({
  setActiveTab,
  data,
}: {
  setActiveTab: (label: string) => void;
  data: any;
}) => {
  const dispatch = useDispatch();
  const { data: allcategory } = useCategory();

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm<IBasicInfo>({
    defaultValues: {
      title: data?.title || "",
      short_description: data?.short_description || "",
      description: data?.description || "",
      category: data?.category?._id || "",
      status: data?.status || "PENDING",
      level: data?.level || "BEGINNER",
      topCourse: data?.topCourse || false,
      is_show_bottom_banner: data?.is_show_bottom_banner ?? false,
    },
  });

  const onSubmit = (data: IBasicInfo) => {
    dispatch(setBasicInfo(data));
    setActiveTab("Media & Seo");
    return data;
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 space-y-4 w-full"
      >
        <Input
          label="Course Title"
          register={register}
          error={errors.title}
          validation={{ required: "Title is required" }}
          name={"title"}
          type={"text"}
        />

        <Input
          label="Short Description"
          register={register}
          error={errors.short_description}
          validation={{ required: "Short description is required" }}
          name={"short_description"}
          type={"text"}
        />

        {/* Description Editor */}
        <div className="flex flex-col">
          <label className="text-[#1D2939] text-[16px] font-medium">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field, fieldState: { error } }) => (
              <MyTextEditor
                value={field.value}
                onChange={field.onChange}
                error={error?.message || ""}
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Category Select */}
          <div className="flex flex-col">
            <label className="text-[#1D2939] text-[16px] font-medium mb-2">
              Category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <select
                  className="border border-gray-300 py-2 px-4 rounded-lg bg-[#f9f9fa] focus:outline-none focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
                  {...field}
                  value={field.value || ""}
                >
                  <option value="">Select a category</option>
                  {allcategory?.map((category: any) => (
                    <option value={category._id} key={category._id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.category && (
              <span className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </span>
            )}
          </div>

          {/* Status Select */}
          <div className="flex flex-col">
            <label className="text-[#1D2939] text-[16px] font-medium mb-2">
              Status
            </label>
            <Controller
              name="status"
              control={control}
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <select
                  className="border border-gray-300 py-2 px-4 rounded-lg bg-[#f9f9fa] focus:outline-none focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
                  {...field}
                  value={field.value || ""}
                >
                  <option value="">Select a Status</option>
                  <option value="PENDING">Pending</option>
                  <option value="UPCOMING">Up Coming</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              )}
            />
            {errors.status && (
              <span className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </span>
            )}
          </div>
        </div>

        {/* Level Input */}
        <div className="flex flex-col">
          <label className="text-[#1D2939] text-[16px] font-medium mb-2">
            Level
          </label>
          <Controller
            name="level"
            control={control}
            rules={{ required: "Level is required" }}
            render={({ field }) => (
              <select
                className="border border-gray-300 py-2 px-4 rounded-lg bg-[#f9f9fa] focus:outline-none focus:ring-2 focus:ring-[#1cab55] focus:border-transparent"
                {...field}
                value={field.value || ""}
              >
                <option value="">Select a Level</option>
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="ADVANCED">Advanced</option>
                <option value="EXPERT/SPECIALIZED">Expert/Specialized</option>
              </select>
            )}
          />
          {errors.level && (
            <span className="text-red-500 text-sm mt-1">
              {errors.level.message}
            </span>
          )}
        </div>

        {/* Top Course Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="topCourse"
            className="h-4 w-4 text-[#1cab55] focus:ring-[#1cab55] border-gray-300 rounded"
            {...register("topCourse")}
          />
          <label
            htmlFor="topCourse"
            className="ml-2 text-[#1D2939] text-[16px] font-medium"
          >
            Mark as Top Course
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_show_bottom_banner"
            className="h-4 w-4 text-[#1cab55] focus:ring-[#1cab55] border-gray-300 rounded"
            {...register("is_show_bottom_banner")}
          />
          <label
            htmlFor="is_show_bottom_banner"
            className="ml-2 text-[#1D2939] text-[16px] font-medium"
          >
            Show Bottom Banner
          </label>
        </div>

        {/* Submit Button */}
        <button
          className="sticky bottom-0 px-6 py-3 bg-[#1cab55] text-white font-medium rounded-lg hover:bg-[#16d43b] focus:outline-none focus:ring-2 focus:ring-[#1cab55] focus:ring-offset-2 transition-colors mt-6"
          type="submit"
        >
          Save & Continue to Media-Seo
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
