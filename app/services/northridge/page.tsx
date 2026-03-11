import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Northridge, CA",
  description:
    "Home theater, outdoor entertainment, and smart home installation in Northridge, CA. Serving 91324, 91325, 91326, 91328, 91330. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/northridge",
  },
  openGraph: {
    title: "Home Theater Installation Northridge, CA | SOS Standing Ovation",
    description:
      "Home theater, outdoor entertainment, and smart home installation in Northridge. Serving 91324–91330. CA License #895999.",
    url: "https://www.laproav.com/services/northridge",
  },
};

const northridgeConfig: CityConfig = {
  city: "Northridge",
  state: "CA",
  slug: "northridge",
  zipCodes: "91324, 91325, 91326, 91328, 91330",
  heroSubtitle:
    "Home theater, outdoor entertainment, and smart home installation for Northridge's family homes and West Valley properties.",
  introParagraphs: [
    "Northridge is a large, spread-out West Valley neighborhood with a strong mix of family homes — many built or rebuilt after the 1994 earthquake — along with older ranch properties on good-sized lots and newer construction near the CSUN campus. That post-earthquake rebuild means a lot of Northridge homes have relatively modern framing and wall construction, which makes in-wall wiring cleaner and often faster than in older neighborhoods.",
    "We work throughout Northridge on home theater builds, outdoor entertainment setups for larger yards, whole-home audio, and smart home upgrades. Northridge families generally want capable systems that are easy to use — solid surround sound, a great picture, maybe some outdoor speakers for the patio, and a setup their whole family can actually operate.",
  ],
  commonProjects: [
    "Home theater rooms in dedicated spaces or converted bonus rooms",
    "Outdoor entertainment systems for pools, covered patios, and larger yards",
    "Whole-home audio across open floor plans and multi-level homes",
    "Security cameras for homes with rear-yard access and side gates",
    "Smart home upgrades — smart locks, lighting control, and thermostat integration",
  ],
  cityFaqAnswer:
    "Yes — we serve Northridge regularly, including areas near CSUN and the surrounding residential neighborhoods. Zip codes include 91324, 91325, 91326, 91328, and 91330. Call (818) 257-3732 for a free estimate.",
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
      name: "Northridge Home Theater Installation",
      item: "https://www.laproav.com/services/northridge",
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
    { "@type": "City", name: "Northridge" },
    { "@type": "PostalCode", postalCode: "91324", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91325", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91326", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91328", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91330", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function NorthridgePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={northridgeConfig} />
    </>
  );
}
