import React from "react";

const Projecttabs = () => {
  const data = [
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
    { title: "AI-Powered Email Assistant", status: "" },
  ];

  return (
    <div className="max-w-[882px] w-full bg-neutral rounded-[24px] lg:px-10 px-2 py-3 lg:py-11 ">
      <h2 className="text-text-primary font-[700] text-center text-[32px]">
        যেসব রিয়েল লাইফ প্রজেক্ট করানো হবে
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-6">
        {data.map((dt, idx) => (
          <div
            key={idx}
            className="max-w-[245px]  w-full  h-[71px] border border-[#29AE48]  p-4 rounded-[8px] flex gap-2"
          >
            <p className="font-[700] text-[14px]">{dt.title}</p>
            <p className="max-w-[87px] w-full max-h-[49px] h-full bg-bg-secondary rounded-[8px]"></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projecttabs;
