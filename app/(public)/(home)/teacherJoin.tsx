import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeacherJoin = () => {
  return (
    <div className="mt-[100px]  container ">
      <div className=" px-10 pt-10 h-[425px] bg-[#BDE6C6] rounded-3xl overflow-hidden">
        <div className="flex items-center relative ">
          <div className="text-left max-w-[620px] w-full">
            <h2 className="text-[32px] leading-[40px] lg:text-[48px] lg:leading-[60px]  font-bold text-[#313131] whitespace-nowrap">
              প্রশিক্ষক হিসেবে যোগ দিন
            </h2>
            <p className="text-lg leading-[23px] font-medium text-[#313131] mt-2">
              নিজের ক্যারিয়ারের অনন্য এক দিগন্ত উন্মোচন করুন
            </p>
            <Link
              href={"/join-as-a-instructor"}
              className="button-primary block text-lg w-fit px-4 mt-6"
              type="button"
            >
              জয়েন করুন
            </Link>
          </div>
          <Image
            className="w-full mt-3  max-w-[920px] h-[382px] z-30 pe-10"
            src="/assets/demo-images/teachers_images.png"
            height={382}
            width={900}
            alt="ictbangla"
          />
          <div className="bg-primary blur-[92px] rounded-full w-[640px] h-[377px] absolute right-8 top-0 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default TeacherJoin;
