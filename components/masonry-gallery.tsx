"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const portfolioImages = [
  // Product Photography
  {
    id: 1,
    src: "/images/Product_L_Castle Lite.jpg",
    alt: "Castle Lite Product Photography",
    category: "Product",
    tall: false,
  },
  {
    id: 2,
    src: "/images/Product_L_Perfume.jpg",
    alt: "Perfume Product Photography",
    category: "Product",
    tall: false,
  },
  {
    id: 3,
    src: "/images/Product_L_Quench18.jpg",
    alt: "Quench Product Photography",
    category: "Product",
    tall: false,
  },
  {
    id: 4,
    src: "/images/Product_P_Atlasware.jpg",
    alt: "Atlasware Product Photography",
    category: "Product",
    tall: true,
  },
  {
    id: 5,
    src: "/images/Product_P_Atlasware12.jpg",
    alt: "Atlasware Product Photography",
    category: "Product",
    tall: true,
  },
  {
    id: 6,
    src: "/images/Product_P_Illovo.jpg",
    alt: "Illovo Product Photography",
    category: "Product",
    tall: true,
  },
  {
    id: 7,
    src: "/images/Product_P_Quench14.jpg",
    alt: "Quench Product Photography",
    category: "Product",
    tall: true,
  },
  {
    id: 8,
    src: "/images/Product_P_Vinut Boba Iced Tea2.jpg",
    alt: "Vinut Boba Iced Tea Product Photography",
    category: "Product",
    tall: true,
  },
  // Advertising Photography
  {
    id: 9,
    src: "/images/Advertising_L_Sports Equipment4.jpg",
    alt: "Sports Equipment Advertising",
    category: "Advertising",
    tall: false,
  },
  {
    id: 10,
    src: "/images/Advertising_L_Sports Equipment8.jpg",
    alt: "Sports Equipment Advertising",
    category: "Advertising",
    tall: false,
  },
  {
    id: 11,
    src: "/images/Advertising_P_Dog Toys4.jpg",
    alt: "Dog Toys Advertising",
    category: "Advertising",
    tall: true,
  },
  {
    id: 12,
    src: "/images/Advertising_P_Sports Equipment6.jpg",
    alt: "Sports Equipment Advertising",
    category: "Advertising",
    tall: true,
  },
  // Fashion Photography
  {
    id: 13,
    src: "/images/Fashion_L_Matheo Men18.jpg",
    alt: "Matheo Men Fashion Photography",
    category: "Fashion",
    tall: false,
  },
  {
    id: 14,
    src: "/images/Fashion_L_Matheo Men19.jpg",
    alt: "Matheo Men Fashion Photography",
    category: "Fashion",
    tall: false,
  },
  {
    id: 15,
    src: "/images/Fashion_P_Matheo Men11.jpg",
    alt: "Matheo Men Fashion Photography",
    category: "Fashion",
    tall: true,
  },
  // Portrait Photography
  {
    id: 16,
    src: "/images/Couple_P_Fulu2.jpg",
    alt: "Couple Portrait Photography",
    category: "Portraits",
    tall: true,
  },
  // Additional images for better variety
  {
    id: 17,
    src: "/images/Product_L_JDDesigns.jpg",
    alt: "JD Designs Product Photography",
    category: "Product",
    tall: false,
  },
  {
    id: 18,
    src: "/images/Fashion_P_Gucci1.jpg",
    alt: "Gucci Fashion Photography",
    category: "Fashion",
    tall: true,
  },
  {
    id: 19,
    src: "/images/Portrait_L_Liza13.jpg",
    alt: "Liza Portrait Photography",
    category: "Portraits",
    tall: false,
  },
  {
    id: 20,
    src: "/images/Advertising_L_Dog Toys2.jpg",
    alt: "Dog Toys Advertising",
    category: "Advertising",
    tall: false,
  },
];

export function MasonryGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Product", "Advertising", "Fashion", "Portraits"];

  const filteredImages =
    selectedCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div
        className={`mb-12 flex flex-wrap gap-3 transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`group relative break-inside-avoid overflow-hidden rounded-2xl bg-card transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${(index % 6) * 100 + 400}ms` }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={800}
                height={image.tall ? 800 : 600}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    {image.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
