import React from "react";
import Pagetitle from "@/components/(home)/shared/pagetitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "রিফান্ড নীতি | ICT Bangla",
  description:
    "ICT Bangla এর কোর্স রিফান্ড সংক্রান্ত নীতিমালা জানুন। রিফান্ডের যোগ্যতা, সময়সীমা এবং প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন।",
};

const RefundPolicy = () => {
  return (
    <div>
      <Pagetitle
        pageName="রিফান্ড পলিসি"
        pagePragraph="কোর্স কেনার পূর্বে আমাদের রিফান্ড পলিসি ভালোভাবে পড়ে নিন, যেন আপনি সব শর্ত সঠিকভাবে বুঝে নিতে পারেন।"
        pageTitle="রিফান্ড পলিসি"
      />

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            {/* Refund Policy Sections */}
            <div className="divide-y divide-gray-200">
              {/* Request Timing */}
              <section className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  রিফান্ডের জন্য অনুরোধের সময়সীমা
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  কোর্স কেনার পর{" "}
                  <span className="font-semibold text-primary">
                    ৭ দিনের মধ্যে
                  </span>{" "}
                  রিফান্ডের জন্য অনুরোধ করতে হবে। ৭ দিন পর রিফান্ডের জন্য আবেদন
                  গ্রহণযোগ্য হবে না।
                </p>
              </section>

              {/* Eligibility Criteria */}
              <section className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  কে/কারা রিফান্ড যোগ্য হতে পারবেন?
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    রিফান্ডের জন্য আবেদন করতে হলে, আপনাকে{" "}
                    <span className="font-semibold">
                      কোর্সের ২০% বা তার কম অংশ সম্পন্ন করতে হবে
                    </span>
                    ।
                  </p>
                  <p>
                    যদি আপনি কোর্সের{" "}
                    <span className="font-semibold">
                      ২০% এর বেশি সম্পন্ন করেন
                    </span>
                    , তবে আপনি রিফান্ড পাওয়ার{" "}
                    <span className="font-semibold">যোগ্য হবেন না</span>।
                  </p>
                </div>
              </section>

              {/* Process Section */}
              <section className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  রিফান্ড প্রক্রিয়া
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    রিফান্ড চাইলে আমাদের{" "}
                    <span className="font-semibold">
                      কাস্টমার সাপোর্ট টিমকে ইমেল করুন
                    </span>{" "}
                    অথবা{" "}
                    <span className="font-semibold">
                      ওয়েবসাইটের কন্টাক্ট ফর্ম
                    </span>{" "}
                    পূরণ করে অনুরোধ পাঠাতে হবে।
                  </p>
                  <p>
                    আপনার অনুরোধ পর্যালোচনা করে{" "}
                    <span className="font-semibold">৭ কার্যদিবসের মধ্যে</span>{" "}
                    আমরা রিফান্ড প্রক্রিয়া সম্পন্ন করবো।
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    (অনুরোধ পাঠানোর সময়ে আপনার কোর্স রেজিষ্ট্রেশন এর সকল তথ্য
                    দিতে হবে)
                  </p>
                </div>
              </section>

              {/* Exceptions Section */}
              <section className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  ব্যতিক্রম সমূহ / যেসব ক্ষেত্রে রিফান্ড প্রযোজ্য নয়?
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <span className="font-semibold">বিশেষ অফার</span>,{" "}
                    <span className="font-semibold">ডিসকাউন্টেড কোর্স</span> এবং
                    কিছু নির্দিষ্ট কোর্স রিফান্ডের আওতায় থাকবে না।
                  </p>
                  <p>
                    এসব ক্ষেত্রে কোর্সের বিস্তারিত তথ্যের নিচে রিফান্ড না পাওয়ার
                    বিষয়টি{" "}
                    <span className="font-semibold">স্পষ্টভাবে লেখা থাকবে</span>
                    ।
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
