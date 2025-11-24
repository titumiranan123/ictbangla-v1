"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="bg-[#F8F9FB] min-h-screen flex justify-center items-center px-6">
      <div className="max-w-[1428px] w-full mx-auto grid lg:grid-cols-12 grid-cols-1 items-center gap-10">
        {/* Left Section */}
        <motion.div
          className="lg:col-span-7 flex justify-center items-center relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[500px] aspect-[4/3]">
            <Image
              src="/assets/404.png"
              alt="404 Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center gap-5 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-[22px] lg:text-[30px] font-semibold text-[#1A1A1A] leading-tight">
            Oops! It looks like you&apos;re lost.
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#444] leading-relaxed">
            The page you&apos;re looking for isn&apos;t available or may have
            been moved. Try visiting the homepage to continue exploring ICT
            Bangla.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white bg-[#1D4ED8] hover:bg-[#153FA6] text-[17px] font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Go Back Home
              <Image
                src="/assets/icon/arrow-up-right.svg"
                alt="arrow icon"
                width={14}
                height={14}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
