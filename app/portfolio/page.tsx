import { MasonryGallery } from "@/components/masonry-gallery";
import { SideNavigation } from "@/components/side-navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Professional Photography Gallery",
  description:
    "Explore Ruan Klopper's professional photography portfolio featuring product photography, advertising campaigns, portraits, and studio sessions. Based in Pretoria, South Africa.",
  keywords: [
    "photography portfolio",
    "product photography gallery",
    "advertising photography portfolio",
    "portrait photography gallery",
    "studio photography portfolio",
    "Pretoria photographer portfolio",
    "South Africa photography",
    "commercial photography gallery",
    "fashion photography portfolio",
  ],
  openGraph: {
    title: "Portfolio | Ruan Klopper Photography",
    description:
      "Explore Ruan Klopper's professional photography portfolio featuring product photography, advertising campaigns, portraits, and studio sessions.",
    images: [
      {
        url: "/showcase_images/Product_L_Castle Lite.jpg",
        width: 1200,
        height: 630,
        alt: "Ruan Klopper Photography Portfolio - Product Photography",
      },
    ],
  },
  twitter: {
    title: "Portfolio | Ruan Klopper Photography",
    description:
      "Explore Ruan Klopper's professional photography portfolio featuring product photography, advertising campaigns, portraits, and studio sessions.",
    images: ["/showcase_images/Product_L_Castle Lite.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* SideNavigation component */}
      <SideNavigation />

      <main className="min-h-screen bg-background pl-0 lg:pl-20">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-display text-5xl font-bold text-foreground lg:text-7xl">
              Portfolio
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              A collection of my finest work across various photography
              disciplines
            </p>
          </div>

          {/* Masonry Gallery */}
          <MasonryGallery />
        </div>
      </main>
    </>
  );
}
