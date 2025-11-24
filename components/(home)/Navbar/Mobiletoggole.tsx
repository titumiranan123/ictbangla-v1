/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";
import CustomLink from "./CustomLink";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface ToggleProps {
  isActive: boolean;
  setActive: (active: boolean) => void;
}

const MobileToggle: React.FC<ToggleProps> = ({ isActive, setActive }) => {
  const { data: session, status }: any = useSession();
  const path = usePathname();
  const length = useSelector((state: RootState) => state?.items?.carts?.length);
  const [showMoreLinks, setShowMoreLinks] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  const moreLinks = [
    { href: "/about-us", title: "আমাদের সম্পর্কে" },
    { href: "/blog", title: "ব্লগ" },
    { href: "/contact", title: "যোগাযোগ" },
  ];

  const isMoreActive = moreLinks.some((link) => path.startsWith(link.href));

  React.useEffect(() => {
    setMounted(true);

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  // Mobile Menu Content
  const mobileMenuContent = (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: 9999 }}
          className="fixed inset-0 z-[99] lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
            onClick={() => setActive(false)}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-0 left-0 w-[280px] h-full bg-white z-40 shadow-xl"
          >
            <div className="p-6 flex flex-col gap-6 h-full overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActive(false)}
                className="self-end text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close menu"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Menu Items */}
              <nav className="flex flex-col gap-1">
                <div onClick={() => setActive(false)}>
                  <CustomLink href="/" title="হোম" />
                </div>
                <div onClick={() => setActive(false)}>
                  <CustomLink href="/courses" title="সব কোর্স" />
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setShowMoreLinks(!showMoreLinks)}
                    className={`${
                      isMoreActive ? "text-black" : "text-gray-700"
                    } font-medium text-lg flex items-center gap-2 hover:text-primary transition-colors duration-200`}
                  >
                    আরো
                    {showMoreLinks ? (
                      <FaAngleUp className="text-primary" />
                    ) : (
                      <FaAngleDown className="text-primary" />
                    )}
                  </button>

                  <AnimatePresence>
                    {showMoreLinks && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 bg-gray-50 p-3 rounded-lg flex flex-col gap-3 overflow-hidden"
                      >
                        {moreLinks.map((link) => (
                          <div key={link.href} onClick={() => setActive(false)}>
                            <CustomLink
                              href={link.href}
                              title={link.title}
                              className="hover:text-primary transition-colors duration-200"
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/cart"
                  className="relative flex items-center gap-2 text-gray-700 hover:text-primary transition-colors duration-200 py-1"
                  onClick={() => setActive(false)}
                  aria-label="Shopping Cart"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z" />
                    </svg>
                    {length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary rounded-full text-white flex justify-center items-center text-xs h-5 w-5">
                        {length}
                      </span>
                    )}
                  </div>
                </Link>
              </nav>

              {/* User Section */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                {status === "authenticated" ? (
                  <Link
                    href={
                      session?.user?.role === "USER"
                        ? "/student-dashboard"
                        : "/instructor-dashboard"
                    }
                    className="flex items-center gap-3 group"
                    onClick={() => setActive(false)}
                  >
                    {session?.user?.image ? (
                      <Image
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-primary transition-all duration-200"
                        src={session?.user?.image}
                        alt={session?.user?.name || "User"}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium border-2 border-gray-200 group-hover:border-primary transition-all duration-200">
                        {session?.user?.name?.charAt(0) || "U"}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900">
                        {session?.user?.name || "User"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {session?.user?.role === "USER"
                          ? "Student"
                          : "Instructor"}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/sign-in"
                      className="py-2 px-4 rounded-md text-center font-medium text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-md"
                      onClick={() => setActive(false)}
                    >
                      লগ ইন
                    </Link>
                    <Link
                      href="/sign-up"
                      className="py-2 px-4 rounded-md text-center font-medium text-primary border border-primary hover:bg-gray-50 transition-all duration-200"
                      onClick={() => setActive(false)}
                    >
                      রেজিস্টার
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-4">
        <div className="flex items-center gap-3 ml-2">
          {status === "loading" ? (
            <div className="flex gap-2">
              <div className="w-20 h-9 bg-gray-100 animate-pulse rounded-md" />
            </div>
          ) : status === "authenticated" ? (
            <Link
              href={
                session?.user?.role === "USER"
                  ? "/student-dashboard"
                  : "/instructor-dashboard"
              }
              className="flex items-center gap-2 group"
              aria-label="User dashboard"
            >
              {session?.user?.image ? (
                <Image
                  className="w-9 h-9 rounded-full object-cover border-2 border-gray-100 group-hover:border-primary transition-all duration-200"
                  src={session?.user?.image ?? ""}
                  alt={session?.user?.name || "User"}
                  width={36}
                  height={36}
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-medium border-2 border-gray-100 group-hover:border-primary transition-all duration-200">
                  {session?.user?.name?.charAt(0) || "U"}
                </div>
              )}
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="py-2 px-4 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark transition-all duration-200 shadow-md hover:shadow-lg"
            >
              লগ ইন
            </Link>
          )}
        </div>
      </div>

      {/* Portal for Mobile Menu */}
      {mounted && createPortal(mobileMenuContent, document.body)}
    </>
  );
};

export default MobileToggle;
