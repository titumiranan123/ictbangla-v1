/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconImage from "../../(additional pages)/about-us/iconImages";
import TypewriterEffect from "./Typeword";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { makeHash } from "../../(additional pages)/checkout/makeHash";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";
import { addToCart } from "@/redux/cartSlice";
import Sharebutton from "@/components/(home)/course/Sharebutton";
import { RenderStars } from "../RenderStars";

const Coursecard = ({
  data,
  isPreMium,
}: {
  data: any;
  isPreMium?: boolean;
}) => {
  const { data: logged, status }: any = useSession();
  const calculateBasePrice = () => {
    if (data?.pricing.isFree) return 0;
    const originalPrice = data?.pricing.price.main;
    if (data?.pricing.price.percentage) {
      return data?.pricing.price.isDiscount
        ? originalPrice * (1 - data?.pricing.price.percentage / 100)
        : originalPrice;
    } else {
      return data?.pricing.price.isDiscount
        ? originalPrice - data?.pricing.price.discount
        : originalPrice;
    }
  };
  const finalPrice = calculateBasePrice();
  const dispatch = useDispatch();
  const handleAddToCart = async () => {
    pushToDataLayer({
      event: "AddToCart",
      content_ids: data?.basicInfo?.slug,
      content_name: data.basicInfo.title,
      content_type: "course",
      currency: "BDT",
      event_id: generateEventId(),
      value: calculateBasePrice(),
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
      addToCart({
        id: data._id,
        name: data.basicInfo.title,
        slug: data.basicInfo.slug,
        price: !data.pricing.isFree ? data.pricing.price.main : 0,
        discount: data.pricing.price.discount ?? 0,
        percentage: data.pricing.price.percentage,
        isDiscount: data.pricing.price.isDiscount,
        thumbnail: data.media.thumbnail,
      })
    );
  };
  return (
    <div className="cardbg group  w-[319px] !h-[464px]  mx-auto  transition-all   duration-300 ease-in-out hover:shadow-lg  rounded-[8px] p-[1px] ">
      <style>
        {`
        .cardbg {
            background: linear-gradient(161.66deg, rgba(89, 222, 124, 0.75) 1.12%, #EAF7ED 98.7%);
        }
        .cardbg:hover {
            background: linear-gradient(161.66deg, rgba(89, 222, 124, 0.75) 100%, #EAF7ED 98.7%);
        }
        .card-border{
            background: linear-gradient(90deg, #D2D8D3 0%, rgba(210, 216, 211, 0) 100%);
        }
      `}
      </style>
      <div className=" w-[317px]  h-[462px]  rounded-[8px] p-4 overflow-hidden bg-white ">
        <Link
          href={`/courses/${data?.basicInfo?.slug}`}
          className="relative  !w-full h-[191px] overflow-hidden rounded-[8px] block"
        >
          {/* Thumbnail image */}
          <Image
            src={data?.media?.thumbnail}
            alt={data?.basicInfo?.title}
            className="!w-full !h-full object-cover"
            width={285}
            height={191}
          />
        </Link>

        <div className="mt-6">
          {!isPreMium && (
            <div className="flex items-center  gap-1.5">
              <div className="flex items-center justify-center gap-1">
                <IconImage
                  fileName="lesson-icon.svg"
                  className="!w-[14px] !h-[14px]"
                />
                <p className="text-xs font-medium english-text flex items-center text-[#383e4e] leading-[18px]">
                  {data?.total_lessons} Lessons
                </p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <IconImage
                  fileName="hour.png"
                  className="!w-[14px] !h-[14px]"
                />
                <p className="text-xs font-medium  text-[#383e4e] montserrat flex items-center english-text leading-[18px]">
                  {data?.total_duration} hours
                </p>
              </div>
            </div>
          )}

          {/* title */}
          <Link
            href={`/courses/${data?.basicInfo?.slug}`}
            className="text-[16px] text-[#383e4e] leading-[22px] tracking-[0.32px]  font-[600] hover:scale-[96.1%] duration-200 transition-all    english-text inline-block mt-3"
          >
            {data?.basicInfo?.title}
          </Link>

          <div className="mt-3 mb-4 space-y-2">
            <hr className="h-px w-full bg-gradient-to-r from-[#D2D8D3] to-[#D2D8D3]/0 border-0" />

            <div className="flex justify-between w-full items-center">
              <Link
                href={`/courses/${data?.basicInfo?.slug}`}
                className=" font-semibold leading-[18px] text-xs  english-text "
              >
                <TypewriterEffect
                  words={["Register now !", "Limited seat available !"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delay={800}
                  loop={true}
                />
              </Link>
              <div className="flex gap-2">
                <button onClick={() => handleAddToCart()}>
                  <IconImage fileName="shoping_bag.svg" />
                </button>
                <Sharebutton
                  url={`https://ictbangla.com/courses/${data?.basicInfo?.slug}`}
                />
              </div>
            </div>
            <hr className="h-px w-full bg-gradient-to-r from-[#D2D8D3] to-[#D2D8D3]/0 border-0" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {RenderStars(5)}
                <p className="text-xs font-semibold english-text text-[#383e4e] leading-[100%]">
                  ( {data?.ratting?.total_ratting ?? 0} )
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IconImage
                  fileName="peoples_icon.svg"
                  className="!h-[14px] w-[14px]"
                />{" "}
                <p className="text-xs font-medium text-[#383e4e] english-text leading-[100%]">
                  {data?.total_students ?? 0} Students
                </p>
              </div>
            </div>
            <hr className="h-px w-full bg-gradient-to-r from-[#B0FFC5] to-[#D2D8D3]/0 border-0" />
          </div>
          {/* footer section */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex justify-center items-center gap-2">
              <p className="text-[24px] leading-[32px] text-[#383e4e] english-text font-semibold ">
                ৳ {finalPrice}
              </p>
              <p className="text-sm text-[#8A8A8A] english-text font-medium leading-[20px] mt-1">
                <span> ৳ {data?.pricing?.price?.main}</span>
              </p>
            </div>
            <Link
              href={`/courses/${data?.basicInfo?.slug}`}
              className="button-primary w-fit !leading-[23px] px-[22.5px] "
            >
              বিস্তারিত
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
