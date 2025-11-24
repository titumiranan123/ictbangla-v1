// components/WhatsAppChatLink.tsx
"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChatLink() {
  const phoneNumber = "8801321204263"; // Remove '+' for wa.me URL format
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div
      style={{ zIndex: 80 }}
      className="fixed bottom-14 md:right-8 right-4 z-50"
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="lg:w-[45px] lg:h-[45px] w-[35px] h-[35px] bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300 shadow-lg relative"
      >
        <FaWhatsapp className="text-white lg:text-[32px] text-[25px]" />
        {/* Optional: Ripple effect placeholder */}
      </a>
      <span
        style={{ zIndex: 99 }}
        className="absolute md:-top-[58px] -top-[45px] -right-[26px] bg-green-300 rounded-full ripple "
      ></span>
    </div>
  );
}
