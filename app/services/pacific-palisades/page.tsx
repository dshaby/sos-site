import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Pacific Palisades, CA",
  description:
    "Home theater, indoor/outdoor audio, and smart home installation for Pacific Palisades hillside estates and canyon properties. Serving 90272. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/pacific-palisades",
  },
  openGraph: {
    title:
      "Home Theater Installation Pacific Palisades, CA | SOS Standing Ovation",
    description:
      "Home theater, outdoor audio, and smart home installation in Pacific Palisades. Serving 90272. CA License #895999.",
    url: "https://www.laproav.com/services/pacific-palisades",
  },
};

const pacificPalisadesConfig: CityConfig = {
  city: "Pacific Palisades",
  state: "CA",
  slug: "pacific-palisades",
  zipCodes: "90272",
  heroSubtitle:
    "Home theater, indoor/outdoor audio, and smart home installation for Pacific Palisades' hillside estates and bluff-top residences.",
  introParagraphs: [
    "Pacific Palisades sits at the intersection of the hills and the coast — and its homes reflect that. Sprawling properties on Sunset Boulevard and the surrounding canyons feature views that make outdoor living as important as the interior. We've installed whole-home audio systems that flow from open-plan great rooms out to hillside terraces, Dolby Atmos theater rooms in dedicated lower-level spaces, and smart home automation for homeowners who want seamless control over everything from one interface.",
    "The Palisades also has a significant part-time-residence and second-home population, and those clients prioritize remote monitoring, easy-to-use systems, and reliable whole-home Wi-Fi above all else. We design with that in mind — systems that work without a manual and that you can check on from anywhere.",
  ],
  commonProjects: [
    "Indoor/outdoor whole-home audio flowing to hillside terraces and pool decks",
    "Dolby Atmos home theater rooms in lower-level or dedicated media spaces",
    "Smart home automation with remote access and monitoring for part-time residents",
    "Security camera systems for large hillside properties and gated driveways",
    "Whole-home Wi-Fi networks built for estate-scale coverage",
  ],
  cityFaqAnswer:
    "Yes — we serve Pacific Palisades regularly, including properties on Sunset Boulevard, Palisades Drive, and throughout the surrounding canyon neighborhoods. Primary zip code is 90272. Call (818) 257-3732 for a free consultation.",
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
      name: "Pacific Palisades Home Theater Installation",
      item: "https://www.laproav.com/services/pacific-palisades",
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
    { "@type": "City", name: "Pacific Palisades" },
    { "@type": "PostalCode", postalCode: "90272", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function PacificPalisadesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={pacificPalisadesConfig} />
    </>
  );
}
