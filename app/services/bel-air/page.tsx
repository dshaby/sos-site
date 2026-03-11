import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Bel Air, CA",
  description:
    "Estate-level home theater, Crestron automation, Dolby Atmos, and precision AV installation for Bel Air's iconic gated estates. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/bel-air",
  },
  openGraph: {
    title: "Home Theater Installation Bel Air, CA | SOS Standing Ovation",
    description:
      "Estate home theater, Crestron automation, and Dolby Atmos installation in Bel Air. Serving 90077. CA License #895999.",
    url: "https://www.laproav.com/services/bel-air",
  },
};

const belAirConfig: CityConfig = {
  city: "Bel Air",
  state: "CA",
  slug: "bel-air",
  zipCodes: "90077",
  heroSubtitle:
    "Estate-level home theater, Crestron automation, and precision AV installation for Bel Air's iconic gated properties. No shortcuts, no compromises.",
  introParagraphs: [
    "Bel Air is one of the most exclusive residential communities in the world — and the homes here demand an installer who can work at that level. We've been in estates along Bel Air Road and Stone Canyon, coordinating with interior designers, architects, and general contractors to install Dolby Atmos theater rooms, Crestron whole-home automation systems, and outdoor entertainment setups that disappear seamlessly into the landscape.",
    "In homes of this scale, the details matter as much as the technology. Wiring that's truly hidden. Equipment rooms that are organized, labeled, and serviceable. Systems that work flawlessly for clients who don't want to think about them. That's the standard we hold ourselves to on every Bel Air project.",
  ],
  commonProjects: [
    "Estate-wide Crestron or Control4 automation with dedicated AV equipment rooms",
    "Dedicated home theater rooms with acoustic treatment and tiered seating",
    "Invisible in-ceiling and in-wall speaker installations throughout the estate",
    "Full Lutron lighting and motorized blackout shade integration",
    "Outdoor entertainment and landscape audio for motor courts and pool terraces",
  ],
  cityFaqAnswer:
    "Yes — Bel Air is one of our most premium service areas. We work in gated estates throughout the neighborhood, coordinating with design teams and contractors as needed. Primary zip code is 90077. Call (818) 257-3732 to discuss your project.",
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
      name: "Bel Air Home Theater Installation",
      item: "https://www.laproav.com/services/bel-air",
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
    { "@type": "City", name: "Bel Air" },
    { "@type": "PostalCode", postalCode: "90077", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function BelAirPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={belAirConfig} />
    </>
  );
}
