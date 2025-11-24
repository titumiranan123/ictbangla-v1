"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { useRouter } from "next/navigation";
import InvoiceDownloadButton from "./Invoicegenerator";
import { api_url } from "@/hooks/apiurl";

interface Course {
  _id: string;
  user: string;
  name: string;
  email: string;
  phone: string;
  course: {
    _id: string;
    basicInfo: {
      title: string;
      slug: string;
    };
    media: {
      thumbnail: string;
    };
    sections: any[];
  };
  price: number;
  payment_uid: string;
  paymentStatus: "PAID" | "UNPAID";
  courseStatus: string;
  payment_method: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const CourseEnrollmentCards: React.FC<{ enrollments: Course[] }> = ({
  enrollments,
}) => {
  const router = useRouter();

  const sortedEnrollments = [...enrollments]?.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="gap-5 p-5 grid grid-cols-1 md:grid-cols-2 font-sans">
      {sortedEnrollments?.map((enrollment: any) => (
        <div
          key={enrollment?._id}
          className="md:w-[500px] w-full flex lg:flex-row flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          {/* Course Image */}
          <div className="md:w-36 md:h-36 bg-gray-100 flex-shrink-0">
            <Image
              src={enrollment?.course?.thumbnail ?? ""}
              alt={enrollment?.course?.title ?? ""}
              className="w-full h-full object-cover"
              width={120}
              height={120}
              priority
            />
          </div>

          {/* Course Details */}
          <div className="p-4 flex flex-col flex-1">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {enrollment?.course?.title ?? ""}
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              Price: Tk. {enrollment?.price.toFixed(2) ?? ""}
            </p>

            <div className="mt-auto flex justify-between items-center">
              {/* Payment Status Badge */}
              <span
                className={`px-2 py-1 rounded text-xs font-medium ${
                  enrollment?.paymentStatus === "PAID"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {enrollment?.paymentStatus ?? ""}
              </span>
              <InvoiceDownloadButton data={enrollment} />
              {/* Course Status Badge (only shown if paid) */}
              {enrollment?.paymentStatus === "PAID" && (
                <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                  {enrollment?.courseStatus ?? ""}
                </span>
              )}

              {/* Payment Button (only shown if unpaid) */}
              {enrollment?.paymentStatus === "UNPAID" && (
                <button
                  onClick={async () => {
                    try {
                      const res = await api_url.post(
                        "/v1/website/pay-unPayed-purchase",
                        {
                          paymentHistory_id: enrollment?.paymentId,
                          payment_method: "SSL_PAY",
                        }
                      );
                      if (res.status === 200 || res.status === 201) {
                        router.push(res?.data?.payment_info?.payment_url);
                      }
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  className="px-4 py-2 rounded font-medium text-white bg-red-500 hover:bg-red-600 transition-colors"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseEnrollmentCards;
