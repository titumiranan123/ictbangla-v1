/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import QRCode from "qrcode";
import { api_url } from "@/hooks/apiurl";

export default function Certificate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [certUrl, setCertUrl] = useState<string | null>(null);
  const studentInfo = {
    name: "MD TITUMIR ANAN",
    studentId: "ICT-654564",
    batchId: "Canva-98893",
    courseName: "Canva Mastery with AI (🎥 Pre-Recorded)",
    issueDate: new Date("2025-04-01"),
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-03-31"),
    signature: "https://i.postimg.cc/XNtqsFBY/signature.png",
    instructorName: "Arif Rajon",
    instructorDesignation: "Web Developer",
  };

  const generateCertificate = async () => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const width = 3508;
    const height = 2480;
    // const width = 800;
    // const height = 600;

    // Load Google Fonts
    const loadGoogleFonts = async () => {
      const fontLink = document.createElement("link");
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap";
      fontLink.rel = "stylesheet";
      document.head.appendChild(fontLink);

      // Wait for fonts to load
      await document.fonts.ready;

      // Debug: Check if font is available
      if (
        !document.fonts.check('600 40px "Montserrat"') ||
        !document.fonts.check('700 20px "Montserrat"')
      ) {
        console.warn("Montserrat font not loaded properly. Using fallback.");
        ctx.font = "600 40px Arial"; // Fallback font
      }
    };

    await loadGoogleFonts();

    // Background
    const bg = new Image();
    bg.src = "/certificate-template.png";
    await new Promise((resolve) => (bg.onload = resolve));
    ctx.drawImage(bg, 0, 0, width, height);

    // Text
    ctx.fillStyle = "black";
    ctx.font = '600 40px "Montserrat"'; // SemiBold
    ctx.textAlign = "center";
    ctx.fillText(studentInfo.name, 446, 278);
    ctx.font = '700 20px "Montserrat"'; // Bold
    ctx.fillText(studentInfo.courseName, 510, 335);

    // Dates
    ctx.font = '14px "Montserrat"';
    const dates = `${new Date(studentInfo.startDate).toLocaleDateString(
      "en-US",
      { month: "short", day: "2-digit", year: "numeric" }
    )} to ${new Date(studentInfo.endDate).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })}`;
    ctx.fillText(dates, 455, 366);

    // Other details
    ctx.fillText(studentInfo.studentId, 160, 246);
    ctx.fillText(
      `${new Date(studentInfo.issueDate).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })}`,
      160,
      301
    );
    ctx.fillText(studentInfo.batchId, 160, 358);

    // QR code
    const qrDataUrl = await QRCode.toDataURL(
      "https://ictbangla.com/certificates/FF-2401"
    );
    const qr = new Image();
    qr.src = qrDataUrl;
    await new Promise((resolve) => (qr.onload = resolve));
    ctx.drawImage(qr, 124, 410, 70, 70);

    // Canvas to blob
    const blob: Blob = await new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b!), "image/png")
    );

    const formData = new FormData();
    formData.append("images", blob, "certificate.png");

    const response = await api_url.post(
      "v1/user/upload-image-for-blog",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    const data = response?.data?.[0]?.url;
    setCertUrl(data.url);
  };

  // useEffect(() => {
  //   generateCertificate();
  // }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden canvas (only generate) */}
      <canvas
        ref={canvasRef}
        width={3508}
        height={2480}
        className="scale-[.26] hidden"
      ></canvas>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={generateCertificate}
      >
        Generate Certificate
      </button>

      {certUrl && (
        <div className="flex flex-col items-center gap-2">
          <img src={certUrl} alt="Certificate Preview" className="border" />
          <a
            href={certUrl}
            download="certificate.png"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Download Certificate
          </a>
        </div>
      )}
    </div>
  );
}
