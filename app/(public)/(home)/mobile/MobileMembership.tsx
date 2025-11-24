"use client";
import React from "react";
import MemberShipPackageCart from "../memberShipPackageCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const memberShipFeatures = [
  { _id: 1, text: "Access 5 courses to all pre-recorded courses" },
  { _id: 2, text: "Two (02) online live course enrolment opportunities" },
  { _id: 3, text: "Free access to all tools, products and resources" },
  { _id: 4, text: "Job placement and internship opportunities" },
  { _id: 5, text: "Special classes on the freelancing marketplace" },
  { _id: 6, text: "24/7 support system" },
  { _id: 7, text: "Lifetime support" },
];

const MobileMemberShipSection = () => {
  return (
    <div
      className="py-40"
      style={{
        backgroundImage: "url('/assets/home/Membership_BG.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2 className="text-[24px] text-white font-bold text-center">
          মেম্বারশিপ
        </h2>
        <p className="text-sm font-bold text-white mt-6 text-center w-full max-w-[888px] mx-auto leading-[20px]">
          আপনার চাহিদা অনুযায়ী মূল্য পরিকল্পনা আবিষ্কার করুন স্টার্টার প্যাক
          থেকে শুরু করে এন্টারপ্রাইজ সমাধান পর্যন্ত।
        </p>

        <div className="mt-[40px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="membership"
          >
            <style>
              {`
             .membership .swiper-slide {
                height: 950px !important;
              }
              
              .membership .swiper-pagination {
                bottom: 18px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 20px !important;
              }
              
              .membership .swiper-pagination-bullet {
                background: #D2D8D3 !important; 
                opacity: 1 !important;
                position: relative !important;
                width:42px;
                height:8px;
                border-radius: 4px;
              }
              .membership .swiper-pagination-bullet:after {
                content:none
              }
            
              
              .membership .swiper-pagination-bullet-active {
                position: relative !important;
                 background-color: #29AE48 !important;
                 width:16px;
                 height:8px !important;
                 border-radius: 4px;
              }
          
             
              `}
            </style>
            {[...Array(6)].map((_, idx) => (
              <SwiperSlide key={idx}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={100 + idx * 100}
                  className="flex justify-center flex-shrink-0"
                >
                  <MemberShipPackageCart
                    packageType="Silver"
                    price={1500}
                    duration="3 month package"
                    memberShipFeatures={memberShipFeatures}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MobileMemberShipSection;
