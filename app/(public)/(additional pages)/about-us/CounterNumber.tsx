import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import React from "react";

const CounterNumber = ({
  title,
  number,
  icon,
}: {
  title: string;
  number: number;
  icon: string;
}) => {
  return (
    <div className="text-[#C0C9EA]">
      <div className="flex items-center gap-2 text-primary  justify-start">
        <CountingNumber
          number={number}
          inView={true}
          className="text-[40px] leading-[50px]  font-[700]  text-center "
          transition={{ stiffness: 100, damping: 30 }}
        />
        <p className="  text-[40px] leading-[50px] text-primary font-bold">
          {icon}
        </p>
      </div>
      <p className="text-[18px] lg:text-[20px] leading-[26px] font-[600] text-[#707070]">
        {title}
      </p>
    </div>
  );
};

export default CounterNumber;
<CountingNumber
  number={42069}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
/>;
