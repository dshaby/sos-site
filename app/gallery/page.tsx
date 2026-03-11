import type { Metadata } from "next";
import GalleryPageContent from "@/components/GalleryPageContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Project Gallery | TV Mounting, Home Theater & Smart Home Installs",
  description:
    "Browse real TV mounting, home theater, Dolby Atmos, outdoor audio, security camera, and smart home installations across Los Angeles. See our work before you call.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Project Gallery | SOS Standing Ovation Los Angeles",
    description:
      "Real TV mounting, home theater, and smart home installations across Greater Los Angeles. Browse completed projects.",
    url: "https://www.laproav.com/gallery",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.laproav.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gallery",
      item: "https://www.laproav.com/gallery",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <GalleryPageContent />
    </>
  );
}
