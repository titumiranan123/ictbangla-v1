/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { generateInvoicePDF } from "./generateInvoicePDF";
import { FaDownload } from "react-icons/fa";

const InvoiceButton = ({ data }: { data: any }) => {
  const getTitle = (course: any) => {
    const titleArra = course?.map((dt: any) => dt.course?.title)?.join(", ");

    return titleArra;
  };

  const date = data?.createdAt?.split("T")[0];
  const handleDownload = () => {
    generateInvoicePDF({
      name: data?.name,
      phone: data?.phone,
      email: data?.email,
      studentId: data?.studentId ?? null,
      invoiceId: data?.payment_uid,
      invoiceDate: date || new Date().toLocaleDateString(),

      course: data?.title ?? getTitle(data?.purchases) ?? "",
      batch: "n/a",
      classTime: "n/a",
      paymentMethod: data?.payment_method,
      isPaid: data?.paymentStatus === "PAID" ? true : false,
      tableRows: [
        { sl: 1, description: "Additional Fee", amount: 0 },
        { sl: 2, description: "Course Fee", amount: data?.price ?? 0 },
        { sl: 3, description: "Add On Service Fee", amount: 0 },
        { sl: 4, description: "Add Extra Fee", amount: 0 },
        { sl: 5, description: "Description", amount: 0 },
      ],
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-1 text-[16px] bg-green-600 text-white rounded flex items-center gap-4"
    >
      <FaDownload className="text-[14px]" /> Invoice
    </button>
  );
};

export default InvoiceButton;
