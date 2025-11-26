/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import StudentReviewTab from "./StudentReviewtab";
import CourseStudentReviewCard from "@/app/(public)/(home)/CourseStudentReviewCard";

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
  console.log(reviews);
  return (
    <div className="flex flex-col justify-center items-center py-8 ">
      <StudentReviewTab />
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
              background: #D2D8D3;
              width:61px;
              border-radius: 16px;
              opacity: 0.5;
            }
            .studentTesti .swiper-pagination-bullet-active {
              opacity: 1;
              width:30px;
              background: #29AE48;
            }
            .studentTesti .swiper-pagination-bullet-active:after {
              display:none;
            }

          
          `}
        </style>

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
      </div>
    </div>
  );
}
