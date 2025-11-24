/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import { ISection } from "@/interface/interface";



const UpdateContentFormModal = ({
  onClose,
  refetch,
  data,
}: {
  onClose: () => void;
  refetch: () => void;
  data: ISection;
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  
  } = useForm<ISection>({
    mode: "onChange",
    defaultValues: {
      title: data?.title,
      slug: data?.slug,
      description: data?.description
    }
  });

 

  

  const onSubmit = async (newdata: ISection) => {
    try {
      setSubmitting(true);
      const res = await api_url.patch(
        `/v1/instructor/update-section/${data._id}`,
        newdata
      );
 
      if (res.status === 201) {
        toast.success("Section updated successfully");
        refetch();
        onClose();
      } else {
        toast.error( "Failed to update section");
      }
    } catch (error: any) {
      
      toast.error(  error?.responce?.data?.message || "Failed to update section");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal container */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Modal header */}
          <div className="bg-white px-6 pt-6">
            <h3 className="text-2xl font-bold text-gray-800">Update Section</h3>
          </div>

          {/* Modal body */}
          <div className="px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title Field */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  })}
            
                  className={`w-full h-10 px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter content title"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.message}
                  </p>
                )}
              </div>

         

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description *
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary focus:border-primary ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter a detailed description of the content"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Modal footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 ${
                isSubmitting
                  ? "bg-secondary cursor-not-allowed"
                  : "bg-primary bg-opacity-90 hover:bg-opacity-100"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  Updating...
                </span>
              ) : (
                "Update Section"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateContentFormModal;