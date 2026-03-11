import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Santa Monica, CA",
  description:
    "Modern home theater, TV mounting, indoor/outdoor audio, and smart home installation in Santa Monica, CA. Serving 90401–90405. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/santa-monica",
  },
  openGraph: {
    title: "Home Theater Installation Santa Monica, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, and smart home installation in Santa Monica. Serving 90401–90405. CA License #895999.",
    url: "https://www.laproav.com/services/santa-monica",
  },
};

const santaMonicaConfig: CityConfig = {
  city: "Santa Monica",
  state: "CA",
  slug: "santa-monica",
  zipCodes: "90401, 90402, 90403, 90404, 90405",
  heroSubtitle:
    "Modern home theater and smart home installation for Santa Monica's beach homes, condos, and creative residences. Clean installs for design-forward spaces.",
  introParagraphs: [
    "Santa Monica homeowners tend to value design as much as function — clean lines, invisible wiring, and technology that integrates seamlessly into a modern aesthetic. We've installed in-ceiling speakers in open-plan beach homes, mounted displays on gallery walls without a cable in sight, and built multi-room audio systems for properties that flow from indoor living spaces directly onto patios and decks facing the Pacific.",
    "The mix of housing in Santa Monica — classic California bungalows, modern condos near the Promenade, and larger homes in the North of Montana neighborhoods — means we handle a wide range of installation challenges. Whether it's navigating concrete walls in a newer condo or running wiring through a 1940s wood-frame beach house, we've done it and know how to keep it clean.",
  ],
  commonProjects: [
    "TV mounting with clean cable management in design-forward homes and condos",
    "In-ceiling speaker installations for modern open-plan living spaces",
    "Indoor/outdoor audio systems for homes with deck or patio access",
    "Smart home upgrades including lighting, motorized blinds, and thermostat control",
    "Whole-home Wi-Fi for streaming-heavy households near the beach",
  ],
  cityFaqAnswer:
    "Yes — we serve Santa Monica regularly, including Ocean Park, North of Montana, Mid-City, and condo buildings throughout the city. Zip codes include 90401, 90402, 90403, 90404, and 90405. Call (818) 257-3732 for a free estimate.",
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
      name: "Santa Monica Home Theater Installation",
      item: "https://www.laproav.com/services/santa-monica",
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
    { "@type": "City", name: "Santa Monica" },
    { "@type": "PostalCode", postalCode: "90401", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90402", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90403", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90404", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90405", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function SantaMonicaPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={santaMonicaConfig} />
    </>
  );
}
