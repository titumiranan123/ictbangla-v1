"use client";

import Script from "next/script";

const TrackingLayout = ({
  children,
  enableGA = false,
  enableGoogleAds = false,
  enableClarity = false,
}: {
  children: React.ReactNode;
  enableGA?: boolean;
  enableGoogleAds?: boolean;
  enableClarity?: boolean;
}) => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-806824364";

  return (
    <>
      {enableClarity && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ssbl0gizex");
      `,
          }}
        />
      )}
      {/* Google Ads Conversion Tracking Script */}
      {enableGoogleAds && (
        <>
          <Script
            id="google-ads"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=AW-806824364"
          />
          <Script
            id="google-ads-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Analytics Script */}
      {enableGA && (
        <>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-PFXK02Q1CQ"
          />
          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `,
            }}
          />
        </>
      )}

      {children}
    </>
  );
};

export default TrackingLayout;
