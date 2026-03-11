import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Toluca Lake, CA",
  description:
    "Home theater, whole-home audio, and smart home installation in Toluca Lake, CA. Minutes from our North Hollywood base. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/toluca-lake",
  },
  openGraph: {
    title: "Home Theater Installation Toluca Lake, CA | SOS Standing Ovation",
    description:
      "Home theater and smart home installation in Toluca Lake. Minutes from our North Hollywood base. CA License #895999.",
    url: "https://www.laproav.com/services/toluca-lake",
  },
};

const tolucaLakeConfig: CityConfig = {
  city: "Toluca Lake",
  state: "CA",
  slug: "toluca-lake",
  zipCodes: "91602",
  heroSubtitle:
    "Home theater and smart home installation in one of the Valley's most sought-after pocket neighborhoods. Minutes from our North Hollywood base.",
  introParagraphs: [
    "Toluca Lake is one of the most quietly affluent communities in the San Fernando Valley — a small enclave of estate homes, tree-lined streets, and properties that have been home to Hollywood talent since the golden age of film. The neighborhood retains that sense of established elegance, with homes that range from classic California ranch to more substantial estates set back from the street. We've installed dedicated home theater rooms, whole-home audio, and smart home systems in Toluca Lake properties that required the careful coordination these homes demand.",
    "Sitting between Burbank and Studio City, Toluca Lake is minutes from our North Hollywood base — which means fast scheduling and quick turnarounds. The homes here tend to be larger than the Valley average, with room for proper dedicated theater spaces and expansive outdoor entertaining areas.",
  ],
  commonProjects: [
    "Dedicated home theater rooms in estate-scale Valley properties",
    "Whole-home audio designed for larger floor plans and outdoor spaces",
    "Smart home automation in classic and recently renovated properties",
    "Outdoor entertainment for larger lots and landscaped entertaining spaces",
    "TV mounting and wiring in homes with traditional construction",
  ],
  cityFaqAnswer:
    "Yes — Toluca Lake is very close to our North Hollywood base, and we work there regularly. The main zip code is 91602, which we cover along with the broader Burbank and North Hollywood border area. Call (818) 257-3732 to schedule.",
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
      name: "Toluca Lake Home Theater Installation",
      item: "https://www.laproav.com/services/toluca-lake",
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
    { "@type": "City", name: "Toluca Lake" },
    { "@type": "PostalCode", postalCode: "91602", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function TolucaLakePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={tolucaLakeConfig} />
    </>
  );
}
