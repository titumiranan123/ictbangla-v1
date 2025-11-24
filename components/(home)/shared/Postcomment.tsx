"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form data types
interface FormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  message: string;
}

const Postcomment: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    return data
  };

  return (
    <div className="max-w-[900px] mx-auto mt-10 h-auto md:px-[39px] md:py-[43px] bg-white shadow-md rounded-lg px-4 py-4">
      <h1 className="text-2xl font-bold mb-4">Leave A Reply</h1>
      <p className="text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Name Field */}
          <div className="relative">
            <input
              type="name"
              {...register("name", { required: "name is required" })}
              id="name"
              placeholder=" "
              className="fromInput peer"
            />
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          {/* Email Field */}
          <div className="relative mb-6 ">
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder=" "
              className="fromInput peer"
            />
            <label htmlFor="email" className="formLabel">
              Email *
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mb-6 ">
            <input
              type="phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder=" "
              className="fromInput peer"
            />
            <label htmlFor="phone" className="formLabel">
              Phone *
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative mb-6 ">
            <input
              type="title"
              {...register("title", {
                required: "Title is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder=" "
              className="fromInput peer"
            />
            <label htmlFor="title" className="formLabel">
              Title *
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Comment Field */}
          <div className="relative mb-6 w-full">
            <textarea
              {...register("message", { required: "Message is required" })}
              id="comment"
              placeholder=" "
              className="fromInput peer"
              rows={4}
            />
            <label htmlFor="message" className="formLabel">
              Message *
            </label>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <label
          className="flex gap-2 mt-4 mb-6 text-left justify-center items-start text-black"
          htmlFor="check"
        >
          <input className="mt-1" type="checkbox" name="check" id="" />
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
        <button type="submit" className="btn-primary w-full py-3 px-10">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default Postcomment;
