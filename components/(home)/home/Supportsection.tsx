import React from "react";

const Supportsection = () => {
  return (
    <>
      <noscript>
        <style>{`
          [data-aos] {
            opacity: 1 !important;
            transform: none !important;
          }
        `}</style>
      </noscript>
      <section
        data-aos="fade-up"
        data-aos-delay="200"
        className="w-full section container flex lg:flex-row flex-col justify-between items-center lg:px-16 py-12 lg:py-16 rounded-[20px]"
        style={{
          backgroundImage: `url(/assets/support.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "288px",
        }}
      >
        <div className="flex flex-col mb-8 lg:mb-0 lg:max-w-[55%] px-4 lg:px-0">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-2 lg:mb-3">
            আপডেট সব অফার ও নতুন কোর্স জানতে{" "}
            <span className="text-[#3CB449]">সাবস্ক্রাইব</span> করুন।
          </h1>
          <p className="text-white text-base md:text-lg opacity-90">
            দক্ষতা অর্জনের নতুন দিগন্ত উন্মোচন করুন, আপনার পছন্দের যেকোনো সময়,
            যেকোনো বিষয় শিখুন।
          </p>
        </div>

        <div className="w-full lg:w-auto px-4 lg:px-0 max-w-lg lg:max-w-none">
          <form className="flex flex-col lg:flex-row gap-0 lg:gap-0 bg-white rounded-lg overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="আপনার  ইমেইল  লিখুন "
              required
              aria-label="Email for subscription"
              className="w-full px-6 py-4 focus:outline-none text-gray-800 placeholder-gray-500 bg-white"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#099E47] to-[#29AE48] hover:from-[#088c3d] hover:to-[#1f9a3d] py-4 px-6 lg:w-64 text-white uppercase font-semibold transition-colors duration-300 before:absolute before:right-0 before:-top-2 before:h-[80px]  before:w-6 before:translate-x-20 before:rotate-[20deg]  before:bg-white before:opacity-60 before:blur-[3px] before:duration-700 hover:before:-translate-x-56 relative before:content-['']"
            >
              সাবস্ক্রাইব
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Supportsection;
