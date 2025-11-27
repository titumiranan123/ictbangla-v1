/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Image from "next/image";
import CounterNumber from "../../(additional pages)/about-us/CounterNumber";

const HomeAboutstate = async () => {
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
    <div className="bg-[#F3F4F6] h-full pb-[62px] mt-10  sectionGap px-5">
      <Image
        data-aos="fade-up"
        data-aos-delay="300"
        src={stateSection?.image?.trim() ?? ""}
        alt="login"
        className="lg:rounded-l-xl lg:rounded-none rounded-t-xl object-cover rounded-2xl"
        width={686}
        height={652}
      />
      <div className="mt-6">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-black-color font-bold text-xl lg:text-center text-left w-full"
        >
          {stateSection.title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-text-secondary text-sm mt-3 lg:text-center text-left w-full"
        >
          {stateSection.sub_title}
        </p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 w-full mt-8">
          {stateSection?.content?.map((stat: any, i: number) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={500 + i * 100}
              className="flex flex-col relative ps-4 after:w-[9px] after:h-[100px] after:bg-primary after:absolute after:left-0 after:rounded-full after:top-0 "
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
  );
};

export default HomeAboutstate;
