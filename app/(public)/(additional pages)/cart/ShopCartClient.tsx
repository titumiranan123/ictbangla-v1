/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CartItem from "@/components/(home)/cart/Cartitem";
import Button from "@/components/(home)/shared/Button";
import { generateEventId, pushToDataLayer } from "@/lib/Googletagm";
import { removeFromCart, setCheckOutCart } from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import { generateExternalId, genFbp } from "@/utils/datalayer/DataCookie";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import { getClientIP } from "@/utils/datalayer/IpReturn";
import { makeHash } from "../checkout/makeHash";

interface CartItemType {
  id: string;
  name: string;
  slug: string;
  price: number;
  isDiscount: boolean;
  discount: number;
  percentage: number;
  thumbnail: string;
}

const ShopCartClient = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cart, setCart] = useState<CartItemType[]>([]);
  const carts = useSelector((state: RootState) => state?.items?.carts);
  const { data: logged, status }: any = useSession();

  useEffect(() => {
    setCart(carts);
  }, [carts]);

  const calculateCartTotals = () => {
    const subtotal = cart?.reduce((total, item) => total + item?.price, 0);

    const totalDiscount = cart?.reduce((total, item) => {
      if (item?.isDiscount) {
        if (item.percentage) {
          return total + item?.price * (item?.percentage / 100);
        } else {
          return total + item?.discount;
        }
      }
      return total;
    }, 0);

    const total = subtotal - totalDiscount;
    return { subtotal, totalDiscount, total };
  };

  const { subtotal, totalDiscount, total } = calculateCartTotals();

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = async () => {
    if (!cart || cart.length === 0) {
      toast.error(
        "Your cart is empty. Please add some courses before checking out."
      );
      return;
    }

    const totalValue = cart.reduce(
      (sum, item) => sum + (item.price - item.discount),
      0
    );

    pushToDataLayer({
      event: "InitiateCheckout",
      currency: "BDT",
      event_id: generateEventId(),
      content_ids: cart.map((item) => item.slug),
      content_name: cart.map((item) => item.name),
      content_type: "course",
      value: totalValue,
      num_items: cart.length,
      name:
        status === "authenticated"
          ? await makeHash(
              `${logged?.user.first_name} ${logged?.user.last_name}`
            )
          : null,
      email:
        status === "authenticated" ? await makeHash(logged?.user?.email) : null,
      phone:
        status === "authenticated"
          ? await makeHash(logged?.user?.phones?.[0])
          : null,
      fbp: genFbp(),
      fbc: null,
      click_id: null,
      external_id: logged?.user?._id ?? generateExternalId(),
      client_ip_address: await getClientIP(),
    });

    dispatch(setCheckOutCart(cart));
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto flex md:gap-8 gap-2 lg:flex-row flex-col mt-10">
      {/* Cart Items */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm md:p-6 p-2">
          <h2 className="md:text-xl text-lg font-semibold text-[#1a2e35] mb-6">
            আপনার পণ্য তালিকা ({cart?.length})
          </h2>

          {cart?.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#4b5563] mb-4">
                বর্তমানে আপনার পণ্য তালিকা শুন্য
              </p>
              <div onClick={() => router.push("/courses")}>
                <Button className="btn-outline" title="আরও কোর্স নিতে" />
              </div>
            </div>
          ) : (
            <>
              <div className="hidden md:grid grid-cols-12 gap-4 bg-[#f6fef9] p-4 rounded-lg mb-4">
                <div className="col-span-6 font-medium text-[#374151]">
                  Item
                </div>
                <div className="col-span-3 font-medium text-[#374151] text-center">
                  Price
                </div>
                <div className="col-span-3 font-medium text-[#374151] text-center">
                  Action
                </div>
              </div>

              <div className="space-y-4">
                {cart?.map((item) => (
                  <CartItem key={item?.id} {...item} removeItem={removeItem} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:w-96 w-full bg-white lg:p-6 p-2 rounded-lg shadow-sm h-fit">
        <div className="space-y-4">
          <h2 className="md:text-xl text-lg font-semibold text-[#1a2e35]">
            আপনার পেমেন্ট ও অর্ডার তথ্য
          </h2>
          <div className="flex justify-between">
            <span>সাবটোটাল</span>
            <span className="font-medium">Tk {subtotal?.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>ডিস্কাউন্ট </span>
            <span className="font-medium text-[#29AE48]">
              -Tk {totalDiscount?.toFixed(2)}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
            <span>সর্বমোট </span>
            <span className="text-[#29AE48]">Tk {total?.toFixed(2)}</span>
          </div>

          <div onClick={handleCheckout} className="mt-5">
            <Button className="btn-primary w-full" title="পেমেন্ট করুন " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCartClient;
