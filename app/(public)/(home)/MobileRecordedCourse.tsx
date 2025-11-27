import axios from "axios";
import MobileCommonCourseslider from "./MobileCommonCourseslider";
import Button from "./Button";

const MobileRecordedCourse = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`
  );

  return (
    <div className="container mt-10 ">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex w-full flex-col gap-1">
          <h2
            className="text-[24px] text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-[#3CB449]">রেকর্ডেড</span> কোর্সসমূহ
          </h2>
        </div>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-[66px]"
      >
        <MobileCommonCourseslider data={result?.data} />
      </div>
      <div
        className="flex justify-end items-end  mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Button
          hoverColor="#ce2f2f"
          title="সব দেখুন "
          className=" text-[18px] text-primary font-bold"
          href={"/courses"}
        />
      </div>
    </div>
  );
};

export default MobileRecordedCourse;
