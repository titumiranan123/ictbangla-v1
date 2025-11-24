"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CourseNotFound() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Logo Section */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">ICT</span>
        </div>
        <span className="text-xl font-bold text-gray-900">ICT Bangla</span>
      </div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Error Icon */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mb-8 border border-red-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          404
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h1 className="text-[26px] font-semibold text-[#1A1A1A] mb-3">
            Course Not Found
          </h1>
          <p className="text-[17px] text-gray-600 mb-8 leading-relaxed">
            The course you&apos;re looking for doesn&apos;t exist, has been
            removed, or is temporarily unavailable.
          </p>

          {/* Action Button */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 font-medium text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Browse All Courses</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Additional Help Text */}
        <motion.p
          className="text-gray-500 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Need help?{" "}
          <Link
            href="/contact"
            className="text-green-600 hover:text-green-700 font-medium underline"
          >
            Contact support
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
