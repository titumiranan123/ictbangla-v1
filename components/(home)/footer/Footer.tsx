import React from "react";
import logo from "@/public/assets/footerlogo.png";
import ssl from "@/public/ssl.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const companyLinks = [
    { title: "আমাদের সম্পর্কে", href: "about-us" },
    { title: "যোগাযোগ", href: "contact" },
    // { title: "ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি", href: "/" },
    { title: "শিক্ষক হিসাবে যোগ দিন", href: "/join-as-a-instructor" },
    { title: "প্রাইভেসি পলিসি", href: "/privacy-policy" },
    { title: "রিফান্ড পলিসি", href: "/refund-policy" },
    { title: "টার্মস এবং শর্তাবলি", href: "/terms" },
  ];

  const otherLinks = [
    { title: "আপকামিং লাইভ ব্যাচ", href: "/upcoming-batches" },
    { title: "ব্লগ", href: "/blog" },
    { title: "ফ্রি কোর্সসমূহ", href: "/free-courses" },
    { title: "সাফল্যের গল্প", href: "/our-review" },
    { title: "মেন্টরস", href: "/instructors" },
    // { title: "সার্টিফিকেট ভেরিফাই করুন", href: "/" },
    { title: "আমাদের গ্যালারী", href: "/our-gallery" },
    { title: "আপনার প্রশ্নসমূহ", href: "/faq" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/ictbangla247" },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/ictbangla247/",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/ictbangla247/",
    },
    { icon: <FaYoutube />, href: "https://www.youtube.com/@ictbangla247" },
    { icon: <FaTiktok />, href: "https://www.tiktok.com/@ictbangla247" },
  ];

  return (
    <footer className="mt-10 border-t border-gray-200 lg:pt-16 pt-10 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:gap-8 gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo and Description */}
          <div data-aos="fade-up" data-aos-delay="100">
            <Image
              className="w-[180px] h-auto"
              src={logo}
              alt="ICT Bangla Logo"
              width={200}
              height={60}
              priority
            />
            <p className="text-gray-600 text-base mt-4 font-normal leading-relaxed">
              স্কিল ডেভেলপমেন্টের সেরা সব কোর্স থাকছে এক প্ল্যাটফর্মে। নিজের
              পছন্দের যে কোনো টপিকেই শেখার সুযোগ কারণ এখানে পাচ্ছেন সাশ্রয়ী
              মূল্যে প্রিমিয়াম কোর্সের বিশাল লাইব্রেরি। শুধু সার্টিফিকেটই নয়,
              ICTBangla -তে আপনি পাবেন ইন্ডাস্ট্রি রেডি স্কিল এবং বাস্তবভিত্তিক
              লার্নিং এক্সপেরিয়েন্স যেকোনো সময়, যেকোনো ডিভাইসে খুব সহজে
            </p>
          </div>

          {/* Company Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="text-xl font-semibold mb-5 text-gray-800">
              কোম্পানি
            </h5>
            <ul className="space-y-2">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-base font-normal block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="text-xl font-semibold mb-5 text-gray-800">
              অন্যান্য
            </h5>
            <ul className="space-y-2">
              {otherLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-base font-normal block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h5 className="text-xl font-semibold mb-5 text-gray-800">
              যোগাযোগ
            </h5>
            <div className="space-y-3">
              <div className="flex gap-4 items-center">
                <h6 className="text-gray-600 font-medium">কল করুন:</h6>
                <div className="flex flex-wrap gap-1 ">
                  <Link
                    href="tel:+8801321204263"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    +880 13212-04263
                  </Link>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <h6 className="text-gray-600 font-medium">ইমেইল:</h6>
                <Link
                  href="mailto:info@ictbangla.com"
                  className="text-gray-600 hover:text-primary transition-colors break-all"
                >
                  info@ictbangla.com
                </Link>
              </div>

              <div className="mt-4">
                <h6 className="text-gray-600 font-medium mb-2">
                  সামাজিক মাধ্যম:
                </h6>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <Link
                      key={idx}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      className="rounded-full w-9 h-9 bg-gray-800 hover:bg-primary text-white flex items-center justify-center transition-colors"
                      aria-label={`${social.icon.type.displayName} profile`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className=" pt-10 pb-6 flex flex-col items-center">
          <Image
            src={ssl}
            width={1200}
            height={220}
            alt="SSLCommerz Payment Methods"
            className="md:w-full md:h-auto h-32 object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
