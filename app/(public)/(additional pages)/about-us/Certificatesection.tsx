/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Image from "next/image";
import React from "react";

const CertificateSection: React.FC = async () => {
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
    <section className="container lg:mt-32 h-full lg:h-[690px] ">
      <div className="flex flex-col justify-center items-center text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:text-[40px] text-2xl font-bold text-primary"
        >
          {certificateSection.title}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: certificateSection.sub_title }}
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-2 max-w-2xl md:text-[20px] text-[16px] text-text-neutral"
        ></p>
      </div>

      <div className="flex justify-between items-center gap-10 lg:flex-row flex-col mt-14">
        {/* Certificate Image */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white border border-[#F2F2F2] shadow-md p-4 rounded-xl lg:w-[640px] lg:h-[464px] w-full aspect-video"
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificateSection.content?.map((content: any, index: number) => (
            <div
              key={content._id}
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100 + 100} // Stagger animations
              className="w-full max-w-[325px] p-4 hover:bg-gray-50 transition-colors rounded-lg"
            >
              {content?.icon && (
                <div className="w-[44px] h-[30px] mb-10">
                  <Image
                    src={content?.icon?.trim() ?? ""}
                    alt=""
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <h2 className="text-lg text-primary font-bold">
                {content?.title}
              </h2>
              <p className="text-text-neutral mt-1">{content?.sub_title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
