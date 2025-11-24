import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Reduxprovider from "@/components/redux/Reduxprovider";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";
import TrackingLayout from "@/utils/datalayer/TrackingLayout";
import ScrollToTop from "@/components/(home)/shared/ScrollTopTop";
import GTM from "@/components/GTM";

const hind_shiliguri = Hind_Siliguri({
  weight: "400",
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
});

export const metadata: Metadata = {
  title: "HOME | ICT-BANGLA",
  description:
    "ICT BANGLA is a student-run organization at the University of Dhaka, Bangladesh.",
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${hind_shiliguri.className} antialiased bg-white`}>
        <Providers>
          <Reduxprovider>
            <TrackingLayout
              enableGA={true}
              enableGoogleAds={true}
              enableClarity={true}
            >
              {children}
              <GTM />
            </TrackingLayout>
          </Reduxprovider>
        </Providers>
        <ScrollToTop />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
};

export default RootLayout;
