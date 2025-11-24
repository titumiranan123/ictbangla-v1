import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mediacard = () => {
  return (
    <div className=" w-full h-full border border-primary rounded-[16px] px-8 py-6 space-y-3 ">
      <div className="flex justify-between items-end">
        <h2 className="font-[700] md:text-[24px] text-[16px] lg:w-2/3 w-1/2 text-text-neutral">
          THE <br /> BUSINESS STANDARD
        </h2>
        <p className="text-[12px] font-[600] text-text-neutral">
          25th Nov 2025
        </p>
      </div>
      <Image src={"/assets/media-1.png"} alt="media" width={393} height={244} />
      <div>
        <h3 className="text-[18px] font-[600] text-text-neutral mb-4">
          ICT Bangla launches idea <br />
          innovation 5.0
        </h3>
        <Link
          href={"/"}
          className=" text-primary text-[12px] font-[600]  underline"
        >
          Read Full Article
        </Link>
      </div>
    </div>
  );
};

export default Mediacard;
