import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Woodland Hills, CA",
  description:
    "Home theater, outdoor entertainment, Dolby Atmos, and smart home installation in Woodland Hills, CA. Serving 91364 and 91367. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/woodland-hills",
  },
  openGraph: {
    title:
      "Home Theater Installation Woodland Hills, CA | SOS Standing Ovation",
    description:
      "Home theater, outdoor entertainment, and smart home installation in Woodland Hills. Serving 91364 and 91367. CA License #895999.",
    url: "https://www.laproav.com/services/woodland-hills",
  },
};

const woodlandHillsConfig: CityConfig = {
  city: "Woodland Hills",
  state: "CA",
  slug: "woodland-hills",
  zipCodes: "91364, 91367",
  heroSubtitle:
    "Home theater, outdoor entertainment, and smart home installation for Woodland Hills families and estates in the west San Fernando Valley.",
  introParagraphs: [
    "Woodland Hills is where the San Fernando Valley gets more spacious — larger lots, bigger homes, and properties that often have the room for a proper dedicated media room or full home theater build. We've worked throughout Woodland Hills and the Walnut Acres and Carlton Terrace neighborhoods, installing full Dolby Atmos systems, outdoor entertainment setups around pools and covered patios, and whole-home audio systems that fill large floor plans without dead spots.",
    "The West Valley's newer developments often come with pre-wire rough-in already in place, which makes getting a clean installation significantly faster. For older homes on larger lots, we're experienced at running wiring efficiently while keeping walls and ceilings intact — and the end result looks like it was always part of the house.",
  ],
  commonProjects: [
    "Home theater rooms in dedicated media spaces or converted bonus rooms",
    "Dolby Atmos installations in homes with proper room dimensions for full surround",
    "Outdoor entertainment systems for pool areas and covered patio structures",
    "Whole-home audio across large open floor plans",
    "Smart home automation including gate access control, lighting, and security",
  ],
  cityFaqAnswer:
    "Yes — we serve Woodland Hills regularly, including Walnut Acres, Carlton Terrace, and the gated communities along Ventura Boulevard in the West Valley. Zip codes include 91364 and 91367. Call (818) 257-3732 for a free on-site estimate.",
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
      name: "Woodland Hills Home Theater Installation",
      item: "https://www.laproav.com/services/woodland-hills",
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
    { "@type": "City", name: "Woodland Hills" },
    { "@type": "PostalCode", postalCode: "91364", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91367", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function WoodlandHillsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={woodlandHillsConfig} />
    </>
  );
}
