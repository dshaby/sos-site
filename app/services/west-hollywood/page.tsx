import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation West Hollywood, CA",
  description:
    "TV mounting, home theater, and smart home installation in West Hollywood, CA. Serving apartments, condos, and single-family homes in 90046, 90048, and 90069. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/west-hollywood",
  },
  openGraph: {
    title:
      "Home Theater Installation West Hollywood, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, and smart home installation in West Hollywood. Serving 90046, 90048, and 90069. CA License #895999.",
    url: "https://www.laproav.com/services/west-hollywood",
  },
};

const westHollywoodConfig: CityConfig = {
  city: "West Hollywood",
  state: "CA",
  slug: "west-hollywood",
  zipCodes: "90046, 90048, 90069",
  heroSubtitle:
    "TV mounting, home theater, and smart home installation in West Hollywood's urban residences, apartments, and creative spaces. Professional results in any footprint.",
  introParagraphs: [
    "West Hollywood is one of the most architecturally diverse communities in LA — modernist apartment buildings, Spanish Colonial single-family homes, hillside properties with canyon views, and everything in between. We've installed home theaters in converted rooms in the flats, mounted gallery-wall displays in creative industry professionals' homes, and built whole-home audio systems for properties along Laurel Canyon and the Hollywood Hills edge.",
    "Installation in denser urban environments like West Hollywood requires more problem-solving — older buildings with limited wall access, HOA-governed condos, and compact living spaces that still need to look clean. We've developed efficient approaches for these challenges and deliver the same professional result whether you're in a one-bedroom apartment or a hillside four-bedroom home.",
  ],
  commonProjects: [
    "TV mounting in apartments and condos with limited or concrete wall access",
    "Home theater setups in dedicated rooms in single-family homes",
    "Whole-home audio for creative professionals' live/work spaces",
    "Smart home and lighting upgrades in modernist and contemporary homes",
    "Security cameras for townhomes and properties with street-level access",
  ],
  cityFaqAnswer:
    "Yes — we serve West Hollywood including the flats, Santa Monica Boulevard corridor, and hillside properties near the Hollywood Hills. Zip codes include 90046, 90048, and 90069. Call (818) 257-3732 to schedule a consultation.",
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
      name: "West Hollywood Home Theater Installation",
      item: "https://www.laproav.com/services/west-hollywood",
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
    { "@type": "City", name: "West Hollywood" },
    { "@type": "PostalCode", postalCode: "90046", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90048", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90069", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function WestHollywoodPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={westHollywoodConfig} />
    </>
  );
}
