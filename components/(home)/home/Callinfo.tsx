import React from "react";

const Callinfo = () => {
  return (
    <div
    data-aos="fade-up" data-aos-delay="200"
      style={{
        backgroundImage: `url(/assets/callbg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="section max-w-[800px] min-h-[200px] overflow-hidden h-auto w-full mx-auto rounded-[30px] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-14 lg:py-14 px-6 py-8"
    >
      {/* Phone Info */}
      <div className="text-center lg:text-left">
        <p className="text-white text-xl mb-1 lg:text-right text-center">কল করুন</p>
        <h1 className="text-white text-2xl lg:text-3xl font-bold text-right"> +880 13212-04263</h1>
      </div>

      {/* Divider Circle */}
      <div className="flex items-center justify-center bg-white h-20 w-20 rounded-full border-[10px] border-[#73e28f] shrink-0">
        <span className="text-black font-bold text-xl">অথবা</span>
      </div>

      {/* Email Info */}
      <div className="text-center lg:text-left">
        <p className="text-white text-xl">ইমেইল করুন</p>
        <h1 className="text-white text-2xl lg:text-3xl font-bold">info@ictbangla.com</h1>
      </div>
    </div>
  );
};

export default Callinfo;