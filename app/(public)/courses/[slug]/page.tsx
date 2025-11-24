/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

import { Metadata } from "next";

import { Coursedata } from "../Coursedata";
import OldDesignCourse from "../(old design)/OldDesign";
import CourseNewDesign from "./CourseNewDesign";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: any;
};

/* -------------------------------
🔹 Fetch Single Course by Slug
---------------------------------*/
const fetchCourse = async (slug: string) => {
  try {
    const apiURL = process.env.API_URL;
    const res = await fetch(`${apiURL}/v1/website/get-course/details/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch course");
    const data = await res.json();

    if (!data || !data.basicInfo) throw new Error("COURSE_NOT_FOUND");
    return data;
  } catch (err) {
    // console.error("FetchCourse Error:", err);
    throw err;
  }
};

/* -------------------------------
🔹 Dynamic Metadata (SEO)
---------------------------------*/
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const course = await fetchCourse(slug);
    if (!course?.basicInfo) {
      return {
        title: "Course Not Found | ICT Bangla",
        description:
          "The course you’re looking for doesn’t exist or has been removed.",
      };
    }

    const { title, slug: courseSlug } = course.basicInfo;
    const thumbnail =
      course?.media?.thumbnail || "/assets/default-thumbnail.jpg";

    return {
      title: title || "ICT Bangla Course",
      description:
        course?.seo?.description ||
        "Explore professional IT skill courses at ICT Bangla.",
      openGraph: {
        title,
        description: course?.seo?.description,
        type: "website",
        url: `https://ictbangla.com/courses/${courseSlug}`,
        images: [{ url: thumbnail, width: 800, height: 600 }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: course?.seo?.description,
        images: [thumbnail],
      },
    };
  } catch (error) {
    console.error("generateMetadata Error:", error);
    return {
      title: "Course | ICT Bangla",
      description: "Learn creative and professional IT skills with ICT Bangla.",
    };
  }
}
const CourseSinglePage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const fbclid = (await searchParams?.fbclid) ?? "";

  const data = await fetchCourse(slug);

  const othersContent = Coursedata?.find((dt) => dt.basicInfo.slug === slug);

  const tabs =
    othersContent?.course_details !== undefined &&
    othersContent?.course_details?.length > 0
      ? othersContent?.course_details.map((dt) => dt.tabe_name)
      : [];

  if (othersContent === undefined) {
    return <OldDesignCourse data={data} slug={slug} fbclid={fbclid} />;
  } else {
    return (
      <CourseNewDesign
        data={data}
        othersContent={othersContent}
        tabs={tabs}
        fbclid={fbclid}
      />
    );
  }
};

export default CourseSinglePage;
