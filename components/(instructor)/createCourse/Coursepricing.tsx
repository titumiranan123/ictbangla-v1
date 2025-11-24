/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetCourse, setPricing } from "@/redux/courseSlice";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import { useRouter } from "next/navigation";
import Input from "../others/Input";

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

const Coursepricing: React.FC = () => {
  const dispatch = useDispatch();
  const course = useSelector((state: RootState) => state.course);
  const pricingInfo = useSelector((state: RootState) => state.course.pricing);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPricing>({ defaultValues: pricingInfo });
  const router = useRouter();
  const onSubmit = async (data: IPricing) => {
    dispatch(setPricing(data));

    const formData = new FormData();

    // ✅ Basic Info
    formData.append("basicInfo[title]", course.basicInfo.title);

    formData.append(
      "basicInfo[short_description]",
      course.basicInfo.short_description
    );
    formData.append("basicInfo[description]", course.basicInfo.description);
    formData.append("basicInfo[category]", course.basicInfo.category);
    formData.append("basicInfo[level]", course.basicInfo.level);
    formData.append("basicInfo[status]", course.basicInfo.status);
    formData.append(
      "basicInfo[topCourse]",
      course.basicInfo.topCourse.toString()
    );
    formData.append(
      "basicInfo[is_show_bottom_banner]",
      course.basicInfo.is_show_bottom_banner.toString()
    );

    // ✅ FAQ (array)
    course.info.faq.forEach((item, index) => {
      formData.append(`info[faq][${index}][question]`, item.question);
      formData.append(`info[faq][${index}][answer]`, item.answer);
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

    // ✅ Requirement
    formData.append(
      "info[requirement][category]",
      course.info.requirement.category
    );
    if (
      course.info.requirement.category === "paragraph" &&
      course.info.requirement.paragraph
    ) {
      formData.append(
        "info[requirement][paragraph]",
        course.info.requirement.paragraph
      );
    }
    if (
      course.info.requirement.category === "point" &&
      course.info.requirement.point
    ) {
      course.info.requirement.point.forEach((point, idx) => {
        formData.append(`info[requirement][point][${idx}]`, point);
      });
    }
    if (
      course.info.requirement.category === "question" &&
      course.info.requirement.question
    ) {
      course.info.requirement.question.forEach((q, idx) => {
        formData.append(
          `info[requirement][question][${idx}][question]`,
          q.question
        );
        if (q.answer) {
          formData.append(
            `info[requirement][question][${idx}][answer]`,
            q.answer
          );
        }
      });
    }

    // ✅ Outcomes (same structure as requirement)
    formData.append("info[outcomes][category]", course.info.outcomes.category);
    if (
      course.info.outcomes.category === "paragraph" &&
      course.info.outcomes.paragraph
    ) {
      formData.append(
        "info[outcomes][paragraph]",
        course.info.outcomes.paragraph
      );
    }
    if (
      course.info.outcomes.category === "point" &&
      course.info.outcomes.point
    ) {
      course.info.outcomes.point.forEach((point, idx) => {
        formData.append(`info[outcomes][point][${idx}]`, point);
      });
    }

    if (
      course.info.outcomes.category === "question" &&
      course.info.outcomes.question
    ) {
      course.info.outcomes.question.forEach((q, idx) => {
        formData.append(
          `info[outcomes][question][${idx}][question]`,
          q.question
        );
        if (q.answer) {
          formData.append(`info[outcomes][question][${idx}][answer]`, q.answer);
        }
      });
    }

    // ✅ Pricing
    formData.append("pricing[isFree]", data?.isFree.toString());
    formData.append("pricing[price][main]", data?.price?.main.toString());
    formData.append(
      "pricing[price][isDiscount]",
      data?.price?.isDiscount.toString()
    );
    formData.append(
      "pricing[price][discount]",
      data?.price?.discount.toString()
    );
    formData.append(
      "pricing[price][percentage]",
      data?.price?.percentage.toString()
    );
    formData.append("pricing[expiry][status]", data?.expiry?.status.toString());
    formData.append("pricing[expiry][date]", course.pricing.expiry.date ?? "");
    // ✅ Media
    if (course.media.videoId) {
      formData.append("media[videoId]", course.media.videoId);
    }
    if (course.media && course.media.thumbnail) {
      formData.append("thumbnail", course.media.thumbnail);
    }
    // ✅ SEO
    formData.append("seo[description]", course.seo.description);
    course.seo.keywords.forEach((keyword, index) => {
      formData.append(`seo[keywords][${index}]`, keyword);
    });
    try {
      const result = await api_url.post(
        "/v1/instructor/create-course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (result.status === 201) {
        dispatch(resetCourse());
        toast.success("Course created successfully");

        router.push("/instructor-mycourses");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-10"
      >
        <Input
          label="Is Free"
          name="isFree"
          type="checkbox"
          register={register}
          error={errors.isFree}
          validation={{}}
        />

        {!watch("isFree") && (
          <div className="col-span-2 flex flex-col gap-10">
            <Input
              label="Main Price"
              name="price.main"
              type="number"
              register={register}
              error={errors.price?.main}
              validation={{ required: "Price is required" }}
            />

            <Input
              label="Is Discount"
              name="price.isDiscount"
              type="checkbox"
              register={register}
              error={errors.price?.isDiscount}
              validation={{}}
            />

            {watch("price.isDiscount") && (
              <div className="grid lg:grid-cols-2 gap-14">
                <Input
                  label="Discount Amount"
                  name="price.discount"
                  type="number"
                  register={register}
                  error={errors.price?.discount}
                  validation={{
                    min: 0,
                    max: watch("price.main"),
                    validate: (value: number) =>
                      value < watch("price.main") ||
                      "Must be less than main price",
                  }}
                />

                <Input
                  label="Discount Percentage"
                  name="price.percentage"
                  type="number"
                  register={register}
                  error={errors.price?.percentage}
                  validation={{
                    min: 0,
                    max: 100,
                    validate: (value: number) =>
                      value <= 100 || "Max percentage is 100%",
                  }}
                />
              </div>
            )}
          </div>
        )}

        <Input
          label="Expiry Status"
          name="expiry.status"
          type="checkbox"
          register={register}
          error={errors.expiry?.status}
          validation={{}}
        />

        {watch("expiry.status") && (
          <div className="col-span-2">
            <label className="block text-black text-[16px] font-medium mb-1">
              Expiry Date
            </label>
            <input
              type="date"
              {...register("expiry.date", {
                required: "Expiry date is required",
              })}
              className="border py-2 px-4 rounded-xl w-full"
            />
            {errors.expiry?.date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.expiry.date.message}
              </p>
            )}
          </div>
        )}

        <input
          type="submit"
          value="Submit"
          className="col-span-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      </form>
    </div>
  );
};

export default Coursepricing;
