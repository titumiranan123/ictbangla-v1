/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";

import { setBasicInfo } from "@/redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import useCategory from "@/hooks/public/useCategory";
import Input from "@/components/(instructor)/others/Input";
import MyTextEditor from "@/components/(instructor)/others/Texteditor";

interface IBasicInfo {
  title: string;
  short_description: string;
  description: string;
  category: string;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT/SPECIALIZED";
  status: "PENDING" | "PUBLISHED" | "UPCOMING" | "REJECTED";
  topCourse: boolean;
  is_show_bottom_banner: boolean;
}

const BasicInfo = ({
  setActiveTab,
}: {
  setActiveTab: (label: string) => void;
}) => {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state: RootState) => state?.course?.basicInfo);
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm<IBasicInfo>({
    defaultValues: basicInfo,
  });
  const onSubmit = (data: IBasicInfo) => {
    dispatch(setBasicInfo(data));
    setActiveTab("Media & Seo");
  };
  const { data: allcategory } = useCategory();
  return (
    <div className="w-full mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 w-full"
      >
        <Input
          label="Course Title"
          register={register}
          error={errors.title}
          validation={{ required: "Course Title is required" }}
          name={"title"}
          type={"text"}
        />

        <Input
          label="Short Description"
          register={register}
          error={errors.short_description}
          validation={{ required: "Short Description is required" }}
          name={"short_description"}
          type={"text"}
        />

        {/* Replace the description Input with the Quill Editor */}
        <div className="flex flex-col">
          <label className="text-black text-[16px] font-medium">
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
          <div className="flex flex-col">
            <p className="text-black text-[16px] font-medium">Category</p>
            <select
              className="border py-2 px-4 rounded-xl mt-2"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value="">Select a category</option>
              {allcategory?.map((category: any, indx: number) => (
                <option value={`${category._id}`} key={indx}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-black text-[16px] font-medium">Status</p>
            <select
              className="border py-2 px-4 rounded-xl mt-2"
              {...register("status", {
                required: "Status is required",
              })}
            >
              <option disabled>Select a Status</option>
              <option value="PENDING">Pending</option>
              <option value="UPCOMING">Up Coming</option>
              <option value="PUBLISHED">Published</option>
              <option value="REJECTED">Reject</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-black text-[16px] font-medium">Level </p>
          <select
            className="border py-2 px-4 rounded-xl mt-2"
            {...register("level", {
              required: "Level is required",
            })}
          >
            <option disabled>Level a Status</option>
            <option value="BEGINNER">Beginner</option>
            <option value="INTERMEDIATE">Intermediate</option>
            <option value="ADVANCED">Advanced</option>
            <option value="EXPERT/SPECIALIZED">Expert/Specialized</option>
          </select>
        </div>

        <Input
          label="Top Course"
          register={register}
          error={errors.topCourse}
          validation={{}}
          name={"topCourse"}
          type={"checkbox"}
        />
        <Input
          label="Show Bottom Banner"
          register={register}
          error={errors.topCourse}
          validation={{}}
          name={"is_show_bottom_banner"}
          type={"checkbox"}
        />

        <button
          className="sticky bottom-0 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          type="submit"
        >
          Save & Continue to Media-Seo
        </button>
      </form>
    </div>
  );
};

export default BasicInfo;
