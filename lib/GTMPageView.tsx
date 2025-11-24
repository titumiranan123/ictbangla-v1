"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { useSession } from "next-auth/react";
import { makeHash } from "@/app/(public)/(additional pages)/checkout/makeHash";
import { generateExternalId, genFbp } from "@/utils/datalayer/DataCookie";
import { getClientIP } from "@/utils/datalayer/IpReturn";

export default function GTMPageView() {
  const pathname = usePathname();
  const { data: logged, status }: any = useSession();
  useEffect(() => {
    const dataInfoPush = async () => {
      pushToDataLayer({
        event: "PageView",
        page_path: pathname,
        event_id: generateEventId(),
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
        fbc: null,
        click_id: null,
        external_id: logged?.user?._id ?? generateExternalId(),
        client_ip_address: await getClientIP(),
      });
    };
    dataInfoPush();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
