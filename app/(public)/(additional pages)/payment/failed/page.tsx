// components/PaymentFailed.tsx
"use client";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

export default function PaymentFailed() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm p-8 text-center animate-fadeIn">
        <MdCancel className="text-red-500 mb-4 mx-auto" size={64} />
        <h2 className="text-2xl font-semibold text-red-700 mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-6">
          Something went wrong during your transaction. Please try again or contact support.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/checkout">
            <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
              Try Again
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-5 py-2 border border-red-400 text-red-600 rounded-lg hover:bg-red-50 transition duration-300">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
