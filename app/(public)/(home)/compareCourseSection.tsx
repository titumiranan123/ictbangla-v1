import Image from "next/image";
import React from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

const CompareCourseSection = () => {
  return (
    <div className="container">
      <h3 className="text-[48px] font-bold text-black-color text-center">
        Featured Comparisons
      </h3>
      <p className="text-xl tracking-[0.4px] font-medium text-[#707070] text-center ">
        Compare & Choose Your Desired Course !
      </p>
      <div className="flex justify-end mb-10">
        <button
          className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer"
          type="button"
        >
          সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
        </button>
      </div>

      <div className="flex items-stretch w-full gap-6">
        <div className=" bg-white rounded-2xl border border-[#DFDFDF] p-6 h-full">
          <div className="flex items-stretch gap-6">
            <div className="h-full w-full ">
              <Image
                className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
                src="/assets/bundel.png"
                width={318}
                height={230}
                alt="ictbangla"
              />

              <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
                লাইভ ব্যাচ <IconImage fileName="live_icon.svg" />
              </h4>
              <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px]">
                Fiverr Freelancing Success: From Zero to Hero
              </p>

              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
            </div>
            <div className="h-full w-full ">
              <Image
                className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
                src="/assets/bundel.png"
                width={318}
                height={230}
                alt="ictbangla"
              />

              <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
                লাইভ ব্যাচ
                {/* <IconImage fileName="live_icon.svg" /> */}
              </h4>
              <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px]">
                Fiverr Freelancing Success: From Zero to Hero
              </p>

              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
            </div>
          </div>

          <button className="button-primary mt-6" type="button">
            কম্পেয়ার করুন
          </button>
        </div>
        <div className=" bg-white rounded-2xl border border-[#DFDFDF] p-6 h-full">
          <div className="flex items-stretch gap-6">
            <div className="h-full w-full ">
              <Image
                className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
                src="/assets/bundel.png"
                width={318}
                height={230}
                alt="ictbangla"
              />

              <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
                লাইভ ব্যাচ
                {/* <IconImage fileName="live_icon.svg" /> */}
              </h4>
              <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px]">
                Fiverr Freelancing Success: From Zero to Hero
              </p>

              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
            </div>
            <div className="h-full w-full ">
              <Image
                className="w-full max-w-[318px] h-full max-h-[230px] rounded-2xl mb-8"
                src="/assets/bundel.png"
                width={318}
                height={230}
                alt="ictbangla"
              />

              <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
                লাইভ ব্যাচ <IconImage fileName="live_icon.svg" />
              </h4>
              <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px]">
                Fiverr Freelancing Success: From Zero to Hero
              </p>

              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
            </div>
          </div>

          <button className="button-primary mt-6" type="button">
            কম্পেয়ার করুন
          </button>
        </div>
      </div>

      <div className="mt-[100px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h3 className="text-[48px] font-bold text-black-color">
              ICT Bangla{" "}
            </h3>
            <h3 className="text-[48px] font-bold text-primary px-6  border border-primary rounded-2xl">
              e-store{" "}
            </h3>
          </div>
          <button
            className="text-primary text-lg font-bold flex items-center gap-2 cursor-pointer"
            type="button"
          >
            সব দেখুন <IconImage fileName="arrow_outward_primary.svg" />
          </button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full h-full gap-6">
          <div className="w-full max-w-[437px] bg-white p-4 rounded-2xl">
            <Image
              className="w-full  h-full max-h-[230px] rounded-2xl mb-4"
              src="/assets/bundel.png"
              width={405}
              height={166}
              alt="ictbangla"
            />

            <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
              Capcut Premier pro
            </h4>
            <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px] ">
              Fiverr Freelancing Success: From Zero to Hero (LIVE-COURSE)
            </p>

            <div className="mt-8 flex items-center justify-between">
              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-primary">
                  <IconImage
                    fileName="shopint_card_icon.svg"
                    className="!w-5 !h-5"
                  />
                </button>
                <button className="button-primary !w-fit px-8" type="button">
                  কিনুন
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[437px] bg-white p-4 rounded-2xl">
            <Image
              className="w-full  h-full max-h-[230px] rounded-2xl mb-4"
              src="/assets/bundel.png"
              width={405}
              height={166}
              alt="ictbangla"
            />

            <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
              Capcut Premier pro
            </h4>
            <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px] ">
              Fiverr Freelancing Success: From Zero to Hero (LIVE-COURSE)
            </p>

            <div className="mt-8 flex items-center justify-between">
              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-primary">
                  <IconImage
                    fileName="shopint_card_icon.svg"
                    className="!w-5 !h-5"
                  />
                </button>
                <button className="button-primary !w-fit px-8" type="button">
                  কিনুন
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[437px] bg-white p-4 rounded-2xl">
            <Image
              className="w-full  h-full max-h-[230px] rounded-2xl mb-4"
              src="/assets/bundel.png"
              width={405}
              height={166}
              alt="ictbangla"
            />

            <h4 className="text-2xl font-bold text-black-color flex items-center gap-4">
              Capcut Premier pro
            </h4>
            <p className="text-base font-semibold text-[#707070] mt-4 leading-[23px] tracking-[0.36px] ">
              Fiverr Freelancing Success: From Zero to Hero (LIVE-COURSE)
            </p>

            <div className="mt-8 flex items-center justify-between">
              <p className="mt-5 text-2xl font-bold text-primary">
                ৳ 2499{" "}
                <span className="text-sm font-semibold text-[#8A8A8A] ">
                  ৳ 1,999
                </span>
              </p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg border border-primary">
                  <IconImage
                    fileName="shopint_card_icon.svg"
                    className="!w-5 !h-5"
                  />
                </button>
                <button className="button-primary !w-fit px-8" type="button">
                  কিনুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareCourseSection;
