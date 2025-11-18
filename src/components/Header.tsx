import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                SOS
              </span>
              <span className="hidden text-sm font-light text-muted-foreground sm:inline">
                Standing Ovation Surround Sound
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden items-center space-x-2 text-sm font-medium text-foreground transition-colors hover:text-accent lg:flex"
            >
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <Button
              variant="default"
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
