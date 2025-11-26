import React from "react";
import MentorCard from "./MentorCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseInstructor = ({ instructors }: { instructors: any }) => {
  const data = [
    {
      name: "Ashrafur Rahman",
      designation: "Lead Instructor",
      speciality: "Graphic Designer & Illustrator",
      about:
        "Ashrafur Rahman has over 8 years of experience in design and visual communication. He specializes in brand identity, UI/UX design, and digital illustration.",
      image: "/assets/mentors/ashrafur-rahman.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Sadia Islam Promi",
      designation: "Lead Instructor",
      speciality: "Canva Designer & Instructor",
      about:
        "Sadia Islam Promi is a certified Canva expert who teaches students how to create impactful visual content using Canva and AI design tools.",
      image: "/assets/mentors/sadia-promi.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Md. Tahamidur Rahman",
      designation: "Lead Instructor",
      speciality: "Digital Marketing & Branding Specialist",
      about:
        "Md. Tahamidur Rahman is a professional digital marketer with expertise in campaign strategy, SEO, and brand building across social media platforms.",
      image: "/assets/mentors/tahamidur-rahman.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Md. Naimul Islam",
      designation: "Lead Instructor",
      speciality: "Video Editor & Motion Designer",
      about:
        "Md. Naimul Islam is a skilled video editor with 6+ years of experience in editing, animation, and visual storytelling for brands and content creators.",
      image: "/assets/mentors/naimul-islam.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Tamim Asif Chowdhury",
      designation: "Lead Instructor",
      speciality: "Canva Master & Creative Mentor",
      about:
        "Tamim Asif Chowdhury is an experienced Canva and AI design instructor who focuses on creative brand development and content design automation.",
      image: "/assets/mentors/tamim-asif.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Tahmid Arman",
      designation: "Lead Instructor",
      speciality: "AI Design & Video Editing Mentor",
      about:
        "Tahmid Arman is an expert in AI-powered creative tools, teaching students how to monetize their skills through design and video editing.",
      image: "/assets/mentors/tahmid-arman.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Arif M Rajon",
      designation: "Lead Instructor",
      speciality: "Business Development & HR Mentor",
      about:
        "Arif M Rajon specializes in business strategy, marketing, and HR development. He mentors students to align their career goals with real-world opportunities.",
      image: "/assets/mentors/arif-rajon.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
    {
      name: "Abu Altamas",
      designation: "Lead Instructor",
      speciality: "IT & Freelancing Trainer",
      about:
        "Abu Altamas is an experienced freelancer and trainer helping students start their online careers through practical freelancing and skill-building courses.",
      image: "/assets/mentors/abu-altamas.png",
      socials: {
        website: "#",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-green-600 mb-10">
          Meet Our Lead Instructors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseInstructor;
