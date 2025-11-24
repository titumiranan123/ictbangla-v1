"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FiHome,
  FiChevronLeft,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiBookOpen,
  FiCalendar,
  FiEdit,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import DashboardNavbar from "@/components/(home)/Navbar/DashboardNavbar";
import { FaCertificate } from "react-icons/fa";

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { href: "/student-dashboard", label: "Dashboard", icon: <FiHome /> },
    { href: "/student-mycourses", label: "My Courses", icon: <FiBookOpen /> },
    { href: "/student-calendar", label: "My Schedule", icon: <FiCalendar /> },
    {
      href: "/student-certificate",
      label: "Certificate",
      icon: <FaCertificate />,
    },
    { href: "/student/blogs", label: "My Blogs", icon: <FiEdit /> },
    { href: "/student-wishlist", label: "Wishlist", icon: <FiHeart /> },
    { href: "/student-order", label: "Order", icon: <FiShoppingCart /> },
    { href: "/student-setting", label: "Setting", icon: <FiSettings /> },
  ];

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success("Logout success");
    router.push("/sign-in");
  };

  return (
    <div className="bg-white min-h-screen">
      <DashboardNavbar />
      <div className="flex max-w-[1536px] gap-5 w-full mx-auto ">
        {/* Desktop Sidebar */}
        <aside
          className={`hidden sticky top-20 h-[calc(100vh-5rem)] md:flex flex-col border-r border-[#d1fadf] bg-white shadow-sm transition-all duration-300 ${
            isOpen ? "w-72" : "w-20"
          }`}
        >
          <div className="flex-1 p-4 flex flex-col">
            <nav className="flex flex-col space-y-1 mt-6">
              {menuItems.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center p-3 rounded-lg transition ${
                    pathname === href
                      ? "bg-[#f6fef9] text-[#1cab55] font-medium border border-[#d1fadf]"
                      : "text-[#1D2939] hover:bg-[#f6fef9] hover:text-[#1cab55]"
                  }`}
                >
                  <span className={`w-5 h-5 ${isOpen ? "mr-3" : "mx-auto"}`}>
                    {icon}
                  </span>
                  {isOpen && <span>{label}</span>}
                </Link>
              ))}
            </nav>

            <div className="mt-auto border-t border-[#d1fadf] pt-4">
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-3 rounded-lg text-[#1D2939] hover:bg-[#f6fef9] hover:text-[#e1242c] transition"
              >
                <FiLogOut
                  className={`w-5 h-5 ${isOpen ? "mr-3" : "mx-auto"}`}
                />
                {isOpen && <span>Logout</span>}
              </button>

              <button
                onClick={toggleSidebar}
                className="w-full mt-4 p-3 rounded-lg hover:bg-[#f6fef9] text-[#1D2939] hover:text-[#1cab55] flex items-center justify-center"
              >
                <FiChevronLeft
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "" : "rotate-180"
                  }`}
                />
                {isOpen && <span className="ml-2">Collapse</span>}
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Button */}
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded bg-white shadow text-[#1D2939] hover:bg-[#f6fef9] hover:text-[#1cab55]"
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed md:hidden z-40 inset-0 transition duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={toggleMobileMenu}
          ></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-white p-4 shadow-lg">
            <nav className="space-y-4 mt-6">
              {menuItems.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center p-3 rounded-lg transition ${
                    pathname === href
                      ? "bg-[#f6fef9] text-[#1cab55] font-medium border border-[#d1fadf]"
                      : "text-[#1D2939] hover:bg-[#f6fef9] hover:text-[#1cab55]"
                  }`}
                >
                  <span className="w-5 h-5 mr-3">{icon}</span>
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-[#d1fadf] pt-4">
              <button
                onClick={handleLogout}
                className="flex items-center w-full p-3 rounded-lg text-[#1D2939] hover:bg-[#f6fef9] hover:text-[#e1242c] transition"
              >
                <FiLogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full md:mt-4 mx-auto px-4 ">{children}</main>
      </div>
      <div className="mt-14 border-t border-[#d1fadf] pt-8 flex justify-center items-center mb-8">
        <p className="text-[14px] text-[#1D2939]">
          © 2025 <span className="text-[#1cab55] font-semibold">Ict</span>
          <span className="text-[#e1242c] font-semibold">Bangla</span>. All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default StudentLayout;
