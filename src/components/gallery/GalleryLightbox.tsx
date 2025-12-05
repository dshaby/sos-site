"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/data/galleryData";

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  sectionLabel: string;
}

const GalleryLightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  sectionLabel,
}: GalleryLightboxProps) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const currentImage = images[currentIndex];

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, goToPrevious, goToNext, onClose]);

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] min-h-[70vh] p-0 bg-background/95 backdrop-blur-md border-none overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">Gallery lightbox: {sectionLabel}</DialogTitle>
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-border flex-shrink-0">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{sectionLabel}</span>
            <span className="mx-2">·</span>
            <span>
              {currentIndex + 1} of {images.length}
            </span>
          </div>
        </div>

        <div className="relative flex-1 min-h-0 flex items-center justify-center px-4 py-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>

          <Image
            src={failedImages[currentImage.id] ? "/placeholder.svg" : currentImage.src}
            alt={currentImage.alt}
            onClick={goToNext}
            width={1600}
            height={1200}
            className="max-w-full max-h-[55vh] object-contain rounded-lg cursor-pointer"
            onError={() =>
              setFailedImages((prev) => ({ ...prev, [currentImage.id]: true }))
            }
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-background/80 hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>

        <div className="px-4 py-2 flex-shrink-0">
          <p className="text-sm text-muted-foreground text-center line-clamp-2">
            {currentImage.alt}
          </p>
        </div>

        <div className="border-t border-border p-3 md:p-4 flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => onNavigate(index)}
                className={cn(
                  "flex-shrink-0 w-14 h-10 md:w-20 md:h-14 rounded-md overflow-hidden transition-all",
                  index === currentIndex
                    ? "ring-2 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={failedImages[image.id] ? "/placeholder.svg" : image.src}
                  alt={`Thumbnail ${index + 1}`}
                  width={160}
                  height={120}
                  className="w-full h-full object-cover"
                  onError={() =>
                    setFailedImages((prev) => ({ ...prev, [image.id]: true }))
                  }
                />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
