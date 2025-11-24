"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";
import PluseIcon from "./PulseIcon/PluseIcon";

interface ReviewItem {
  id: string;
  video_link: string;
  thumbnail: string;
  category: string;
  title: string;
}

interface Props {
  data: ReviewItem[];
}

const SuccessClient: React.FC<Props> = ({ data }) => {
  const [select, setSelect] = useState("all");
  const [index, setIndex] = useState(3);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredData = data.filter(
    (item) =>
      select === "all" ||
      (select === "video" && item.category === "support") ||
      (select === "excel" && item.category === "management") ||
      (select === "call" && item.category === "call_center") ||
      (select === "capcut" && item.category === "capcut")
  );

  return (
    <div className="mt-8">
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex justify-center items-center flex-wrap gap-2 lg:gap-4 mb-8"
      >
        {[
          { id: "all", label: "সব" },
          { id: "capcut", label: "ভিডিও এডিটিং (CapCut)" },
          { id: "video", label: "ভিডিও এডিটিং" },
          { id: "excel", label: "এক্সেল" },
          { id: "call", label: "কল সেন্টার" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setSelect(tab.id);
              setIndex(3);
              setPlayingId(null);
            }}
            className={`py-2 px-4 lg:px-6 transition-all duration-300 text-sm lg:text-base font-medium rounded-lg ${
              select === tab.id
                ? "bg-[#3CB449] text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {filteredData.slice(0, index).map((rev, i) => (
          <div
            key={rev.id}
            data-aos="fade-up"
            data-aos-delay={100 + i * 100}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video w-full">
              <ReactPlayer
                url={rev.video_link}
                playing={playingId === rev.id}
                light={rev.thumbnail}
                playIcon={<PluseIcon />}
                width="100%"
                height="100%"
                controls
                onClickPreview={() => setPlayingId(rev.id)}
                onPlay={() => setPlayingId(rev.id)}
                onPause={() => setPlayingId(null)}
                onEnded={() => setPlayingId(null)}
              />
            </div>
          </div>
        ))}
      </div>

      {index < filteredData.length && (
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex justify-center items-center mt-10"
        >
          <button
            onClick={() => setIndex((prev) => prev + 3)}
            className="py-2 px-6 rounded-lg bg-gradient-to-r from-[#099E47] to-[#29AE48] text-white 
                      hover:shadow-md transition-all duration-300 font-medium relative overflow-hidden"
          >
            আরো দেখুন
          </button>
        </div>
      )}

      {filteredData.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          এই বিভাগে কোন ভিডিও পাওয়া যায়নি
        </div>
      )}
    </div>
  );
};

export default SuccessClient;
