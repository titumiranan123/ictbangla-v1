/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { makeHash } from "../../(additional pages)/checkout/makeHash";
import { useSession } from "next-auth/react";
import {
  generateExternalId,
  genFbc,
  genFbp,
} from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";

const CoursePageHolder: React.FC<{ data: any; fbclid: string }> = ({
  data,
  fbclid,
}) => {
  // console.log("data", data);
  const { data: logged, status }: any = useSession();

  const calculateFinalPrice = (pricing?: any) => {
    // If pricing is missing or explicitly marked free
    if (!pricing || pricing.isFree) return 0;
    // Destructure with defaults to prevent undefined errors
    const {
      main = 0,
      isDiscount = false,
      percentage = 0,
      discount = 0,
    } = pricing.price || {};

    // If no discount, return main price
    if (!isDiscount) return main;

    // Apply percentage discount if set, otherwise flat discount
    return percentage > 0 ? main * (1 - percentage / 100) : main - discount;
  };

  useEffect(() => {
    const finalPrice = calculateFinalPrice(data?.pricing);
    if (!data || !data?.basicInfo?.slug || !data?.basicInfo?.title) return;
    const DataLayer = async () => {
      pushToDataLayer({
        event: "ViewContent",
        currency: "BDT",
        event_id: generateEventId(),
        content_ids: [data?.basicInfo?.slug],
        content_name: data?.basicInfo?.title,
        content_type: "course",
        value: finalPrice,
        name:
          status === "authenticated"
            ? await makeHash(
                `${logged?.user.first_name} ${logged?.user.last_name}`
              )
            : null,
        email:
          status === "authenticated"
            ? await makeHash(logged?.user?.email)
            : null,
        phone:
          status === "authenticated"
            ? await makeHash(logged?.user?.phones?.[0])
            : null,
        fbp: genFbp(),
        fbc: genFbc(fbclid),
        click_id: genFbc(fbclid),
        external_id: logged?.user?._id ?? generateExternalId(),
        client_ip_address: await getClientIP(),
      });
    };
    DataLayer();
  }, [data]);

  return null;
};

export default CoursePageHolder;
