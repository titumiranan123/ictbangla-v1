import axios from "axios";
import Button from "../shared/Button";
import CommonCourseslider from "./CommonCourseslider";

const RecordedCourse = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`
  );
  const data = result?.data;

  return (
    <div className="container section">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <h1 data-aos="fade-up" data-aos-delay="300">
            আমাদের <span className="text-[#3CB449]">রেকর্ডেড</span> কোর্সসমূহ
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button
            hoverColor="#ce2f2f"
            title="সব দেখুন "
            className=" text-[18px]"
            href={"/courses"}
          />
        </div>
      </div>

      {/* Swiper Section */}
      <div data-aos="fade-up" data-aos-delay="600" className="relative mt-14">
        <CommonCourseslider data={data} />
      </div>
    </div>
  );
};

export default RecordedCourse;
