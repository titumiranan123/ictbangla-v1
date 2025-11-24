/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetCourse, setPricing } from "@/redux/courseSlice";
import toast from "react-hot-toast";
import Input from "@/components/(instructor)/others/Input";
import { useParams, useRouter } from "next/navigation";
import { api_url } from "@/hooks/apiurl";
import useInstructorCourse from "@/hooks/instructor/useInstructorCourse";

interface IPricing {
  isFree: boolean;
  price: {
    main: number;
    isDiscount: boolean;
    discount: number;
    percentage: number;
  };
  expiry: {
    status: boolean;
    date: string | null;
  };
}

const UpdateCoursepricing: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const course = useSelector((state: RootState) => state.course);
  const pricingInfo = useSelector((state: RootState) => state.course.pricing);
  const { refetch } = useInstructorCourse();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IPricing>({ defaultValues: pricingInfo });

  const onSubmit = async (data: IPricing) => {
    try {
      dispatch(setPricing(data));
      const formData = new FormData();

      // Append helper
      const appendField = (key: string, value: any) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      };

      // Basic Info
      const { basicInfo, info, media, seo } = course;
      console.log(basicInfo.description);
      appendField("basicInfo[title]", basicInfo.title);
      appendField("basicInfo[short_description]", basicInfo.short_description);
      appendField("basicInfo[description]", basicInfo.description);
      appendField("basicInfo[category]", basicInfo.category);
      appendField("basicInfo[level]", basicInfo.level);
      appendField("basicInfo[status]", basicInfo.status);
      appendField("basicInfo[topCourse]", basicInfo.topCourse);
      appendField(
        "basicInfo[is_show_bottom_banner]",
        basicInfo.is_show_bottom_banner
      );

      // FAQ
      info.faq?.forEach((item, i) => {
        appendField(`info[faq][${i}][question]`, item.question);
        appendField(`info[faq][${i}][answer]`, item.answer);
      });
      if (course?.info?.description_sections) {
        course?.info?.description_sections.forEach((item, index) => {
          formData.append(
            `info[description_sections][${index}][section_title]`,
            item.section_title
          );
          formData.append(
            `info[description_sections][${index}][section_content]`,
            item.section_content
          );
        });
      }
      // Requirement & Outcomes - Shared Logic
      const handleCategoryField = (
        type: "requirement" | "outcomes",
        obj: any
      ) => {
        appendField(`info[${type}][category]`, obj.category);
        if (obj.category === "paragraph" && obj.paragraph) {
          appendField(`info[${type}][paragraph]`, obj.paragraph);
        } else if (obj.category === "point" && obj.point) {
          obj.point.forEach((p: string, i: number) => {
            appendField(`info[${type}][point][${i}]`, p);
          });
        } else if (obj.category === "question" && obj.question) {
          obj.question.forEach((q: any, i: number) => {
            appendField(`info[${type}][question][${i}][question]`, q.question);
            appendField(`info[${type}][question][${i}][answer]`, q.answer);
          });
        }
      };
      handleCategoryField("requirement", info.requirement);
      handleCategoryField("outcomes", info.outcomes);

      // Pricing
      appendField("pricing[isFree]", data.isFree);
      appendField("pricing[price][main]", data.price.main);
      appendField("pricing[price][isDiscount]", data.price.isDiscount);
      appendField("pricing[price][discount]", data.price.discount);
      appendField("pricing[price][percentage]", data.price.percentage);
      appendField("pricing[expiry][status]", data.expiry.status);
      appendField("pricing[expiry][date]", data.expiry.date ?? "");

      // Media
      if (media.thumbnail) formData.append("thumbnail", media.thumbnail);

      if (course?.media?.video) {
        formData.append("media[videoId]", course.media.video);
      }
      // SEO
      appendField("seo[description]", seo.description);
      seo.keywords?.forEach((kw: string, i: number) =>
        appendField(`seo[keywords][${i}]`, kw)
      );

      // API Request
      const response = await api_url.patch(
        `/v1/instructor/update-course/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (response.status === 200 || response.status === 201) {
        await refetch();
        toast.success("Course updated successfully");
        router.push("/instructor-mycourses");
        reset();
        dispatch(resetCourse());
      }
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || "Failed to update course");
    }
  };

  const isFree = watch("isFree");
  const hasDiscount = watch("price.isDiscount");
  const hasExpiry = watch("expiry.status");

  return (
    <div className="p-4">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2">
          <Input
            label="Is Free"
            register={register}
            error={errors.isFree}
            name="isFree"
            type="checkbox"
          />
        </div>

        {!isFree && (
          <>
            <Input
              label="Main Price"
              register={register}
              error={errors.price?.main}
              validation={{ required: "Price is required", min: 0 }}
              name="price.main"
              type="number"
            />

            <div className="col-span-2">
              <Input
                label="Is Discount"
                register={register}
                error={errors.price?.isDiscount}
                name="price.isDiscount"
                type="checkbox"
              />
            </div>

            {hasDiscount && (
              <>
                <Input
                  label="Discount Amount *"
                  register={register}
                  error={errors.price?.discount}
                  validation={{
                    min: 0,
                    max: watch("price.main"),
                    validate: (value: number) =>
                      value < watch("price.main") ||
                      "Discount must be less than main price",
                  }}
                  name="price.discount"
                  type="number"
                />
                <Input
                  label="Percentage *"
                  register={register}
                  error={errors.price?.percentage}
                  validation={{
                    min: 0,
                    max: 100,
                  }}
                  name="price.percentage"
                  type="number"
                />
              </>
            )}
          </>
        )}

        <div className="col-span-2">
          <Input
            label="Expiry Status"
            register={register}
            error={errors.expiry?.status}
            name="expiry.status"
            type="checkbox"
          />
        </div>

        {hasExpiry && (
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              {...register("expiry.date", {
                required: "Expiry date is required",
                validate: (value) => {
                  if (!value) return true;
                  const selectedDate = new Date(value);
                  const today = new Date();
                  return selectedDate > today || "Date must be in the future";
                },
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.expiry?.date && (
              <p className="mt-1 text-sm text-red-600">
                {errors.expiry.date.message}
              </p>
            )}
          </div>
        )}

        <div className="col-span-2 mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoursepricing;
