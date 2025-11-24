"use client";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function Certificate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generate = async () => {
      const montserratFont = new FontFace(
        "Montserrat",
        "url(/fonts/Montserrat-Bold.ttf)"
      );
      await montserratFont.load();
      const montserratSemi = new FontFace(
        "Montserrat",
        "url(/fonts/Montserrat-SemiBold.ttf)"
      );
      await montserratFont.load();
      await montserratSemi.load();
      document.fonts.add(montserratFont);
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      const width = 800;
      const height = 600;
      const batchId = "ict-98893";

      // background image load
      const bg = new Image();
      bg.src = "/certificate-template.png"; // public ফোল্ডারে রাখবেন
      bg.onload = async () => {
        ctx.drawImage(bg, 0, 0, width, height);
        // text
        ctx.fillStyle = "black";
        ctx.font = "600 22px montserratSemi";
        ctx.textAlign = "center";
        ctx.fillText("Shihab Molla", 366, 278);
        ctx.font = "700 20px Montserrat";
        ctx.fillText("Web Development Course", 440, 335);

        // তারিখ যোগ
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.font = "14px Arial";
        const now = new Date();
        const dates = `${now.toLocaleDateString("en-US", {
          month: "short", // Sep
          day: "2-digit", // 12
          year: "numeric", // 2024
        })} to ${now.toLocaleDateString("en-US", {
          month: "short", // Sep
          day: "2-digit", // 12
          year: "numeric", // 2024
        })}`;

        ctx.fillText(dates, 435, 366);

        // অন্যান্য তথ্য
        ctx.font = "14px Arial";
        ctx.fillText(`ICT-465465`, 160, 246);
        ctx.font = "14px Arial";
        ctx.fillText(
          `${now.toLocaleDateString("en-US", {
            month: "short", // Sep
            day: "2-digit", // 12
            year: "numeric", // 2024
          })}`,
          160,
          301
        );

        // ব্যাচ ID যোগ
        ctx.font = "14px Arial";
        ctx.fillText(`${batchId}`, 160, 358);

        // QR code generate
        const qrDataUrl = await QRCode.toDataURL(
          "https://ictbangla.com/certificates/FF-2401"
        );
        const qr = new Image();
        qr.src = qrDataUrl;
        qr.onload = () => {
          ctx.drawImage(qr, 124, 410, 70, 70);
        };
      };
    };

    generate();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={canvasRef} width={800} height={600}></canvas>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.download = "certificate.png";
          link.href = canvasRef.current!.toDataURL("image/png");
          link.click();
        }}
      >
        Download
      </button>
    </div>
  );
}
