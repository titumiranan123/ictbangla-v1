import Accordion from "@/components/(instructor)/others/Accordion";
import Pagetitle from "@/components/(home)/shared/pagetitle";
import React from "react";
const generalQuestions = [
  {
    title: "স্কিল ডেভেলপমেন্ট কোর্সগুলো কাদের জন্য উপযোগী?",
    content:
      "আমাদের কোর্সগুলো শিক্ষার্থী, ফ্রিল্যান্সার, পেশাজীবী এবং যারা নতুন দক্ষতা অর্জন করতে চান বা নিজেদের বর্তমান দক্ষতা বাড়াতে চান, তাদের সবার জন্য উপযোগী। প্রতিটি কোর্সের বিবরণ পৃষ্ঠায় নির্দিষ্ট টার্গেট অডিয়েন্স সম্পর্কে বিস্তারিত তথ্য দেওয়া আছে।",
  },
  {
    title: "একটি কোর্স সম্পূর্ণ করতে কত সময় লাগে?",
    content:
      "কোর্সের সময়কাল কোর্সের ধরন এবং গভীরতার উপর নির্ভর করে। প্রতিটি কোর্সের বিবরণেই আনুমানিক সময়কাল উল্লেখ করা আছে। কিছু কোর্সের জন্য কয়েক সপ্তাহ বা মাসও লাগতে পারে।",
  },
  {
    title: "কোর্সগুলো কি অনলাইন নাকি অফলাইন?",
    content:
      "আমাদের সকল কোর্সই সম্পূর্ণ অনলাইন–ভিত্তিক। এর মানে হলো আপনি বিশ্বের যেকোনো স্থান থেকে, আপনার নিজের সুবিধামতো সময়ে ক্লাস করতে পারবেন।",
  },
  {
    title: "লাইভ ক্লাসগুলো কি রেকর্ড করা থাকবে?",
    content:
      "হ্যাঁ, আমাদের বেশিরভাগ লাইভ ক্লাস রেকর্ড করা থাকবে এবং কোর্সের নির্দিষ্ট সময়ের জন্য শিক্ষার্থীদের জন্য উপলব্ধ থাকবে। এতে করে আপনি যদি কোনো লাইভ ক্লাস মিস করেন বা পুনরায় দেখতে চান, তাহলে তা করতে পারবেন।",
  },
  {
    title: "কোর্স শেষ করার পর কি কোনো সার্টিফিকেট পাবো?",
    content:
      "হ্যাঁ, সফলভাবে কোর্স সম্পন্ন করার পর আপনি একটি ডিজিটাল সার্টিফিকেট পাবেন।",
  },
];

const enrollmentQuestions = [
  {
    title: "কোর্সে এনরোল করার প্রক্রিয়াটি কেমন?",
    content:
      "আমাদের ওয়েবসাইটে আপনার পছন্দের কোর্সে ক্লিক করুন। এরপর 'এনরোল করুন' বা 'কোর্স কিনুন' বাটনে ক্লিক করে নির্দেশাবলী অনুসরণ করুন। পেমেন্ট সম্পন্ন হলে আপনার ড্যাশবোর্ডে কোর্সের অ্যাক্সেস পেয়ে যাবেন।",
  },
  {
    title: "পেমেন্টের জন্য কি কি অপশন আছে?",
    content:
      "আমরা বিকাশ, নগদ, রকেট সহ সকল জনপ্রিয় মোবাইল ব্যাংকিং এবং ডেবিট/ক্রেডিট কার্ডের মাধ্যমে পেমেন্ট গ্রহণ করে থাকি।",
  },
  {
    title: "আমি কি কিস্তিতে পেমেন্ট করতে পারবো?",
    content:
      "বর্তমানে আমরা সব কোর্সের জন্য কিস্তি সুবিধার ব্যবস্থা রাখছি না। তবে কিছু নির্দিষ্ট প্রিমিয়াম কোর্সের জন্য এই সুবিধা উপলব্ধ থাকতে পারে, যা কোর্সের বিবরণ পৃষ্ঠায় উল্লেখ করা থাকবে।",
  },
  {
    title: "কোর্স কেনার পর কি রিফান্ডের কোনো সুযোগ আছে?",
    content:
      "আমাদের রিফান্ড নীতি প্রতিটি কোর্সের জন্য ভিন্ন হতে পারে। সাধারণত, কোর্স কেনার একটি নির্দিষ্ট সময়সীমার মধ্যে এবং কোর্স কন্টেন্টের একটি নির্দিষ্ট শতাংশের (যেমন, ২০%) কম অ্যাক্সেস করলে রিফান্ডের জন্য আবেদন করা যেতে পারে। বিস্তারিত জানতে আমাদের রিফান্ড পলিসি দেখুন।",
  },
];

