"use client";
import React, { useState } from "react";
import CustomInputField from "./customInputField";

const Courseinput = () => {
  const [mobile_number, setMobileNumber] = useState("");
  return (
    <div className="w-fit">
      <CustomInputField
        value={mobile_number}
        setValue={setMobileNumber}
        name={"mobile_number"}
        label={"মোবাইল নম্বর দিন"}
        // showLabel
        placeholder={"মোবাইল নম্বর দিন"}
      />
    </div>
  );
};

export default Courseinput;
