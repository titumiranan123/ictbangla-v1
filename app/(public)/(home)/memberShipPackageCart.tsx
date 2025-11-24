import React from "react";
import IconImage from "../(additional pages)/about-us/iconImages";

interface PropsType {
  packageType: string;
  duration: string;
  price: string | number;
  memberShipFeatures: { _id: string | number; text: string }[];
}

const MemberShipPackageCart: React.FC<PropsType> = ({
  packageType,
  price,
  duration,
  memberShipFeatures,
}) => {
  return (
    <div className="p-6 rounded-2xl border border-primary member-ship-cart-bg w-full max-w-[330px]">
      <div className="h-[166px] w-full max-w-[282px] bg-[#BDDAFF] rounded-lg"></div>
      <h4 className="mt-7 text-black-color font-bold text-[18px]">
        {packageType}
      </h4>
      <h3 className="mt-6 text-[32px] font-bold text-black-color flex items-center gap-2">
        ৳ {price}{" "}
        <span className="text-sm font-medium !text-[#707070]">
          / {duration}
        </span>
      </h3>
      <div className="mt-9 space-y-5 mb-20">
        {memberShipFeatures?.map((item) => (
          <div key={item?._id} className="flex items-center gap-2">
            <IconImage fileName="check_mark_icon.svg" className="!h-5 !w-5" />{" "}
            <p className="text-sm font-medium text-black-color">{item?.text}</p>
          </div>
        ))}
      </div>
      <button type="button" className="button-primary">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default MemberShipPackageCart;
