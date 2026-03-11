import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation North Hollywood, CA",
  description:
    "Home theater, TV mounting, surround sound, and smart home installation in North Hollywood, CA. Our base of operations — fastest response times in the area. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/north-hollywood",
  },
  openGraph: {
    title:
      "Home Theater Installation North Hollywood, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, and smart home installation in North Hollywood — our home base. Serving 91601, 91602, 91605, 91606. CA License #895999.",
    url: "https://www.laproav.com/services/north-hollywood",
  },
};

const northHollywoodConfig: CityConfig = {
  city: "North Hollywood",
  state: "CA",
  slug: "north-hollywood",
  zipCodes: "91601, 91602, 91605, 91606",
  heroSubtitle:
    "Our home base. Fastest response times, deepest neighborhood knowledge, and 20+ years of experience right here in North Hollywood.",
  introParagraphs: [
    "North Hollywood is where SOS Standing Ovation Surround Sound operates from, and it's the neighborhood we know best. We've installed in the converted bungalows of the NoHo Arts District, mid-century homes near Toluca Woods, and newer construction along the Laurel Canyon corridor — every block, every wall type, every challenge you'll find in a North Hollywood home.",
    "Being local means faster scheduling, shorter drives, and a contractor who genuinely knows what to expect when we walk through your door. Whether you're mounting a TV in a classic California ranch, building out a media room in a remodeled home, or setting up a full smart home system in a newer build, North Hollywood is our home territory.",
  ],
  commonProjects: [
    "Home theater rooms and surround sound in single-family homes and remodels",
    "TV mounting across the diverse mix of homes from classic ranch to modern builds",
    "Multi-room audio for open floor plans and outdoor patios",
    "Security cameras and smart home upgrades across all neighborhood types",
    "Pre-wire rough-in for the many active renovation projects in the area",
  ],
  cityFaqAnswer:
    "North Hollywood is our base of operations — we're located right here at 7035 Laurel Canyon Blvd. We serve all of North Hollywood including the NoHo Arts District, Toluca Woods, and surrounding neighborhoods. Zip codes include 91601, 91602, 91605, and 91606. Call (818) 257-3732.",
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
      name: "North Hollywood Home Theater Installation",
      item: "https://www.laproav.com/services/north-hollywood",
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
  address: {
    "@type": "PostalAddress",
    streetAddress: "7035 Laurel Canyon Boulevard Suite #16812",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91615",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "North Hollywood" },
    { "@type": "PostalCode", postalCode: "91601", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91602", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91605", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91606", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function NorthHollywoodPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={northHollywoodConfig} />
    </>
  );
}
