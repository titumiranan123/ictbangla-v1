/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Image from "next/image";
import React from "react";

const MobileCertificateSection: React.FC = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get/home-data`
  );

  const data = result?.data?.dynamicSections;

  const certificateSection = data?.find(
    (section: any) => section?.section_type === "CERTIFICATE_SECTION"
  );

  if (!certificateSection || !certificateSection.is_active) {
    return null;
  }

  return (
    <section className=" text-center px-5">
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-[24px] font-bold text-primary"
      >
        {certificateSection.title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: certificateSection.sub_title }}
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-4  text-base font-medium text-[#8A8A8A]"
      ></p>

      <div className="flex justify-between items-center gap-10 lg:flex-row flex-col mt-6">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white border p-2.5 border-[#F2F2F2] rounded-xl lg:w-[640px] lg:h-[464px] w-full aspect-video "
        >
          {certificateSection?.image && (
            <Image
              className="rounded-xl w-full h-full object-cover"
              src={certificateSection?.image?.trim() ?? ""}
              alt="Certificate preview"
              width={640}
              height={464}
              priority
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificateSection.content?.map((content: any, index: number) => (
            <div
              key={content._id}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100 + 100}
              className="w-full  p-4 bg-[#F3F4F6]  rounded-lg"
            >
              {content?.icon && (
                <div className="w-full mb-4 max-w-[58px] mx-auto">
                  <Image
                    src={content?.icon?.trim() ?? ""}
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <h2 className="text-xl font-bold text-black-color">
                {content.title}
              </h2>
              <p className="text-[#8A8A8A] text-sm font-medium mt-1">
                {content.sub_title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileCertificateSection;
