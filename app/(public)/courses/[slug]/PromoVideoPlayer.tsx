import Image from "next/image";
import React, { useState } from "react";

const PromoVideoPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="flex justify-start items-center w-full bg-white/25 backdrop-blur-[39.69px] rounded-[24.38px] max-w-[324px] max-h-[32px] border border-[#29AE48] -translate-y-14 mx-auto gap-5 px-5 cursor-pointer">
        <Image
          src={"/assets/icon/playicon.png"}
          alt="paly"
          width={18}
          height={18}
        />
        <span className="text-[18px] font-[600] text-white">
          Watch Promo Video
        </span>
      </button>
      {isOpen}
    </>
  );
};

export default PromoVideoPlayer;
