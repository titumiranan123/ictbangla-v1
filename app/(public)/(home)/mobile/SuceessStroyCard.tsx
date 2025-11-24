import Image from "next/image";
import React from "react";
import IconImage from "../../(additional pages)/about-us/iconImages";

const SuceessStroyCard = () => {
  return (
    <div className="border border-primary rounded-2xl px-6 py-4">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/demo-images/demo_student_image.png"
          height={48}
          width={48}
          alt="ictbangla"
          className="size-12 rounded-full border-2 border-primary"
        />
        <div>
          <div className="flex items-center gap-1 mb-1">
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
            <IconImage fileName="star_icon.svg" className="!w-4 !h-4" />
          </div>
          <button
            className="px-2 py-1 rounded-sm border border-dashed border-primary text-primary text-[8px] flex items-center gap-2 font-bold"
            type="button"
          >
            <IconImage
              fileName="stylished_check.svg"
              className="!w-[13px] !h-[13px]"
            />
            <span>Batch : 2025-01</span>
          </button>
          <h6 className="text-base font-bold text-black-color">
            মোঃ আবু সাঈদ মোল্লা
          </h6>
          <p className="text-[8px] font-bold text-[#707070]">
            Digital Marketing expert
          </p>
        </div>
      </div>

      <div className="mt-9">
        <Image
          src="/assets/demo-images/demo_video_cart_image.jpg"
          alt="ict bangla"
          height={162}
          width={337}
          className="w-full h-[162px]  rounded-2xl object-fill"
        />
      </div>
    </div>
  );
};

export default SuceessStroyCard;
