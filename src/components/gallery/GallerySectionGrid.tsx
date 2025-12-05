"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Section from "@/components/Section";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import type { GallerySection } from "@/data/galleryData";

interface GallerySectionGridProps {
  section: GallerySection;
}

const GallerySectionGrid = ({ section }: GallerySectionGridProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageClick = (index: number) => {
    const highlightImage = section.highlightImages[index];
    const allImagesIndex = section.allImages.findIndex((img) => img.id === highlightImage.id);
    setCurrentImageIndex(allImagesIndex >= 0 ? allImagesIndex : 0);
    setLightboxOpen(true);
  };

  const handleViewFullGallery = () => {
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  return (
    <>
      <Section id={section.id} className="py-12 md:py-16 border-b border-border last:border-b-0">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {section.label}
          </h2>
          <p className="text-muted-foreground">{section.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {section.highlightImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => handleImageClick(index)}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-lg",
                "bg-muted border border-border",
                "transition-all duration-300",
                "hover:scale-[1.02] hover:shadow-lg hover:border-primary/30",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              )}
            >
              <Image
                src={failedImages[image.id] ? "/placeholder.svg" : image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [image.id]: true }))
                }
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" onClick={handleViewFullGallery}>
            View full {section.label.toLowerCase()} gallery
            <span className="ml-2 text-muted-foreground">({section.allImages.length} photos)</span>
          </Button>
        </div>
      </Section>

      <GalleryLightbox
        images={section.allImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
        sectionLabel={section.label}
      />
    </>
  );
};

export default GallerySectionGrid;
