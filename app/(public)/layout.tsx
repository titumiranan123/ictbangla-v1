import SmoothFollower from "@/components/(home)/cursor/Followercursor";
import Footer from "@/components/(home)/footer/Footer";
import Navbar from "@/components/(home)/Navbar/Navbar";
import TopBar from "@/components/(home)/Navbar/Topbar";
import FacebookChat from "@/components/(home)/socialbot/Messanger";
import WhatsAppChatLink from "@/components/(home)/socialbot/WhatsappChatbot";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <div className="sticky top-0 z-[20] bg-white transition-all duration-300">
        <TopBar />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-[50] bg-white/70 backdrop-blur-md">
        <Navbar />
      </header>
      {children}
      <Footer />
      <FacebookChat />
      <WhatsAppChatLink />
      <div className="mt-4  border-t pt-4 flex justify-between lg:flex-row flex-col container items-center mb-4">
        <p className="text-[14px]">
          স্বত্ব &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#0F7D3F] font-semibold ">আইসিটি</span>
          <span className="text-[#EE2224] font-semibold">বাংলা</span>. কর্তৃক
          সর্বস্বত্ব সংরক্ষিত
        </p>{" "}
        <p className="text-gray-500 text-sm mb-6 text-center">
          Trade licence Number TRAD/DNCC/002367/2024
        </p>
      </div>
      <SmoothFollower />
    </main>
  );
};

export default RootLayout;
