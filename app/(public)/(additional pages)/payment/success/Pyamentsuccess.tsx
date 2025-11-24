/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { api_url } from "@/hooks/apiurl";
// import { purchase } from "@/utils/datalayer/AllEvents";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiBookOpen, BiCheckCircle } from "react-icons/bi";
import Image from "next/image";
import location from "@/public/assets/icon/land-layer-location.svg";
import call from "@/public/assets/icon/circle-phone.svg";
import timer from "@/public/assets/icon/clock-three.svg";
import { useSession } from "next-auth/react";
import { AiOutlineWarning } from "react-icons/ai";
import Link from "next/link";
import InvoiceButton from "@/app/(dashboard)/(student)/student-order/Invoicegenerator";
import { makeHash } from "../../checkout/makeHash";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";
export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("transId");
  const [invoice, setInvoice] = useState({});
  const { data: logged, status }: any = useSession();

  useEffect(() => {
    const fetchPaymentData = async () => {
      if (!orderId) return;
      try {
        const res = await api_url.get(`/v1/website/payment-data/${orderId}`);
        if (res?.data?.purchases?.length > 0) {
          setInvoice(res?.data);

          const userName = await makeHash(res?.data?.name || "");

          const userEmail = await makeHash(res?.data?.email || "");

          const userPhone = await makeHash(res?.data?.number);

          pushToDataLayer({
            event: "Purchase",
            currency: "BDT",
            content_ids: res?.data?.purchases?.map(
              (pt: any) => pt?.course?.basicInfo?.slug
            ),
            content_name: res?.data?.purchases?.map(
              (pt: any) => pt?.course?.basicInfo?.title
            ),
            content_type: "coursePurchase",
            event_id: generateEventId(),
            value: res?.data?.price,
            num_items: res?.data?.purchases?.length,
            name: userName,
            email: userEmail,
            phone: userPhone,
            transaction_id: orderId,

            fbp: genFbp(),
            fbc: genFbc("fbcid"),
            click_id: genFbc("fbcid"),
            external_id: logged?.user?._id ?? generateExternalId(),
            client_ip_address: await getClientIP(),
          });
        }
      } catch (error) {
        console.error("❌ Failed to fetch payment data:", error);
      }
    };

    fetchPaymentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);
  return (
    <div className="container mx-auto py-12 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-sm text-center">
        {/* Animated checkmark */}
        <div className="animate-bounce">
          <BiCheckCircle
            className="w-20 h-20 text-emerald-500 mx-auto mb-4"
            strokeWidth={1.5}
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          আপনার শেখার যাত্রায় স্বাগতম! এখন আপনি কোর্সের সম্পূর্ণ অ্যাক্সেস
          পেয়েছেন।
        </p>

        <div className="flex justify-center items-center">
          {status !== "authenticated" && (
            <p className="mb-8 flex text-center items-center gap-1 text-lg text-gray-600">
              <AiOutlineWarning className="text-2xl text-red-500" />
              অনুগ্রহ করে আপনার Gmail ইনবক্স চেক করুন। আমরা আপনার লগইন
              পাসওয়ার্ড সেখানে পাঠিয়েছি।
            </p>
          )}
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-xl mx-auto ">
          {status === "authenticated" ? (
            <Link
              href={"/student-mycourses"}
              className="border rounded-lg p-5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3">
                <BiBookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-medium text-gray-800">Go to My Courses</h3>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-left">
                Access your course dashboard with all learning materials
              </p>
            </Link>
          ) : (
            <div className="border rounded-lg p-5 flex justify-center items-center hover:bg-gray-50 cursor-pointer transition-colors">
              <Link
                href="/sign-in"
                className="py-2 h-[45px] w-32 px-4 flex justify-center items-center rounded-md text-base font-medium text-center text-white bg-[#29AE48] hover:bg-[#1f8a3a] transition-all shadow-md"
                aria-label="Sign in"
              >
                লগ ইন
              </Link>
            </div>
          )}

          <div className="border rounded-lg p-5 flex justify-center items-center hover:bg-gray-50 cursor-pointer transition-colors ">
            <InvoiceButton data={invoice} />
          </div>
        </div>

        {/* Supplemental Info */}
        <div className="pt-8 border-t  text-sm text-gray-500">
          <p>Receipt and course access details have been sent to your email.</p>
          <p className="mt-1">
            Need help?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact support
            </a>
          </p>
        </div>
        <div id="contact-information" className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location Card */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300">
              <div className="relative mb-6">
                <div className="relative  p-3  before:absolute before:top-[30%] before:left-[6%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20">
                  <Image
                    src={location}
                    alt="Location icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">প্রাতিষ্ঠানিক ঠিকানা</h2>
              <address className="not-italic text-gray-700">
                House 90/2, Gulshan Badda Link Rd
                <br />
                Dhaka 1212, Bangladesh
              </address>
            </div>

            {/* Contact Info Card */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300">
              <div className="relative mb-6">
                <div className=" before:absolute before:top-[30%] before:left-[8%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20 p-3 ">
                  <Image
                    src={call}
                    alt="Contact icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">যোগাযোগের বিবরণ </h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <a
                    href="tel:+8801973173371"
                    className="hover: text-primary  transition-colors"
                  >
                    +880 1973 173371
                  </a>
                </p>
                <p className="text-gray-700">
                  <a
                    href="mailto:ictbangla247@gmail.com"
                    className="hover: text-primary  transition-colors"
                  >
                    ictbangla247@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Work Hours Card */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300">
              <div className="relative mb-6">
                <div className="relative  p-3  before:absolute before:top-[30%] before:left-[10%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20 ">
                  <Image
                    src={timer}
                    alt="Clock icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">অফিস কার্যক্রম</h2>
              <p className="text-gray-700">
                সকাল ১০:০০ টা – সন্ধ্যা ৬:০০ টা
                <br />
                <span className="text-sm text-gray-500">
                  শনিবার – বৃহস্পতিবার
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
