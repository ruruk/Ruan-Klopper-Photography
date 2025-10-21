import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default:
      "Ruan Klopper Photography | Professional Photographer in Pretoria, South Africa",
    template: "%s | Ruan Klopper Photography",
  },
  description:
    "Professional photographer Ruan Klopper specializes in product photography, advertising campaigns, portraits, and studio sessions in Pretoria, South Africa. Cinematic lighting and creative composition.",
  keywords: [
    "photographer",
    "photography",
    "product photography",
    "advertising photography",
    "portrait photography",
    "studio photography",
    "commercial photography",
    "Pretoria photographer",
    "South Africa photographer",
    "cinematic photography",
    "professional photographer",
    "brand photography",
    "fashion photography",
    "on-location photography",
  ],
  authors: [{ name: "Ruan Klopper" }],
  creator: "Ruan Klopper",
  publisher: "Ruan Klopper Photography",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fotografie.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://fotografie.site",
    siteName: "Ruan Klopper Photography",
    title: "Ruan Klopper Photography | Professional Photographer in Pretoria",
    description:
      "Professional photographer specializing in product photography, advertising campaigns, portraits, and studio sessions in Pretoria, South Africa.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Ruan Klopper Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Klopper Photography | Professional Photographer in Pretoria",
    description:
      "Professional photographer specializing in product photography, advertising campaigns, portraits, and studio sessions in Pretoria, South Africa.",
    images: ["/opengraph.png"],
    creator: "@ruan.klopper.photography",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ruan Klopper Photography",
    description:
      "Professional photographer specializing in product photography, advertising campaigns, portraits, and studio sessions in Pretoria, South Africa.",
    url: "https://fotografie.site",
    logo: "https://fotografie.site/icon.png",
    image: "https://fotografie.site/opengraph.png",
    telephone: "+27 66 207 2937",
    email: "ruan@ruanklopper.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressCountry: "South Africa",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.7479",
      longitude: "28.2293",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    serviceType: [
      "Product Photography",
      "Advertising Photography",
      "Portrait Photography",
      "Studio Photography",
      "Commercial Photography",
      "Fashion Photography",
    ],
    sameAs: [
      "https://instagram.com/ruan.klopper.photography",
      "https://wa.me/27662072937",
    ],
    founder: {
      "@type": "Person",
      name: "Ruan Klopper",
      jobTitle: "Professional Photographer",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1F7Q65LBVZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1F7Q65LBVZ');
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
