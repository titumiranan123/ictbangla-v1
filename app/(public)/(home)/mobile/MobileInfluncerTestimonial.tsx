"use client";

import user1 from "@/public/assets/influncer/afr.jpg";
import user11 from "@/public/assets/influncer/Asaduzzaman-Joy.jpg";
import user2 from "@/public/assets/influncer/dristy.jpg";
import user10 from "@/public/assets/influncer/eshan.jpg";
import user7 from "@/public/assets/influncer/Farhan.jpg";
import user13 from "@/public/assets/influncer/Manik.jpg";
import user8 from "@/public/assets/influncer/maruf.jpg";
import user12 from "@/public/assets/influncer/Md-Asadul-Islam.jpg";
import user3 from "@/public/assets/influncer/prasha.jpg";
import user4 from "@/public/assets/influncer/salahuddin.jpg";
import user5 from "@/public/assets/influncer/st-uniqe.jpg";
import user9 from "@/public/assets/influncer/wahidur.jpg";
import user6 from "@/public/assets/influncer/zibrann.jpg";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RenderStars } from "../RenderStars";
// import { RenderStars } from "../shared/RenderStars";

const avatars = [
  { src: user1, alt: "Client 1" },
  { src: user2, alt: "Client 2" },
  { src: user3, alt: "Client 3" },
  { src: user4, alt: "Client 4" },
  { src: user5, alt: "Client 5" },
  { src: user6, alt: "Client 6" },
  { src: user7, alt: "Client 4" },
  { src: user8, alt: "Client 5" },
  { src: user9, alt: "Client 6" },
  { src: user10, alt: "Client 6" },
  { src: user11, alt: "Client 4" },
  { src: user12, alt: "Client 5" },
  { src: user13, alt: "Client 6" },
];
const testimonials = [
  {
    name: "Shamim Parvez Himel",
    role: "টেক কনটেন্ট ক্রিয়েটর, AFR Technology",
    rating: 5,
    text: "প্রযুক্তি নির্ভর দক্ষতা গড়ে তোলার ক্ষেত্রে ICTBangla একটি দুর্দান্ত উদ্যোগ। এই ধরনের প্ল্যাটফর্ম আমাদের দেশের তরুণদের জন্য আশার আলো।",
  },
  {
    name: "Dristy Anam",
    role: "লাইফস্টাইল ও সঙ্গীত শিল্পী, Dristy Anam",
    rating: 4,
    text: "আমার দেখা অন্যতম প্র্যাকটিক্যাল ও ইউজার ফ্রেন্ডলি কোর্স ICTBangla-র। আমি বিশ্বাস করি, এখান থেকে শেখা মানেই বাস্তব জ্ঞান অর্জন।",
  },
  {
    name: "Parsha Mehazabin Purni",
    role: "সঙ্গীত শিল্পী ও কনটেন্ট ক্রিয়েটর, Parsha",
    rating: 5,
    text: "নারীদের স্কিল ডেভেলপমেন্টের ক্ষেত্রেও ICTBangla একটি শক্তিশালী ভূমিকা রাখছে। আমি চাই আরও মেয়েরা এদের সঙ্গে যুক্ত হোক।",
  },
  {
    name: "Salahuddin Sumon",
    role: "সাংবাদিক ও ট্রাভেল ভ্লগার, Salahuddin Sumon ",
    rating: 4,
    text: "দেশের ডিজিটাল উন্নয়নের জন্য এমন প্ল্যাটফর্ম জরুরি। ICTBangla নিঃসন্দেহে তরুণদের জন্য একটি ভবিষ্যৎ গড়ার জায়গা।",
  },
  {
    name: "Sayed Min E Sajib",
    role: "শর্ট ফিল্ম ও টেক কনটেন্ট ক্রিয়েটর, St Uniqe",
    rating: 5,
    text: "যেখানে শিক্ষা ও কনটেন্ট একসাথে চলে, ICTBangla ঠিক সেই জায়গা। আমি চাই এদের কাজ আরও ছড়িয়ে পড়ুক দেশের প্রতিটি কোণে।",
  },
  {
    name: "Rifat Zibraan",
    role: "মোটিভেশনাল স্পিকার ও রেডিও জোকি, RJ Zibraan",
    rating: 5,
    text: "যারা স্বপ্ন দেখে কিছু করার, ICTBangla তাঁদের জন্য একটি দিকনির্দেশক। সঠিক শেখা আর সঠিক গাইডলাইনের মাধ্যমে ICTBangla তরুণদের বদলে দিচ্ছে।",
  },
  {
    name: "Farhan Sadik",
    role: "কনটেন্ট ক্রিয়েটর, Lilipur Farhan",
    rating: 5,
    text: "শিক্ষা যদি হয় উপস্থাপনভিত্তিক ও বাস্তবমুখী, তাহলে ICTBangla তারই একটি জীবন্ত উদাহরণ। আমি এই উদ্যোগকে অন্তর থেকে সাধুবাদ জানাই।",
  },
  {
    name: "Abdulla-Hil Maruf",
    role: "নাবিক ও কনটেন্ট ক্রিয়েটর, Sail with MARUF",
    rating: 5,
    text: "জ্ঞান অর্জনের যাত্রায় ICTBangla এক নতুন দিগন্ত খুলে দিয়েছে। আমি চাই তারা আরও দূর এগিয়ে যাক।",
  },
  {
    name: "Wahidur Rahman",
    role: "টেক রিভিউয়ার, Tech to the Point",
    rating: 5,
    text: "জ্ঞান অর্জনের যাত্রায় ICTBangla এক নতুন দিগন্ত খুলে দিয়েছে। আমি চাই তারা আরও দূর এগিয়ে যাক।",
  },
  {
    name: "Rifat Esan",
    role: "ফান এডুকেশন ক্রিয়েটর, Bitik Baz",
    rating: 5,
    text: "যে প্রতিষ্ঠান তরুণদের মেধাকে কাজে লাগাতে শেখায়, ICTBangla ঠিক সেটাই করছে। আমি বিশ্বাস করি, এদের হাত ধরেই অনেক স্বপ্ন বাস্তব হবে।",
  },
  {
    name: "Asaduzzaman Joy",
    role: "মোটিভেশনাল ও এডুকেশন ক্রিয়েটর, Asaduzzaman Joy",
    rating: 5,
    text: "আমি ICTBangla-র কাজ দেখে মুগ্ধ। এখানকার কোর্স এবং প্রশিক্ষণ পদ্ধতি সত্যিই সময়ের চাহিদা পূরণ করছে।",
  },

  {
    name: "Md Asadul Islam",
    role: "টেক কনটেন্ট ক্রিয়েটর, Android Lecture BD",
    rating: 5,
    text: "যারা মোবাইল ব্যবহার করেই নিজেদের স্কিল ডেভেলপ করতে চায়, তাদের জন্য ICTBangla অসাধারণ একটি জায়গা। এই প্ল্যাটফর্মকে শুভকামনা।",
  },
  {
    name: "Shaidur Rahman Manik",
    role: "Content creator - Brand collaborator - Voice of Manik",
    rating: 5,
    text: "প্রযুক্তিনির্ভর যুগে ICTBangla তরুণ প্রজন্মকে যুগোপযোগী করে তুলছে। আমি চাই, আরও অনেকেই এখান থেকে উপকৃত হোক।",
  },
];
const MobileInfluncerTestimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <section className="container  overflow-hidden  lg:scale-100 scale-90 ">
      <div className="">
        <div className=" text-center flex justify-center items-center gap-2 flex-col">
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="font-bold text-2xl text-black-color"
          >
            প্রফেশনালদের চোখে{" "}
            <span className="text-[#3CB449]">
              {" "}
              <br /> ICTBangla
            </span>
          </h1>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="relative flex items-center justify-center mb-4 max-w-[900px] mx-auto "
        >
          {/* <button
            aria-label="Previous"
            className="swiper-button-left absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10"
          >
            <svg
              className="md:w-[44px] w-[30px]"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 16.9832H2.02708" stroke="black" />
              <path
                d="M8.96808 24.7926C7.02916 20.5253 5.49308 18.7339 1.66599 16.9949C5.57849 15.0692 7.09716 13.2712 8.96808 9.17383"
                stroke="black"
              />
            </svg>
          </button> */}

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            centeredSlides
            loop
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              nextEl: ".swiper-button-right",
              prevEl: ".swiper-button-left",
            }}
            breakpoints={{
              0: { slidesPerView: 3, spaceBetween: 10 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            className="avatar"
          >
            <style>
              {`
  .avatar {
    display: flex;
    align-items: center;
    padding: 20px 0;
    height:240px;
  }

  .avatar .swiper-wrapper {
    align-items: center;
  }

  .avatar .swiper-slide {
    opacity: 0.2;
    transition: all 0.3s ease;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: auto !important;
  }

  .avatar .swiper-slide-active {
    opacity: 1 !important;
    transform: scale(1.6) !important;
    z-index: 10;
  }

  .avatar .swiper-slide img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 24px;
  }

  @media (min-width: 1024px) {
    .avatar .swiper-slide img {
      max-width: 220px;
    }
  }
              `}
            </style>
            {avatars.map((avatar, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <Image
                  src={avatar?.src ?? ""}
                  alt={avatar.alt}
                  width={200}
                  height={200}
                  className="rounded-[24px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button
            aria-label="Next"
            className="swiper-button-right absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10"
          >
            <svg
              className="md:w-[44px] w-[30px]"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16.9832H32.9729" stroke="black" />
              <path
                d="M26.0319 24.7926C27.9708 20.5253 29.5069 18.7339 33.334 16.9949C29.4215 15.0692 27.9028 13.2712 26.0319 9.17383"
                stroke="black"
              />
            </svg>
          </button> */}
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            allowTouchMove={false}
            className="mb-8 -mt-6"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="lg:p-6 p-3 lg:mx-4 mx-2 flex flex-col justify-center items-center gap-2 text-center ">
                  <h3 className="text-[24px]  font-[700] text-[#313131]">
                    {testimonial.name}
                  </h3>
                  <h3 className=" text-base font-medium text-[#26A243]">
                    {testimonial.role}
                  </h3>
                  {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
                  <div className="flex justify-center mt-2 gap-1">
                    {RenderStars(testimonial.rating)}
                  </div>
                  <h2 className=" lg:w-[800px] w-full mx-auto text-base font-medium text-[#8A8A8A]  mt-2 text-center">
                    &quot;{testimonial.text}&quot;
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MobileInfluncerTestimonial;
