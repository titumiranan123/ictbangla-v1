/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Sharebutton from "@/components/(home)/course/Sharebutton";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import Image from "next/image";
import React from "react";
import { makeHash } from "../../(additional pages)/checkout/makeHash";
import { useDispatch } from "react-redux";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";
import { addToCart } from "@/redux/cartSlice";
import { useSession } from "next-auth/react";

const ShareButtons = ({ data }: { data: any }) => {
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
      content_name: data?.basicInfo.title,
      content_type: "course",
      currency: "BDT",
      event_id: generateEventId(),
      value: finalPrice,
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
    <div className="flex gap-2 ">
      <button onClick={() => handleAddToCart()}>
        <Image
          src={"/assets/icon/cart.png"}
          alt="cart"
          priority
          width={24}
          height={24}
        />
      </button>
      <Sharebutton
        url={`https://ictbangla.com/courses/${data?.basicInfo?.slug}`}
      />
    </div>
  );
};

export default ShareButtons;
