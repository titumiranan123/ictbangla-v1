import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

const MobileHerosection = async () => {
  return (
    <>
      <div className="pb-[38px] px-4 pt-4 bg-[#EAF7ED]">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-fit flex items-center gap-2 py-2 px-4 rounded-full border border-[#C9C9C9] mx-auto"
        >
          <span className="h-3 w-3  bg-red-600 rounded-full flex justify-center items-center live"></span>{" "}
          <p>
            <span className="font-semibold text-text-primary">স্কিল শিখুন</span>
            <span className="text-text-error ms-1 font-semibold ">লাইভে</span>
          </p>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className=" mt-4 text-[36px] font-bold text-center leading-[45px] text-black-color mb-4"
        >
          স্মার্ট লার্নিং এখন আপনার হাতের মুঠোয়
        </h1>

        <p
          className="text-[18px] font-[500] text-text-neutral text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          বর্তমান সময়ে ক্যারিয়ার ডেভেলপ করতে প্রয়োজন সময়োপযোগী দক্ষতা। পযোগী
          দক্ষতা এই প্ল্যাটফ এই প্ল্যাটফ
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="w-full mt-[25px] mb-4 flex items-center"
        >
          <button className="px-16 py-5 w-fit rounded-lg text-white bg-primary bg-gradient-to-r from-[#29AE48] to-[#368B4A] shadow-[0_6px_0_#19682B] hover:translate-y-[2px] hover:shadow-[0_4px_0_#19682B] transition-all duration-200 text-lg font-bold mx-auto cursor-pointer ">
            চলুন শুরু করি
          </button>
        </div>

        <div className="flex justify-center gap-6 w-full mt-16 ">
          <div className="text-[#C0C9EA] text-end  h-full ">
            <div className="flex items-center  text-black-color  justify-end gap-1">
              <CountingNumber
                number={100}
                inView={true}
                className=" font-bold text-end text-[#313131] text-[32px] leading-[40px]"
                transition={{ stiffness: 100, damping: 30 }}
              />
              <p className="font-bold  text-[32px] text-[#313131] leading-[40px] ">
                K
              </p>
            </div>
            <p className="text-lg font-[500] mt-4 text-black-color leading-[23px] ">
              মোট ফলোয়ার
            </p>
          </div>
          <div className="w-1.5 rounded-full  bg-primary h-[68px] mt-1.5"></div>
          <div className="text-[#C0C9EA] text-end  h-full ">
            <div className="flex items-center gap-1  text-black-color  justify-end ">
              <CountingNumber
                number={200}
                inView={true}
                className=" font-bold text-end text-[#313131] text-[32px] leading-[40px]"
                transition={{ stiffness: 100, damping: 30 }}
              />
              <p className="font-bold text-[#313131]  text-[32px] leading-[40px] ">
                +
              </p>
            </div>
            <p className="text-lg mt-4 font-[500] text-black-color leading-[23px] ">
              মোট রিভিউ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHerosection;
