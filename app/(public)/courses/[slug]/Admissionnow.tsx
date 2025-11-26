"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { useSession } from "next-auth/react";
import React from "react";
import { useDispatch } from "react-redux";
import { makeHash } from "../../(additional pages)/checkout/makeHash";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";
import { setCheckOutCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const Admissionnow = ({ data }: { data: any }) => {
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
      fbc: genFbc("fbcid"),
      click_id: genFbc("fbcid"),
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
    <button
      onClick={() => handleCheckout()}
      className="bg-primary mt-10 rounded-xl text-white text-[18px] font-[700] w-full py-2"
    >
      এখনই ভর্তি হন
    </button>
  );
};

export default Admissionnow;
