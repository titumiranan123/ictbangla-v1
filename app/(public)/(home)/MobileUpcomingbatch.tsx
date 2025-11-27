import React from "react";
import MobileCommonCourseslider from "./MobileCommonCourseslider";
import Button from "./Button";

const MobileUpcomingbatch = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`,
    { cache: "no-store" } // optional: fresh data always
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div
      style={{
        background: `radial-gradient(57.9% 110.29% at 50% 79.62%, #18B07F 0%, #054148 100%)`,
        margin: "0 mx-auto",
      }}
      className="sectionGap h-full  mt-10 py-10"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center items-center gap-4 "
        >
          <h2 className="text-[24px]  font-bold text-white text-center">
            <span className="text-[#3CB449]">আপকামিং </span> ব্যাচ সমূহ
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="relative mt-14 "
        >
          <MobileCommonCourseslider data={data} isWhite={true} />
        </div>

        <div
          className="flex justify-end items-end mt-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button
            hoverColor="#ce2f2f"
            title="সব দেখুন "
            className=" text-[18px] text-white font-bold"
            href={"/courses"}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileUpcomingbatch;
