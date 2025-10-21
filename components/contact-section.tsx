"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageCircle, Instagram } from 'lucide-react'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+27 66 207 2937",
      href: "https://wa.me/27662072937",
      color: "from-green-500/20 to-emerald-500/20",
      hoverColor: "group-hover:from-green-500/30 group-hover:to-emerald-500/30",
    },
    {
      icon: Mail,
      label: "Email",
      value: "ruan@ruanklopper.com",
      href: "mailto:ruan@ruanklopper.com",
      color: "from-purple-500/20 to-violet-500/20",
      hoverColor: "group-hover:from-purple-500/30 group-hover:to-violet-500/30",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@ruan.klopper.photography",
      href: "https://instagram.com/ruan.klopper.photography",
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "group-hover:from-cyan-500/30 group-hover:to-blue-500/30",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-0"
    >
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch through your preferred channel.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label === "Instagram" ? "_blank" : undefined}
              rel={method.label === "Instagram" ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${method.color} ${method.hoverColor} backdrop-blur-sm border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:border-white/20 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.label}</h3>
                  <p className="text-white/70 group-hover:text-white transition-colors duration-300 break-all">
                    {method.value}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300">
                    Click to connect →
                  </span>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-white/40 text-sm">
            Available for projects worldwide • Based in South Africa
          </p>
        </div>
      </div>
    </section>
  )
}
