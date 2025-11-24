/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import google from "@/public/assets/google.png";
import { handleGoogleLogin } from "@/utils/googleLogin";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";

interface PropsType {
  buttonText: string;
  queryParams: any;
}

const SignUpWithGoogle: React.FC<PropsType> = ({ buttonText, queryParams }) => {
  const token = queryParams?.accessToken ?? null;
  const existUser = queryParams?.existUser ?? null;
  const accessToken = token && token.replace(/ /g, "+");
  const handleSignInByGoogle = async () => {
    await signIn("credentials", {
      userData: existUser,
      accessToken,
      redirect: true,
      callbackUrl: "/",
      googleLogin: true,
    });
  };

  useEffect(() => {
    if (existUser && accessToken) {
      handleSignInByGoogle();
    }
  }, [accessToken, existUser]);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-3">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex justify-center items-center py-3 px-4 border border-[#e5e7eb] rounded-lg bg-white text-[#1f2937] font-medium shadow-sm hover:bg-[#f9fafb] transition-colors"
        >
          <Image src={google} alt="Google" className="h-5 w-5 mr-2" />
          {buttonText ?? "গুগল দিয়ে রেজিস্টার করুন"}
        </button>
      </div>
    </>
  );
};

export default SignUpWithGoogle;
