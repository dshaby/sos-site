import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Culver City, CA",
  description:
    "Home theater, smart home, network installation, and TV mounting in Culver City, CA. Serving 90230 and 90232. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/culver-city",
  },
  openGraph: {
    title: "Home Theater Installation Culver City, CA | SOS Standing Ovation",
    description:
      "Home theater, smart home, and network installation in Culver City. Serving 90230 and 90232. CA License #895999.",
    url: "https://www.laproav.com/services/culver-city",
  },
};

const culverCityConfig: CityConfig = {
  city: "Culver City",
  state: "CA",
  slug: "culver-city",
  zipCodes: "90230, 90232",
  heroSubtitle:
    "Home theater, smart home, and network installation in one of LA's fastest-growing tech and creative communities. Professional results from a licensed CA contractor.",
  introParagraphs: [
    "Culver City has transformed rapidly — Amazon Studios, Apple TV+, and HBO have anchored a wave of creative and tech industry workers who've moved into the area's bungalows, mid-century homes, and newer developments. These homeowners tend to have high expectations for their home technology: reliable whole-home Wi-Fi that handles simultaneous video calls and 4K streaming, smart home systems that work without fuss, and AV setups that match the aesthetic of their renovated spaces.",
    "We've installed throughout Culver City's diverse housing stock — from the smaller craftsman homes in Blair Hills to newer townhomes near the Metro Expo Line. Whether you're setting up a dedicated home office with a proper display and speaker system, or converting a room into a true home theater, we know what works in these spaces and how to do it cleanly.",
  ],
  commonProjects: [
    "Whole-home Wi-Fi upgrades for households with heavy streaming and remote work demands",
    "TV mounting and display setup for home offices and living rooms",
    "Home theater rooms in converted garages and dedicated media spaces",
    "Smart home integration — lighting, locks, thermostat, and motorized blinds",
    "Security cameras for bungalows and townhomes in urban Culver City neighborhoods",
  ],
  cityFaqAnswer:
    "Yes — we regularly serve Culver City including Blair Hills, Sunkist Park, Fox Hills, and the Downtown Culver City corridor. Zip codes are 90230 and 90232. Call (818) 257-3732 for a free estimate.",
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
      name: "Culver City Home Theater Installation",
      item: "https://www.laproav.com/services/culver-city",
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
    { "@type": "City", name: "Culver City" },
    { "@type": "PostalCode", postalCode: "90230", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90232", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function CulverCityPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={culverCityConfig} />
    </>
  );
}
