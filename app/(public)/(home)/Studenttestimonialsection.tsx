import React from "react";
import CardCarousel from "./Strudentcarosul";
import Link from "next/link";

const Studenttestimonialsection: React.FC = () => {
  return (
    <div className="container  lg:mt-20  flex lg:flex-row flex-col justify-between items-center sections gap-20 overflow-hidden">
      <div className="lg:w-2/6 space-y-5 ">
        <h1 data-aos="fade-up" data-aos-delay="200">
          আমাদের ছাত্র ছাত্রীদের মতামত
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          কোর্স থেকে নতুন দক্ষতা অর্জন করে শিক্ষার্থীরা তাদের ক্যারিয়ার ও
          ব্যক্তিগত উন্নয়নে যে সাফল্য পেয়েছে তার ইতিবাচক অভিজ্ঞতা এবং মতামত গুলো
          তুলে ধরা হলো।
        </p>
        <Link
          data-aos="fade-up"
          data-aos-delay="400"
          href={"/our-review"}
          className="bg-gradient-to-r from-[#099E47] to-[#29AE48] py-2 px-3 block text-center w-[110px] rounded-lg text-white before:absolute before:right-0 before:-top-2 before:h-[80px]  before:w-6 before:translate-x-20 before:rotate-[20deg]  before:bg-white before:opacity-60 before:blur-[3px] before:duration-700 hover:before:-translate-x-56 relative before:content-['']"
        >
          সব দেখুন{" "}
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-delay="500" className="lg:w-4/6 h-auto ">
        <CardCarousel />
      </div>
    </div>
  );
};

export default Studenttestimonialsection;
