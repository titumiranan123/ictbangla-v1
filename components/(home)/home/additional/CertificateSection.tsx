import React from "react";
import Image from "next/image";
const CertificateSection: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/coursesinglepage/asset-34.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-[1000px] w-full max-h-[700px] lg:h-[300px] mx-auto flex lg:flex-row flex-col p-8 rounded-xl gap-5 lg:mt-30 mt-20"
    >
      <div className=" flex justify-center items-start flex-col gap-4">
        <h3 className="text-[18px] font-[500] text-white">
          কোর্স সম্পূর্ণ করলে থাকছে
        </h3>
        <h2 className="text-[28px] font-[600] text-white">
          সুন্দর একটি সার্টিফিকেট
        </h2>
        <p className="text-[18px] font-[500] text-white w-[90%]">
          কোর্স সম্পূর্ণ করার পরে প্রাপ্ত সার্টিফিকেটটি কেবল একটি কাগজের টুকরো
          নয়, বরং এটি আপনার অর্জিত জ্ঞান, দক্ষতা এবং অধ্যবসায়ের প্রমাণ। এই
          সার্টিফিকেট আপনার যোগ্যতার স্বীকৃতি প্রদান করে, যা আপনাকে কর্মক্ষেত্রে
          এগিয়ে নিয়ে যেতে সাহায্য করবে।
        </p>
      </div>
      <Image
        alt="certificate"
        className="md:w-[600px] md:h-[250px] w-full h-full"
        src={"/assets/coursesinglepage/asset25.jpeg"}
        width={600}
        height={420}
      />
    </div>
  );
};

export default CertificateSection;
