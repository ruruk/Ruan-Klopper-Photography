"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageCarouselProps {
  images: string[]
  direction: "horizontal" | "vertical"
  className?: string
}

export function ImageCarousel({ images, direction, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-card", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            currentIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-105",
            !isLoaded && "opacity-0",
          )}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      ))}

      {/* Indicators */}
      <div
        className={cn(
          "absolute z-10 flex gap-2",
          direction === "horizontal"
            ? "bottom-4 left-1/2 -translate-x-1/2"
            : "right-4 top-1/2 -translate-y-1/2 flex-col",
        )}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              direction === "horizontal" ? "w-8" : "w-1.5 h-8",
              currentIndex === index ? "bg-primary w-12" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
