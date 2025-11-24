/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { api_url } from "@/hooks/apiurl";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Input from "./Input";

interface Props {
  session: any;
  settings: any;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  isDiscount: boolean;
  discount: number;
  percentage: number;
}

interface CartTotals {
  subtotal: number;
  itemDiscount: number;
  couponDiscount: number;
  total: number;
}

export default function CheckoutClient({ session, settings }: Props) {
  const router = useRouter();
  const checkoutItems = useSelector((state: RootState) => state.items);
  const { carts } = checkoutItems;

  const [paymentMethod, setPaymentMethod] = useState<null | string>("SSL_PAY");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [submintloading, setSubmitLoading] = useState(false);

  // 🧾 Calculate totals
  const calculateCartTotals = (): CartTotals => {
    const subtotal = carts.reduce((total, item) => total + item.price, 0);
    const totalDiscount = carts.reduce((total, item) => {
      if (!item.isDiscount) return total;
      return item.percentage > 0
        ? total + item.price * (item.percentage / 100)
        : total + item.discount;
    }, 0);

    const totalBeforeCoupon = subtotal - totalDiscount;
    const total = Math.max(0, totalBeforeCoupon);
    return { subtotal, itemDiscount: totalDiscount, couponDiscount: 0, total };
  };

  const { total } = calculateCartTotals();

  const handlePayment = async () => {
    if (carts.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    try {
      setSubmitLoading(true);
      const payload = {
        name: session ? session.user.first_name : guestName,
        email: session ? session.user.email : guestEmail,
        phone: session ? session.user.phone : guestPhone,
        courses: carts.map((item: CartItem) => ({ courseId: item.id })),
        payment_method: paymentMethod,
      };

      const res = await api_url.post("/v1/website/checkout", payload);
      if (res.status === 201) {
        router.push(res.data.payment_info.payment_url);
      } else {
        toast.error("Payment failed");
      }
    } catch (error: any) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setSubmitLoading(false);
    }
  };
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">চেকআউট</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Payment methods */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-xl font-semibold mb-4">আপনার তথ্যসমূহ</h2>
          {!session && (
            <div className="bg-white p-6 rounded-lg shadow">
              <Input
                label="আপনার নাম "
                value={guestName}
                onChange={setGuestName}
                required
                autoText="name"
              />
              <Input
                label="ইমেইল এড্রেস"
                type="email"
                value={guestEmail}
                onChange={setGuestEmail}
                required
                autoText="email"
              />
              <Input
                label="মোবাইল নম্বর"
                type="tel"
                value={guestPhone}
                onChange={setGuestPhone}
                required
                autoText="tel"
              />
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">পেমেন্ট মেথড</h2>
            {settings?.bkash === "true" && (
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "BAKSH"}
                  onChange={() => setPaymentMethod("BAKSH")}
                />
                <Image
                  src="/assets/payment/bkash.png"
                  width={80}
                  height={40}
                  alt="bkash"
                />
              </div>
            )}
            {settings?.ssl === "true" && (
              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "SSL_PAY"}
                  onChange={() => setPaymentMethod("SSL_PAY")}
                />
                <Image
                  src="/assets/payment/ssl.png"
                  width={80}
                  height={40}
                  alt="ssl"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Order summary */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow sticky top-4">
            <h2 className="text-xl font-semibold mb-4">অর্ডার রিভিউ</h2>
            {carts.map((item: CartItem) => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name}</span>
                <span>Tk {item.price}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
              <span>টোটাল পেমেন্ট:</span>
              <span className="text-primary">Tk {total}</span>
            </div>

            <button
              onClick={handlePayment}
              disabled={submintloading}
              className="w-full bg-primary text-white py-3 mt-4 rounded-lg hover:bg-primary/90"
            >
              {submintloading ? "অপেক্ষা করুন..." : "পেমেন্ট সম্পন্ন করুন"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
