import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Studio City, CA",
  description:
    "Home theater, TV mounting, whole-home audio, and smart home installation in Studio City, CA. Serving 91604 and surrounding areas. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/studio-city",
  },
  openGraph: {
    title: "Home Theater Installation Studio City, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, whole-home audio, and smart home installation in Studio City. Serving 91604, 91602, and 91614. CA License #895999.",
    url: "https://www.laproav.com/services/studio-city",
  },
};

const studioCityConfig: CityConfig = {
  city: "Studio City",
  state: "CA",
  slug: "studio-city",
  zipCodes: "91604, 91602, 91614",
  heroSubtitle:
    "Studio City is our home territory. We're based in North Hollywood and install home theaters, multi-room audio, and smart home systems throughout the area.",
  introParagraphs: [
    "Studio City sits right in our backyard — we're based in North Hollywood and have installed home theaters, multi-room audio systems, and smart home automation in homes throughout Laurel Canyon, Fryman Canyon, and the flats below Ventura Boulevard.",
    "Studio City homes range from mid-century modern with creative potential for invisible speaker installs, to newer construction with pre-wire rough-in already in place. Either way, we know this neighborhood well and typically have a faster turnaround here than almost anywhere else in LA.",
  ],
  commonProjects: [
    "TV mounting in hillside homes with challenging wall types (stucco, concrete)",
    "Whole-home audio for open-plan living and outdoor spaces",
    "Smart home upgrades in mid-century and remodeled homes",
    "Security camera installs for canyon properties and gated lots",
    "Pre-wire and retrofit wiring for home remodels",
  ],
  cityFaqAnswer:
    "Studio City is our home territory — we're based in North Hollywood and work in Studio City constantly, including 91604, 91602, and 91614. We can often fit in consultations faster here than in other parts of LA. Call (818) 257-3732.",
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
      name: "Studio City Home Theater Installation",
      item: "https://www.laproav.com/services/studio-city",
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
    { "@type": "City", name: "Studio City" },
    { "@type": "PostalCode", postalCode: "91604", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91602", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91614", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function StudioCityPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={studioCityConfig} />
    </>
  );
}
