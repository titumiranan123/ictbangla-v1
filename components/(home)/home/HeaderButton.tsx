"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const HeaderButton = () => {
  const [isOpen, setIsopen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-4"
        onClick={() => setIsopen(!isOpen)}
      >
        <div className="w-[45px] h-[45px] rounded-full relative">
          <div
            className="absolute inset-0 rounded-full animate-spin duration-[2s] transition-all ease-in-out"
            style={{
              background:
                "conic-gradient(#0eb350 0% 60%, white 60% 65%, #0eb350 65% 70%, white 70% 75% ,#0eb350 75% 80%, white 85% 90% ,#0eb350 90% 95%, white 95% 100%)",
              WebkitMask:
                "radial-gradient(closest-side, transparent 90%, black 95%)",
              mask: "radial-gradient(closest-side, transparent 85%, black 96%)",
              animationDuration: "6s",
            }}
          ></div>
          <div className="w-full h-full flex items-center justify-center">
            <FaPlay className="text-red-500 scale-bounce" />
          </div>
        </div>

        <p className="text-[18px] font-[600]">আমাদের দেখুন</p>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-85 backdrop-blur-md z-50">
          <div className="relative w-full max-w-4xl px-4">
            {/* Loading overlay that stays centered */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative w-full pt-[56.25%] bg-[#d1fadf] animate-pulse rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-[#1cab55] animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Video Player Container - always rendered but hidden while loading */}
            <div
              className={`relative pt-[56.25%] rounded-lg overflow-hidden bg-black ${
                isLoading ? "invisible" : "visible"
              }`}
            >
              <ReactPlayer
                url={"https://youtu.be/eaTEM7HIjVY?si=cg6e1o0Q8YmhSnux"}
                controls
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                playing={!isLoading} // Only play when not loading
                onReady={() => {
                  setIsLoading(false);
                }}
                onError={() => {
                  setIsLoading(false);
                  // Handle error state if needed
                }}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </div>

            {/* Close Button - visible only when player is ready */}
            {!isLoading && (
              <button
                onClick={() => setIsopen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-[#f6fef9] transition-colors shadow-md z-30"
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#1D2939]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderButton;
