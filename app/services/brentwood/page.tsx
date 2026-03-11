import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Brentwood, CA",
  description:
    "Home theater, whole-home audio, and smart home installation in Brentwood, CA. Serving 90049. Licensed CA contractor #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/brentwood",
  },
  openGraph: {
    title: "Home Theater Installation Brentwood, CA | SOS Standing Ovation",
    description:
      "Home theater, whole-home audio, and smart home installation in Brentwood. Serving 90049. CA License #895999.",
    url: "https://www.laproav.com/services/brentwood",
  },
};

const brentwoodConfig: CityConfig = {
  city: "Brentwood",
  state: "CA",
  slug: "brentwood",
  zipCodes: "90049",
  heroSubtitle:
    "Home theater, smart home, and whole-home audio installation in one of LA's most established neighborhoods. Quality work that fits Brentwood's standard.",
  introParagraphs: [
    "Brentwood occupies a rare position in Los Angeles — affluent but understated, with a mix of traditional California architecture, contemporary new builds, and deeply established residential streets that have been home to LA's professional class for decades. The homeowners we work with here know exactly what they want: clean installations, quality equipment, and a contractor who leaves the place better than they found it.",
    "We've installed home theater rooms in Brentwood's larger traditional homes, multi-room audio in open contemporary builds, and outdoor entertainment systems for the spacious yards along San Vicente and Bundy. Sitting between Santa Monica and Bel Air, Brentwood clients often want the performance of a high-end system with the look of one that was always there.",
  ],
  commonProjects: [
    "Home theater rooms in traditional and contemporary Brentwood properties",
    "Whole-home audio for open floor plans with indoor/outdoor flow",
    "Smart home automation including lighting, thermostats, and motorized shades",
    "TV mounting with fully concealed wiring in design-forward homes",
    "Outdoor audio for entertaining spaces and yards along main corridors",
  ],
  cityFaqAnswer:
    "Yes — Brentwood is a regular service area for us. We cover the full neighborhood including North Brentwood, Brentwood Park, and areas along San Vicente and Sunset. Primary zip code is 90049. Call (818) 257-3732 for a free estimate.",
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
      name: "Brentwood Home Theater Installation",
      item: "https://www.laproav.com/services/brentwood",
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
    { "@type": "City", name: "Brentwood" },
    { "@type": "PostalCode", postalCode: "90049", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function BrentwoodPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={brentwoodConfig} />
    </>
  );
}
