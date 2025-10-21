"use client";

import { useEffect, useState } from "react";
import { ServiceBlock } from "@/components/service-block";
import { AutoCarousel } from "@/components/auto-carousel";

const services = [
  {
    title: "Product",
    description: "Stunning product shots that showcase every detail",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Advertising",
    description: "Bold campaigns that capture attention and drive results",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Portraits",
    description: "Authentic portraits that tell your unique story",
    color: "from-primary/15 to-accent/10",
  },
  {
    title: "Studio",
    description: "Professional studio sessions with complete creative control",
    color: "from-accent/15 to-primary/10",
  },
];

const carouselImages = {
  // Landscape images
  topLeft: [
    "/showcase_images/Product_L_Castle Lite.jpg",
    "/showcase_images/Product_L_Perfume.jpg",
    "/showcase_images/Product_L_Quench18.jpg",
    "/showcase_images/Fashion_L_Matheo Men18.jpg",
    "/showcase_images/Fashion_L_Matheo Men19.jpg",
  ],
  // Portrait images
  topRight: [
    "/showcase_images/Product_P_Atlasware.jpg",
    "/showcase_images/Product_P_Atlasware12.jpg",
    "/showcase_images/Product_P_Illovo.jpg",
    "/showcase_images/Product_P_Quench14.jpg",
    "/showcase_images/Product_P_Vinut Boba Iced Tea2.jpg",
  ],
  // Portrait images
  middle: [
    "/showcase_images/Advertising_P_Dog Toys4.jpg",
    "/showcase_images/Advertising_P_Sports Equipment6.jpg",
    "/showcase_images/Couple_P_Fulu2.jpg",
    "/showcase_images/Fashion_P_Matheo Men11.jpg",
  ],
  // Landscape images
  middleRight: [
    "/showcase_images/Advertising_L_Sports Equipment4.jpg",
    "/showcase_images/Advertising_L_Sports Equipment8.jpg",
    "/showcase_images/Fashion_L_Matheo Men18.jpg",
    "/showcase_images/Fashion_L_Matheo Men19.jpg",
  ],
};

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen px-4 py-12 lg:px-8 lg:py-20"
    >
      {/* Brand Name */}
      <div
        className={`mb-12 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="font-display text-5xl font-bold tracking-tight text-foreground lg:text-7xl">
          <span className="text-balance">Ruan Klopper</span>
        </h1>
        <p className="mt-2 text-lg text-muted-foreground lg:text-xl">
          Photography
        </p>
      </div>

      {/* Bento Grid with consistent aspect ratios */}
      <div className="grid auto-rows-[200px] gap-4 md:grid-cols-4 lg:auto-rows-[240px]">
        <div
          className={`col-span-4 row-span-2 overflow-hidden rounded-2xl bg-card md:col-span-2 transition-all duration-1000 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <AutoCarousel
            images={carouselImages.topLeft}
            speed={6}
            direction="right"
            className="h-full w-full"
          />
        </div>

        <div
          className={`col-span-2 row-span-2 overflow-hidden rounded-2xl bg-card md:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <AutoCarousel
            images={carouselImages.topRight}
            speed={3}
            direction="left"
            className="h-full w-full"
          />
        </div>

        {/* Service Block - Product */}
        <div
          className={`col-span-2 row-span-1 md:col-span-1 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ServiceBlock
            title={services[0].title}
            description={services[0].description}
            color={services[0].color}
            delay={0}
          />
        </div>

        {/* Service Block - Advertising */}
        <div
          className={`col-span-2 row-span-1 md:col-span-1 transition-all duration-1000 delay-350 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ServiceBlock
            title={services[1].title}
            description={services[1].description}
            color={services[1].color}
            delay={100}
          />
        </div>

        {/* Service Block - Portraits */}
        <div
          className={`col-span-2 row-span-1 md:col-span-1 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ServiceBlock
            title={services[2].title}
            description={services[2].description}
            color={services[2].color}
            delay={200}
          />
        </div>

        <div
          className={`col-span-2 row-span-2 overflow-hidden rounded-2xl bg-card md:col-span-1 transition-all duration-1000 delay-450 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <AutoCarousel
            images={carouselImages.middle}
            speed={4}
            direction="right"
            className="h-full w-full"
          />
        </div>

        <div
          className={`col-span-4 row-span-2 overflow-hidden rounded-2xl bg-card md:col-span-2 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <AutoCarousel
            images={carouselImages.middleRight}
            speed={5}
            direction="left"
            className="h-full w-full"
          />
        </div>

        {/* Service Block - Studio */}
        <div
          className={`col-span-2 row-span-1 md:col-span-1 transition-all duration-1000 delay-550 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ServiceBlock
            title={services[3].title}
            description={services[3].description}
            color={services[3].color}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
