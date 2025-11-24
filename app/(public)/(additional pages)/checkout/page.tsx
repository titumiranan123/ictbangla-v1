/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import { api_url } from "@/hooks/apiurl";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import useHomeSetting from "@/hooks/public/useSetting";
import { ImCross } from "react-icons/im";
import Input from "./Input";
import { useUserProfile } from "@/hooks/useUserProfile";

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

export default function CheckoutPage() {
  const router = useRouter();

  const { status, data: logged }: any = useSession();
  const { data: user, refetch: userRefectch } = useUserProfile();
  const [submintloading, setSubmitLoading] = useState(false);
  const [number, setNumber] = useState<string | undefined>();
  const checkoutItems = useSelector((state: RootState) => state.items);
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const { data, isLoading } = useHomeSetting();
  const [paymentMethod, setPaymentMethod] = useState<null | string>("SSL_PAY");
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [isMissingPhone, setPhoneNumber] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<any | null>(null);

  const { carts } = checkoutItems;

  const [laterModal, setLatterModal] = useState(false);
  const [historyId, setHistoryId] = useState("");
  const calculateCartTotals = (): CartTotals => {
    const subtotal = carts.reduce((total, item) => total + item.price, 0);
    const totalDiscount = carts.reduce((total, item) => {
      if (!item.isDiscount) return total;
      return item.percentage > 0
        ? total + item.price * (item.percentage / 100)
        : total + item.discount;
    }, 0);

    const totalBeforeCoupon = subtotal - totalDiscount;

    let couponDiscount = 0;
    if (appliedCoupon?.isValid) {
      couponDiscount = appliedCoupon.discountPrice;
    }

    const total = Math.max(0, totalBeforeCoupon - couponDiscount);

    return {
      subtotal,
      itemDiscount: totalDiscount,
      couponDiscount,
      total,
    };
  };

  const { itemDiscount, couponDiscount, total } = calculateCartTotals();

  const validateCoupon = async (code: string): Promise<any> => {
    // Simulate API call
    const coursid = carts.map((p: any) => p.id);
    if (!coursid) {
      toast.error("Select a course first !!");
      return;
    }
    const res = await api_url.post("/v1/website/verify-coupon", {
      coupon_code: code,
      course_ids: [...coursid],
    });

    if (res.status === 200 || res.status === 201) {
      return {
        message: "Coupon applied successed",
        value: res?.data?.discountPercent,
        discountPrice: res?.data?.updatePricing?.discount_price,
        discountType: "percentage",
        isValid: true,
        code: code,
      };
    } else {
      toast.error("Invalid cuppon code");
    }
  };
  const applyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    setIsApplyingCoupon(true);
    try {
      const couponData = await validateCoupon(couponCode);
      setAppliedCoupon(couponData);

      if (couponData.isValid) {
        toast.success(couponData.message);
      } else {
        toast.error(couponData.message);
      }
    } catch (error: any) {
      console.error(
        "Coupon validation failed:",
        error?.response?.data?.message
      );
      toast.error(error?.response?.data?.message);
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast.success("Coupon removed");
  };

  const validateGuestInfo = (): boolean => {
    if (status === "authenticated") return true;

    if (!guestName.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!guestEmail.trim()) {
      toast.error("Please enter your email");
      setPaymentMethod(null);
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(guestEmail)) {
      toast.error("Please enter a valid email address");
      setPaymentMethod(null);
      return false;
    }

    if (!guestPhone.trim()) {
      toast.error("Please enter your phone number");
      setPaymentMethod(null);
      return false;
    }

    return true;
  };

  // auto send data
  const [hasSentAutoLead, setHasSentAutoLead] = useState(false);
  useEffect(() => {
    if (status !== "authenticated" && !hasSentAutoLead) {
      const isNameFilled = guestName.trim().length > 3;
      const isEmailFilled =
        guestEmail.trim().length > 12 && /^\S+@\S+\.\S+$/.test(guestEmail);
      const isPhoneFilled = guestPhone.trim().length >= 11;
      if (isNameFilled && isEmailFilled && isPhoneFilled) {
        handleAutoSend();
        setHasSentAutoLead(true);
      }
    }
  }, [guestName, guestEmail, guestPhone, status, hasSentAutoLead]);

  const handlePayment = async () => {
    if (!validateGuestInfo()) return;
    if (carts.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (
      (user && (!user.phones || user.phones.length === 0)) ||
      (!user && !guestPhone)
    ) {
      setPhoneNumber(true);
      return;
    }

    // sendLeadEvent();
    if (!paymentMethod) {
      toast.error("Choose a payment method !");
      return;
    }

    try {
      const paymentPayload = {
        name: status === "authenticated" ? logged?.user.first_name : guestName,
        email: status === "authenticated" ? logged?.user?.email : guestEmail,
        phone:
          status === "authenticated" ? logged?.user?.phones?.[0] : guestPhone,
        courses: carts.map((item: CartItem) => ({
          courseId: item.id,
        })),
        payment_method: paymentMethod,
        coupon_code: appliedCoupon?.code || "",
      };
      setSubmitLoading(true);
      const response = await api_url.post(
        "/v1/website/checkout",
        paymentPayload
      );
      setLatterModal(response?.data?.payment_type === "LATTER_PAY");
      if (response?.data?.payment_type === "LATTER_PAY") {
        setHistoryId(response?.data?.createPaymentHistory?._id);
        setSubmitLoading(false);
      }
      if (response.status === 201) {
        if (
          response.data.createPaymentHistory.paymentStatus !== "PAID" &&
          response.data.totalPrice !== 0
        ) {
          router.push(response?.data?.payment_info?.payment_url);
        } else if (
          response.data.createPaymentHistory.paymentStatus === "PAID" &&
          response.data.totalPrice === 0
        ) {
          router.push(
            `/payment/success?transId=${response?.data?.purchasesCourses?.[0]?.payment_uid}`
          );
          toast.success("Purchase complete");
        }
      } else {
        setSubmitLoading(false);
        toast.error(response?.data?.message || "Payment processing failed");
      }
    } catch (error: any) {
      setSubmitLoading(false);
      if (error?.response?.data?.phone_empty) {
        setPhoneNumber(true);
      }
      toast.error(
        error?.response?.data?.message ||
          "Payment failed! Contact support team."
      );
      console.error("Payment error:", error);
    }
  };

  const handleAutoSend = async () => {
    // sendLeadEvent();

    try {
      const paymentPayload = {
        name: status === "authenticated" ? logged?.user.first_name : guestName,
        email: status === "authenticated" ? logged?.user?.email : guestEmail,
        phone: status === "authenticated" ? logged?.user?.phone : guestPhone,
        courses: carts.map((item: CartItem) => ({
          courseId: item.id,
        })),
        payment_method: "LATTER_PAY",
        coupon_code: appliedCoupon?.code || "",
      };

      await api_url.post("/v1/website/checkout", paymentPayload);
    } catch (error: any) {
      console.error("Payment error:", error);
    }
  };

  const onSubmit = async () => {
    try {
      const res = await api_url.patch("/v1/user/update/user-profile", {
        phones: [
          {
            number: number,
            is_verified: true,
            is_primary: true,
          },
        ],
      });

      if (res.status === 201) {
        userRefectch();
        setPhoneNumber(false);
        setNumber("");
        toast.success("Saved 🎊");
      } else toast.error("Failed ! Try agin .");
    } catch (error: any) {
      toast.error("Failed ! Try agin .");
      throw new Error(error.message);
    }
  };

  return (
    <div className="container relative mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">চেকআউট </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Payment Methods */}
        <div className="lg:w-1/2 space-y-6">
          {/* Guest Information */}
          {status !== "authenticated" && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">আপনার তথ্যসমূহ</h2>
              <div className="space-y-4">
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
            </div>
          )}
          <div className="bg-white md:p-6 p-2 md:rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">পেমেন্ট মেথড </h2>

            <div className="space-y-4">
              {isLoading ? (
                <>
                  <div className="flex items-center gap-3 py-1 px-4 border rounded-lg border-primary/20 justify-between  transition-all duration-300 animate-pulse">
                    <div className="bg-secondary py-5 px-20 rounded-lg"></div>
                    <div className="bg-primary/20 rounded-full p-2"></div>
                  </div>
                  <div className="flex items-center gap-3 py-1 px-4 border rounded-lg border-primary/20 justify-between  transition-all duration-300 animate-pulse">
                    <div className="bg-secondary py-5 px-20 rounded-lg"></div>
                    <div className="bg-primary/20 rounded-full p-2"></div>
                  </div>
                  <div className="flex items-center gap-3 py-1 px-4 border rounded-lg border-primary/20 justify-between  transition-all duration-300 animate-pulse">
                    <div className="bg-secondary py-5 px-20 rounded-lg"></div>
                    <div className="bg-primary/20 rounded-full p-2"></div>
                  </div>
                </>
              ) : (
                <>
                  {data?.bkash === "true" && (
                    <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary transition-colors">
                      <input
                        type="radio"
                        id="bkash"
                        name="payment"
                        checked={paymentMethod === "BAKSH"}
                        onChange={() => setPaymentMethod("BAKSH")}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="bkash"
                        className="flex-1 flex items-center gap-4 cursor-pointer"
                      >
                        <Image
                          src="/assets/payment/bkash.png"
                          width={80}
                          height={40}
                          alt="bkash"
                          className="border rounded-lg px-3 py-1"
                          priority
                        />
                      </label>
                    </div>
                  )}

                  {data?.ssl === "true" && (
                    <div className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary transition-colors">
                      <input
                        type="radio"
                        id="SSL_PAY"
                        name="payment"
                        checked={paymentMethod === "SSL_PAY"}
                        onChange={() => setPaymentMethod("SSL_PAY")}
                        className="h-4 w-4 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="SSL_PAY"
                        className="flex-1 cursor-pointer"
                      >
                        <Image
                          src="/assets/payment/ssl.png"
                          width={80}
                          height={40}
                          alt="nogod"
                          className="border rounded-lg"
                          priority
                        />
                      </label>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Order Summary */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow sticky top-4">
            <h2 className="text-xl font-semibold mb-4">অর্ডার রিভিউ</h2>

            {/* Coupon Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                কুপন কোড
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="আপনার  কুপন কোড দিন"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  disabled={isApplyingCoupon || !!appliedCoupon}
                />
                {appliedCoupon ? (
                  <button
                    onClick={removeCoupon}
                    className="bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm hover:bg-gray-200 transition"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={applyCoupon}
                    disabled={isApplyingCoupon}
                    className="bg-primary text-white px-3 py-2 rounded text-sm hover:bg-primary/90 transition disabled:opacity-50"
                  >
                    {isApplyingCoupon ? "Applying..." : "Apply"}
                  </button>
                )}
              </div>
              {appliedCoupon && (
                <p className="text-green-600 text-sm mt-1">
                  {appliedCoupon.message}
                </p>
              )}
            </div>

            {/* Order Items */}
            <div className="divide-y max-h-96 overflow-y-auto">
              {carts.length === 0 ? (
                <p className="py-4 text-gray-500">Your cart is empty</p>
              ) : (
                carts.map((item: CartItem) => (
                  <div key={item.id} className="py-4 flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      {/* {item.isDiscount && (
                        <p className="text-sm text-green-600">
                          {item.percentage > 0
                            ? `${item.percentage}% off`
                            : `Tk ${item.discount} off`}
                        </p>
                      )} */}
                    </div>
                    <div className="text-right">
                      {/* {item.isDiscount ? (
                        <>
                          <p className="text-gray-400 line-through text-sm">
                            Tk {item.price.toFixed(2)}
                          </p>
                          <p className="font-medium">
                            Tk{" "}
                            {item.percentage > 0
                              ? (
                                  item.price *
                                  (1 - item.percentage / 100)
                                ).toFixed(2)
                              : (item.price - item.discount).toFixed(2)}
                          </p>
                        </>
                      ) : ( */}
                      <p>Tk {item.price.toFixed(2)}</p>
                      {/* )} */}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Order Totals */}
            <div className="">
              {itemDiscount > 0 && (
                <div className="flex justify-between text-green-600 border-t">
                  <span> ডিস্কাউন্ট </span>
                  <span>-Tk {itemDiscount.toFixed(2)}</span>
                </div>
              )}

              {appliedCoupon && (
                <div className="flex justify-between text-green-600 border-t">
                  <span>Coupon Discount ({appliedCoupon.code})</span>
                  <span>-Tk {couponDiscount ?? 0}</span>
                </div>
              )}

              <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
                <span>টোটাল পেমেন্ট: </span>
                <span className="text-primary">Tk {total.toFixed(2)}</span>
              </div>

              <div className="sticky bottom-0 left-0 right-0 bg-white pt-4 mt-4 border-t md:static">
                <button
                  onClick={handlePayment}
                  disabled={carts.length === 0 || submintloading}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submintloading
                    ? "অনুগ্রহ করে অপেক্ষা করুন..."
                    : "পেমেন্ট সম্পন্ন করুন"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {laterModal && (
        <div className="fixed inset-0 bg-black/50 w-full h-full flex justify-center items-center ">
          <div className="flex w-[600px] h-[250px] bg-white flex-col items-center justify-center rounded-lg  text-center p-6 relative">
            <ImCross
              className="absolute right-5 top-5 text-red-500"
              onClick={() => setLatterModal(false)}
            />

            <h1 className="text-xl font-semibold mb-4 text-primary">
              আপনার পেমেন্ট এখনও হয়নি।
            </h1>
            <p className="mb-6 text-gray-700">
              কোর্স দেখতে পেমেন্ট সম্পন্ন করুন।
            </p>

            <button
              onClick={async () => {
                try {
                  const res = await api_url.post(
                    "/v1/website/pay-unPayed-purchase",
                    {
                      paymentHistory_id: historyId,
                      payment_method: "SSL_PAY",
                    }
                  );
                  if (res.status === 200 || res.status === 201) {
                    router.push(res?.data?.payment_info?.payment_url);
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
              className="bg-primary/90 text-white px-4 py-2 rounded hover:bg-primary block"
            >
              এখনই পেমেন্ট করুন
            </button>
          </div>
        </div>
      )}
      {isMissingPhone && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed  inset-0 bg-black/50 w-full h-full flex justify-center items-center "
        >
          <div className="flex w-[600px] h-[250px] bg-white flex-col gap-4 items-center justify-center rounded-lg  text-center p-6 relative -mt-72">
            <ImCross
              className="absolute right-5 top-5 text-red-500"
              onClick={() => setPhoneNumber(false)}
            />

            <div>
              <label className="w-1/2" htmlFor="phone">
                কোর্স সম্পর্কিত ইনফরমেশন পেতে আপনার মোবাইল নম্বর লিখুন :
              </label>
              <input
                onChange={(e) => {
                  const number = e.target.value;
                  setNumber(number);
                }}
                value={number}
                type="number"
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
              />
              <button
                onClick={() => onSubmit()}
                type="submit"
                className="bg-primary/90 text-white px-4 py-2 mt-3 rounded hover:bg-primary block"
              >
                সেভ করুন{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
