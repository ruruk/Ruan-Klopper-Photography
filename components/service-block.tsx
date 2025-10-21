"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ServiceBlockProps {
  title: string
  description: string
  color: string
  delay?: number
}

export function ServiceBlock({ title, description, color, delay = 0 }: ServiceBlockProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br p-6 transition-all duration-500",
        color,
        isHovered && "scale-105 border-primary/50 shadow-lg shadow-primary/20",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100",
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground lg:text-3xl">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground lg:text-base">{description}</p>
        </div>

        {/* Hover indicator */}
        <div
          className={cn(
            "mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500",
            isHovered && "w-full",
          )}
        />
      </div>
    </div>
  )
}
