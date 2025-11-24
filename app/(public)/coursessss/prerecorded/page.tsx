import { Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const datatab = [
  {
    section_title: "কোর্স সম্পর্কে",
    section_content: <CourseAbout />,
  },
  {
    section_title: "কোর্স কনটেন্ট",
    section_content: <Coursecontent />,
  },
  {
    section_title: "ইন্সট্রাক্টর",
    section_content: <CourseInstructor />,
  },
  {
    section_title: "ডেমো ক্লাস",
    section_content: <PreviewClass />,
  },
  {
    section_title: "রিভিউ",
    section_content: <StudentReview />,
  },
  {
    section_title: "জিজ্ঞাসা",
    section_content: <AskingCourse />,
  },
  {
    section_title: "সার্টিফিকেট",
    section_content: <CertificateSection />,
  },
  {
    section_title: "প্রজেক্ট",
    section_content: <Courseproject />,
  },
];

import IconImage from "@/common/iconImages";

import Courseproject from "../../courses/[slug]/(tabs)/Courseproject";
import CourseAbout from "../../courses/[slug]/(tabs)/CourseAbout";
import CourseInstructor from "../../courses/[slug]/(tabs)/CourseInstructor";
import PreviewClass from "../../courses/[slug]/PreviewClass";
import StudentReview from "../../courses/[slug]/(tabs)/StudentReview";
import AskingCourse from "../../courses/[slug]/(tabs)/AskingCourse";
import CertificateSection from "../../courses/[slug]/(tabs)/CertificateSection";
import BatchTag from "../../courses/[slug]/BatchTag";
import ShareButtons from "../../courses/[slug]/ShareButtons";
import CourseModulsummary from "../../courses/[slug]/CourseModulsummary";
import AddCompare from "../../courses/[slug]/AddCompare";
import Thumnailvideoslider from "../../courses/[slug]/Thumnailvideoslider";
import CourseCoupon from "../../courses/[slug]/Couponcoupon";
import CourseInfoTab from "../../courses/[slug]/CourseInfoTab";
import WhichYoulearn from "../../courses/[slug]/WhichYoulearn";
import Coursecontent from "./Coursecontent";
import PreRecorded from "../../courses/[slug]/PreRecorded";
import RightcourseThubm from "../../courses/[slug]/RightcourseThubm";
import CourseReturn from "../../bundle-course/CourseReturn";
import Whomeneeds from "../../bundle-course/Whomeneeds";
import BundelHeader from "../../bundle-course/BundelHeader";

const CourseSinglePage = async ({ params }: { params: any }) => {
  const { slug } = await params;
  const data = {
    _id: "68319e9f0418bd251361b821",
    basicInfo: {
      title: "Fiverr Freelancing Success: From Zero to Hero (Pre-Recorded)",
      slug: "fiverr-freelancing-success-from-zero-to-hero-pre-recorded",
      short_description:
        'ফাইভার ফ্রিল্যান্সিং সাকসেস: জিরো থেকে হিরো" কোর্সে আপনাকে স্বাগতম! এই কোর্সে আপনি শিখবেন কিভাবে ফাইভারে সফলভাবে ফ্রিল্যান্সিং শুরু করবেন। প্রাথমিক থেকে উন্নত কৌশল, প্রফাইল তৈরি, ক্লায়েন্ট আকর্ষণ এবং কাজের সুযোগ বৃদ্ধির প্রতিটি ধাপ নিয়ে বিস্তারিত গাইড থাকবে।',
      description:
        '<p style="text-align: center;"><span style="font-size: 16px;"><strong>Mega 11.11 Campaign</strong></span></p><p style="text-align: center;">বিকাশে পেমেন্ট করলেই পাচ্ছেন </p><p style="text-align: center;"><span style="background-color: rgb(255, 255, 0); color: rgb(0, 0, 255); font-size: 30px;">১০%</span> ইনস্ট্যান্ট ক্যাশব্যাক</p><p><br></p><p><br></p><h2 class="font-bold text-[#1D2939]" style="--tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246/0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; --tw-contain-size: ; --tw-contain-layout: ; --tw-contain-paint: ; --tw-contain-style: ; box-sizing: border-box; border: 0px solid rgb(229, 231, 235); font-size: 22px; font-weight: 700; margin: 0px; line-height: 30px; --tw-text-opacity: 1; color: rgb(29, 41, 57); font-family: &quot;Hind Siliguri&quot;, &quot;Hind Siliguri Fallback&quot;; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(249, 249, 250); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">কোর্স পরিচিতি</h2><p dir="ltr" style="box-sizing: border-box; margin: 12pt 0px; padding: 0px; font-size: 15px; font-weight: 400; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; line-height: 1.38; text-align: justify;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">আপনি কি ঘরে বসে আয় করতে চান? ফ্রিল্যান্সিং-এ ক্যারিয়ার গড়ার স্বপ্ন দেখছেন? তাহলে এই কোর্সটি আপনার জন্যই তৈরি করা হয়েছে। Fiverr হল বিশ্বের অন্যতম জনপ্রিয় ফ্রিল্যান্সিং প্ল্যাটফর্ম যেখানে লক্ষ লক্ষ মানুষ তাদের দক্ষতা ব্যবহার করে অর্থ উপার্জন করছে। "Fiverr Freelancing Success: From Zero to Hero" কোর্সটি আপনাকে শিখাবে কিভাবে একজন সম্পূর্ণ নতুন ফ্রিল্যান্সার থেকে শুরু করে সফল ফ্রিল্যান্সার হওয়া যায়। </span><span style="box-sizing: border-box; font-size: 11.5pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">এই কোর্সে আপনি শিখবেন কিভাবে ফাইভারে সফলভাবে ফ্রিল্যান্সিং শুরু করবেন। প্রাথমিক থেকে উন্নত কৌশল, প্রফাইল তৈরি, ক্লায়েন্ট আকর্ষণ এবং কাজের সুযোগ বৃদ্ধির প্রতিটি ধাপ নিয়ে বিস্তারিত গাইড থাকবে।</span></p><p dir="ltr" style="box-sizing: border-box; margin: 12pt 0px; padding: 0px; font-size: 15px; font-weight: 400; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; line-height: 1.38; text-align: justify;"><span style="box-sizing: border-box; font-size: 11.5pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><br></span></p><p dir="ltr" style="box-sizing: border-box; margin: 12pt 0px; padding: 0px; font-size: 15px; font-weight: 400; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; line-height: 1.38;"><span hind="" siliguri",="" sans-serif;="" color:="" rgb(0,="" 0,="" 0);="" font-weight:="" 700;="" font-style:="" normal;="" font-variant:="" text-decoration:="" none;="" vertical-align:="" baseline;="" white-space:="" pre-wrap;="" background-color:="" rgb(255,="" 255,="" 255);"="" style="box-sizing: border-box; font-size: 11pt;">কেন এই কোর্সটি করবেন?</span></p><ul style="box-sizing: border-box; padding: 0px; margin: 0px; list-style: none; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding-inline-start: 48px;"><li dir="ltr" hind="" siliguri",="" sans-serif;="" color:="" rgb(0,="" 0,="" 0);="" font-weight:="" 700;="" font-style:="" normal;="" font-variant:="" text-decoration:="" none;="" vertical-align:="" baseline;="" white-space:="" pre;"="" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 12pt 0px 0pt; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">প্রশিক্ষিত ও অভিজ্ঞ শিক্ষক: </span><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">আমাদের কোর্সটি পরিচালনা করবেন অভিজ্ঞ এবং পেশাদার শিক্ষকগণ, যারা ফাইভার ফ্রিল্যান্সিং এ দক্ষ এবং শিক্ষাদানে নিবেদিত।</span></p></li><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 0pt 0px; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">ইন্টারেক্টিভ লার্নিং: </span><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">প্রথাগত লেকচারের বাইরে, আমাদের কোর্সে রয়েছে ইন্টারেক্টিভ ক্লাসরুম, লাইভ সেশন, এবং অনলাইন কার্যক্রম।</span></p></li><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 0pt 0px; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">ব্যক্তিগত ফিডব্যাক: </span><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">আপনার উন্নতির জন্য নিয়মিত ফিডব্যাক প্রদান করা হবে, যাতে আপনি দ্রুত আপনার ভুলগুলো সংশোধন করতে পারেন।</span></p></li><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 0pt 0px 12pt; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">সার্টিফিকেশন: </span><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">কোর্স শেষে একটি সার্টিফিকেট প্রদান করা হবে, যা আপনার স্পোকেন ইংলিশ দক্ষতার স্বীকৃতি হিসেবে কাজ করবে।</span></p></li></ul><p dir="ltr" style="box-sizing: border-box; margin: 12pt 0px; padding: 0px; font-size: 15px; font-weight: 400; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; line-height: 1.38;"><span hind="" siliguri",="" sans-serif;="" color:="" rgb(0,="" 0,="" 0);="" font-weight:="" 700;="" font-style:="" normal;="" font-variant:="" text-decoration:="" none;="" vertical-align:="" baseline;="" white-space:="" pre-wrap;="" background-color:="" rgb(255,="" 255,="" 255);"="" style="box-sizing: border-box; font-size: 11pt;">যাদের জন্য উপযুক্ত:</span></p><ul style="box-sizing: border-box; padding: 0px; margin: 0px; list-style: none; color: rgb(110, 121, 138); font-family: &quot;Hind Siliguri&quot;, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; padding-inline-start: 48px;"><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 12pt 0px 0pt; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">যারা ফ্রিল্যান্সিং ক্যারিয়ার শুরু করতে চান কিন্তু কোন দিকনির্দেশনা পাচ্ছেন না।</span></p></li><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 0pt 0px; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">যারা ফাইভার প্ল্যাটফর্মে সঠিকভাবে নিজেদেরকে প্রতিষ্ঠিত করতে চান।</span></p></li><li dir="ltr" aria-level="1" style="box-sizing: border-box; list-style-type: disc; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre;"><p dir="ltr" role="presentation" style="box-sizing: border-box; margin: 0pt 0px 12pt; padding: 0px; font-size: 15px; font-weight: 400; line-height: 1.38;"><span style="box-sizing: border-box; font-size: 11pt; font-family: &quot;Hind Siliguri&quot;, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">যারা বাড়তি আয় করতে চান এবং ফ্রিল্যান্সিংকে একটি ফুল-টাইম ক্যারিয়ার হিসেবে গ্রহণ করতে চান।</span></p></li></ul>',
      category: {
        _id: "686505ebc87a2ef09ea4b3eb",
        title: "Others",
        slug: "others",
        image: "https://example.com/images/web-dev.jpg",
        icon: "https://example.com/icons/web-dev-icon.svg",
      },
      level: "ADVANCED",
      topCourse: true,
      creator: {
        _id: "683058590418bd251361b5e1",
        first_name: "titumir",
        last_name: "anan",
      },
      status: '"UPCOMING"',
      is_features: true,
      course_type: "RECORDED_COURSE",
      is_show_bottom_banner: true,
      old_purchase: 3327,
    },
    info: {
      faq: [
        {
          question: "কোর্স ফি  কিভাবে প্রদান করবো ?",
          answer:
            "আমরা বিভিন্ন পেমেন্ট পদ্ধতি গ্রহণ করি, যেমন ক্রেডিট কার্ড, ডেবিট কার্ড, মোবাইল ব্যাংকিং এবং অনলাইন পেমেন্ট সিস্টেম।",
        },
        {
          question: "মোবাইল দিয়ে করা যাবে কি?",
          answer: "না,  আমরা কম্পিউটার লাগবে।",
        },
        {
          question: "কোর্সের সময়কাল কতটুকু?",
          answer:
            "এটি একটি প্রিরেকর্ডের কোর্স। এখানে ১৪দিনে কিভাবে ফাইবার ফ্রিল্যান্সিং হিরো হবেন, সেই মূলমন্ত্রই শিখানো হবে।",
        },
        {
          question: "কোর্সের জন্য কি কোনো পূর্বশর্ত আছে?",
          answer:
            "কোনো পূর্বশর্ত নেই। কোর্সটি এমনভাবে সাজানো হয়েছে যাতে একদম নতুন থেকে শুরু করে অভিজ্ঞদের জন্যও কার্যকরী হয়। শুধুমাত্র কম্পিউটার থাকা এবং শেখার আগ্রহ থাকা জরুরি।",
        },
        {
          question: "কোর্সটি কি অনলাইন না অফলাইন?",
          answer:
            "কোর্সটি সম্পূর্ণ অনলাইন রেকর্ড কোর্স । আপনি যেকোনো স্থান থেকে, যেকোনো সময় কোর্সে অংশগ্রহণ করতে পারবেন। ভিডিও লেকচার, ইন্টারেক্টিভ সেশন, এবং অনলাইন এক্সারসাইজের মাধ্যমে কোর্সটি পরিচালিত হবে।",
        },
        {
          question: "কোর্স শেষে কি সার্টিফিকেট প্রদান করা হবে?",
          answer:
            "হ্যাঁ, কোর্সটি সফলভাবে সম্পন্ন করার পর একটি সার্টিফিকেট প্রদান করা হবে, যা আপনার দক্ষতার প্রমাণ হিসেবে কাজ করবে এবং এটি আপনার পেশাগত প্রোফাইলকে শক্তিশালী করবে।",
        },
        {
          question: "কোর্সটি কিভাবে শুরু করা যাবে?",
          answer:
            "কোর্সে ভর্তি হতে, আমাদের এনরোল বাটনে গিয়ে কিনুন বা আমাদের সাথে সরাসরি যোগাযোগ করুন। এনরোল সম্পন্ন হলে লগ ইন করে ক্লাস করতে পারবেন।।",
        },
        {
          question: "আমি কি কোর্সের মডিউলগুলো লাইফটাইম এক্সেস পাবো?",
          answer:
            "হ্যাঁ, আপনি কোর্সের সমস্ত মডিউল ও কন্টেন্ট আজীবন এক্সেস পাবেন। কোর্সটি সম্পন্ন করার পরও আপনি ভবিষ্যতে প্রয়োজন হলে কন্টেন্টগুলো আবার দেখতে পারবেন।",
        },
        {
          question: "কোর্স চলাকালীন অবস্থায় সাপোর্ট কোথায় পাবো?",
          answer: "না, এই কোর্সের কোনো সাপোর্ট নেই।",
        },
        {
          question: "কোর্স ফী কি কিস্তিতে দেওয়া যাবে?",
          answer:
            "না। যেহেতু এখন বিশেষ অফার চলতাছে, এক্ষেতে আমাদের কোর্স ফি অনেক কম। তাই, আমাদের কোর্স ফি ক্লাস শুরুর পূর্বে এককালীন পরিশোধ করতে হবে।",
        },
        {
          question: "কোর্সের পেমেন্ট কি রিফান্ডেবল?",
          answer:
            "না। এনরোল করার পর আপনি যদি শর্ত ব্রেক করেন, তাহলে রিফান্ড করি না। তবে, শর্ত অনুযায়ী রিফান্ডের আবেদন করলে শর্ত সাপেক্ষে ২৫% অথবা ৫০% অথবা ৭৫% কর্তন করে বাকী টাকা রিফান্ড করা হতে পারে।",
        },
      ],
      requirement: {
        category: "point",
        question: [],
        paragraph:
          "সময় ও ধৈর্য্য: কোর্সটি সম্পূর্ণ করতে পর্যাপ্ত সময় ও ধৈর্য্য।",
        point: [
          "মোবাইল অথবা কম্পিউটার: একটি স্মার্টফোন কিংবা একটি কম্পিউটার, যা আপনাকে ক্লাস করতে হেল্প করবে।",
          "ইন্টারনেট সংযোগ: কোর্সে অংশগ্রহণের জন্য স্থিতিশীল এবং দ্রুত ইন্টারনেট সংযোগ প্রয়োজন।",
          "বেসিক কম্পিউটার স্কিলস: কম্পিউটার ব্যবহার ও ইন্টারনেট ব্রাউজিংয়ে মৌলিক দক্ষতা থাকতে হবে।",
          "ইমেইল একাউন্ট: কোর্সের সমস্ত তথ্য ও আপডেট পেতে একটি সক্রিয় ইমেইল একাউন্ট প্রয়োজন।",
          "শেখার আগ্রহ: আপনার নিজের যেকোনো স্কিলের এক্সপার্ট হতে হবে। যেই স্কিল ফাইবারে কিভাবে সেল করতে হবে তা শেখার প্রতি আগ্রহ এবং মনোযোগ থাকা জরুরি।",
        ],
      },
      outcomes: {
        category: "paragraph",
        question: [],
        paragraph: "Learn advanced techniques in web development.",
        point: [],
      },
      description_sections: [
        {
          section_title: "",
          section_content:
            '<p style="text-align: center;"><span style="font-size: 30px;"><strong>Mega 11.11 Campaign</strong></span></p><p style="text-align: center;">বিকাশে পেমেন্ট করলেই পাচ্ছেন </p><p style="text-align: center;"><span style="background-color: rgb(255, 255, 0); color: rgb(0, 0, 255); font-size: 30px;">১০%</span> ইনস্ট্যান্ট ক্যাশব্যাক</p>',
        },
      ],
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
      video: "https://youtu.be/SUyzC1fXKfI?si=GxZjfzD_jNhYj-qE",
      thumbnail:
        "https://ictbangla.s3.eu-north-1.amazonaws.com/instructor/course/images/f8218b54-4419-4f3a-9ec6-13a2312cacd7.jpg",
      videoId: {
        _id: "68e266c464338860707e7292",
        fileName: "videos/1758289399377-Naimul Islam Mentor.mp4",
        url: "https://www.youtube.com/watch?v=SUyzC1fXKfI",
      },
    },
    seo: {
      description:
        "Course description কল সেন্টার বুটক্যাম্প হলো একটি প্রাক্টিক্যাল প্রশিক্ষণ কোর্স যা আপনাদের কল সেন্টারের পরিবেশে কাজ করার জন্য প্রস্তুত করে। এই বুটক্যাম্পে অংশগ্রহণকারীরা কাস্টমার সার্ভিস, প্রডাক্ট নলেজ, কমিউনিকেশন স্কিল, কম্পিউটার অপারেশন এবং অন্যান্য প্রাসঙ্গিক বিষয়গুলোতে গভীর জ্ঞান অর্জন করতে পারবেন। বুটক্যাম্পের উদ্দেশ্য হলো অংশগ্রহণকারীদেরকে কল সেন্টারের চাকরির ক্ষেত্রে চ্যালেঞ্জ মোকাবেলা করার জন্য প্রয়োজনীয় দক্ষতা ও আত্মবিশ্বাস দিয়ে তৈরি করা। যা তাদেরকে ক্যারিয়ারের এই ক্ষেত্রে সাফল্য অর্জনের জন্য সহায়তা করবে।   বুটক্যাম্পের কিছু প্রধান বিষয়বস্তু  কাস্টমার সার্ভিসের ধারণা এবং গুরুত্ব  কার্যকর কমিউনিকেশন স্কিল  সমস্যা সমাধান এবং ক্রাইসিস ম্যানেজমেন্ট  প্রোডাক্ট এবং সার্ভিস নলেজ  কম্পিউটার অপারেশন এবং কল সেন্টার সফটওয়্যার  কল হ্যান্ডলিং প্রক্রিয়া  কাস্টমার রিটেনশন এবং সেলস স্কিল  কোর্সের বৈশিষ্ট্য: লাইভ ক্লাস এবং রেকর্ডেড লেকচার: আপনার সুবিধা অনুযায়ী শিখতে পারবেন।  প্রাকটিক্যাল প্রজেক্ট: বাস্তব জীবনের প্রজেক্টের মাধ্যমে শিখতে পারবেন।  ফিডব্যাক এবং মেন্টরশিপ: আমাদের এক্সপার্ট মেন্টরদের কাছ থেকে নিয়",
      keywords: ["hello", " fivver"],
    },
    status: "PUBLISHED",
    mentors: [],
    createdAt: "2025-05-24T10:25:35.954Z",
    updatedAt: "2025-10-24T17:22:03.058Z",
    __v: 0,
    order: 9,
    ratings: [],
    sections: [
      {
        _id: "6876147c99c7668b617726a6",
        title: "Week 1",
        slug: "week-1",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "68766a3299c7668b61773762",
            sectionId: "6876147c99c7668b617726a6",
            title: "Class 1: Getting Started on Fiverr",
            video: "https://youtu.be/q3eqD3Eg1mM?si=JFVG_2a4tw2lOixJ",
            videoId: null,
            duration: 54,
            isFree: false,
            isLocked: false,
          },
          {
            _id: "68766b1599c7668b617737d3",
            sectionId: "6876147c99c7668b617726a6",
            title: "Class 2: Identifying Your Skills and Niche",
            video: "https://youtu.be/J2BCEqZOx54?si=XebLcUyB9KpD7kCk",
            videoId: null,
            duration: 54,
            isFree: true,
            isLocked: false,
          },
          {
            _id: "68766db499c7668b61773849",
            sectionId: "6876147c99c7668b617726a6",
            title: "Class 3: Creating a Winning Fiverr Gig",
            duration: 61,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "6876708a99c7668b617738ca",
        title: "Week 2",
        slug: "week-2",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "687670f399c7668b617738ee",
            sectionId: "6876708a99c7668b617738ca",
            title: "Class 4: Leveraging AI Tools for Freelancing Success",
            duration: 64,
            isFree: false,
            isLocked: true,
          },
          {
            _id: "687672eb99c7668b61773924",
            sectionId: "6876708a99c7668b617738ca",
            title: "Class 5: Mastering Client Communication",
            duration: 44,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "6876731a99c7668b61773938",
        title: "Week 3",
        slug: "week-3",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "6876736899c7668b6177395c",
            sectionId: "6876731a99c7668b61773938",
            title: "Class 6: Expanding Beyond Fiverr",
            duration: 55,
            isFree: false,
            isLocked: true,
          },
          {
            _id: "6876878099c7668b61773bc7",
            sectionId: "6876731a99c7668b61773938",
            title: "Class 7: Managing International Payments",
            duration: 34,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "687687b099c7668b61773bdb",
        title: "Week 4",
        slug: "week-4",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "6876880f99c7668b61773bfa",
            sectionId: "687687b099c7668b61773bdb",
            title: "Class 8: Enhancing Your Freelance Workflow with AI",
            duration: 41,
            isFree: false,
            isLocked: true,
          },
          {
            _id: "68768bb599c7668b61773c26",
            sectionId: "687687b099c7668b61773bdb",
            title: "Class 9: Preparing for Fiverr’s English Skill Test",
            duration: 5,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "68768c3499c7668b61773c5f",
        title: "Week 5",
        slug: "week-5",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "68768c9099c7668b61773c7e",
            sectionId: "68768c3499c7668b61773c5f",
            title: "Class 10: Securing Work on Upwork",
            duration: 34,
            isFree: false,
            isLocked: true,
          },
          {
            _id: "68768cd499c7668b61773cf2",
            sectionId: "68768c3499c7668b61773c5f",
            title: "Class 11: Securing Work on Freelancer.com",
            duration: 36,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "68768d8399c7668b61773d06",
        title: "Week  6",
        slug: "week-6",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "68768f6d99c7668b61773d7e",
            sectionId: "68768d8399c7668b61773d06",
            title: "Class 12: Building Your Online Presence",
            duration: 66,
            isFree: false,
            isLocked: true,
          },
          {
            _id: "68768fcf99c7668b61773da3",
            sectionId: "68768d8399c7668b61773d06",
            title: "Class 13: Self-Project Management",
            duration: 32,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "68768ff499c7668b61773db7",
        title: "Week 7",
        slug: "week-7",
        courseId: "68319e9f0418bd251361b821",
        lessons: [
          {
            _id: "6876902e99c7668b61773dd1",
            sectionId: "68768ff499c7668b61773db7",
            title: "Class 14: Final Projects and Course Wrap-Up",
            duration: 26,
            isFree: false,
            isLocked: true,
          },
        ],
      },
      {
        _id: "68789bf2fb16fdece844f71d",
        title: "week 8",
        slug: "week8",
        courseId: "68319e9f0418bd251361b821",
        lessons: [],
      },
      {
        _id: "68789c51fb16fdece844f736",
        title: "week 9",
        slug: "week9",
        courseId: "68319e9f0418bd251361b821",
        lessons: [],
      },
    ],
    total_lessons: 14,
    ratting_point: 5,
    total_ratting: 194,
    total_duration: 11,
  };
  return (
    <div className="mb-20">
      {/* header */}

      <div className="w-full bg-primary text-white flex lg:flex-row flex-col   items-center justify-center gap-4 lg:py-2.5 py-5">
        {" "}
        <h4 className="md:text-2xl md:leading-[28px] md:flex hidden font-bold">
          <span className="underline">ICTBANGLA </span> প্রমো এপলাই করলে ৩৫%
          ডিসকাউন্ট আর বাকি
        </h4>{" "}
        <h4 className=" text-xl font-bold  md:hidden flex flex-col justify-center items-center  gap-2">
          <span className="underline">ICTBANGLA প্রমো এপলাই করলে </span>{" "}
          <span className="text-[48px] text-center"> ৩৫% ডিসকাউন্ট </span>{" "}
          <span className="text-[36px] text-center">আর বাকি</span>
        </h4>{" "}
        <button
          className="text-primary bg-white rounded-lg text-lg font-bold py-1 px-4 flex items-center gap-2 cursor-pointer"
          type="button"
        >
          <IconImage fileName="Clock-green-primary.svg" /> ৪ঘ.৫মি.৫৭সে.
        </button>
      </div>

      <div className="header bg-neutral  ">
        <div className="container   pb-10">
          <div className="flex justify-between items-center lg:flex-row flex-col gap-2">
            <div className="flex-1 max-w-[1034px] mx-auto flex flex-col gap-[26px] pt-6 pb-9">
              <button className="max-w-[154px] bg-[#FFE9E9] rounded-lg py-2 px-2 flex gap-1 text-[16px] font-[700]  items-center ">
                <Image
                  src={"/assets/icon/playbutton.png"}
                  alt="live"
                  width={18}
                  height={18}
                  priority
                />
                <span className="text-red-500">রেকর্ডেড কোর্স</span>
              </button>

              <h2 className="lg:text-[48px] md:text-[36px] text-[20px] max-w-[786px] w-full font-semibold md:leading-[60px] leading-[28px] text-black-color  ">
                {data?.basicInfo?.title}
              </h2>

              <div className="flex  md:gap-3 gap-2  items-center">
                <BatchTag />{" "}
                <div className="flex items-center md:gap-1">
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <Star
                    className="text-yellow-500"
                    fill="currentColor" // ⭐️ fill color active
                    stroke="none"
                  />
                  <span className="text-[18px] font-[600]">(194)</span>
                </div>
                <ShareButtons data={data} />
              </div>
              <p className="text-[#8A8A8A] font-[500] text-[16px] md:text-[18px] max-w-[980px]  leading-[140%]">
                {data?.basicInfo?.short_description}
              </p>
              <BundelHeader />
            </div>
            <div className="lg:hidden block">
              <PreRecorded />
            </div>
            <div
              className={`max-w-[389px] w-full   p-4 rounded-[16.25px] border border-red-500 bg-red-500/10`}
            >
              <div className="max-w-[357px] w-full max-h-[269px] h-full relative mb-2">
                <Image
                  src={data?.media?.thumbnail}
                  alt={data?.basicInfo?.title}
                  width={357}
                  height={269}
                  className="w-[357px] h-[269px] rounded-[8.13px]"
                  priority
                />
                <p className="flex justify-start items-center w-full bg-white/25 backdrop-blur-[39.69px] rounded-[24.38px] max-w-[324px] max-h-[32px] border border-[#29AE48] -translate-y-14 mx-auto gap-5 px-5 cursor-pointer">
                  <Image
                    src={"/assets/icon/playicon.png"}
                    alt="paly"
                    width={18}
                    height={18}
                  />
                  <span className="text-[18px] font-[600] text-white">
                    Watch Promo Video
                  </span>
                </p>
              </div>
              <RightcourseThubm />
              <button className="py-2 px-3 rounded-lg  bg-white text-[#707070] text-lg font-semibold  mt-4 w-full flex justify-center items-center gap-2 border-b-4 border-[#FF5457]">
                ফেইসবুক গ্রুপ জয়েন করুন{" "}
                <Image
                  src={"/assets/icon/facebook.png"}
                  alt=""
                  width={24}
                  className=""
                  height={24}
                />
              </button>{" "}
            </div>
          </div>
          <div className="lg:block hidden">
            <PreRecorded />
          </div>
        </div>
      </div>
      {/* body  */}
      <div className="flex container  mt-6 lg:flex-row flex-col gap-2">
        {/* left part */}

        <div className="flex-1   w-full mx-auto">
          <CourseInfoTab tabs={datatab} />
          <CourseReturn />
          <Whomeneeds />
        </div>
        {/* right part  */}
        <div className="max-w-[389px] mx-auto">
          <div className=" border  border-primary  w-full  rounded-[16px] p-4">
            <div className="  flex justify-center items-center gap-2">
              <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-[32px] font-bold text-primary">12</h2>
                <p className="text-[12px] font-bold text-primary">Day</p>
              </div>
              <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-[32px] font-bold text-primary">24</h2>
                <p className="text-[12px] font-bold text-primary">Hours</p>
              </div>
              <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-[32px] font-bold text-primary">32</h2>
                <p className="text-[12px] font-bold text-primary">Minutes</p>
              </div>
              <div className="w-[84px] h-[84px] bg-[#EAF7ED] border border-primary flex flex-col justify-center items-center rounded-lg">
                <h2 className="text-[32px] font-bold text-primary">40</h2>
                <p className="text-[12px] font-bold text-primary">Seconds</p>
              </div>
            </div>
            <div className="bg-[#EAF7ED] border border-primary rounded-[8px] mt-4 py-3">
              <p className="text-primary font-bold text-center text-[16px]">
                ৪০০০+ শিক্ষার্থী এখন পর্যন্ত এনরোল করেছে
              </p>
            </div>
            <div className="bg-[#F3F4F6] border border-primary rounded-[8px] mt-4 py-3 px-4">
              <p className="text-primary font-bold text-center text-[16px]">
                কোর্স সংক্রান্ত আরও তথ্য জানতে
              </p>
              <div className="flex justify-between gap-2 mt-3">
                <input
                  type="text"
                  className="border border-[#9DCAB0] focus:outline-none outline-none rounded-[8px] px-3 flex-1"
                  placeholder="ফোন নাম্বার দিন"
                />
                <button className="text-[14px] rounded-lg w-[110px] py-3 px-2 bg-primary hover:bg-primary text-white font-bold">
                  সাবমিট
                </button>
              </div>
            </div>
            <div className="max-w-[357px] w-full max-h-[269px] h-full relative mb-4 mt-4">
              <div className="w-[357px] h-[269px] rounded-[8.13px]">
                <Thumnailvideoslider />
              </div>
              <p className="flex justify-start items-center w-full bg-white/25 backdrop-blur-[39.69px] rounded-[24.38px] max-w-[324px] max-h-[32px] border border-[#29AE48] -translate-y-14 mx-auto gap-5 px-5 cursor-pointer">
                <Image
                  src={"/assets/icon/playicon.png"}
                  alt="paly"
                  width={18}
                  height={18}
                />
                <span className="text-[18px] font-[600] text-white">
                  Watch Promo Video
                </span>
              </p>
            </div>

            <div className="max-w-[360px] mt-20 h-[154px] bg-primary rounded-[8px] text-white flex justify-center items-center ">
              <h2 className="text-[40px] font-[700]">IMAGE 1</h2>
            </div>
            <div className="mt-5">
              <div className="bg-[#EAF7ED] gap-2 rounded-lg flex items-center px-3 py-2 w-[50%]">
                <Users />
                <p>৯,০০৯ মেম্বারস</p>
              </div>
              <p className="text-primary text-[21px] font-bold text-center mt-3">
                ICT Bangla Student’s Community
              </p>
              <button className="py-2 px-3 rounded-lg font-bold bg-primary text-white text-[18px]  mt-4 w-full flex justify-center items-center gap-2">
                ফেইসবুক গ্রুপ জয়েন করুন{" "}
                <Image
                  src={"/assets/icon/facebook.png"}
                  alt=""
                  width={24}
                  className=""
                  height={24}
                />
              </button>
            </div>
          </div>
          <div className="p-4">
            <WhichYoulearn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSinglePage;
