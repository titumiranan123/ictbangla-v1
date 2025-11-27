"use client";
import { useState, useEffect } from "react";

export default function StepByStepBanner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  const steps = [
    "আইসিটি বাংলাতে চলছে BLACK FRIDAY OFFER",
    "যেকোনো লাইভ-রেকর্ড কোর্সে নগদ পেমেন্টে এনরোল করলেই পাচ্ছেন ১০% ইনস্ট্যান্ট ক্যাশব্যাক",
    "যেকোনো লাইভ-রেকর্ড কোর্সে নগদ পেমেন্টে এনরোল করলেই পাচ্ছেন ১০% ইনস্ট্যান্ট ক্যাশব্যাক",
    "Capcut দিয়ে ভিডিও ইডিটিং শিখুন এখন ৮০% ডিসকাউন্টে",
  ];

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeState("visible");
    }, 100);

    const fadeOutTimer = setTimeout(() => {
      setFadeState("fade-out");
    }, 2500);

    const nextStepTimer = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
      setFadeState("fade-in");
    }, 3000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(nextStepTimer);
    };
  }, [currentStep, steps.length]);

  return (
    <div className="container mx-auto ">
      <p
        className={`text-xl text-[#8A8A8A] font-medium  leading-[26px] english-text ms-[118px] transition-all duration-700 ${
          fadeState === "fade-in"
            ? "opacity-0"
            : fadeState === "visible"
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        {steps[currentStep]}
      </p>
    </div>
  );
}
