/* eslint-disable @typescript-eslint/no-explicit-any */

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { numberToWords } from "amount-to-words";

// Logo URL
const logoUrl = "https://i.postimg.cc/k5BWGKT1/footerlogo.png";

export const generateInvoicePDF = async (data: {
  name: string;
  phone: string;
  email: string;
  studentId: string;
  invoiceId: string;
  invoiceDate: string;
  course: string;
  batch: string;
  classTime: string;
  paymentMethod: string;
  isPaid: boolean;
  tableRows: { sl: number; description: string; amount: number }[];
}) => {
  const doc = new jsPDF();

  // ========= 🖼️ HEADER (Two-column with Logo & Info) ============
  const logo = await fetch(logoUrl).then((res) => res.blob());
  const reader = new FileReader();
  reader.readAsDataURL(logo);
  await new Promise((resolve) => (reader.onloadend = resolve));
  const logoBase64 = reader.result as string;

  // Left: Logo
  doc.addImage(logoBase64, "PNG", 14, 10, 40, 15);
  doc.setFontSize(14);
  doc.setTextColor(0, 128, 0);
  doc.text("INVOICE", 14, 32);
  // Right: Org Info
  doc.setFontSize(10);
  doc.setTextColor(0);
  const rightX = 120;
  let rightY = 12;

  doc.text("Phone : +880 1321-204263", rightX, rightY);
  doc.text("Email : info@ictbangla.com", rightX, (rightY += 5));
  doc.text("Web : www.ictbangla.com", rightX, (rightY += 5));
  doc.text("Location : House - 90/2, 5th floor,", rightX, (rightY += 5));
  doc.text("Badda Link Road, Badda, Dhaka", rightX, (rightY += 5));

  // ========= 🧾 INVOICE TITLE ============

  // ========= 👤 Student Info ============
  doc.setFontSize(10);
  doc.setTextColor(0);
  let leftY = 48;
  let rightInfoY = 48;

  // Left column
  doc.text(`Student Name: ${data.name}`, 14, leftY);
  doc.text(`Phone: ${data.phone}`, 14, (leftY += 6));
  doc.text(`Email: ${data.email}`, 14, (leftY += 6));
  doc.text(`Student ID: ${data.studentId ?? "N/A"}`, 14, (leftY += 6));
  doc.text(`Invoice Date: ${data.invoiceDate}`, 14, (leftY += 6));
  doc.text(`Invoice ID: ${data.invoiceId}`, 14, (leftY += 6));

  // Right column
  const courseText = `Course: ${data.course}`;
  const maxWidth = 80; // or adjust as needed
  const lineHeight = 6
  const wrappedText = doc.splitTextToSize(courseText, maxWidth);
  
  // Example Y and X position
  doc.text(wrappedText, rightX, rightInfoY);
  rightInfoY += wrappedText.length * lineHeight
  doc.text(`Batch No: ${data.batch}`, rightX, (rightInfoY += lineHeight));
  doc.text(`Class Time: ${data.classTime}`, rightX, (rightInfoY += lineHeight));
  doc.text(`Payment Method: ${data.paymentMethod}`, rightX, (rightInfoY += lineHeight));
  if (data.isPaid) {
    doc.setTextColor(0, 0, 0); // black
  } else {
    doc.setTextColor(255, 0, 0); // red
  }

  doc.text(
    `Payment: ${data.isPaid ? "PAID" : "UNPAID"}`,
    rightX,
    (rightInfoY += 6)
  );

  // Reset color back to black after this line (optional if more text comes later)
  doc.setTextColor(0, 0, 0);

  // ========= 📊 Table ============
  const tableData = data.tableRows.map((row) => [
    row.sl.toString(),
    row.description,
    `${row.amount} Tk`,
  ]);

  autoTable(doc, {
    startY:  rightInfoY + lineHeight,
    head: [["SL no.", "Description", "Amount"]],
    body: tableData,
    styles: {
      fontSize: 10,
    },
    headStyles: {
      fillColor: [0, 128, 0],
      textColor: 255,
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245],
    },
  });

  // ========= 💰 Summary ============
  const y = (doc as any).lastAutoTable.finalY + 10;
  const total = data.tableRows.reduce((acc, row) => acc + row.amount, 0);
  const paid = data.isPaid ? total : 0;
  const due = total - paid;

  // In Word
  doc.setFontSize(10);
  doc.text(`Taka (In Word): ${numberToWords(total)} Taka Only`, 14, y);

  // Summary Table
  const summaryY = y + 8;
  const summaryX = 145;

  doc.text("Sub Total:", summaryX, summaryY);
  doc.text(`${total} TK`, summaryX + 30, summaryY);

  doc.text("Discount:", summaryX, summaryY + 6);
  doc.text("0 TK", summaryX + 30, summaryY + 6);

  doc.text("Total Amount:", summaryX, summaryY + 12);
  doc.text(`${total} TK`, summaryX + 30, summaryY + 12);

  doc.text("Paid Amount:", summaryX, summaryY + 18);
  doc.text(`${paid} TK`, summaryX + 30, summaryY + 18);

  doc.setTextColor(255, 0, 0);
  doc.text("Due Amount:", summaryX, summaryY + 24);
  doc.text(`${due} TK`, summaryX + 30, summaryY + 24);
  doc.setTextColor(0);

  // ========= 📜 Terms ============
  const termsY = summaryY + 40;
  doc.setFontSize(9);
  doc.text("Terms and Conditions:", 14, termsY);
  doc.text(
    "1. Refunds are not provided, except in exceptional cases.",
    14,
    termsY + 6
  );
  doc.text(
    "2. Certificates will only be issued upon course completion.",
    14,
    termsY + 12
  );
  doc.text(
    "3. Access will be suspended if dues aren't cleared.",
    14,
    termsY + 18
  );
  doc.text(
    "4. ICT Bangla reserves the right to change these terms.",
    14,
    termsY + 24
  );

  // ========= 🔚 Footer ============
  doc.setFontSize(8);
  doc.text(
    "This is an electronically generated document. No signature is required. Created By (Sales Employee Name - mobile number)",
    14,
    290
  );

  // Save
  doc.save(`${data.invoiceId}.pdf`);
};
