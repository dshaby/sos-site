import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Burbank, CA",
  description:
    "Home theater, TV mounting, surround sound, and smart home installation in Burbank, CA. Serving 91501–91506. Licensed CA contractor #895999. Free on-site estimates. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/burbank",
  },
  openGraph: {
    title: "Home Theater Installation Burbank, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, surround sound, and smart home installation in Burbank. Serving all Burbank zip codes. Licensed CA contractor #895999.",
    url: "https://www.laproav.com/services/burbank",
  },
};

const burbankConfig: CityConfig = {
  city: "Burbank",
  state: "CA",
  slug: "burbank",
  zipCodes: "91501, 91502, 91503, 91504, 91505, 91506",
  heroSubtitle:
    "Professional home theater and smart home installation for Burbank homeowners. Minutes from our North Hollywood base. Free on-site estimates.",
  introParagraphs: [
    "Burbank is home to some of the most discerning home entertainment setups in Los Angeles — it's where people who work in film and TV come home and want their own space to match. We've installed dedicated home theaters, professional-grade surround sound rooms, and 4K projection systems for homeowners throughout the 91505 corridor and Magnolia Park neighborhoods.",
    "Whether you're in a newer build near the Studios or a classic California bungalow in the flats, we design systems that fit your actual space — not a generic template. From TV mounting with concealed wiring to full Dolby Atmos builds, we handle every detail.",
  ],
  commonProjects: [
    "4K projector and large-screen home theater rooms",
    "Dolby Atmos surround sound in dedicated media rooms",
    "TV mounting with hidden wiring in older homes and bungalows",
    "Whole-home Wi-Fi upgrades for streaming-heavy households",
    "Security cameras for detached garages and gated driveways",
  ],
  cityFaqAnswer:
    "Absolutely — Burbank is close to our North Hollywood base, and we work there regularly. We serve all Burbank zip codes including 91501, 91502, 91503, 91504, 91505, and 91506. Call (818) 257-3732 for a free estimate.",
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
      name: "Services",
      item: "https://www.laproav.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Burbank Home Theater Installation",
      item: "https://www.laproav.com/services/burbank",
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://www.laproav.com/#business",
  name: "SOS Standing Ovation Surround Sound",
  url: "https://www.laproav.com",
  telephone: "+18182573732",
  areaServed: [
    { "@type": "City", name: "Burbank" },
    { "@type": "PostalCode", postalCode: "91501", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91502", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91503", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91504", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91505", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91506", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function BurbankPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={burbankConfig} />
    </>
  );
}
