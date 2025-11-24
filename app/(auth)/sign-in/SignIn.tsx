/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import loginImage from "@/public/assets/login.jpg";
import { getSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SignUpWithGoogle from "./SignUpWithGoogle";

interface SignInData {
  email: string;
  password: string;
}

const SignInComponent = ({ queryParams }: any) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: SignInData) => {
    setIsLoading(true);
    try {
      const result = await signIn("credentials", {
        ...data,
        redirect: false,
        Login: true,
      });
      if (result?.error) {
        throw new Error(result.error);
      }
      const session: any = await getSession();
      const role = session?.user?.role;
      if (role === "ADMIN") {
        await signOut({ redirect: false });
        window.location.href = "https://admin.ictbangla.com/sign-in";
      } else if (role === "INSTRUCTOR") {
        router.push("/instructor-dashboard");
      } else {
        router.push("/student-dashboard");
      }
      toast.success("সফলভাবে লগইন হয়েছে!");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lg:min-h-screen  py-12 md:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center max-w-6xl">
        <div className="hidden lg:block w-full max-w-xl rounded-l-2xl overflow-hidden shadow-lg lg:h-[650px] relative">
          <Image
            src={loginImage}
            alt="Login illustration"
            className="w-full h-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 576px"
            priority
          />
        </div>

        <div className="w-full max-w-xl lg:h-[650px] h-auto bg-[#f9f9fa] rounded-r-2xl lg:rounded-l-none rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#1a2e35]">
              আইসিটি বাংলাতে স্বাগতম{" "}
            </h1>
            <p className="mt-2 text-[#4b5563]">
              আপনার কি একাউন্ট নেই ?{" "}
              <Link
                href="/sign-up"
                className="text-[#29AE48] hover:text-[#1a5632] font-medium transition-colors"
              >
                এখনই রেজিস্টার করুন
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
                {...register("email", {
                  required: "ইমেইল অথবা ফোন নম্বর আবশ্যক",
                })}
                className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:ring-2 focus:ring-[#29AE48] focus:border-[#29AE48] outline-none transition-all"
                placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
              />
              {errors.email && (
                <p className="text-sm text-[#dc2626] mt-1">
                  {errors.email.message}
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
            {queryParams?.errorMessage && (
              <p className="text-sm text-[#dc2626] ">
                {queryParams?.errorMessage}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium hover:underline text-[#29AE48] hover:text-[#1a5632]"
                >
                  পাসওয়ার্ড ভুলে গেছেন ?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-[#29AE48] hover:bg-[#1f8a3a] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center ${
                isLoading ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
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
                  লগইন হচ্ছে...
                </>
              ) : (
                "লগ ইন করুন"
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
                  অথবা লগইন করুন
                </span>
              </div>
            </div>

            <SignUpWithGoogle
              buttonText="গুগল দিয়ে লগইন করুন"
              queryParams={queryParams}
            />

            {/* <div className="mt-6 grid grid-cols-1 gap-3">
              <button
                onClick={handleGoogleLogin}
                className="w-full flex justify-center items-center py-3 px-4 border border-[#e5e7eb] rounded-lg bg-white text-[#1f2937] font-medium shadow-sm hover:bg-[#f9fafb] transition-colors"
              >
                <Image src={google} alt="Google" className="h-5 w-5 mr-2" />
                Sign in with Google
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
