"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface AutoCarouselProps {
  images: string[];
  speed?: number; // Duration in seconds between slides
  direction?: "left" | "right";
  className?: string;
}

export function AutoCarousel({
  images,
  speed = 5,
  direction = "left",
  className = "",
}: AutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [images.length, speed]);

  const getSlideStyle = (index: number) => {
    const position = index - currentIndex;
    const translateValue =
      direction === "left" ? position * 100 : position * -100;

    return {
      transform: `translateX(${translateValue}%)`,
      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)", // Smoother easing
      opacity: index === currentIndex ? 1 : 0.3, // Fade effect for smoother transition
    };
  };

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 h-full w-full"
          style={getSlideStyle(index)}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60" />
        </div>
      ))}
    </div>
  );
}