const technicalQuestions = [
  {
    title:
      "কোর্সগুলো দেখার জন্য কি বিশেষ কোনো সফটওয়্যার বা হার্ডওয়্যারের প্রয়োজন?",
    content:
      "সাধারণত, কোর্সগুলো দেখার জন্য একটি ভালো ইন্টারনেট সংযোগ এবং যেকোনো আধুনিক ব্রাউজার (যেমন: ক্রোম, ফায়ারফক্স) যথেষ্ট। কিছু কোর্সের জন্য নির্দিষ্ট সফটওয়্যারের (যেমন: Adobe Photoshop, CapCut) প্রয়োজন হতে পারে, যা কোর্সের বর্ণনায় উল্লেখ করা থাকবে।",
  },
  {
    title: "কোর্স চলাকালীন কোনো সমস্যা হলে কার সাথে যোগাযোগ করব?",
    content:
      "কোর্স চলাকালীন যেকোনো সমস্যার জন্য আপনি আমাদের ডেডিকেটেড সাপোর্ট টিমকে ইমেইল বা লাইভ চ্যাটের মাধ্যমে যোগাযোগ করতে পারবেন। আমাদের ইন্সট্রাক্টররাও নির্দিষ্ট ফোরাম বা গ্রুপে শিক্ষার্থীদের প্রশ্ন সমাধান করে থাকেন।",
  },
  {
    title: "আমি আমার কোর্স ড্যাশবোর্ড কিভাবে অ্যাক্সেস করব?",
    content:
      "সফলভাবে এনরোল করার পর, আপনার অ্যাকাউন্টে লগইন করলে আপনার ব্যক্তিগত ড্যাশবোর্ড দেখতে পাবেন। এখানেই আপনার এনরোল করা সকল কোর্স এবং সেগুলোর কন্টেন্ট থাকবে।",
  },
];

const accordionItems = {
  general: generalQuestions,
  enrollment: enrollmentQuestions,
  technical: technicalQuestions,
};
const Faq = () => {
  return (
    <div className="faq-section">
      <Pagetitle
        pageName="Faq"
        pagePragraph=""
        pageTitle="আপনার সচরাচর জিজ্ঞাস্য (প্রশ্নসমূহ)"
      />

      <div className="container px-4 mx-auto mt-14">
        {/* General Course Questions Section */}
        <section className="section-general-questions">
          <div className="text-center mb-2">
            <h1
              className="text-4xl font-bold leading-[50px] cardo"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              কোর্স সম্পর্কিত সাধারণ প্রশ্ন
            </h1>
          </div>
          <div className="w-full mt-20 lg:p-14 px-4 py-6 max-w-[900px] mx-auto bg-secondary mb-10 rounded-[20px] shadow-md">
            <Accordion items={accordionItems?.general} />
          </div>
        </section>

        {/* Payment and Enrollment Section */}
        <section className="section-payment-questions">
          <div className="text-center mb-2 mt-[120px]">
            <h1 className="text-4xl font-bold leading-[50px] cardo">
              পেমেন্ট এবং এনরোলমেন্ট সম্পর্কিত প্রশ্ন
            </h1>
          </div>
          <div className="w-full mt-20 lg:p-14 px-4 py-6 max-w-[900px] mx-auto bg-secondary mb-10 rounded-[20px] shadow-md">
            <Accordion items={accordionItems?.enrollment} />
          </div>
        </section>

        {/* Technical Support Section */}
        <section className="section-technical-questions">
          <div className="text-center mb-2 mt-[120px]">
            <h1 className="text-4xl font-bold leading-[50px] cardo">
              টেকনিক্যাল এবং সাপোর্ট সম্পর্কিত প্রশ্ন
            </h1>
          </div>
          <div className="w-full mt-20 lg:p-14 px-4 py-6 max-w-[900px] mx-auto bg-secondary mb-10 rounded-[20px] shadow-md">
            <Accordion items={accordionItems?.technical} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
