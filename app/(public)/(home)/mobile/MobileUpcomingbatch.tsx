import React from "react";
import Button from "../Button";
import MobileCommonCourseslider from "./MobileCommonCourseslider";

const MobileUpcomingbatch = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`,
  //   { cache: "no-store" } // optional: fresh data always
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  const data = [
    {
      _id: "684032e42ccb511e7cc6acdd",
      basicInfo: {
        title: "Ai Content Creation with Capcut (🔴Live Course)",
        slug: "ai-content-creation-with-capcut-live-course",
        level: "EXPERT/SPECIALIZED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_reviews: 400,
        old_purchase: 6232,
      },
      pricing: {
        isFree: false,
        price: {
          main: 3999,
          isDiscount: true,
          discount: 3000,
          percentage: null,
        },
        expiry: {
          status: false,
          date: null,
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/ed46af96-f05c-4b52-b140-a54a1664ea72.jpg",
      },
      total_duration: 43,
      total_lessons: 31,
      total_students: 317,
      total_sections: 0,
      ratting: {
        total_ratting: 488,
        ratting_point: 5,
      },
    },
    {
      _id: "684034c42ccb511e7cc6ae3d",
      basicInfo: {
        title: "NextGen Graphic Design & AI for Passive Income (🔴Live Course)",
        slug: "ai-design-to-passive-live-course",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_reviews: 123,
        old_purchase: 293,
      },
      pricing: {
        isFree: false,
        price: {
          main: 4999,
          isDiscount: true,
          discount: 4000,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/743dcd3f-b5e6-40fc-849a-179a1af553b3.jpeg",
      },
      total_duration: 20,
      total_lessons: 15,
      total_students: 2,
      total_sections: 0,
      ratting: {
        total_ratting: 124,
        ratting_point: 5,
      },
    },
    {
      _id: "68403d9b2ccb511e7cc6b54b",
      basicInfo: {
        title: "Nextgen All In One Video Editing Masterclass (🔴LIVE Batch)",
        slug: "content-creation-with-premire-pro",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_reviews: 229,
        old_purchase: 598,
      },
      pricing: {
        isFree: false,
        price: {
          main: 4999,
          isDiscount: true,
          discount: 4000,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/313283c6-3afa-4b90-8456-7bf4d740f911.png",
      },
      total_duration: 23,
      total_lessons: 15,
      total_students: 3,
      total_sections: 0,
      ratting: {
        total_ratting: 230,
        ratting_point: 5,
      },
    },
    {
      _id: "68d247cbff0dd28c1828968f",
      basicInfo: {
        title: "Become A Digital Marketing Rockstar (🔴Live Course)",
        slug: "become-a-digital-marketing-rockstar-live-course",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        old_purchase: 6853,
        status: "UPCOMING",
        old_reviews: 200,
      },
      pricing: {
        isFree: false,
        price: {
          main: 4999,
          isDiscount: true,
          discount: 4000,
          percentage: 0,
          discount_expiry: null,
        },
        expiry: {
          status: false,
          date: null,
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/5d590231-500e-481e-b1ad-d1e1cf0e2e32.jpg",
      },
      total_duration: 28,
      total_lessons: 22,
      total_students: 8,
      total_sections: 0,
      ratting: {
        total_ratting: 587,
        ratting_point: 5,
      },
    },
    {
      _id: "684033e02ccb511e7cc6adf2",
      basicInfo: {
        title: "Canva Mastery with AI (3 Days🔴Live Boot-Camp)",
        slug: "canva-mastery-with-ai-live-course",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 892,
        old_reviews: 322,
      },
      pricing: {
        isFree: false,
        price: {
          main: 2999,
          isDiscount: true,
          discount: 2500,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/dca585eb-d9c2-48cb-b415-e50485a6e1ba.png",
      },
      total_duration: 31,
      total_lessons: 22,
      total_students: 26,
      total_sections: 0,
      ratting: {
        total_ratting: 503,
        ratting_point: 5,
      },
    },
    {
      _id: "687b73e253b84b0aa6d94e1f",
      basicInfo: {
        title: "Content Creation with Capcut (🎬Pre-Recorded)",
        slug: "content-creation-with-capcut-pre-recorded",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "PUBLISHED",
        old_purchase: 581,
        old_reviews: 439,
      },
      pricing: {
        isFree: false,
        price: {
          main: 999,
          isDiscount: true,
          discount: 650,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: null,
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/1a46cfbe-035d-440d-91a5-56f36d6c6621.jpg",
      },
      total_duration: 13,
      total_lessons: 15,
      total_students: 787,
      total_sections: 0,
      ratting: {
        total_ratting: 521,
        ratting_point: 5,
      },
    },
    {
      _id: "68403bb22ccb511e7cc6b402",
      basicInfo: {
        title: "Call Center Professional Bootcamp (Live Batch)",
        slug: "call-center-professional-bootcamp-live-batch",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 560,
        old_reviews: 259,
      },
      pricing: {
        isFree: false,
        price: {
          main: 4999,
          isDiscount: false,
          discount: 1000,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/91f420de-5144-4d9f-95d7-561974be6139.jpg",
      },
      total_duration: 0,
      total_lessons: 0,
      total_students: 1,
      total_sections: 0,
      ratting: {
        total_ratting: 261,
        ratting_point: 5,
      },
    },
    {
      _id: "68403c832ccb511e7cc6b49d",
      basicInfo: {
        title: "Become A Digital Marketing Rockstar (🎬Pre-Recorded)",
        slug: "become-a-digital-marketing-rockstar",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 641,
        old_reviews: 268,
      },
      pricing: {
        isFree: false,
        price: {
          main: 999,
          isDiscount: true,
          discount: 650,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/84e1f38e-bac6-4cec-a4fa-adc4ac1dc9a2.jpg",
      },
      total_duration: 17,
      total_lessons: 60,
      total_students: 40,
      total_sections: 0,
      ratting: {
        total_ratting: 269,
        ratting_point: 5,
      },
    },
  ];

  return (
    <div
      style={{
        background: `radial-gradient(57.9% 110.29% at 50% 79.62%, #18B07F 0%, #054148 100%)`,
        margin: "0 mx-auto",
      }}
      className="sectionGap h-full pb-14"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
        >
          <div className="flex flex-col w-full gap-1">
            <h2 className="text-[24px]  font-bold text-white text-center">
              <span className="text-[#3CB449]">আপকামিং </span> ব্যাচ সমূহ
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="relative mt-[36px]"
        >
          <MobileCommonCourseslider data={data} isWhite={true} />
        </div>

        <div
          className="flex justify-end items-end mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button
            hoverColor="#ce2f2f"
            title="সব দেখুন "
            className=" text-[18px] text-white font-bold"
            href={"/courses"}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileUpcomingbatch;
