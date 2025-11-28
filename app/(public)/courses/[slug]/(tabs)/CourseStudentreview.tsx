/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import StudentReviewTab from "./StudentReviewtab";
import CourseStudentReviewCard from "@/app/(public)/(home)/CourseStudentReviewCard";
import { useState } from "react";
import ReactPlayer from "react-player";
import PluseIcon from "@/components/(home)/home/PulseIcon/PluseIcon";

// const testimonials = [
//   {
//     id: 1,
//     author: "Md. Mahfuzul Islam",
//     position: "Batch - FC2501",
//     image: mahfuz,
//     rating: 5,
//     quote: `It was a nice learning journey with ICT Bangla. Our mentor Mr. Soikat is a brilliant mentor...`,
//   },
//   {
//     id: 2,
//     author: "Quazi Mohsin",
//     position: "Batch - FC2501",
//     image: Quazi,
//     quote: `অনলাইনে কোর্সটি করলেও মনে হয়েছে সরাসরি কোর্সটি শেষ করলাম...`,
//   },
//   {
//     id: 3,
//     author: "Md Rabiul Islam",
//     position: "Batch - FC2501",
//     image: Rabiul,
//     quote: `মেন্টর ছিলেন মেহেদী হাসান সৈকত ভাই...`,
//   },
//   {
//     id: 4,
//     author: "Habiba Nusrat",
//     position: "Batch - FC2501",
//     image: Habiba,
//     quote: `আলহামদুলিল্লাহ জীবনের প্রথম ইনকাম...`,
//   },
//   {
//     id: 5,
//     author: "Ujjol Ahmed",
//     position: "Batch - FC2501",
//     image: user,
//     quote: `Alhamdulillah অনেক ভালো ছিল এবং Mentor সৈকত ভাইয়া খুব সুন্দর করে...`,
//   },
//   {
//     id: 6,
//     author: "Rayhan Kabir",
//     position: "Batch - FC2501",
//     image: user,
//     quote: `আলহামদুলিল্লাহ। খুবই ভালো। সৈকত ভাই খুবই ভালো মেন্টর...`,
//   },
// ];

export default function CourseStudentReview({ reviews }: { reviews: any }) {
  console.log("reviews", reviews);
  const [isText, setIsText] = useState(true);
  const [index, setIndex] = useState(3);
  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <StudentReviewTab isText={isText} setIsText={setIsText} />
      <div className="w-full overflow-hidden px-4">
        <style>
          {`
            .studentTesti {
              height: 480px;
              overflow: visible;
            }
            .studentTesti .swiper-slide {
              width: 485px;
              display:flex;
              opacity: 0.3;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              height: auto !important;
              transition: transform 0.4s ease, opacity 0.4s ease;
            }
            .studentTesti .swiper-slide-prev,
            .studentTesti .swiper-slide-next {
              opacity: 0.3 !important;
              z-index: 0 !important;
      
            }
            
            .studentTesti .swiper-slide-next {
              opacity: 0.3 !important;
              z-index: 0 !important;
              transform: scale(0.95) translateX(-45%) !important; 
      
            }
            .studentTesti .swiper-slide-prev {
              opacity: 0.3 !important;
              z-index: 0 !important;
              transform: scale(0.95) translateX(65%) !important; 
            }
            .studentTesti .swiper-slide-active {
              opacity: 1 !important;
              z-index: 20 !important;
              transform: scale(1.2) translateX(0) !important;
            }
         
            .studentTesti .swiper-pagination-bullet {
              background: #D2D8D3 !important;
              width:61px;
              border-radius: 16px;
              opacity: 0.5;
            }
            .studentTesti .swiper-pagination-bullet-active {
              opacity: 1;
              width:30px;
              background:  #29ae48 !important;
            }
            .studentTesti .swiper-pagination-bullet-active:after {
              display:none;
            }

          
          `}
        </style>

        {!isText ? (
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={0}
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="studentTesti"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: "auto", spaceBetween: 30 },
              1024: { slidesPerView: "auto", spaceBetween: 30 },
            }}
          >
            {reviews?.text_review.map((testimonial: any) => (
              <SwiperSlide key={testimonial.id} className="flex justify-center">
                <CourseStudentReviewCard data={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto mt-10">
              {reviews?.video_review
                ?.slice(0, index)
                .map((rev: any, i: number) => (
                  <div
                    key={rev.id}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 100}
                    className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-video w-full">
                      <ReactPlayer
                        url={rev.video_url}
                        light={rev.video_thumbile}
                        playIcon={<PluseIcon />}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  </div>
                ))}
            </div>

            {index < reviews?.video_review.length && (
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
          </>
        )}
      </div>
    </div>
  );
}
