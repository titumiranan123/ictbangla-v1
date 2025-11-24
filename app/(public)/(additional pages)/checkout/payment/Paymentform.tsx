"use client";

import { api_url } from "@/hooks/apiurl";
import useHomeSetting from "@/hooks/public/useSetting";
import { useRouter, useSearchParams } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function PaymentOnline() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: paymethod, isLoading } = useHomeSetting();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [loading, setLoading] = useState(true);
  const [submintloading, setSubmitLoading] = useState(false);

  useEffect(() => {
    const getOrderData = async () => {
      try {
        const res = await api_url.get(
          `/v1/website/payment-data-by-orderId/${orderId}`
        );
        if (res?.data) {
          reset({
            orderId: res.data.payment_uid,
            name: res.data.name,
            due: res.data.price,
            id: res?.data?._id,
          });
        }
      } catch (error: any) {
        console.log(error);
        toast.error("Failed to load order data");
      } finally {
        setLoading(false);
      }
    };

    if (orderId) getOrderData();
  }, [orderId, reset]);
  const router = useRouter();

  const onSubmit = async (formData: any) => {
    try {
      setSubmitLoading(true);
      const payload = {
        paymentHistory_id: formData.id,
        payment_method: formData.paymentMethod,
      };
      const response = await api_url.post(
        "/v1/website/pay-unPayed-purchase",
        payload
      );

      if (response.status === 201) {
        setSubmitLoading(false);
        router.push(response?.data?.payment_info?.payment_url);
      } else {
        setSubmitLoading(false);
        toast.error("Payment failed!");
      }
    } catch (err) {
      setSubmitLoading(false);
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Payment</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Order ID */}
          <div>
            <label
              htmlFor="orderId"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Order ID
            </label>
            <input
              id="orderId"
              type="text"
              readOnly
              {...register("orderId", { required: "Order ID is required." })}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            />
          </div>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              readOnly
              {...register("name", { required: "Name is required." })}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            />
          </div>

          {/* Due */}
          <div>
            <label
              htmlFor="due"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due
            </label>
            <input
              id="due"
              type="number"
              readOnly
              {...register("due", {
                required: "Due amount is required.",
                valueAsNumber: true,
                min: {
                  value: 0,
                  message: "Due amount must be a positive number.",
                },
              })}
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Payment
            </label>
            <select
              id="paymentMethod"
              {...register("paymentMethod", {
                required: "Please select a payment method.",
              })}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            >
              <option value="">-- Select Method --</option>
              {paymethod?.bkash === "true" && (
                <option value="BKASH">bKash</option>
              )}
              {paymethod?.ssl === "true" && (
                <option value="SSL_PAY">SSLCommerz</option>
              )}
            </select>
            {errors.paymentMethod && (
              <p className="mt-1 text-xs text-red-600">
                {errors.paymentMethod.message as string}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary/90 hover:bg-primary text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
          >
            {!submintloading ? "Pay" : "Submiting..."}
          </button>
        </form>
      </div>
    </div>
  );
}
