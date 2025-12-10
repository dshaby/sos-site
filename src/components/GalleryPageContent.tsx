"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import GallerySectionGrid from "@/components/gallery/GallerySectionGrid";
import { gallerySections, type GallerySectionId } from "@/data/galleryData";

type FilterOption = "all" | GallerySectionId;

const filterOptions: { id: FilterOption; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tv-installation", label: "TV" },
  { id: "home-theater", label: "Theater" },
  { id: "prewire-retrofit", label: "Prewire" },
  { id: "outdoor-entertainment", label: "Outdoor" },
  { id: "security-cameras", label: "Security" },
  { id: "network-installations", label: "Network" },
  { id: "commercial-projects", label: "Commercial" },
];

const GalleryPageContent = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filteredSections =
    activeFilter === "all"
      ? gallerySections
      : gallerySections.filter((section) => section.id === activeFilter);

  const handleFilterClick = (filterId: FilterOption) => {
    setActiveFilter(filterId);

    const filters = document.getElementById("gallery-filters");
    const anchor = document.getElementById("gallery-content-start");

    if (anchor) {
      const anchorTop = anchor.getBoundingClientRect().top + window.scrollY;
      const filtersHeight = filters?.offsetHeight ?? 0;
      const headerHeight = window.innerWidth >= 768 ? 80 : 72;

      window.scrollTo({
        top: anchorTop - headerHeight - filtersHeight - 8,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Project Gallery
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Real installations from homes and businesses across Los Angeles. TV mounting, home theaters, outdoor audio, security cameras, network wiring, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-5 w-5" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Free On-Site Estimate</Link>
            </Button>
          </div>
        </div>
      </Section>

      <div
        id="gallery-filters"
        className="sticky top-[4.5rem] md:top-[5rem] z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      >
        <div className="flex flex-wrap justify-center gap-2 px-4 py-3">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterClick(option.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                "border border-border",
                "hover:border-primary/50 hover:bg-primary/5",
                activeFilter === option.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div id="gallery-content-start" className="h-0" />

      <div>
        {filteredSections.map((section) => (
          <GallerySectionGrid key={section.id} section={section} />
        ))}
      </div>

      <Section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for a free on-site estimate. We serve the Greater Los Angeles Area with professional A/V installation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-5 w-5" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Request Estimate Online</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GalleryPageContent;
