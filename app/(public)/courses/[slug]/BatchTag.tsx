export default function BatchTag({ number }: { number: number }) {
  return (
    <div className="relative inline-block">
      <div className="bg-green-600 text-white font-semibold px-5 py-2 rounded-l-md pr-7 text-[16px] leading-[22px] whitespace-nowrap">
        Batch-{number}
      </div>
      <div className="absolute top-0 md:right-0 -right-[1px] w-5 h-full">
        <svg
          viewBox="0 0 10 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#F3F4F6] rotate-[180deg]"
        >
          <polygon points="0,0 10,20 0,40" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
