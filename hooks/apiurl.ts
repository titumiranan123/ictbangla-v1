/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import { getSession } from "next-auth/react";
export const api_url = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api_url.interceptors.request.use(async (config) => {
  const session: any = await getSession();
  if (session?.user?.token) {
    config.headers.Authorization = `Bearer ${session?.user?.token}`;
  }
  return config;
});
