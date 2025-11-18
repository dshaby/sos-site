import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  backgroundImage?: string;
  id?: string;
}

const Section = ({
  title,
  subtitle,
  children,
  className,
  containerClassName,
  backgroundImage,
  id
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24 lg:py-32", className)}
    >
      {/* Background Image (optional) */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Section background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/95" />
        </>
      )}

      <div
        className={cn(
          "container relative mx-auto px-4 sm:px-6 lg:px-8",
          containerClassName
        )}
      >
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            {title && (
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg font-light text-muted-foreground md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default Section;

