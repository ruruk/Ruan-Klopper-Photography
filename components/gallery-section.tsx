"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  // Product Photography - Landscape (L) for wide layouts
  {
    src: "/showcase_images/Product_L_Castle Lite.jpg",
    alt: "Castle Lite Product Photography",
    className: "md:col-span-3 md:row-span-2", // Wide landscape layout
  },
  {
    src: "/showcase_images/Product_L_Perfume.jpg",
    alt: "Perfume Product Photography",
    className: "md:col-span-2 md:row-span-2", // Landscape layout
  },
  {
    src: "/showcase_images/Product_L_Quench18.jpg",
    alt: "Quench Product Photography",
    className: "md:col-span-2 md:row-span-2", // Landscape layout
  },
  // Product Photography - Portrait (P) for tall layouts
  {
    src: "/showcase_images/Product_P_Atlasware.jpg",
    alt: "Atlasware Product Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  {
    src: "/showcase_images/Product_P_Atlasware12.jpg",
    alt: "Atlasware Product Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  {
    src: "/showcase_images/Product_P_Illovo.jpg",
    alt: "Illovo Product Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  {
    src: "/showcase_images/Product_P_Quench14.jpg",
    alt: "Quench Product Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  {
    src: "/showcase_images/Product_P_Vinut Boba Iced Tea2.jpg",
    alt: "Vinut Boba Iced Tea Product Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  // Advertising Photography - Landscape (L) for wide layouts
  {
    src: "/showcase_images/Advertising_L_Sports Equipment4.jpg",
    alt: "Sports Equipment Advertising",
    className: "md:col-span-3 md:row-span-2", // Wide landscape layout
  },
  {
    src: "/showcase_images/Advertising_L_Sports Equipment8.jpg",
    alt: "Sports Equipment Advertising",
    className: "md:col-span-2 md:row-span-2", // Landscape layout
  },
  // Advertising Photography - Portrait (P) for tall layouts
  {
    src: "/showcase_images/Advertising_P_Dog Toys4.jpg",
    alt: "Dog Toys Advertising",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  {
    src: "/showcase_images/Advertising_P_Sports Equipment6.jpg",
    alt: "Sports Equipment Advertising",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  // Fashion Photography - Landscape (L) for wide layouts
  {
    src: "/showcase_images/Fashion_L_Matheo Men18.jpg",
    alt: "Matheo Men Fashion Photography",
    className: "md:col-span-2 md:row-span-2", // Landscape layout
  },
  {
    src: "/showcase_images/Fashion_L_Matheo Men19.jpg",
    alt: "Matheo Men Fashion Photography",
    className: "md:col-span-2 md:row-span-2", // Landscape layout
  },
  // Fashion Photography - Portrait (P) for tall layouts
  {
    src: "/showcase_images/Fashion_P_Matheo Men11.jpg",
    alt: "Matheo Men Fashion Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
  // Portrait Photography - Portrait (P) for tall layout
  {
    src: "/showcase_images/Couple_P_Fulu2.jpg",
    alt: "Couple Portrait Photography",
    className: "md:col-span-1 md:row-span-2", // Portrait layout
  },
];

export function GallerySection() {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setVisibleImages((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="px-4 py-20 lg:px-8 pb-0">
      <div className="mb-12">
        <h2 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
          Portfolio
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated selection of my work across various photography disciplines
        </p>
      </div>

      {/* Bento Grid Gallery with consistent aspect ratios */}
      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4 lg:auto-rows-[240px]">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={cn(
              "group relative overflow-hidden rounded-2xl bg-card transition-all duration-700",
              image.className,
              visibleImages.has(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
            style={{
              transitionDelay: `${(index % 4) * 100}ms`,
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {image.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div id="about" className="mt-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
              About
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With over a decade of experience in commercial and artistic
              photography, I specialize in creating compelling visual narratives
              that capture the essence of brands and individuals alike.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My work spans product photography, advertising campaigns,
              portraiture, and on-location shoots, always with a focus on
              dramatic lighting and cinematic composition.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl lg:h-auto">
            <Image
              src="/photographer-portrait-professional-dark-moody.jpg"
              alt="Ruan Klopper"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="mt-32"></div>
    </section>
  );
}
