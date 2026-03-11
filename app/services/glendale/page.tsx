import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Glendale, CA",
  description:
    "Home theater, TV mounting, surround sound, and smart home installation in Glendale, CA. Serving Verdugo Hills, Montrose, Adams Hill, and surrounding areas. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/glendale",
  },
  openGraph: {
    title: "Home Theater Installation Glendale, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, surround sound, and smart home installation in Glendale. Serving 91201–91208. Licensed CA contractor #895999.",
    url: "https://www.laproav.com/services/glendale",
  },
};

const glendaleConfig: CityConfig = {
  city: "Glendale",
  state: "CA",
  slug: "glendale",
  zipCodes: "91201, 91202, 91203, 91205, 91206, 91207, 91208",
  heroSubtitle:
    "Home theater and smart home installation across Glendale's diverse neighborhoods — from Verdugo Hills estates to Montrose bungalows. Free on-site estimates.",
  introParagraphs: [
    "Glendale's neighborhoods span a wide range of housing types and styles — from the hillside estates of Verdugo Hills and La Crescenta to the dense residential streets of Montrose and Adams Hill. We've worked in all of them, installing surround sound systems in single-family homes, mounting TVs in condos and townhomes, and building out full home theater rooms where the architecture allows.",
    "Whether you're in a newer build near the Glendale Galleria corridor or a classic ranch home near Brand Park, we bring licensed, professional installation with the same attention to clean wiring and custom fit that every home deserves.",
  ],
  commonProjects: [
    "Home theater and surround sound systems in Verdugo Hills single-family homes",
    "TV mounting in condos and multi-unit residential buildings",
    "Multi-room audio systems for open-plan living areas",
    "Security camera installs for homes with hillside access points",
    "Smart home setups for families in Montrose and Adams Hill",
  ],
  cityFaqAnswer:
    "Yes — we serve all of Glendale regularly, including Verdugo Hills, Montrose, Adams Hill, and the central neighborhoods near Brand Park. Main zip codes include 91201, 91202, 91203, 91205, 91206, 91207, and 91208. Call (818) 257-3732 to schedule a free estimate.",
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
      name: "Glendale Home Theater Installation",
      item: "https://www.laproav.com/services/glendale",
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
    { "@type": "City", name: "Glendale" },
    { "@type": "PostalCode", postalCode: "91201", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91202", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91203", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91205", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91206", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91207", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91208", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function GlendalePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={glendaleConfig} />
    </>
  );
}
