import React, { useState } from "react";
import DropDownSection from "./DropDownSection";

interface PropsType {}

interface courseTypesType {
  key: string;
  label: string;
}

const courseType: courseTypesType[] = [
  { key: "upcoming_batch", label: "আপ-কামিং ব্যাচ" },
  { key: "running_batch", label: "রানিং ব্যাচ" },
  { key: "previous_batch", label: "প্রিভিয়াস ব্যাচ" },
];

const RadioRowForFiltering: React.FC<PropsType> = () => {
  const [selectedCourseType, setSelectedCourseType] = useState<courseTypesType>(
    courseType[0]
  );

  return (
    <DropDownSection
      className="bg-[#F3F4F6] px-4 py-2.5"
      title={
        <span className="flex items-center gap-3 ]">
          <span
            className={`h-4 w-4 rounded-full border border-[#29AE48]
             grid place-items-center`}
          >
            <span className={`h-2.5 w-2.5 rounded-full bg-[#29AE48]`} />
          </span>
          <span
            className={`2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-medium text-black-color`}
          >
            {selectedCourseType?.label}
          </span>
        </span>
      }
      defaultOpen
    >
      <div className="mt-2.5  flex flex-col items-start ">
        {courseType?.map((i) => {
          const isSelected = selectedCourseType.key === i.key;

          return (
            <button
              key={i.key}
              type="button"
              className={`2xl:text-lg text-[16px] 2xl:leading-[20px] leading-[18px] font-medium text-text-neutral border-b border-gray-300 last:border-b-0 w-full text-start py-2 px-[48px]`}
              onClick={() => setSelectedCourseType(i)}
            >
              {i.label}
            </button>
          );
        })}
      </div>
    </DropDownSection>
  );
};

export default RadioRowForFiltering;
