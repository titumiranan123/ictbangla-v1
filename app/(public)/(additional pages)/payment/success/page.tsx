// app/payment/success/page.tsx
import { Suspense } from "react";

import PaymentSuccessClient from "./Pyamentsuccess";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div />}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
