import React from "react";
import Button from "../shared/Button";
import CommonCourseslider from "./CommonCourseslider";

const UpcomingCourse = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`,
    { cache: "no-store" } // optional: fresh data always
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div className="container section">
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <h1>
            আপকামিং <span className="text-[#3CB449]">ব্যাচ</span> সমূহ
          </h1>
        </div>
        <div>
          <Button
            hoverColor="#ce2f2f"
            title="সব দেখুন "
            className="text-[18px]"
            href={"/courses"}
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="relative mt-14">
        <CommonCourseslider data={data} />
      </div>
    </div>
  );
};

export default UpcomingCourse;
