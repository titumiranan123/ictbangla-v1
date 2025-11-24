/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginImage from "@/public/assets/login.jpg";
import { useForm } from "react-hook-form";
import Link from "next/link";
import VerificationCode from "@/utils/VerificationCode";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import SignUpWithGoogle from "../sign-in/SignUpWithGoogle";

interface SignupData {
  first_name: string;
  last_name: string;
  email_or_phone: string;
  password: string;
}

const SingupComponent = ({ queryParams }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignupData>();
  const [showVerification, setShowVerification] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true);
    try {
      await api_url.post("/v1/auth/signup", { ...data, role: "USER" });
      setEmail(data.email_or_phone);
      setShowVerification(true);
    } catch (error: any) {
      console.log(error?.response?.data?.message);
      setError(error?.response?.data?.message);
      toast.error(`${error?.response?.data?.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showVerification) {
    return <VerificationCode email={email} />;
  }

  return (
    <div className="min-h-screen  py-12 md:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center max-w-6xl">
        {/* Image Section */}
        <div className="hidden lg:block w-full max-w-xl rounded-l-2xl overflow-hidden shadow-lg h-[800px] relative">
          <Image
            src={loginImage}
            alt="Sign up illustration"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 500px"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-xl h-[800px] bg-[#f9f9fa] rounded-r-2xl lg:rounded-l-none rounded-2xl shadow-lg px-4 md:px-12 py-10 md:py-6 flex flex-col justify-center items-center ">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a2e35]">
              আমাদের কমিউনিটিতে যোগ দিন
            </h1>
            <p className="mt-2 text-[#4b5563]">
              ইতোমধ্যেই একাউন্ট আছে?{" "}
              <Link
                href="/sign-in"
                className="text-[#29AE48] hover:text-[#1a5632] font-medium transition-colors"
              >
                লগ ইন করুন
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-[#374151]"
                >
                  প্রথম নাম
                </label>
                <input
                  id="first_name"
                  {...register("first_name", {
                    required: "প্রথম নাম আবশ্যক",
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                  placeholder="John"
                />
                {errors.first_name && (
                  <p className="text-sm text-[#dc2626] mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-[#374151]"
                >
                  শেষ নাম
                </label>
                <input
                  id="last_name"
                  {...register("last_name", {
                    required: "শেষ নাম আবশ্যক",
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                  placeholder="Doe"
                />
                {errors.last_name && (
                  <p className="text-sm text-[#dc2626] mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#374151]"
              >
                ইমেইল অথবা ফোন নম্বর
              </label>
              <input
                id="email"
                type="text"
                {...register("email_or_phone", {
                  required: "    ইমেইল অথবা ফোন নম্বর আবশ্যক",
                })}
                className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
              />
              {errors.email_or_phone && (
                <p className="text-sm text-[#dc2626] mt-1">
                  {errors.email_or_phone.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#374151]"
              >
                পাসওয়ার্ড
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "পাসওয়ার্ড আবশ্যক" })}
                className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-sm text-[#dc2626] mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#374151]"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("password", {
                  required: "পাসওয়ার্ড নিশ্চিত করুন",
                  validate: (value) =>
                    value === watch("password") || "পাসওয়ার্ড মিলছে না",
                })}
                className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-sm text-[#dc2626] mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            {error && <p className="text-sm text-[#dc2626] mt-1">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-[#29AE48] hover:bg-[#1f8a3a] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
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
                  প্রসেসিং হচ্ছে...
                </>
              ) : (
                <>
                  একাউন্ট তৈরি করুন
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e5e7eb]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#6b7280]">
                  অথবা চালিয়ে যান
                </span>
              </div>
            </div>

            <SignUpWithGoogle
              queryParams={queryParams}
              buttonText="গুগল দিয়ে রেজিস্টার করুন"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingupComponent;
