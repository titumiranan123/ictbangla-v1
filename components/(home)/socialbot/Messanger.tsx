// components/FacebookChat.tsx
"use client";

import Image from "next/image";

export default function FacebookChat() {
  return (
    <div
      style={{ zIndex: 80 }}
      className="md:w-[50px] md:h-[50px] w-[40px] h-[40px]  fixed md:bottom-36 bottom-[128px] md:right-8 right-4   rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300 z-50"
    >
      <div className="relative z-50">
        <a
          href="http://m.me/ictbangla247"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/messenger.webp"}
            alt="chat"
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
          />
        </a>
        <span className="ripple absolute md:-top-[60px] -top-[50px]  md:-right-[38px] -right-[25px] w-2 h-2"></span>
      </div>
    </div>
  );
}
