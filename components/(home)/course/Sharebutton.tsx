/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { X, Mail, MessageCircle, Link } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import IconImage from "@/app/(public)/(additional pages)/about-us/iconImages";

const Sharebutton = ({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = typeof document !== "undefined" ? document.title : "",
  description = "Check this out!",
  hashtags = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLinks: any = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}&hashtags=${hashtags.join(",")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(description + "\n\n" + url)}`,
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
    setIsOpen(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ---------------- PORTAL MODAL ---------------- */
  const renderModal = () => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          style={{ zIndex: 99990 }}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Center Modal */}
        <div
          className="
            fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 
            bg-white rounded-xl shadow-2xl p-6 
            w-[90%] max-w-[360px] 
            animate-fadeIn
          "
          style={{ zIndex: 99999 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Share this page
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => handleShare("facebook")}
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <FaFacebook size={20} />
              </div>
              <span className="font-medium text-gray-700">Facebook</span>
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="flex items-center gap-3 p-3 rounded-lg bg-sky-50 hover:bg-sky-100 transition"
            >
              <div className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center">
                <FaTwitter size={20} />
              </div>
              <span className="font-medium text-gray-700">Twitter</span>
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
            >
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center">
                <FaLinkedin size={20} />
              </div>
              <span className="font-medium text-gray-700">LinkedIn</span>
            </button>

            <button
              onClick={() => handleShare("whatsapp")}
              className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
            >
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <span className="font-medium text-gray-700">WhatsApp</span>
            </button>
          </div>

          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="mt-4 w-full flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <div className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center">
              <Link size={20} />
            </div>
            <span className="font-medium text-gray-700 flex-1 text-left">
              {copied ? "Link Copied!" : "Copy Link"}
            </span>
          </button>

          {/* Email */}
          <button
            onClick={() => handleShare("email")}
            className="mt-2 w-full flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center">
              <Mail size={20} />
            </div>
            <span className="font-medium text-gray-700">Email</span>
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(true)} className=" ">
        <IconImage fileName="share_icon.svg" />
      </button>

      {renderModal()}
    </>
  );
};

export default Sharebutton;
