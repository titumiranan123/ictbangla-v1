import Image from "next/image";
import React from "react";
import IconImage from "./iconImages";

const AboutHeader = () => {
  return (
    <div className="bg pb-24">
      <style>
        {`
          .bg{
            background: linear-gradient(360deg, #F0FFF4 0%, #FFFFFF 100%);
          }
          `}
      </style>
      <div className="container flex flex-col gap-2">
        <h2 className="text-[#29AE48] font-[700] text-2xl md:text-[40px] text-center md:text-start ">
          আমাদের সম্পর্কে
        </h2>

        <div className="mt-4 space-y-4">
          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A] flex lg:items-center flex-col md:flex-row lg:gap-2 ">
            বর্তমান সময়ের অন্যতম জনপ্রিয় অনলাইন শিক্ষা প্ল্যাটফর্ম{" "}
            <span className="flex items-center gap-3 text-[#29AE48]">
              ICTBangla.com{" "}
              <IconImage
                fileName="Link-icon-green.svg"
                className="!h-[18px] !w-[18px]"
              />{" "}
            </span>
          </p>
          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A] ">
            ICTBangla.com-এর যাত্রা শুরু হয়েছিল ২০১৮ সালে। শুরুটা যদিও
            প্রাথমিকভাবে ডোমেইন-হোস্টিং এবং বাল্ক এসএমএস মার্কেটিং দিয়ে হয়েছিলো,
            তবে ২০২৪ সালে মাজাদুর রহমান রবিন-এর নেতৃত্বে ICTBangla পুনরায়
            প্রতিষ্ঠিত হয় এবং লক্ষ্য একটাই থাকে বিশ্বব্যাপী সবার নিকট আইটি
            শিক্ষাকে সহজ করে তোলা এবং ক্যারিয়ার ডেভেলপ করতে সাহায্য করা।
          </p>
        </div>

        <div className="mt-11 space-y-4">
          <h2 className="text-[#29AE48] font-[700] md:text-[18px] text-[16px] ">
            আমাদের প্রতিষ্ঠাতা
          </h2>
          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A]">
            এঞ্জেল ইনভেস্টর ও ব্যবসায়ী জনাব রাফিদ আহসান নূর প্রতিষ্ঠাতা হিসেবে
            এবং সহ-প্রতিষ্ঠাতা জনাব আরিফ এম রাজন যোগদানের মাধ্যমে ২০২৪ সালের জুন
            মাসে ICTBangla.com সরকারি অনুমোদন নিয়ে আনুষ্ঠানিকভাবে যাত্রা শুরু
            করে, যা আরও বিশ্বাসযোগ্যতা অর্জন করে এগিয়ে যায়। আধুনিক স্কিল
            ডেভেলপমেন্ট কোর্স, রিয়েল লাইফ প্রজেক্ট ও ইন্ডাস্ট্রি-এক্সপার্ট
            মেন্টরদের মাধ্যমে আমরা তরুণ প্রজন্মকে তৈরি করছি আগামী দিনের চাকরি ও
            ফ্রিল্যান্সিং মার্কেটের জন্য।
          </p>
        </div>

        <div className="mt-5 space-y-4">
          <h2 className="text-[#29AE48] font-[700] md:text-[18px] text-[16px] ">
            আমাদের বিশ্বাস এবং লক্ষ্য
          </h2>
          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A]">
            সঠিক গাইডলাইন, দক্ষতা ও সুযোগ থাকলে সবাই সফলতার জার্নিতে এগিয়ে যায়।
          </p>
          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A]">
            স্মার্ট লার্নিং সুবিধায় আপনার ফিউচার গড়তে ICTBangla আপনাদের সাথে।
            স্কিল ডেভেলপমেন্টের মাধ্যমে জব রেডি করে তোলা। আমাদের এই অনলাইন
            প্ল্যাটফর্মে আপনি পাবেন বাস্তবভিত্তিক ও ইন্ডাস্ট্রি-রেডি কোর্স, যা
            তৈরি করা হয়েছে অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে। প্রতিটি কোর্স শেষে
            আমাদের আছে জব প্লেসমেন্টের সুবিধা, যেনো শুধু শেখাতেই সীমাবদ্ধ না
            থেকে ক্যারিয়ারও শুরু করতে পারেন।
          </p>
        </div>

        <div className="mt-5 space-y-2 md:space-y-4 text-center md:text-start">
          <h2 className="text-[#29AE48] font-[700] md:text-[18px] text-[16px]  ">
            চাকরি কিংবা ফ্রিল্যান্সিংয়ে ইন্টারেস্টেড?.
          </h2>

          <p className="md:text-[18px] text-[16px] font-[500] text-[#8A8A8A] ">
            তাহলে আমাদের কোর্সগুলো আপনার জন্যই।
          </p>
        </div>
      </div>
      <div className=" lg:mt-20 mt-10 container">
        <h2 className="md:text-[40px] text-[24px] font-bold text-center text-[#29AE48] ">
          আমাদের ফাউন্ডিং টিম
        </h2>
        <div className="flex justify-center items-center gap-10 lg:gap-10 md:flex-row flex-wrap lg:mt-20 mt-10">
          <div className="flex flex-col ">
            <Image
              src={"/assets/media-1.png"}
              alt="ceo"
              width={255}
              height={255}
              className="mx-auto"
            />
            <h2 className="text-[#8A8A8A] font-[700] mt-4 md:text-[20px] text-[16px] text-center">
              Majadur Rahaman Robin
            </h2>
            <p className="text-[#29AE48] font-[700] md:text-[24px] text-[18px] text-center">
              FOUNDER & CEO
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/assets/media-2.png"}
              alt="ceo"
              width={255}
              height={255}
              className="mx-auto"
            />
            <h2 className="text-[#8A8A8A] font-[700] mt-4 md:text-[20px] text-[16px] text-center">
              Arif M Rajon
            </h2>
            <p className="text-[#29AE48] font-[700] md:text-[24px] text-[18px]  text-center">
              CBO
            </p>
          </div>{" "}
          <div>
            <Image
              src={"/assets/media-3.png"}
              alt="cto"
              width={255}
              height={255}
              className="mx-auto"
            />
            <h2 className="text-[#8A8A8A] font-[700] mt-4  md:text-[20px] text-[16px] text-center">
              MD Kuhel Ahmed
            </h2>
            <p className="text-[#29AE48] font-[700] md:text-[24px] text-[18px] text-center">
              CTO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
