import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Calabasas, CA",
  description:
    "Luxury home theater, Crestron smart home, Dolby Atmos, and outdoor audio installation in Calabasas, CA. Serving The Oaks, The Classics, and surrounding estates. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/calabasas",
  },
  openGraph: {
    title: "Home Theater Installation Calabasas, CA | SOS Standing Ovation",
    description:
      "Luxury home theater and smart home installation in Calabasas gated communities. Serving 91302. CA License #895999.",
    url: "https://www.laproav.com/services/calabasas",
  },
};

const calabasasConfig: CityConfig = {
  city: "Calabasas",
  state: "CA",
  slug: "calabasas",
  zipCodes: "91302",
  heroSubtitle:
    "Luxury home theater and smart home installation for Calabasas's gated communities and estate homes. Precision work for high-end projects — no shortcuts.",
  introParagraphs: [
    "Calabasas is one of the most demanding markets we serve — and one of the most rewarding. Homeowners in The Oaks, The Classics, and the surrounding Hidden Hills-adjacent communities expect a level of fit and finish that matches the quality of their homes. We've installed Crestron and Control4 automation systems, full Dolby Atmos theater rooms, and Lutron whole-home lighting in Calabasas properties that required careful coordination with interior designers and general contractors.",
    "New construction in Calabasas is common, and that's where prewire becomes critical — getting the conduit and rough-in done right during the build means a dramatically cleaner installation when it's time to equip the room. We work with builders, GCs, and designers throughout the Calabasas area to ensure the tech infrastructure matches the architectural vision from the ground up.",
  ],
  commonProjects: [
    "Full smart home automation (Crestron, Control4, Apple HomeKit) in gated estates",
    "New construction prewire coordination with builders and general contractors",
    "Dolby Atmos home theater rooms with dedicated acoustic spaces",
    "Whole-home Lutron lighting and motorized shade integration",
    "Outdoor entertainment for pool houses, covered patios, and entertainment decks",
  ],
  cityFaqAnswer:
    "Yes — Calabasas is one of our premium service areas. We work in The Oaks, The Classics, and surrounding neighborhoods including Hidden Hills-adjacent properties. Primary zip code is 91302. Call (818) 257-3732 to discuss your project.",
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
      name: "Calabasas Home Theater Installation",
      item: "https://www.laproav.com/services/calabasas",
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
    { "@type": "City", name: "Calabasas" },
    { "@type": "PostalCode", postalCode: "91302", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function CalabasasPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={calabasasConfig} />
    </>
  );
}
