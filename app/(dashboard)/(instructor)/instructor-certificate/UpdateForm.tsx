"use client";

import { api_url } from "@/hooks/apiurl";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface CertificateFormData {
  batch_number: string;
  course_radiation: string;
  status: string;
  reject_reason: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CertificateFormData>({
    defaultValues: {
      batch_number: "",
      course_radiation: "",
      status: "APPROVED",
      reject_reason: "",
    },
  });
  const status = watch("status");

  const onSubmit = async (data: CertificateFormData) => {
    console.log("Form Data:", data);
    if (!id) {
      toast.error("Please provide certificate ID.");
    }
    // Handle form submission here
    try {
      const result = await api_url.patch(
        `/v1/instructor/certificate-request/${id}`,
        { ...data }
      );

      if (result.status === 201 || result.status === 200) {
        toast.success("Certificate Update !!!");
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 h-screen bg-black/20 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Certificate Details</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Batch Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Batch Number
            </label>
            <input
              type="text"
              {...register("batch_number", {
                required: "Batch number is required",
              })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.batch_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.batch_number.message}
              </p>
            )}
          </div>

          {/* Course Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Duration
            </label>
            <input
              type="text"
              {...register("course_radiation", {
                required: "Course duration is required",
              })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.course_radiation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.course_radiation.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              {...register("status", { required: "Status is required" })}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="APPROVED">APPROVED</option>
              <option value="PENDING">PENDING</option>
              <option value="REJECTED">REJECTED</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          {/* Reject Reason */}
          {status !== "APPROVED" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reject Reason
              </label>
              <textarea
                {...register("reject_reason")}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Form Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 border border-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateModal;
