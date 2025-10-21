import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { SideNavigation } from "@/components/side-navigation"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <CursorGlow />
      <SideNavigation />
      <main className="lg:ml-20">
        <HeroSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
