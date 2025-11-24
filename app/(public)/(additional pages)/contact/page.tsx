import ContactFrom from "@/components/(home)/contact/ContactFrom";
import Pagetitle from "@/components/(home)/shared/pagetitle";
import React from "react";
import location from "@/public/assets/icon/land-layer-location.svg";
import call from "@/public/assets/icon/circle-phone.svg";
import timer from "@/public/assets/icon/clock-three.svg";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "যোগাযোগ | আইসিটি বাংলা",
  description:
    "আইসিটি বাংলা টিমের সাথে যোগাযোগ করুন। প্রশ্ন, মতামত বা সহায়তার জন্য আমাদের সাথে সংযুক্ত হোন।",
};
const Contact = () => {
  return (
    <div className="">
      <Pagetitle
        pageName="যোগাযোগ "
        pagePragraph="প্রশিক্ষক হোন এবং নিজের ও অন্যের জীবন বদলে দিন"
        pageTitle="শেখার যাত্রায় যুক্ত হোন"
      />
      <section className="px-2">
        <div id="contact-information" className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:mt-[120px] mt-[80px]">
            {/* Location Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="relative mb-6">
                <div className="relative  p-3  before:absolute before:top-[30%] before:left-[6%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20">
                  <Image
                    src={location}
                    alt="Location icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">প্রাতিষ্ঠানিক ঠিকানা</h2>
              <address className="not-italic text-gray-700">
                House 90/2, Gulshan Badda Link Rd
                <br />
                Dhaka 1212, Bangladesh
              </address>
            </div>

            {/* Contact Info Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="relative mb-6">
                <div className=" before:absolute before:top-[30%] before:left-[8%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20 p-3 ">
                  <Image
                    src={call}
                    alt="Contact icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">যোগাযোগের বিবরণ </h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <a
                    href="tel:+8801973173371"
                    className="hover: text-primary  transition-colors"
                  >
                    +880 1321-204263
                  </a>
                </p>
                <p className="text-gray-700">
                  <a
                    href="mailto:info@ictbangla.com"
                    className="hover: text-primary  transition-colors"
                  >
                    info@ictbangla.com
                  </a>
                </p>
              </div>
            </div>

            {/* Work Hours Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <div className="relative mb-6">
                <div className="relative  p-3  before:absolute before:top-[30%] before:left-[10%] before:w-16 before:h-16 before:bg-secondary before:rounded-full before:-z-10 z-20 ">
                  <Image
                    src={timer}
                    alt="Clock icon"
                    width={44}
                    height={44}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium mb-4">অফিস কার্যক্রম</h2>
              <p className="text-gray-700">
                সকাল ১০:০০ টা – সন্ধ্যা ৬:০০ টা
                <br />
                <span className="text-sm text-gray-500">
                  শনিবার – বৃহস্পতিবার
                </span>
              </p>
            </div>
          </div>
        </div>
        <ContactFrom />

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="lg:mt-[120px] mt-[80px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0445800490224!2d90.4241282!3d23.781426799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e71e2bdff5%3A0xf5fdbf2c0c3d3b44!2sICTBangla.com!5e0!3m2!1sen!2sbd!4v1748354176608!5m2!1sen!2sbd"
            width="100%"
            height="450"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
