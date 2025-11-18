import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
  overlay?: boolean;
}

const Hero = ({
  title,
  subtitle,
  children,
  backgroundImage,
  className,
  overlay = true
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative flex min-h-[600px] items-center justify-center md:min-h-[700px]",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary/90" />
          )}
        </>
      )}

      {/* Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mb-8 max-w-2xl text-lg font-light text-primary-foreground/90 md:text-xl lg:text-2xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

