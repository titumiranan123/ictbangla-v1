/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { BiDownload } from "react-icons/bi";

interface prop {
  data: any;
}
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: {
      finalY?: number;
    };
  }
}
const Invoice: React.FC<prop> = ({ data }) => {
  const {
    name,
    email,
    phone,
    createdAt,
    payment_uid,
    payment_method,
    paymentStatus,
    price,
    purchases,
  } = data;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const authorizedSignature = {
    name: "Arif Hossain Rajon",
    title: "Authorised Signature",
  };

  const instituteInfo = {
    name: "ICT Bangla",
    addressLine1: "House 90/2, Link Road, Dhaka 1212",
    phone: "+880 13212-04263",
    email: "info@ictbangla.com",
    website: "www.ictbangla.com",
  };

const downloadPDF = async () => {
  const doc = new jsPDF();

  // Header logo
  doc.addImage(
    "https://i.postimg.cc/k5BWGKT1/footerlogo.png",
    "PNG",
    15,
    10,
    40,
    20
  );

  // Institute info (Right column)
  doc.setFontSize(12);
  const rightStartX = 120;
  doc.text(instituteInfo?.name, rightStartX, 15);
  doc.setFontSize(9);
  doc.text(instituteInfo?.addressLine1, rightStartX, 20);
  doc.text(`Phone: ${instituteInfo?.phone}`, rightStartX, 25);
  doc.text(`Email: ${instituteInfo?.email}`, rightStartX, 30);
  doc.text(`Website: ${instituteInfo?.website}`, rightStartX, 35);

  // Invoice Title
  doc.setFontSize(14);
  doc.text("INVOICE", 15, 50);

  // Left column: Student & Payment info
  doc.setFontSize(10);
  doc.text(`Invoice ID: ${payment_uid}`, 15, 60);
  doc.text(`Date: ${formattedDate}`, 15, 65);
  doc.text(`Student: ${name}`, 15, 70);
  doc.text(`Email: ${email}`, 15, 75);
  doc.text(`Phone: ${phone}`, 15, 80);

  // Course Table
  autoTable(doc, {
    startY: 90,
    head: [["Course Name", "Status", "Amount"]],
    body: purchases?.map((p: any) => [
      p?.course?.basicInfo?.title,
      p?.courseStatus,
      `Tk. ${p?.price}`,
    ]),
    styles: {
      halign: 'left',
      fontSize: 10,
    },
    headStyles: {
      fillColor: [41, 128, 185],
      textColor: 255,
    },
  });

  const finalY = (doc as any)?.lastAutoTable?.finalY || 100;

  // Payment Summary
  doc.text(`Payment Method: ${payment_method}`, 15, finalY + 10);
  doc.text(`Payment Status: ${paymentStatus}`, 15, finalY + 16);
  doc.setFontSize(12);
  doc.text(`Total Paid: Tk.${price}`, 15, finalY + 26);

  // Authorized Signature (Right-bottom)
  doc.setFontSize(10);
  doc.text(authorizedSignature?.name, 150, finalY + 40);
  doc.text(authorizedSignature?.title, 150, finalY + 45);

  // Footer note
  doc.setFontSize(8);
  doc.text(
    "This is a computer-generated invoice and does not require a physical signature.",
    15,
    285
  );

  // Save file
  doc.save(`Invoice_${payment_uid}.pdf`);
};


  return (
    <button onClick={downloadPDF} className="flex items-center justify-center gap-3">
      <BiDownload className="w-5 h-5 text-purple-500" />
      <h3 className="font-medium text-gray-800">Download Receipt</h3>
    </button>
  );
};

export default Invoice;
