import Footer from "@/components/(home)/footer/Footer";
import Navbar from "@/components/(home)/Navbar/Navbar";
import TopBar from "@/components/(home)/Navbar/Topbar";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
