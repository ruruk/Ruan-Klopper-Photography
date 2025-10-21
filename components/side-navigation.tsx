"use client"

import { useState } from "react"
import { Home, ImageIcon, User, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { icon: Home, label: "Home", href: "/", isExternal: false },
  { icon: ImageIcon, label: "Portfolio", href: "/portfolio", isExternal: false },
  { icon: User, label: "About", href: "/#about", isExternal: true },
  { icon: Mail, label: "Contact", href: "/#contact", isExternal: true },
]

export function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Side Navigation */}
      <nav
        className={`fixed left-0 top-0 z-40 h-screen w-20 border-r border-border bg-card transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-between py-8">
          {/* Logo/Name */}
          <Link href="/" className="group">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
              <span className="font-display text-xl font-bold text-primary">RK</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex flex-col gap-6">
            {navItems.map((item) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-300 group-hover:bg-primary/10">
                    <item.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <span className="text-[10px] text-muted-foreground transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                  <div className="absolute -right-8 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-6" />
                </>
              )

              if (item.isExternal) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative flex flex-col items-center gap-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative flex flex-col items-center gap-1"
                  onClick={() => setIsOpen(false)}
                >
                  {content}
                </Link>
              )
            })}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a
              href="https://instagram.com/ruan.klopper.photography"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.254-.149-4.771-1.696-4.919-4.919-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
