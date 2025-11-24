"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IconImage from "../../(additional pages)/about-us/iconImages";

interface CustomInputFieldProps {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  name: string;
  label: string;
  isPhoneNumberField?: boolean;
  showLabel?: boolean;
  placeholder?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  type,
  value,
  setValue,
  name,
  label,
  isPhoneNumberField = false,
  showLabel = false,
  placeholder = "",
}) => {
  const hasValue = value && value.trim() !== "";
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <>
      {showLabel && (
        <p className="text-[#707070] font-medium text-sm mb-2">{label}</p>
      )}
      <div className="relative w-full">
        {isPhoneNumberField ? (
          <div
            className="relative w-full h-[42px] outline outline-[#29AE48] rounded-md transition-all duration-200
                 focus-within:outline-2 focus-within:outline-[#29AE48]"
          >
            <PhoneInput
              country={"bd"}
              value={value}
              onChange={(phone) => setValue(phone)}
              placeholder={placeholder ?? "phone number"}
              inputClass="!w-full !h-[42px] !bg-transparent !text-[#585858] !text-base
                     !border-none focus:!ring-0 focus:!outline-none placeholder:text-[#29AE48]"
              buttonClass="!bg-[#EAF7ED] !border-none !hover:bg-[#EAF7ED]"
            />
          </div>
        ) : (
          <>
            <input
              id={name}
              type={inputType ?? "text"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={showLabel ? placeholder : ""}
              className={`peer w-full h-[42px]  ${
                showLabel ? "outline-1" : "outline-2"
              } outline-[#29AE48] focus:outline-2 rounded-lg pl-3
                     text-[#585858]  focus:outline-[#29AE48] transition-colors z-30 bg-white  placeholder:text-xs placeholder:text-[#29ae48c2]`}
            />

            {type === "password" && (
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
                type="button"
              >
                <IconImage
                  fileName={
                    showPassword ? "eye_open.svg" : "eye_close_icon.svg"
                  }
                  className={`!h-4 !w-4 absolute ${
                    showLabel ? "bottom-[12px]" : "top-[14px]"
                  } right-4`}
                />
              </button>
            )}

            {!showLabel && (
              <label
                htmlFor={name}
                className={`absolute left-3 bg-white px-0.5 text-xs text-[#29AE48] transition-all duration-300
              ${
                hasValue
                  ? "top-[-7px] text-[10px] text-[#29AE48]"
                  : "top-[13px] text-[#29AE48] text-xs"
              }
              peer-focus:top-[-7px] peer-focus:text-[10px] peer-focus:text-[#29AE48]`}
              >
                {label}
              </label>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CustomInputField;
