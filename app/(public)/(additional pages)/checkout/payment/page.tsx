import React, { Suspense } from "react";
import PaymentOnline from "./Paymentform";

const Paymentx = () => {
  return (
    <Suspense fallback={<div />}>
      <PaymentOnline />
    </Suspense>
  );
};

export default Paymentx;
