/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";

import playicon from "@/public/assets/icon/play-circle.svg";
import infinite from "@/public/assets/icon/infinity.svg";
import certificate from "@/public/assets/icon/certificate.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCheckOutCart } from "@/redux/cartSlice";
import PluseIcon from "../home/PulseIcon/PluseIcon";
import CoursedetailsLeftInputbox from "./CoursedetailsLeftInputbox";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { useSession } from "next-auth/react";
import { makeHash } from "@/app/(public)/(additional pages)/checkout/makeHash";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";

interface PriceDetails {
  main: number;
  isDiscount: boolean;
  discount: number;
  percentage: number;
}

interface CourseDetailsProps {
  courseName: string;
  courseId: string;
  slug: string;
  totalLesson: number;
  pricing: {
    isFree: boolean;
    price: PriceDetails;
  };
  media: {
    thumbnail: string;
    videoId: any;
  };
  features: {
    videoHours: number;
    articles: number;
    resources: number;
  };
}

const CourseDetails: React.FC<CourseDetailsProps> = ({
  courseName,
  courseId,
  slug,
  pricing,
  media,
  totalLesson,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const { data: logged, status }: any = useSession();
  const calculateFinalPrice = () => {
    if (!pricing || pricing?.isFree) return 0;
    const { main, isDiscount, percentage, discount } = pricing?.price;
    if (!isDiscount) return main;
    return percentage > 0 ? main * (1 - percentage / 100) : main - discount;
  };

  const finalPrice = calculateFinalPrice();

  const handleCheckout = async () => {
    pushToDataLayer({
      event: "InitiateCheckout",
      currency: "BDT",
      content_ids: [slug],
      content_name: [courseName],
      content_type: "course",
      value: finalPrice,
      num_items: 1,
      event_id: generateEventId(),
      name:
        status === "authenticated"
          ? await makeHash(
              `${logged?.user.first_name} ${logged?.user.last_name}`
            )
          : null,
      email:
        status === "authenticated" ? await makeHash(logged?.user?.email) : null,
      phone:
        status === "authenticated"
          ? await makeHash(logged?.user?.phones?.[0])
          : null,
      fbp: genFbp(),
      fbc: genFbc("fbcid"),
      click_id: genFbc("fbcid"),
      external_id: logged?.user?._id ?? generateExternalId(),
      client_ip_address: await getClientIP(),
    });
    dispatch(
      setCheckOutCart([
        {
          id: courseId,
          name: courseName,
          slug: slug,
          price: pricing?.price?.main,
          discount: pricing?.price?.discount,
          isDiscount: pricing?.price?.isDiscount,
          percentage: pricing?.price?.percentage,
          thumbnail: media?.thumbnail,
        },
      ])
    );
    setTimeout(() => {
      router.push("/checkout");
    }, 50); // 50ms gives fbq time to send the event
  };

  // const handleAddToCart = () => {
  //   dispatch(
  //     addToCart({
  //       id: courseId,
  //       name: courseName,
  //       slug: slug,
  //       price: pricing?.isFree ? 0 : pricing?.price?.main,
  //       discount: pricing?.price?.discount,
  //       percentage: pricing?.price?.percentage,
  //       isDiscount: pricing?.price?.isDiscount,
  //       thumbnail: media?.thumbnail,
  //     })
  //   );
  // };
  const player = useMemo(
    () => (
      <ReactPlayer
        url={media?.videoId?.url}
        light={
          <Image
            src={media?.thumbnail}
            alt="media"
            className="max-w-[800px] max-h-[450px]"
            width={350}
            height={200}
          />
        }
        playIcon={
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white bg-opacity-80 rounded-full p-4 hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#1cab55]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </button>
          </div>
        }
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    ),
    [media?.thumbnail, media?.videoId?.url]
  );
  return (
    <div className="rounded-[12px] sticky top-10 lg:w-[400px] w-full shadow-md md:p-5 flex flex-col bg-white border border-[#d1fadf]">
      {/* Thumbnail */}
      <div className="relative cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative w-full h-full overflow-hidden rounded-lg ">
          <Image
            src={media?.thumbnail?.trim()}
            alt={courseName}
            width={360}
            height={252}
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-500 rounded-lg border border-slate-50 "
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <PluseIcon />
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          style={{ zIndex: 999999 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-85"
        >
          <div
            className="relative max-w-[800px] max-h-[450px] w-full h-full rounded-lg overflow-hidden border px-4 "
            onClick={(e) => e.stopPropagation()}
          >
            {player}
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="flex gap-2 items-baseline">
            {!pricing?.isFree ? (
              <>
                <span className="text-[26px] font-medium text-[#1cab55]">
                  Tk. {finalPrice.toFixed(2)}
                </span>
                {pricing?.price?.isDiscount && (
                  <span className="text-[15px] text-[#1D2939] line-through">
                    Tk. {pricing?.price?.main.toFixed(2)}
                  </span>
                )}
              </>
            ) : (
              <span className="text-[26px] font-medium text-[#1cab55]">
                Free
              </span>
            )}
          </h1>
          {pricing?.price.isDiscount && (
            <span className="bg-[#1cab55] text-white px-2 py-1 rounded text-sm">
              {pricing?.price.percentage > 0
                ? `${pricing?.price.percentage}% OFF`
                : ` ${pricing?.price.discount} Tk. OFF`}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-3">
          <button
            onClick={handleCheckout}
            className="flex justify-center items-center gap-2 p-4 w-full bg-[#1cab55] text-white rounded hover:bg-[#16d43b] transition-colors"
          >
            এখনি ভর্তি হোন
          </button>
          <CoursedetailsLeftInputbox courseId={courseId} />
          {/* <button
            onClick={handleAddToCart}
            className="flex justify-center items-center gap-2 p-4 w-full bg-[#1cab55] text-white rounded hover:bg-[#16d43b] transition-colors"
          >
            পরে ভর্তি হবো
          </button> */}
        </div>

        {/* Features */}
        <h2 className="text-[18px] mt-5 font-[500] text-[#1D2939] mb-4">
          This course includes:
        </h2>

        <div className="space-y-3 mb-6">
          <FeatureItem
            icon={playicon}
            label="Total Lesson"
            value={totalLesson}
          />
          <FeatureItem icon={infinite} label="Expire Period" value="Lifetime" />
          <FeatureItem icon={certificate} label="Certificate" value="Yes" />
        </div>

        {/* Social Share */}
        <div className="mt-6 flex gap-4 justify-center">
          <FaFacebook className="text-[#1cab55] hover:text-blue-700 text-xl cursor-pointer" />
          <FaInstagram className="text-[#1cab55] hover:text-pink-500 text-xl cursor-pointer" />
          <FaLinkedin className="text-[#1cab55] hover:text-blue-800 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between gap-2 items-center">
    <div className="flex gap-2">
      <Image src={icon} alt={label} width={16} height={16} />
      <p className="text-[16px] font-[400] text-[#1D2939]">{label}</p>
    </div>
    <p className="text-[16px] font-[400] text-[#1D2939]">{value}</p>
  </div>
);

export default CourseDetails;
