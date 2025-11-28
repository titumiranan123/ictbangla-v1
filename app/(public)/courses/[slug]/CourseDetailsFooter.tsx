"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { makeHash } from "../../(additional pages)/checkout/makeHash";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";
import { setCheckOutCart } from "@/redux/cartSlice";
import Image from "next/image";

const CourseDetailsFooter = ({
  data,
  discountPrice,
  fbclid,
}: {
  data: any;
  discountPrice: number;
  fbclid: string;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pricing, media, basicInfo } = data;
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
      content_ids: [basicInfo?.slug],
      content_name: [basicInfo?.title],
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
      fbc: genFbc(fbclid ?? ""),
      click_id: genFbc(fbclid ?? ""),
      external_id: logged?.user?._id ?? generateExternalId(),
      client_ip_address: await getClientIP(),
    });
    dispatch(
      setCheckOutCart([
        {
          id: data?._id,
          name: basicInfo?.title,
          slug: basicInfo?.slug,
          price: pricing?.price?.main,
          discount: pricing?.price?.discount,
          isDiscount: pricing?.price?.isDiscount,
          percentage: pricing?.price?.percentage,
          thumbnail: media?.thumbnail,
        },
      ])
    );

    router.push("/checkout");
  };
  return (
    <>
      {data?.basicInfo?.is_show_bottom_banner && (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white lg:h-[90px] h-full max-h-[120px] animate-fadeInUp z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
          <div className="max-w-[1535px] mx-auto py-2 md:py-2 lg:px-[120px] px-4 flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 gap-2">
            {/* Left Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
              <p className="text-md md:text-lg lg:text-2xl lg:leading-[32px] font-[600] text-black  rounded-lg animate-pulse whitespace-nowrap">
                কল করুন : +880 13212-04263
              </p>

              <div className="lg:flex hidden items-center md:-mt-2 flex-wrap justify-center md:justify-start">
                {!data?.pricing.isFree ? (
                  <div className="flex gap-4 items-baseline">
                    <span className="text-md md:text-lg lg:text-2xl lg:leading-[32px] font-[600] text-primary transition-transform hover:scale-105 cursor-pointer">
                      Tk. {discountPrice.toFixed(2)}
                    </span>
                    {data?.pricing.price.isDiscount && (
                      <span className="text-xs md:text-sm text-black line-through">
                        Tk. {data?.pricing.price.main.toFixed(2)}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-lg md:text-xl lg:text-2xl font-medium text-[#1cab55] animate-bounce">
                    Free
                  </span>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-auto flex justify-center items-center lg:gap-10 lg:flex-row flex-col gap-2">
              <p className="text-md md:text-lg lg:text-xl font-bold text-black  rounded-lg animate-pulse whitespace-nowrap">
                সিট সংখ্যা শেষ হওয়ার আগে
              </p>
              <button
                onClick={() => handleCheckout()}
                className="flex justify-center items-center gap-2 w-full md:w-auto px-6 py-1 border-2  text-white bg-primary transition-all rounded-lg shadow hover:shadow-lg hover:-translate-y-0.5 animate-wiggle text-sm md:text-base font-[600] tracking-wider h-[50px] md:h-[50px] lg:h-[50px] "
              >
                এনরোল করুন
                <Image
                  src={`https://i.postimg.cc/sDMYh2fz/Click.png`}
                  width={24}
                  height={24}
                  alt="click"
                  className="animate-pulse transition-all  ease-in-out"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetailsFooter;
