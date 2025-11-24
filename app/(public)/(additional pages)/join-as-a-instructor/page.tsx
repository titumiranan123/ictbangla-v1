/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { api_url } from "@/hooks/apiurl";
import toast from "react-hot-toast";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  designation: string;
  image?: FileList;
  experience: string;
  location: string;
  portfolio: string;
  password: string;
  message: string;
  about: string;
  cv?: FileList;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function InstructorApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCvName, setSelectedCvName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    setError,
    clearErrors,
  } = useForm<FormData>();

  const imageFile = watch("image");
  const cvFile = watch("cv");

  const handleImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setValue("image", e.target.files ?? undefined);
      if (file) {
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
          setError("image", {
            type: "file-type",
            message: "Only JPG, PNG, and WEBP files are allowed",
          });
          return;
        }
        if (file.size > MAX_FILE_SIZE) {
          setError("image", {
            type: "file-size",
            message: "File size must be less than 5MB",
          });
          return;
        }
        clearErrors("image");
        setSelectedImage(URL.createObjectURL(file));
      }
    },
    [clearErrors, setError, setValue]
  );

  const handleCvChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      // console.log(e.target.files);
      setValue("cv", e.target.files ?? undefined);
      if (file) {
        if (!ACCEPTED_CV_TYPES.includes(file.type)) {
          setError("cv", {
            type: "file-type",
            message: "Only PDF, DOC, and DOCX files are allowed",
          });
          return;
        }
        if (file.size > MAX_FILE_SIZE) {
          setError("cv", {
            type: "file-size",
            message: "File size must be less than 5MB",
          });
          return;
        }
        clearErrors("cv");
        setSelectedCvName(file.name);
      }
    },
    [setValue, clearErrors, setError]
  );

  const onSubmit = async (data: FormData) => {
    // console.log(data);
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      // Append all text fields
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "image" && key !== "cv" && value !== undefined) {
          formData.append(key, value as string);
        }
      });

      // Append image file if provided
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      // Append CV file if provided
      if (data.cv && data.cv.length > 0) {
        formData.append("cv", data.cv[0]);
      }

      const res = await api_url.post(
        "/v1/website/become-instructor/application",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        setSubmitSuccess(true);
        reset();
        setSelectedImage(null);
        setSelectedCvName(null);
        toast.success("Application submitted successfully");
      } else {
        toast.error("Failed to submit application");
      }
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || err.message || "An error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        setError("image", {
          type: "file-type",
          message: "Only JPG, PNG, and WEBP files are allowed",
        });
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError("image", {
          type: "file-size",
          message: "File size must be less than 5MB",
        });
        return;
      }
      setSelectedImage(URL.createObjectURL(file));
    }
  }, [imageFile, setError]);

  useEffect(() => {
    if (cvFile && cvFile.length > 0) {
      const file = cvFile[0];
      if (!ACCEPTED_CV_TYPES.includes(file.type)) {
        setError("cv", {
          type: "file-type",
          message: "Only PDF, DOC, and DOCX files are allowed",
        });
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        setError("cv", {
          type: "file-size",
          message: "File size must be less than 5MB",
        });
        return;
      }
      setSelectedCvName(file.name);
    }
  }, [cvFile, setError]);

  if (submitSuccess) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md text-center">
        <div className="mb-6 text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in becoming an instructor. We&apos;ve
          received your application and will review it shortly.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Become an Instructor
          </h1>
          <p className="text-gray-600">
            Share your knowledge and inspire others. Fill out the form below to
            apply.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name Fields */}
            <div>
              <label
                htmlFor="first_name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first_name"
                type="text"
                {...register("first_name", {
                  required: "First Name is required",
                  minLength: {
                    value: 2,
                    message: "First Name must be at least 2 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.first_name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John"
              />
              {errors.first_name && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="last_name"
                type="text"
                {...register("last_name", {
                  required: "Last Name is required",
                  minLength: {
                    value: 2,
                    message: "Last Name must be at least 2 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.last_name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Doe"
              />
              {errors.last_name && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.last_name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone_number"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone_number"
                type="tel"
                {...register("phone_number", {
                  required: "Phone number is required",
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.phone_number ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone_number && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.phone_number.message}
                </p>
              )}
            </div>

            {/* Designation Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="designation"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                id="designation"
                type="text"
                {...register("designation", {
                  required: "Designation is required",
                  minLength: {
                    value: 3,
                    message: "Designation must be at least 3 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.designation ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="English Teacher"
              />
              {errors.designation && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.designation.message}
                </p>
              )}
            </div>

            {/* Experience Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="experience"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Teaching Experience <span className="text-red-500">*</span>
              </label>
              <select
                id="experience"
                {...register("experience", {
                  required: "Experience level is required",
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.experience ? "border-red-500" : "border-gray-300"
                }`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select your experience level
                </option>
                <option value="beginner">Beginner (1-2 years)</option>
                <option value="intermediate">Intermediate (3-5 years)</option>
                <option value="advanced">Advanced (5+ years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
              {errors.experience && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.experience.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:col-span-2 gap-10">
              {/* Image Upload Field */}
              <div className="">
                <div className="space-y-2">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-1">
                      Upload Image
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-md p-4 text-center ${
                        errors.image
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      <label
                        htmlFor="image"
                        className="cursor-pointer flex flex-col items-center justify-center"
                      >
                        {selectedImage ? (
                          <div className="mb-2">
                            <Image
                              src={selectedImage}
                              alt="Preview"
                              width={80}
                              height={80}
                              className="h-20 w-20 object-cover rounded-md"
                            />
                          </div>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-gray-400 mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        )}
                        <p className="text-lg text-gray-600 mb-1">
                          <span className="font-semibold text-primary">
                            Click to upload
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          JPG, PNG (Max. 5MB)
                        </p>
                      </label>
                    </div>
                  </div>
                  {errors.image && (
                    <p className="mt-1 text-lg text-red-600">
                      {errors.image.message}
                    </p>
                  )}
                </div>
              </div>
              {/* CV Upload Field */}
              <div className="">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">
                    Upload CV <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-md p-4 text-center ${
                      errors.cv ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleCvChange}
                    />
                    <label
                      htmlFor="cv"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-400 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-lg text-gray-600 mb-1">
                        <span className="font-semibold text-primary">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (Max. 5MB)
                      </p>
                      {selectedCvName && (
                        <p className="mt-2 text-lg text-gray-700">
                          Selected file: {selectedCvName}
                        </p>
                      )}
                    </label>
                  </div>
                </div>
                {errors.cv && (
                  <p className="mt-1 text-lg text-red-600">
                    {errors.cv.message}
                  </p>
                )}
              </div>
            </div>

            {/* Portfolio Field */}
            <div>
              <label
                htmlFor="portfolio"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Portfolio URL <span className="text-red-500">*</span>
              </label>
              <input
                id="portfolio"
                type="url"
                {...register("portfolio", {
                  required: "Portfolio URL is required",
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                    message: "Please enter a valid URL",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.portfolio ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://example.com/portfolio"
              />
              {errors.portfolio && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.portfolio.message}
                </p>
              )}
            </div>

            {/* Location Field */}
            <div>
              <label
                htmlFor="location"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                type="text"
                {...register("location", {
                  required: "Location is required",
                  minLength: {
                    value: 3,
                    message: "Location must be at least 3 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Mirpur 10, Dhaka"
              />
              {errors.location && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Create Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="At least 8 characters"
              />
              {errors.password && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* About Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="about"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                About Yourself <span className="text-red-500">*</span>
              </label>
              <textarea
                id="about"
                rows={4}
                {...register("about", {
                  required: "About section is required",
                  minLength: {
                    value: 50,
                    message: "About must be at least 50 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "About must be less than 500 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.about ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Tell us about your teaching philosophy, experience, and qualifications..."
              />
              {errors.about && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.about.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Why do you want to become an instructor?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message", {
                  required: "This field is required",
                  minLength: {
                    value: 50,
                    message:
                      "Please provide a more detailed response (at least 50 characters)",
                  },
                  maxLength: {
                    value: 500,
                    message: "Response must be less than 500 characters",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Explain why you want to teach and what makes you a good candidate..."
              />
              {errors.message && (
                <p className="mt-1 text-lg text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
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
                  Processing...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
