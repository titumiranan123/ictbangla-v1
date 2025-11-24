"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import user1 from "@/public/assets/about_images/user-1.png";
import user2 from "@/public/assets/about_images/user-2.jpg";
import user3 from "@/public/assets/about_images/user-3.png";
import user4 from "@/public/assets/about_images/user-4.png";
import user5 from "@/public/assets/about_images/user-5.png";
import user6 from "@/public/assets/about_images/user-6.png";
import { Swiper as SwiperType } from "swiper";
import { RenderStars } from "../../shared/RenderStars";

const avatars = [
  { src: user1, alt: "Client 1" },
  { src: user2, alt: "Client 2" },
  { src: user3, alt: "Client 3" },
  { src: user4, alt: "Client 4" },
  { src: user5, alt: "Client 5" },
  { src: user6, alt: "Client 6" },
];
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company A",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
  {
    name: "Jane Smith",
    role: "CTO, Company B",
    rating: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
  {
    name: "Mike Johnson",
    role: "Manager, Company C",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
  {
    name: "Emily Davis",
    role: "Designer, Company D",
    rating: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
  {
    name: "Chris Brown",
    role: "Developer, Company E",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
  {
    name: "Chsris Browws",
    role: "Developer, Company E",
    rating: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, doloremque? Ipsum, eaque!",
  },
];
const HomeTestimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <section className="container bg-secondary py-16 overflow-hidden section lg:scale-100 scale-90 ">
      <div className="">
        <div className=" text-center flex justify-center items-center gap-2 flex-col">
          <h1 data-aos="fade-up" data-aos-delay="400" className="">
            প্রফেশনালদের <span className="text-[#3CB449]">চোখে</span> ICTBangla
          </h1>
          <p data-aos="fade-up" data-aos-delay="500" className="">
            Hear from our satisfied clients around the world.
          </p>
        </div>

        <div className="relative flex items-center justify-center mb-4 max-w-[900px] mx-auto mt-16">
          <button
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
          </button>

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
            {avatars.map((avatar, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <Image
                  src={avatar?.src ?? ""}
                  alt={avatar.alt}
                  className="thum lg:h-28 lg:w-28 h-16 w-16 rounded-full object-cover "
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
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
          </button>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          allowTouchMove={false}
          className="mb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="lg:p-6 p-3 lg:mx-4 mx-2 center-content gap-0">
                <h3 className="lg:text-[20px] text-[18px] font-[400] text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <div className="flex justify-center mt-2 gap-1">
                  {RenderStars(testimonial.rating)}
                </div>
                <h2 className=" lg:w-[800px] w-full mx-auto   mt-4 text-center">
                  &quot;{testimonial.text}&quot;
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default HomeTestimonials;
