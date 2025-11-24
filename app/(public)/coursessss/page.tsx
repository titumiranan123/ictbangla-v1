import Commonheader from "@/common/header/Commonheader";
import { Metadata } from "next";
import { Suspense } from "react";
import Coursecard from "./Coursecard";
import FilterSidebar from "./Coursefilter";
import CoursesTab from "./CoursesTab";

export const metadata: Metadata = {
  title: "Explore All Courses | ICT Bangla",
  description:
    "Explore ICT Bangla’s premium live and recorded courses — from AI Content Creation and Digital Marketing to CapCut Video Editing and Canva Design with AI. Learn from expert mentors and build your freelancing or corporate career today!",
  keywords: [
    "ICT Bangla courses",
    "digital marketing course",
    "video editing course",
    "Canva course",
    "CapCut course",
    "freelancing training",
    "AI content creation",
    "ICT Bangla live course",
    "skill development Bangladesh",
  ],
  authors: [{ name: "ICT Bangla", url: "https://ictbangla.com" }],
  creator: "ICT Bangla",
  publisher: "ICT Bangla",
  metadataBase: new URL("https://ictbangla.com"),
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    type: "website",
    url: "https://ictbangla.com/courses",
    title: "Explore Trending Courses | ICT Bangla",
    description:
      "Learn AI Design, CapCut Video Editing, Canva Mastery, and more. Join ICT Bangla to boost your career and income through expert-led skill training.",
    siteName: "ICT Bangla",
    // images: [
    //   {
    //     // url: "https://ictbangla.com/assets/images/meta/courses-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "ICT Bangla Courses Page Banner",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Trending Courses | ICT Bangla",
    description:
      "Unlock your potential with ICT Bangla’s professional online courses — from Digital Marketing to AI Video Editing. Enroll now!",
    // images: ["https://ictbangla.com/assets/images/meta/courses-banner.jpg"],
    creator: "@ictbangla",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
const CoursePage = async ({ searchParams }: { searchParams: any }) => {
  // const {
  //   page = 1,
  //   perPage = 10,
  //   search,
  //   orderBy,
  //   status,
  // } = await searchParams;
  // const result = await axios.get(
  //   `https://api.ictbangla.com/v1/website/get-course/list?page=${page}&perPage=${perPage}&orderBy=${orderBy}&searchText=${search}&status=${status}`
  // );
  const data = [
    {
      _id: "68319e9f0418bd251361b821",
      basicInfo: {
        title: "Fiverr Freelancing Success: From Zero to Hero (Pre-Recorded)",
        slug: "fiverr-freelancing-success-from-zero-to-hero-pre-recorded",
        category: "686505ebc87a2ef09ea4b3eb",
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
      _id: "684032e42ccb511e7cc6acdd",
      basicInfo: {
        title: "Ai Content Creation with Capcut (🔴Live Course)",
        slug: "ai-content-creation-with-capcut-live-course",
        level: "EXPERT/SPECIALIZED",
        category: "68650577c87a2ef09ea4b3a4",
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
      _id: "684033e02ccb511e7cc6adf2",
      basicInfo: {
        title: "Canva Mastery with AI (3 Days🔴Live Boot-Camp)",
        slug: "canva-mastery-with-ai-live-course",
        level: "ADVANCED",
        category: "6831f114f98c1dffe3ea2dea",
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
      _id: "684034c42ccb511e7cc6ae3d",
      basicInfo: {
        title: "NextGen Graphic Design & AI for Passive Income (🔴Live Course)",
        slug: "ai-design-to-passive-live-course",
        level: "ADVANCED",
        category: "6831f114f98c1dffe3ea2dea",
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
      _id: "68403bb22ccb511e7cc6b402",
      basicInfo: {
        title: "Call Center Professional Bootcamp (Live Batch)",
        slug: "call-center-professional-bootcamp-live-batch",
        level: "ADVANCED",
        category: "686505d2c87a2ef09ea4b3e8",
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
        category: "6831866e0418bd251361b6bf",
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
      _id: "68403d0f2ccb511e7cc6b509",
      basicInfo: {
        title: "Journey To Excel Expert (🔴Live Course)",
        slug: "journey-to-excel-expert",
        level: "ADVANCED",
        category: "686505d2c87a2ef09ea4b3e8",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_purchase: 631,
        old_reviews: 217,
      },
      pricing: {
        isFree: false,
        price: {
          main: 3000,
          isDiscount: false,
          discount: 2001,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/cae3f9a7-119e-4e26-8faa-00b09f0db883.jpg",
      },
      total_duration: 0,
      total_lessons: 0,
      total_students: 0,
      total_sections: 0,
      ratting: {
        total_ratting: 218,
        ratting_point: 5,
      },
    },
    {
      _id: "68403d532ccb511e7cc6b511",
      basicInfo: {
        title: "Next Level Social Media Marketing ",
        slug: "next-level-social-media-marketing",
        level: "ADVANCED",
        category: "6831f0fcf98c1dffe3ea2de7",
        creator: {
          _id: "683058590418bd251361b5e1",
          first_name: "titumir",
          last_name: "anan",
        },
        status: "UPCOMING",
        old_reviews: 127,
        old_purchase: 511,
      },
      pricing: {
        isFree: false,
        price: {
          main: 4000,
          isDiscount: false,
          discount: 2001,
          percentage: 0,
        },
        expiry: {
          status: false,
          date: "2025-09-04T00:00:00.000Z",
        },
      },
      media: {
        thumbnail:
          "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/eb995734-648a-4869-aead-f3c2c686f25b.jpg",
      },
      total_duration: 0,
      total_lessons: 0,
      total_students: 1,
      total_sections: 0,
      ratting: {
        total_ratting: 128,
        ratting_point: 5,
      },
    },
    {
      _id: "68403d9b2ccb511e7cc6b54b",
      basicInfo: {
        title: "Nextgen All In One Video Editing Masterclass (🔴LIVE Batch)",
        slug: "content-creation-with-premire-pro",
        level: "ADVANCED",
        category: "68650577c87a2ef09ea4b3a4",
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
      _id: "687b73e253b84b0aa6d94e1f",
      basicInfo: {
        title: "Content Creation with Capcut (🎬Pre-Recorded)",
        slug: "content-creation-with-capcut-pre-recorded",
        level: "ADVANCED",
        category: "68650577c87a2ef09ea4b3a4",
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
  ];

  return (
    <div className="">
      {/* header */}
      <style>
        {`
          .coursesbg {
            background: linear-gradient(360deg, #F0FFF4 0%, #FFFFFF 100%);
          }
          `}
      </style>

      <div className="coursesbg  h-full">
        <Commonheader
          cta="SPECIAL OFFER"
          href=""
          paragraph="আপনার দক্ষতা বৃদ্ধি এবং ক্যারিয়ারে সফলতার জন্য প্রয়োজনীয় সব কোর্স
          নিয়ে আমরা প্রস্তুত। আমাদের বিশেষজ্ঞ প্রশিক্ষক এবং হালনাগাদ
          সিলেবাসের মাধ্যমে হাতে-কলমে শিখুন এবং নিজেকে ভবিষ্যতের জন্য তৈরি
          করুন। আমরা বিশ্বাস করি, সঠিক দিকনির্দেশনা এবং মানসম্মত শিক্ষা আপনাকে
          আপনার লক্ষ্যে পৌঁছাতে সাহায্য করবে।"
          title="আমাদের কোর্স সমূহ"
        />
      </div>

      <div className="container  mx-auto  py-6 flex flex-col lg:flex-row 2xl:gap-6 gap-4 relative">
        <aside
          className="hidden lg:block flex-shrink-0 w-full 2xl:max-w-[420px] xl:max-w-[300px] border border-green-200 rounded-xl py-6 px-2 h-fit sticky top-20 self-start shadow-lg
         "
        >
          {/* <Suspense fallback={<></>}> */}
          <FilterSidebar />
          {/* </Suspense> */}
        </aside>

        <main className=" w-full  overflow-x-auto">
          <CoursesTab />
          <div
            className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-3
        2xl:gap-5
        gap-3
        2xl:px-[14px]
      "
          >
            {data?.map((dt: any, idx: number) => (
              <Coursecard key={idx} data={dt} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoursePage;
