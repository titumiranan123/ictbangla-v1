import axios from "axios";
import IconImage from "../(additional pages)/about-us/iconImages";
import CommonCourseslider from "./CommonCourseslider";

const RecordedCourse = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`
  );

  return (
    <div className="container mt-[100px]">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-end justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <h2
            className="text-[48px] text-[#313131] font-[900]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-[#29AE48]">রেকর্ডেড</span> কোর্স সমূহ
          </h2>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <button
            className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer"
            type="button"
          >
            সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
          </button>
        </div>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-[60px]"
      >
        <CommonCourseslider data={result?.data ?? []} />
      </div>
    </div>
  );
};

export default RecordedCourse;
