/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import GTMPageView from "@/lib/GTMPageView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
const queryClient = new QueryClient();
const Providers = ({ children }: any) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease",
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {" "}
        {children}
        <GTMPageView />
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
