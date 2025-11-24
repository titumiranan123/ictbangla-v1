/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SignInSearchParamsHandler = () => {
  const searchparams = useSearchParams();

  const accessToken = searchparams.get("accessToken");
  const existUser = searchparams.get("existUser");

  const handleSignInByGoogle = async () => {
    await signIn("credentials", {
      userData: existUser,
      accessToken,
      redirect: false,
      // callbackUrl: "/",
      googleLogin: true,
    });
  };

  useEffect(() => {
    if (existUser && accessToken) {
      handleSignInByGoogle();
    }
  }, [accessToken, existUser]);

  return <></>; // No UI needed/*
};

export default SignInSearchParamsHandler;
