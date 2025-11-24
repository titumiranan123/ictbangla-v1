"use client";
import { MdOutlineWarningAmber } from "react-icons/md";
import Link from "next/link";

export default function PaymentCancelled() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-50 px-4">
      <div className="w-full max-w-xl bg-white/70 backdrop-blur-md rounded-3xl shadow-xs p-10 text-center  transition-all animate-fadeIn">
        <div className="flex justify-center">
          <MdOutlineWarningAmber className="text-yellow-500 mb-4 animate-pulse drop-shadow-md" size={72} />
        </div>
        <h1 className="text-3xl font-bold text-yellow-700 mb-3">Payment Cancelled</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          You’ve chosen to cancel the payment process. That’s okay!  
          <br className="hidden sm:block" />
          You can retry anytime or explore other options.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/checkout">
            <button className="w-full sm:w-auto px-6 py-3 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300">
              Retry Payment
            </button>
          </Link>
          <Link href="/courses">
            <button className="w-full sm:w-auto px-6 py-3 border border-yellow-400 text-yellow-600 hover:bg-yellow-100 rounded-lg font-medium transition duration-300">
              Browse Courses
            </button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Need help?{" "}
          <Link href="/support" className="text-yellow-600 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
