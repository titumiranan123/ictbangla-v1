/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import IconImage from "../../(additional pages)/about-us/iconImages";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";

const Consultencypop = ({ courseId }: { courseId?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const onSubmit = async (data: any) => {
    try {
      const res = await api_url.post(
        "/v1/website/submit-phone-under-course-details",
        {
          course_id: courseId,
          number: data.phone,
          email: data.email,
          name: data.name,
        }
      );

      if (res.status === 200 || res.status === 201) {
        reset();
        Swal.fire({
          icon: "success",
          title: "সফলভাবে সাবমিট হয়েছে!",
          text: "আমাদের টিম খুব শীঘ্রই আপনার সঙ্গে যোগাযোগ করবে।",
          confirmButtonText: "ঠিক আছে!",
          confirmButtonColor: "#29AE48",
        });
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  const ModalContent = () => (
    <div
      className="fixed inset-0 w-screen h-screen bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[980px] bg-[#F3F4F6] rounded-xl flex flex-col lg:flex-row gap-6 p-6 lg:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 relative lg:pr-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-primary">
            আজই আপনার বিনামূল্যে পরামর্শ নিন
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-2 lg:w-[90%]">
            সাফল্যের দিকে প্রথম পদক্ষেপ নিন, আজই আপনার বিনামূল্যে পরামর্শের
            সময়সূচী নির্ধারণ করুন
          </p>

          <IconImage
            fileName="login_bg_icon.svg"
            className="hidden sm:block !h-[250px] sm:!h-[322px] !w-full absolute bottom-0 left-0 opacity-30 lg:opacity-100"
          />

          <div className="flex items-center mt-6 lg:mt-0 lg:absolute lg:bottom-8 lg:left-0 z-10">
            <div className="flex items-center">
              <Image
                src={"/assets/user-1.png"}
                alt="user-1"
                width={40}
                height={40}
                className="border-2 border-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
              <Image
                src={"/assets/user-2.png"}
                alt="user-2"
                width={40}
                height={40}
                className="-translate-x-2 sm:-translate-x-3 border-2 border-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
              <Image
                src={"/assets/user-2.png"}
                alt="user-3"
                width={40}
                height={40}
                className="-translate-x-4 sm:-translate-x-6 border-2 border-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <p className="text-sm sm:text-base text-text-secondary ml-2">
              ১৫০০+ শিক্ষার্থী বিনামূল্যে পরামর্শ পেয়েছেন
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:max-w-[331px] p-4 sm:p-6 rounded-xl bg-white z-10 shadow-lg flex-shrink-0">
          <h4 className="text-xl sm:text-2xl font-bold text-[#29AE48]">
            কল বুক করুন
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 sm:mt-5 space-y-3 sm:space-y-4"
          >
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                সম্পূর্ণ নাম
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="সম্পূর্ণ নাম বসান"
                className="w-full h-[42px] border border-gray-300 rounded-lg px-3 mt-1"
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ইমেইল
              </label>
              <input
                {...register("email", { required: "Email is required" })}
                placeholder="সম্পূর্ণ ইমেইল বসান"
                className="w-full h-[42px] border border-gray-300 rounded-lg px-3 mt-1"
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                মোবাইল নম্বর
              </label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^01[3-9]\d{8}$/,
                    message: "Valid BD number required",
                  },
                })}
                placeholder="01XXXXXXXXX"
                className="w-full h-[42px] border border-gray-300 rounded-lg px-3 mt-1"
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full mt-4 sm:mt-6 py-3 px-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "অপেক্ষা করুন..." : "এখনই সময়সূচী নির্ধারণ করুন"}
            </button>
          </form>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute  right-0 top-0 w-10 h-10 z-40  bg-white rounded-full p-2 shadow-lg hover:bg-gray-100  transition-colors"
          aria-label="Close modal"
        >
          <Plus className="text-red-500 rotate-45" />
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto py-3 px-4 bg-primary rounded-lg flex justify-center sm:justify-between items-center text-white mt-10 gap-2 hover:bg-primary/90 transition-colors"
      >
        <span className="font-bold text-sm sm:text-base">
          Free Career Consultancy
        </span>
        <Image
          src={"/assets/course/support_agent.png"}
          width={24}
          height={24}
          alt="support agent"
        />
      </button>

      {mounted && isOpen && createPortal(<ModalContent />, document.body)}
    </div>
  );
};

export default Consultencypop;
