"use client";

import Script from "next/script";

interface ConversionTrackingProps {
  conversionId: string;
  conversionLabel: string;
  value?: number;
  currency?: string;
  transactionId?: string;
}

const ConversionTracking = ({
  value = 1.0,
  currency = "USD",
  transactionId = "",
}: ConversionTrackingProps) => {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL;
  // Validate required fields
  if (!conversionId || !conversionLabel) {
    console.error("Conversion ID and Label are required");
    return null;
  }

  return (
    <Script
      id="google-ads-conversion"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          gtag('event', 'conversion', {
            'send_to': '${conversionId}/${conversionLabel}',
            'value': ${value},
            'currency': '${currency}',
            'transaction_id': '${transactionId}'
          });
        `,
      }}
    />
  );
};

export default ConversionTracking;
