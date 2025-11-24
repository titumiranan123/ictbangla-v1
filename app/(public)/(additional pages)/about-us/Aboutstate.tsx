/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import Image from "next/image";
import CounterNumber from "./CounterNumber";

const Aboutstate = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/home-data`
  );

  const data = result?.data?.dynamicSections;
  const stateSection = data?.find(
    (section: any) => section?.section_type === "STATE_SECTION"
  );
  if (!stateSection || !stateSection.is_active) {
    return null;
  }
  return (
    <div className="bg-[#F3F4F6] container mx-auto px-0 rounded-2xl flex justify-center items-center 2xl:h-[741px] xl:h-[517px] mt-[100px]">
      <div className="flex flex-col lg:flex-row items-center gap-6 px-5">
        {/* Image wrapper */}
        <div className="w-full 2xl:w-[784px] lg:w-[700px] h-[534px]">
          <Image
            data-aos="fade-up"
            data-aos-delay="300"
            src={stateSection?.image?.trim() ?? ""}
            alt="login"
            className="rounded-xl w-full h-auto object-cover border border-primary"
            width={784}
            height={534}
          />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-[539px]">
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
            className="capitalize md:text-[32px] lg:text-[40px] leading-[50px] text-[20px] font-bold text-black-color tracking-[1px] text-left max-w-[450px]"
          >
            {stateSection?.title}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-secondary text-base lg:text-lg mt-4 text-left w-[90%]"
          >
            {stateSection?.sub_title}
          </p>

          <div className="grid grid-cols-2 gap-x-20 gap-y-8 w-full mt-8 lg:mt-5">
            {stateSection?.content?.map((stat: any, i: number) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={500 + i * 100}
                className="flex flex-col relative ps-4 after:w-[5px] after:h-full after:bg-primary after:absolute after:left-0 after:rounded-full after:top-0"
              >
                <CounterNumber
                  number={Number(stat.sub_title)}
                  title={stat.title}
                  icon={stat.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutstate;
