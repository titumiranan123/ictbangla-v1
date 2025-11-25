import React from "react";
import type { Metadata } from "next";
import MediaGallery from "./MediaGallery";

export const metadata: Metadata = {
  title: "আমাদের গ্যালারি | ছবি ও স্মৃতি",
  description:
    "আমাদের কার্যক্রম, ক্লাস, ইভেন্ট এবং শিক্ষার্থীদের কাজের সংগ্রহ এক নজরে দেখুন। গ্যালারিতে রয়েছে বাস্তব মুহূর্ত ও অনুপ্রেরণামূলক ভিজ্যুয়াল স্টোরি।",
  openGraph: {
    title: "আমাদের গ্যালারি | ছবি ও স্মৃতি",
    description:
      "আমাদের কার্যক্রম, ক্লাস, ইভেন্ট এবং শিক্ষার্থীদের কাজের সংগ্রহ এক নজরে দেখুন।",
    url: "https://ictbangla.com/our-gallery",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Gallery = () => {
  return (
    <div>
      <MediaGallery />
    </div>
  );
};

export default Gallery;
