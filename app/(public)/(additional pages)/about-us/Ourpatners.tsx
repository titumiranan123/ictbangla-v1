import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import p1 from "@/public/assets/patner/bdjobs.png";
import p2 from "@/public/assets/patner/Foodi.png";
import p3 from "@/public/assets/patner/furnito.png";
import p4 from "@/public/assets/patner/Graho.png";
import p5 from "@/public/assets/patner/Moto Fix.png";
import p6 from "@/public/assets/patner/Rider_s Option.png";
import p7 from "@/public/assets/patner/reddata.png";
import p8 from "@/public/assets/patner/Shawapnadip.png";
import p9 from "@/public/assets/patner/Shomvob.png";
import p10 from "@/public/assets/patner/Skilljob.png";
import p11 from "@/public/assets/patner/atb jobs.png";
import p12 from "@/public/assets/patner/Ui barn.png";

const logos = [
  { src: p1, width: 100, height: 50 },
  { src: p2, width: 100, height: 20 },
  { src: p3, width: 100, height: 50 },
  { src: p4, width: 100, height: 50 },
  { src: p5, width: 100, height: 20 },
  { src: p6, width: 100, height: 50 },
  { src: p7, width: 100, height: 50 },
  { src: p8, width: 100, height: 50 },
  { src: p9, width: 100, height: 50 },
  { src: p10, width: 100, height: 50 },
  { src: p11, width: 100, height: 20 },
  { src: p12, width: 100, height: 50 },
];

const Ourpatners = () => {
  return (
    <div className=" container mt-[100px]   py-5">
      <h1
        data-aos="fade-up"
        data-aos-delay="300"
        className="capitalize text-center text-primary text-[24px] md:text-[40px] font-[600]  mb-8"
      >
        আমাদের <span className="">পার্টনার</span>
      </h1>
      <div data-aos="fade-up" data-aos-delay="400">
        <Marquee
          speed={50}
          gradient={true}
          gradientColor="#fff"
          pauseOnHover={true}
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-6 lg:mx-[35px]">
              <Image
                src={logo.src}
                alt={`partner-${index}`}
                width={logo.width}
                height={logo.height}
                className={` w-[${logo.width}] h-[${logo.height}]`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Ourpatners;
