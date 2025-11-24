/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../others/Input";
import { setPricing } from "@/redux/courseSlice";

import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
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
  const datas = useSelector((state: RootState) => state.course);
  const pricingInfo = useSelector((state: RootState) => state.course.pricing);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPricing>({ defaultValues: pricingInfo });

  const onSubmit = async (data: IPricing) => {
    dispatch(setPricing(data));
    try {
      const result = await api_url.post("/v1/instructor/create-course", datas);
      if (result.status) {
        toast.success("Course created successfully");
      }
    } catch (error: any) {
      toast.success(`${error.message}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        className="grid grid-cols-2 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Is Free"
          register={register}
          error={errors.isFree}
          validation={{}}
          name={"isFree"}
          type={"checkbox"}
        />
        {!watch("isFree") && (
          <div className="flex flex-col col-span-2 gap-10">
            <Input
              label="Main Price"
              register={register}
              error={errors.price?.main}
              validation={{ required: "Price is required" }}
              name={"price.main"}
              type={"text"}
            />
            <Input
              label="Is Discount"
              register={register}
              error={errors.price?.isDiscount}
              validation={{}}
              name={"price.isDiscount"}
              type={"checkbox"}
            />
            {watch("price.isDiscount") && (
              <Input
                label="Discount"
                register={register}
                error={errors.price?.discount}
                validation={{ required: "Discount is required" }}
                name={"price.discount"}
                type={"number"}
              />
            )}
          </div>
        )}
        <Input
          label="Expiry Status"
          register={register}
          error={errors.price?.isDiscount}
          validation={{}}
          name={"expiry.status"}
          type={"checkbox"}
        />
        {watch("expiry.status") && (
          <div>
            <label className="text-black text-[16px] font-medium">
              Expiry Date
            </label>
            <input
              type="date"
              {...register("expiry.date", {
                required: "Expiry date is required",
              })}
              className="border py-2 px-4 rounded-xl mt-2 w-full"
            />
            {errors.expiry?.date && (
              <p className="text-red-500">{errors.expiry.date.message}</p>
            )}
          </div>
        )}
        <input
          className="col-span-2 bg-black w-[200px] text-white py-4 px-8"
          type="submit"
          value="Next Step"
        />
      </form>
    </div>
  );
};

export default Coursepricing;
