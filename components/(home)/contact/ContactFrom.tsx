"use client";
import Image from "next/image";
import React from "react";
import loginImage from "@/public/assets/contact-page-image.jpg";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  title: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
  return data
    // Add your actual form submission logic here
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#FFFADA]/20 rounded-2xl mt-[120px] flex flex-col lg:flex-row justify-between items-center mb-10 overflow-hidden shadow-lg">
        {/* Image Section */}
        <div data-aos="fade-up" data-aos-delay="300" className="lg:w-1/2 w-full h-full">
          <Image
            src={loginImage}
            alt="Contact us illustration"
            width={800}
            height={500}
            className="w-full h-full object-cover lg:rounded-t-none lg:rounded-l-2xl rounded-t-2xl"
            priority
          />
        </div>

        {/* Form Section */}
        <div data-aos="fade-up" data-aos-delay="400" className="lg:w-1/2 w-full lg:py-[60px] py-10 lg:px-[60px] px-6">
          <div className="max-w-[500px] mx-auto">
            <h1 data-aos="fade-up" data-aos-delay="400" className="text-3xl lg:text-4xl font-bold font-cardo text-gray-800 mb-2">
              আমরা কিভাবে সাহায্য করতে পারি?
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-gray-600 mb-8">
              প্রশ্ন বা মতামত থাকলে আমাদের জানাতে পারেন।
            </p>

            <form data-aos="fade-up" data-aos-delay="600" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-1">
                <label htmlFor="name" className="sr-only">
                  নাম
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "নাম অবশ্যই দিতে হবে" })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="আপনার নাম লিখুন"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label htmlFor="email" className="sr-only">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "ইমেইল অবশ্যই দিতে হবে",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "সঠিক ইমেইল প্রদান করুন",
                    },
                  })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="আপনার ইমেইল লিখুন"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Title Field */}
              <div className="space-y-1">
                <label htmlFor="title" className="sr-only">
                  বিষয়
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "বিষয় অবশ্যই দিতে হবে" })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="বিষয় লিখুন"
                  aria-invalid={errors.title ? "true" : "false"}
                />
                {errors.title && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label htmlFor="message" className="sr-only">
                  বার্তা
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "বার্তা অবশ্যই দিতে হবে" })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                  placeholder="আপনার বার্তা লিখুন..."
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-sm text-red-500" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  <>
                    বার্তা পাঠান
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;