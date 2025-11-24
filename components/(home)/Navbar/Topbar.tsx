import React from "react";
import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const TopBar: React.FC = () => {
  return (
    <div
      style={{ zIndex: 999 }}
      className="bg-gradient-to-r z-50 from-[#099E47] to-[#29AE48] text-white text-sm md:block hidden"
    >
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <a href="tel:01973173371" className="hover:underline">
                +880 1321-204263
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-white" />
              <a href="tel:+880 1321-204261" className="hover:underline">
                +880 1321-204261
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <a href="mailto:info@ictbangla.com" className="hover:underline">
              info@ictbangla.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
