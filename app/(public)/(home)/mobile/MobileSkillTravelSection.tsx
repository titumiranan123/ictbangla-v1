const MobileSkillTravelSection = () => {
  return (
    <>
      <div className="sectionGap w-full max-w-[310px] mx-auto">
        <h2 className="text-2xl font-bold  text-[#29AE48] text-center mb-8">
          দক্ষতার যাত্রা, <br /> ICTBangla-তে কেন ?
        </h2>
        <div className="space-y-8 mt-10 md:space-y-10">
          <TextSection
            title="দেশসেরা ইন্সট্রাক্টরদের গাইডেন্স"
            description="বাস্তব অভিজ্ঞতা সম্পন্ন প্রশিক্ষকদের সরাসরি গাইডলাইন ও
হাতে-কলমে দক্ষতার নিশ্চয়তা"
          />
          <TextSection
            title="কর্পোরেট বা ফ্রিল্যান্সিং ডিমান্ডিং কোর্স"
            description="জব মার্কেট বা ফ্রিল্যান্সিং প্ল্যাটফর্মের চাহিদা অনুযায়ী
প্রজেক্ট-ভিত্তিক স্কিল ডেভেলপমেন্ট"
          />
          <TextSection
            title="প্রফেশনাল নেটওয়ার্কিং"
            description="লার্নিং ও ক্যারিয়ার গ্রোথে সহায়ক কমিউনিটি যেখানে
স্টুডেন্ট টু প্রফেশনাল সব এক জায়গায়"
          />
        </div>
      </div>
    </>
  );
};

const TextSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <h4 className="text-[20px] font-bold text-black-color mb-2">{title}</h4>
      <p className="text-sm font-medium text-[#8A8A8A]">{description}</p>
    </div>
  );
};

export default MobileSkillTravelSection;
