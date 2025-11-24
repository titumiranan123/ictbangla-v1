import Button from "../Button";
import MobileCommonCourseslider from "./MobileCommonCourseslider";

const MobileRecordedCourse = async () => {
  // const result = await axios.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/v1/website/home/courses?type=RECORDED_COURSE`
  // );
  const data = [
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
    {
      _id: "68319e9f0418bd251361b821",
      basicInfo: {
        title: "Fiverr Freelancing Success: From Zero to Hero (Pre-Recorded)",
        slug: "fiverr-freelancing-success-from-zero-to-hero-pre-recorded",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: '"UPCOMING"',
        old_purchase: 3327,
      },
      pricing: {
        isFree: false,
        price: {
          main: 999,
          isDiscount: true,
          discount: 650,
          percentage: null,
        },
        expiry: {
          status: false,
          date: "2025-10-25T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/f8218b54-4419-4f3a-9ec6-13a2312cacd7.jpg",
      },
      total_duration: 11,
      total_lessons: 14,
      total_students: 16,
      total_sections: 0,
      ratting: {
        total_ratting: 194,
        ratting_point: 5,
      },
    },
    {
      _id: "687eace62b1ffc2e25c1caf2",
      basicInfo: {
        title: "Next Level Social Media Marketing (🎬Pre-Recorded)",
        slug: "next-level-social-media-marketing-pre-recorded",
        level: "EXPERT/SPECIALIZED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 456,
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
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/e25fc530-9ec4-4407-8880-c5ab77d338ee.jpg",
      },
      total_duration: 19,
      total_lessons: 22,
      total_students: 51,
      total_sections: 0,
      ratting: {
        total_ratting: 78,
        ratting_point: 5,
      },
    },
    {
      _id: "68887e9caa0aaaf81b90ec52",
      basicInfo: {
        title: "Call Center Professional Bootcamp (🎬Pre-Recorded)",
        slug: "call-center-professional-bootcamp-pre-recorded",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 159,
        old_reviews: 70,
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
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/a27e258f-3946-453d-925c-3fb4826d0650.jpg",
      },
      total_duration: 9,
      total_lessons: 13,
      total_students: 1,
      total_sections: 0,
      ratting: {
        total_ratting: 71,
        ratting_point: 5,
      },
    },
    {
      _id: "68aa0eeed6f7fe3f04626747",
      basicInfo: {
        title: "Canva Mastery with AI (🎥Pre-Recorded)",
        slug: "canva-mastery-with-ai-pre-recorded",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 347,
      },
      pricing: {
        isFree: false,
        price: {
          main: 999,
          isDiscount: true,
          discount: 650,
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
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/0d350c04-49a6-4a91-84c7-2a2bdceff00f.jpg",
      },
      total_duration: 15,
      total_lessons: 54,
      total_students: 46,
      total_sections: 0,
      ratting: {
        total_ratting: 182,
        ratting_point: 5,
      },
    },
    {
      _id: "68cbaaf7b792a1cd1e1b531a",
      basicInfo: {
        title: "Passive Income with AI  (🎥Pre-recorded Course)",
        slug: "passive-income-with-ai-pre-recorded-course",
        level: "ADVANCED",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        old_purchase: 293,
        status: "UPCOMING",
        old_reviews: 123,
      },
      pricing: {
        isFree: false,
        price: {
          main: 999,
          isDiscount: true,
          discount: 650,
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
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/eed78016-ab62-4abb-96d2-678c5279b45d.jpg",
      },
      total_duration: 6,
      total_lessons: 24,
      total_students: 12,
      total_sections: 0,
      ratting: {
        total_ratting: 124,
        ratting_point: 5,
      },
    },
  ];

  return (
    <div className="container ">
      {/* Header Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex lg:justify-between items-start justify-start md:items-center md:flex-row flex-col gap-4"
      >
        <div className="flex w-full flex-col gap-1">
          <h2
            className="text-[24px] text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-[#3CB449]">রেকর্ডেড</span> কোর্সসমূহ
          </h2>
        </div>
      </div>

      {/* Swiper Section */}
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="relative mt-[66px]"
      >
        <MobileCommonCourseslider data={data} />
      </div>
      <div
        className="flex justify-end items-end  mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Button
          hoverColor="#ce2f2f"
          title="সব দেখুন "
          className=" text-[18px] text-primary font-bold"
          href={"/courses"}
        />
      </div>
    </div>
  );
};

export default MobileRecordedCourse;
