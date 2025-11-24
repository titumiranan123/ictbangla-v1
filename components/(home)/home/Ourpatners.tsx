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

const logos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

const Ourpatners = () => {
  return (
    <div className="sections container py-10">
      <h1
        data-aos="fade-up"
        data-aos-delay="300"
        className="capitalize text-center  mb-8"
      >
        আমাদের <span className="text-[#3CB449]">পার্টনার</span>
      </h1>
<div data-aos="fade-up" data-aos-delay="400">

      <Marquee  speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, index) => (
          <div key={index}  className="mx-6 lg:mx-[65px]">
            <Image
              src={logo}
              alt={`partner-${index}`}
              layout="responsive"
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
</div>
    </div>
  );
};

export default Ourpatners;
