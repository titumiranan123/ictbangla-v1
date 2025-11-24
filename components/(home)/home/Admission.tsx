import Link from "next/link";
import React from "react";

const Admission = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-full section  flex lg:flex-row flex-col justify-between items-center lg:px-20 py-12 lg:py-0"
      style={{
        backgroundImage: `url(/assets/admission.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "358px",
      }}
    >
      <div className="max-w-[600px] w-full mx-auto flex justify-center items-center flex-col  gap-3">
        <h1 className="text-white">ভর্তি চলছে</h1>
        <p className="text-white text-center">
          ক্যারিয়ার গড়ার সিদ্ধান্ত নিতে আর দেরি নয়। যুক্ত হোন আইসিটি বাংলার
          সাথে। স্কিল ডেভলপ জার্নি শুরু করুন সেরা সব কোর্সে এনরোল করে।
        </p>
        <div className="flex gap-5 md:flex-row  flex-col mt-5">
          <Link
            target="_blank"
            href={"https://www.facebook.com/groups/ictbanglastudentscommunity"}
            className="w-72 py-2 px-5 text-center bg-white rounded-full text-[#3CB449] font-[500] text-xl flex justify-center items-center"
          >
            কমিউনিটিতে ঘুরে আসুন 🚀
          </Link>
          <Link
            href={"/courses"}
            className="w-52  py-2 px-5 text-center border-2 rounded-full text-white font-[500] text-xl flex justify-center items-center"
          >
            ব্রাউজ কোর্স
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admission;
