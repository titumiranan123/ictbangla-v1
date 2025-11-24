/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface VerificationCodeProps {
  email: string | number;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({ email }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const result: any = await signIn("credentials", {
        email_or_phone: email,
        otp: code,
        redirect: false,
        callbackUrl: "/",
        OTP: true,
      });

      if (result.error) {
        setError(result.error);
        toast.error(result.error);
        window.location.href = "/sign-up";
      } else {
        toast.success("User created successfully");
        router.push("/");
      }
    } catch (error) {
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || "An unexpected error occurred"
        : "An unexpected error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" min-h-screen  w-full flex justify-center  items-center">
      <div className="bg-secondary p-8 rounded-lg h-[300px] shadow-md w-[350px] ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Enter Verification Code
        </h1>
        <p className="mb-6 text-center">
          A 6-digit code has been sent to{" "}
          <strong className="text-xl text-orange-400">{email}</strong>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter 6-digit code"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            maxLength={6}
            required
            aria-label="Verification Code"
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className=" text-white py-2 rounded-md hover: bg-primary transition-all disabled:opacity-50"
            disabled={isLoading}
            aria-label="Verify Code"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
