import Image from "next/image";
import React from "react";

const SkillTravelSection = () => {
  return (
    <div className="container sectionGap">
      <div className=" px-5 py-10 skill-section-container ">
        <h2 className="text-[48px] font-bold  text-[#29AE48] text-center mb-48">
          দক্ষতার যাত্রা, ICTBangla-তে কেন ?
        </h2>
        <div className="flex gap-4 justify-between">
          <TextSection
            title="দেশসেরা ইন্সট্রাক্টরদের গাইডেন্স"
            description="বাস্তব অভিজ্ঞতা সম্পন্ন প্রশিক্ষকদের সরাসরি গাইডলাইন ও
হাতে-কলমে দক্ষতার নিশ্চয়তা"
          />
          <TextSection
            title="কর্পোরেট বা ফ্রিল্যান্সিং ডিমান্ডিং কোর্স"
            description="জব মার্কেট বা ফ্রিল্যান্সিং প্ল্যাটফর্মের চাহিদা অনুযায়ী
প্রজেক্ট-ভিত্তিক স্কিল ডেভেলপমেন্ট"
          />
          <TextSection
            title="প্রফেশনাল নেটওয়ার্কিং"
            description="লার্নিং ও ক্যারিয়ার গ্রোথে সহায়ক কমিউনিটি যেখানে
স্টুডেন্ট টু প্রফেশনাল সব এক জায়গায়"
          />
        </div>

        <div className="mt-[100px] bg-[#EAF7ED] p-10 rounded-3xl">
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            <Image
              src="/assets/demo-images/demo-card-image.jpg"
              height={261}
              width={411}
              alt="ictbangla.com"
              className="h-[261px] w-full lg:w-[411px] rounded-2xl "
            />

            <div className="flex flex-col justify-between ">
              <div>
                <h3 className="text-[40px] font-bold text-[#313131]">
                  Development Event
                </h3>
                <p className="text-lg leading-6 tracking--[0.36px] font-bold text-[#8A8A8A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
              <div className="flex items-end justify-between">
                <div className="border-[#29AE48] bg-[#fff] border rounded-[8px] py-3 px-16 flex items-center justify-between w-[60%]">
                  <div className="text-center">
                    <h4 className="text-[32px] font-bold text-[#29AE48] ">
                      26
                    </h4>
                    <p className="text-sm font-bold text-[#8A8A8A] ">Days</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[32px] font-bold text-[#29AE48] ">
                      14
                    </h4>
                    <p className="text-sm font-bold text-[#8A8A8A] ">Hours</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[32px] font-bold text-[#29AE48] ">
                      04
                    </h4>
                    <p className="text-sm font-bold text-[#8A8A8A] ">Minutes</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[32px] font-bold text-[#29AE48] ">
                      31
                    </h4>
                    <p className="text-sm font-bold text-[#8A8A8A] ">Seconds</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-fit">
                  <button className="button-primary w-fit px-4" type="button">
                    বিস্তারিত
                  </button>
                  <button
                    className="button-primary w-fit px-4 bg-[#fff] text-[#29AE48] border border-[#29AE48]"
                    type="button"
                  >
                    আরো দেখুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TextSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <h4 className="text-xl font-bold text-[#313131] mb-4">{title}</h4>
      <p className="text-base font-bold text-[#8A8A8A]">{description}</p>
    </div>
  );
};

export default SkillTravelSection;
