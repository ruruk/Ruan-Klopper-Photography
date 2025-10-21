import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-12 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ruan Klopper Photography. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            Powered by{" "}
            <a
              href="https://comrobi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              Comrobi
            </a>
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@ruanklopper.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+1234567890"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
