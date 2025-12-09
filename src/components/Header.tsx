"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3" aria-label="SOS Standing Ovation">
              <Image
                src="/logo.png"
                alt="SOS Standing Ovation Surround Sound"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="hidden sm:inline text-sm text-muted-foreground font-light">
                Standing Ovation Surround Sound
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              About
            </NavLink>
            <NavLink
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Services
            </NavLink>
            <NavLink
              href="/gallery"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Gallery
            </NavLink>
            <NavLink
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Phone CTA (desktop only) */}
            <a
              href="tel:+18182573732"
              className="hidden lg:flex items-center space-x-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(818) 257-3732</span>
            </a>

            {/* Free Estimate always visible */}
            <Button
              variant="default"
              size="sm"
              asChild
            >
              <Link href="/contact">Free Estimate</Link>
            </Button>

            {/* Mobile menu toggle (only below md) */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-accent hover:bg-muted md:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <NavLink
              href="/"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              href="/about"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              href="/services"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              href="/gallery"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              href="/contact"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
