// app/cart/page.tsx
import ShopCartClient from "./ShopCartClient";
import PageHeroSectionWithRings from "@/components/(home)/pageHeroSectionWithRings";

export const metadata = {
  title: "Cart | Royal Education",
  description: "Check your selected courses and proceed to checkout.",
};

export default async function CartPage() {
  return (
    <div className="bg-[#f9f9fa] min-h-screen md:pb-16 pb-4">
      <PageHeroSectionWithRings
        buttonText=""
        subTitle="আপনার কোর্সসমূহ পর্যালোচনা করুন এবং শেখার যাত্রা শুরু করুন।"
        title="পণ্য তালিকা 🛒"
      />

      {/* Client Component */}
      <ShopCartClient />
    </div>
  );
}
