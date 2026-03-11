import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Encino, CA",
  description:
    "Estate-level home theater, Dolby Atmos, outdoor audio, and smart home installation in Encino, CA. Serving 91316 and 91436. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/encino",
  },
  openGraph: {
    title: "Home Theater Installation Encino, CA | SOS Standing Ovation",
    description:
      "Home theater, Dolby Atmos, outdoor audio, and smart home installation in Encino. Serving 91316 and 91436. CA License #895999.",
    url: "https://www.laproav.com/services/encino",
  },
};

const encinoConfig: CityConfig = {
  city: "Encino",
  state: "CA",
  slug: "encino",
  zipCodes: "91316, 91436",
  heroSubtitle:
    "Estate-level home theater and smart home installation in one of the Valley's most established communities. Serving Encino homeowners for 20+ years.",
  introParagraphs: [
    "Encino is one of the most established residential communities in the San Fernando Valley — large lots, mature trees, and homes that range from classic California ranch to gated contemporary estates. We've built dedicated home theater rooms, outdoor entertainment systems for expansive backyard spaces, and full smart home automation setups for homeowners throughout Encino and into the Mulholland Drive corridor.",
    "Estate homes in Encino often have the space for a true dedicated theater room — and the high ceilings and room dimensions to support a real Dolby Atmos layout with proper bass management. If you've been thinking about converting a room or building out a media wing, Encino properties are often ideal candidates for the full treatment.",
  ],
  commonProjects: [
    "Dedicated home theater rooms in estate and ranch properties",
    "Dolby Atmos speaker installations with proper acoustic placement",
    "Whole-home audio across large indoor and outdoor living spaces",
    "Outdoor entertainment systems for pools, patios, and terraces",
    "Smart home automation including Lutron lighting and motorized shades",
  ],
  cityFaqAnswer:
    "Yes — Encino is an active service area for us. We regularly work in both the flats and the hillside properties near Mulholland. Zip codes include 91316 and 91436. Call (818) 257-3732 to schedule a free on-site consultation.",
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
      name: "Encino Home Theater Installation",
      item: "https://www.laproav.com/services/encino",
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
    { "@type": "City", name: "Encino" },
    { "@type": "PostalCode", postalCode: "91316", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91436", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function EncinoPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={encinoConfig} />
    </>
  );
}
