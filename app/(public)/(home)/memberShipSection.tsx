import React from "react";
import MemberShipPackageCart from "./memberShipPackageCart";

const memberShipFeatures = [
  {
    _id: 1,
    text: "Access 5 courses to all pre-recorded courses",
  },
  {
    _id: 2,
    text: "Two (02) online live course enrolment opportunites",
  },
  {
    _id: 3,
    text: "Free access to all tools, products and resources",
  },
  {
    _id: 4,
    text: "Job placement and internship opportunities",
  },
  {
    _id: 5,
    text: "Special classes on the freelancing marketplace",
  },
  {
    _id: 6,
    text: "24/7 support system",
  },
  {
    _id: 7,
    text: "Life time support",
  },
];

const MemberShipSection = () => {
  return (
    <div
      // className="full-width-container  py-40"
      className="py-40 sectionGap"
      style={{
        backgroundImage: "url('/assets/home/Membership_BG.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2 className="text-[48px] text-white font-bold text-center ">
          মেম্বারশিপ
        </h2>
        <p className="text-xl font-medium text-white mt-4 text-center w-full max-w-[888px] mx-auto">
          আপনার চাহিদা অনুযায়ী মূল্য পরিকল্পনা আবিষ্কার করুন। স্টার্টার প্যাক{" "}
          <br /> থেকে শুরু করে এন্টারপ্রাইজ সমাধান পর্যন্ত।
        </p>

        <div className="mt-[100px] flex items-stretch gap-6 justify-center">
          <MemberShipPackageCart
            packageType="Silver"
            price={1500}
            duration="3 month package"
            memberShipFeatures={memberShipFeatures}
          />
          <MemberShipPackageCart
            packageType="Silver"
            price={1500}
            duration="3 month package"
            memberShipFeatures={memberShipFeatures}
          />
          <MemberShipPackageCart
            packageType="Silver"
            price={1500}
            duration="3 month package"
            memberShipFeatures={memberShipFeatures}
          />
        </div>
      </div>
    </div>
  );
};

export default MemberShipSection;
