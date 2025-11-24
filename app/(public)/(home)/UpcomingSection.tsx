import React from "react";
import Button from "./Button";
import CommonCourseslider from "./CommonCourseslider";

const UpcomingCourse = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return (
    <div
      style={{
        backgroundImage: "url('/assets/home/home_green_section_bg.svg')",
        margin: "0 mx-auto",
        height: "795px",
      }}
      className="mt-[100px] bg-no-repeat bg-cover bg-center"
    >
      <div className="container py-[49px] ">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex lg:justify-between items-end justify-start md:items-center md:flex-row flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl lg:text-[48px] font-bold text-white">
              <span className="text-[#3CB449]"> আপকামিং </span> ব্যাচ সমূহ
            </h2>
          </div>
          <div>
            <Button
              hoverColor="#ce2f2f"
              title="সব দেখুন "
              className="text-[18px] text-white"
              href={"/courses"}
            />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="relative mt-[89px]"
        >
          <CommonCourseslider data={result ?? []} isWhite={true} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingCourse;
