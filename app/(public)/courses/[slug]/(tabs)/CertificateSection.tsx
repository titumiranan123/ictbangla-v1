import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const CertificateSection = () => {
  return (
    <div className=" w-full bg-[#F3F4F6] rounded-[24px] lg:px-4 px-2 py-3 lg:py-11 ">
      <h2 className=" font-[700] text-primary text-center text-[32px]">
        সার্টিফিকেট
      </h2>
      <p className=" font-[600] text-left  text-[20px] md:text-[22px] mt-10">
        কোর্স টি সফল ভাবে শেষ করলে আপনার জন্য আছে সার্টিফিকেট যা আপনি -
      </p>
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex items-center gap-4">
          {" "}
          <CircleCheck className="text-primary fill-bg-secondary" />
          <p className="text-[16px] font-[500] text-text-secondary">
            আপনার সিভিতে যোগ করতে পারবেন{" "}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <CircleCheck className="text-primary fill-bg-secondary" />
          <p className="text-[16px] font-[500] text-text-secondary">
            লিংকডিন প্রোফাইলে সরাসরি শেয়ার করুন{" "}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <CircleCheck className="text-primary fill-bg-secondary" />
          <p className="text-[16px] font-[500] text-text-secondary">
            আপনার সিভিতে যোগ করতে পারবেন{" "}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {" "}
          <CircleCheck className="text-primary fill-bg-secondary" />
          <p className="text-[16px] font-[500] text-text-secondary">
            লিংকডিন প্রোফাইলে সরাসরি শেয়ার করুন{" "}
          </p>
        </div>
      </div>
      <div className="mt-16">
        <Image
          src={"/assets/certificate.png"}
          alt="cetificate"
          width={834}
          height={559}
        />
      </div>
    </div>
  );
};

export default CertificateSection;
