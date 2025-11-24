import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  isActive?: boolean;
  setActive?: (isActive: boolean) => void;
  role?: string; // For better accessibility
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = "",
  isActive,
  setActive,
  role,
}) => {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  const handleClick = () => {
    if (isActive !== undefined && setActive) {
      setActive(!isActive);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative font-medium lg:text-lg text-lg block transition-colors duration-200 ${
        isCurrent
          ? "text-green-500 "
          : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800"
      } ${className}`}
      aria-current={isCurrent ? "page" : undefined}
      role={role}
    >
      {title}
    </Link>
  );
};

export default CustomLink;