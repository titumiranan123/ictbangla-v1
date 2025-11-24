import Pagetitle from "@/components/(home)/shared/pagetitle";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "শর্তাবলি | আইসিটি বাংলা",
  description:
    "আইসিটি বাংলা প্ল্যাটফর্ম ব্যবহারের শর্তাবলি ও নীতিমালা সম্পর্কে বিস্তারিত জানুন",
};

const Terms = () => {
  return (
    <div>
      <Pagetitle
        pageName="নিয়ম ও শর্তাবলি"
        pagePragraph="স্বাগতম ICT Bangla.com-এ! আমাদের ই-লার্নিং প্ল্যাটফর্ম ব্যবহারের পূর্বে অনুগ্রহ করে এই শর্তাবলিগুলো মনোযোগ সহকারে পড়ুন। এই শর্তগুলো ICT Bangla.com এবং আপনার মাঝে একটি আইনি চুক্তি হিসেবে গণ্য হবে।"
        pageTitle="Terms and Condition (শর্তাবলি)"
      />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="shadow-sm rounded-lg overflow-hidden bg-white">
            {/* Terms Sections */}
            <div className="divide-y divide-gray-200">
              {/* Section 1 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ১. শর্ত গ্রহণ
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ICT Bangla.com ব্যবহার করার মাধ্যমে আপনি আমাদের শর্তাবলি মেনে
                  নিতে সম্মত হচ্ছেন। যদি আপনি এসব শর্ত মেনে নিতে না চান, তাহলে
                  অনুগ্রহ করে আমাদের ওয়েবসাইট ব্যবহার থেকে বিরত থাকুন।
                </p>
              </section>

              {/* Section 2 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ২. নিবন্ধন এবং অ্যাকাউন্ট
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <span className="font-medium">নিবন্ধন:</span> আমাদের
                    ওয়েবসাইটের কিছু নির্দিষ্ট ফিচার ব্যবহারের জন্য আপনাকে
                    রেজিস্ট্রেশন/নিবন্ধন করতে হতে পারে। আপনি অবশ্যই সঠিক এবং
                    সম্পূর্ণ তথ্য প্রদান করবেন।
                  </p>
                  <p>
                    <span className="font-medium">অ্যাকাউন্ট সুরক্ষা:</span>{" "}
                    আপনার অ্যাকাউন্টের নিরাপত্তার জন্য আপনি দায়ী থাকবেন। আপনার
                    পাসওয়ার্ড গোপন রাখবেন এবং অ্যাকাউন্টের অপ্রয়োজনীয়
                    ব্যবহারের জন্য আমাদের অবহিত করবেন।
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৩. পরিষেবার ব্যবহার
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <span className="font-medium">ব্যবহার লাইসেন্স:</span> আমরা
                    আপনাকে শুধু ব্যক্তিগত ও অ-বাণিজ্যিক ব্যবহারের জন্য এবং
                    শিক্ষামূলক উদ্দেশ্যে আমাদের কনটেন্ট ব্যবহারের একটি সীমিত
                    লাইসেন্স প্রদান করি। কনটেন্ট কপি, শেয়ার, পরিবর্তন বা বিক্রি
                    করা যাবে না। যদি তা করেন তবে আপনি চুক্তি ভঙ্গের জন্য দায়ী
                    হবেন।
                  </p>
                  <p>
                    <span className="font-medium">অবৈধ ব্যবহার নিষিদ্ধ:</span>{" "}
                    যেকোনো বেআইনি বা অনৈতিক কাজের জন্য আমাদের সেবা ব্যবহার করা
                    নিষিদ্ধ।
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৪. সামগ্রী
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <span className="font-medium">ব্যবহারকারীর সামগ্রী:</span>{" "}
                    আপনি আমাদের ওয়েবসাইটের নির্দিষ্ট ক্ষেত্রে কিংবা আমাদের
                    পরিচালিত গ্রুপে যেকোনো কিছু শেয়ার করতে পারবেন, যদি আপনি
                    নিশ্চিত করেন সে আপনি সেই কন্টেন্টের মালিক বা আপনার তা শেয়ার
                    করার বৈধ অনুমতি আছে। তবে তার কপিরাইট আপনার।
                  </p>
                  <p>
                    <span className="font-medium">মালিকানা:</span> আমাদের
                    ওয়েবসাইটে সমস্ত কিছু আমাদের বা আমাদের লাইসেন্সদাতাদের
                    মালিকানাধীন এবং কপিরাইট আইনের অধীনে সুরক্ষিত।
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৫. গোপনীয়তা
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখার জন্য প্রতিশ্রুতিবদ্ধ।
                  আমাদের গোপনীয়তা নীতি সম্পর্কে আরও জানতে, অনুগ্রহ করে আমাদের
                  গোপনীয়তা নীতি পড়ুন।
                </p>
              </section>

              {/* Section 6 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৬. তৃতীয় পক্ষের লিঙ্ক (থার্ড পার্টি লিংক)
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  আমাদের ওয়েবসাইটে অন্যকোনো ওয়েবসাইটের লিংক থাকতে পারে। আমরা
                  সেই ওয়েবসাইটগুলোর বিষয়বস্তু বা গোপনীয়তা নীতির জন্য দায়ী
                  নই। কোনো কিছু নিয়ে আপনার সন্দেহ হলে আমাদের দ্রুত জানাতে অনুরোধ
                  করা হলো।
                </p>
              </section>

              {/* Section 7 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৭. সীমাবদ্ধতা এবং দায়মুক্তি
                </h2>
                <div className="text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    <span className="font-medium">সীমাবদ্ধতা:</span> ওয়েবসাইটের
                    সব তথ্য সঠিক ও আপডেট রাখার চেষ্টা করা হয়, যদিও
                    ক্ষেত্রবিশেষে নির্ভুলতা, সম্পূর্ণতা, বা প্রাপ্যতার জন্য কোনও
                    ওয়ারেন্টি দেই না।
                  </p>
                  <p>
                    <span className="font-medium">দায়মুক্তি:</span> আমরা আমাদের
                    ওয়েবসাইট ব্যবহারের ফলে কোনও প্রত্যক্ষ, পরোক্ষ, ঘটনাক্রমে,
                    বা ফলস্বরূপ ক্ষতির জন্য দায়ী থাকব না।
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৮. শর্তাবলি পরিবর্তনের অধিকার
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ICT Bangla.com যে কোনো সময় এই শর্তাবলি আপডেট বা পরিবর্তন করার
                  অধিকার সংরক্ষণ করে। পরিবর্তনের পরও ওয়েবসাইট ব্যবহার করতে
                  থাকলে, পরিবর্তিত শর্তাবলি আপনার উপর প্রযোজ্য হবে।
                </p>
              </section>

              {/* Section 9 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ৯. অ্যাকাউন্ট স্থগিত বা বাতিল
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  ICT Bangla কর্তৃপক্ষের বিবেচনার ভিত্তিতে যেকোনো সময় আপনার
                  অ্যাকাউন্ট স্থগিত বা বাতিল করার অধিকার সংরক্ষণ করে।
                </p>
              </section>

              {/* Section 10 */}
              <section className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  ১০. প্রযোজ্য আইন
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  এই শর্তাবলি বাংলাদেশ সরকারের প্রযোজ্য আইন অনুসারে পরিচালিত
                  হবে।
                </p>
              </section>

              {/* Contact Section */}
              <section className="p-6 md:p-8 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  আমাদের সাথে যোগাযোগ
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  যদি আপনার এই শর্তাবলি সম্পর্কে কোনো প্রশ্ন থাকে, অনুগ্রহ করে
                  আমাদের সাথে যোগাযোগ করুন:
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
