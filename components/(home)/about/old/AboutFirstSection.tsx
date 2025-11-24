import React from "react";
import { RiFlashlightLine } from "react-icons/ri";
import about1 from "@/public/assets/about_images/about-2.jpg";
import about2 from "@/public/assets/about_images/about-9.jpg";
import about3 from "@/public/assets/about_images/about3.jpg";
import about7 from "@/public/assets/about_images/about-10.jpg";
import about5 from "@/public/assets/about_images/about5.jpg";
import about6 from "@/public/assets/about_images/about6.jpg";
import about11 from "@/public/assets/about_images/about1.jpg";
import Image from "next/image";

const AboutFirstSection = () => {
  return (
    <div className="container lg:mt-[120px] mt-[80px]">
      {/* Text Section */}
      <div className="flex justify-between lg:flex-row flex-col items-start ">
        <button
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex items-center justify-center lg:justify-start gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm md:text-[16px]"
        >
          <RiFlashlightLine /> <span>Best Quality</span>
        </button>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-14 ">
        {/* First Column */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col gap-4"
        >
          <Image
            className="rounded-[16px] w-full h-auto md:h-[260px] object-cover"
            src={about2}
            alt="about1"
            priority
            decoding="async"
          />
          <div className="grid grid-cols-2 gap-4">
            <Image
              className="w-full h-[200px] md:h-[247px] rounded-[16px] object-cover"
              src={about1}
              alt="about1"
              priority
              decoding="async"
            />
            <Image
              className="w-full h-[200px] md:h-[247px] rounded-[16px] object-cover"
              src={about3}
              alt="about1"
              priority
              decoding="async"
            />
          </div>
        </div>

        {/* Second Column */}
        <Image
          data-aos="fade-up"
          data-aos-delay="700"
          className="rounded-[16px] w-full h-[300px] md:h-[531px] object-cover"
          src={about7}
          alt="about1"
          priority
          decoding="async"
        />

        {/* Third Column */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Image
              className="w-full h-[200px] md:h-[247px] rounded-[16px] object-cover"
              src={about5}
              alt="about1"
              priority
              decoding="async"
            />
            <Image
              className="w-full h-[200px] md:h-[247px] rounded-[16px] object-cover"
              src={about6}
              alt="about1"
              priority
              decoding="async"
            />
          </div>
          <div className="rounded-[16px] w-full h-[200px] md:h-[260px] ">
            <Image
              className="w-full h-[200px] md:h-[260px] rounded-[16px] object-cover"
              src={about11}
              alt="about1"
              priority
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirstSection;
