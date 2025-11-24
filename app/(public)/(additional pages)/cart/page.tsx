// app/cart/page.tsx
import Pagetitle from "@/components/(home)/shared/pagetitle";
import ShopCartClient from "./ShopCartClient";

export const metadata = {
  title: "Cart | Royal Education",
  description: "Check your selected courses and proceed to checkout.",
};

export default async function CartPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen md:pb-16 pb-4">
      <Pagetitle
        pageName="Cart"
        pageTitle="পণ্য তালিকা 🛒"
        pagePragraph="আপনার কোর্সসমূহ পর্যালোচনা করুন এবং শেখার যাত্রা শুরু করুন।"
      />

      {/* Client Component */}
      <ShopCartClient />
    </div>
  );
}
