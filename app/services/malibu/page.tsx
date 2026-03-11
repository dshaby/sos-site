import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Malibu, CA",
  description:
    "Premium home theater, outdoor audio, and smart home installation for Malibu beachfront estates and hillside retreats. Serving 90265. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/malibu",
  },
  openGraph: {
    title: "Home Theater Installation Malibu, CA | SOS Standing Ovation",
    description:
      "Home theater, outdoor audio, and smart home installation for Malibu estates. Serving 90265. CA License #895999.",
    url: "https://www.laproav.com/services/malibu",
  },
};

const malibuConfig: CityConfig = {
  city: "Malibu",
  state: "CA",
  slug: "malibu",
  zipCodes: "90265",
  heroSubtitle:
    "Premium home theater, outdoor audio, and smart home installation for Malibu's beachfront estates and hillside retreats. We make the drive — free on-site estimates.",
  introParagraphs: [
    "Malibu is where indoor and outdoor living blur together — and the audio, video, and automation systems in these homes need to reflect that. We've installed weather-resistant speaker systems on oceanfront decks, designed whole-home audio that flows from the living room to the pool terrace without interruption, and built Dolby Atmos screening rooms in cliff-side estates with panoramic Pacific views.",
    "Working in Malibu requires planning — homes are often remote, access can be challenging, and the salt-air coastal environment means using the right equipment for outdoor installations is non-negotiable. We know which products hold up in coastal conditions and which ones fail in six months, and we spec accordingly.",
  ],
  commonProjects: [
    "Outdoor audio with salt air-rated, weather-resistant speaker systems",
    "Dolby Atmos home theater rooms in beachfront and hillside estates",
    "Whole-home audio flowing between indoor living spaces and outdoor terraces",
    "Smart home automation for both primary and vacation residences",
    "Security camera systems for remote hillside and gated beachfront properties",
  ],
  cityFaqAnswer:
    "Yes — we serve Malibu including Carbon Beach, Point Dume, Malibu Colony, and hillside properties above PCH. We plan the drive into the project and make it work. Primary zip code is 90265. Call (818) 257-3732 to discuss your project.",
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
      name: "Malibu Home Theater Installation",
      item: "https://www.laproav.com/services/malibu",
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
    { "@type": "City", name: "Malibu" },
    { "@type": "PostalCode", postalCode: "90265", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function MalibuPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={malibuConfig} />
    </>
  );
}
