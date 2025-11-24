import Image from "next/image";
import React from "react";
import AboutSteps from "./GoalStep";

const OurGoal = () => {
  return (
    <div className="container sectionGap">
      <div className=" lg:bg-neutral rounded-[24px] lg:border border-primary md:px-10 md:py-10 px-5 py-4 flex gap-10 justify-between flex-col lg:flex-row">
        <div className="w-full hidden lg:block">
          <Image
            src={"/assets/goal.png"}
            alt="helo"
            width={727}
            height={501}
            className="rounded-[24px] size-full object-cover"
          />
        </div>

        <div className="w-full lg:hidden bg-[#F3F4F6] rounded-2xl pt-4 pb-[54px] px-2">
          <h3 className="text-2xl text-primary font-bold text-center mb-4">আমাদের লক্ষ্য</h3>
          <p className="text-[#8A8A8A] font-medium leading-[22px] text-center ">
            স্মার্ট লার্নিং সুবিধায় আপনার ফিউচার গড়তে ICTBangla আপনাদের সাথে। স্কিল ডেভেলপমেন্টের
            মাধ্যমে জব রেডি করে তোলা। আমাদের এই অনলাইন প্ল্যাটফর্মে আপনি পাবেন বাস্তবভিত্তিক ও
            ইন্ডাস্ট্রি-রেডি কোর্স, যা তৈরি করা হয়েছে অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে। প্রতিটি কোর্স
            শেষে আমাদের আছে জব প্লেসমেন্টের সুবিধা, যেনো শুধু শেখাতেই সীমাবদ্ধ না থেকে ক্যারিয়ারও
            শুরু করতে পারেন।
          </p>
        </div>

        <div className="bg-white rounded-[10px] lg:rounded-[24px] flex w-full border border-[#8A8A8A] p-4 lg:p-8 relative">
          {/* Left dashed line */}
          <div className="absolute left-[7.5%] lg:left-[8.9%] top-[60px] bottom-[60px] border-l-2 border-dashed border-[#D2D8D3]"></div>

          {/* Steps section */}
          <AboutSteps />
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
