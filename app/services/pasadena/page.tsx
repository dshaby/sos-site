import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Pasadena, CA",
  description:
    "Precision home theater, TV mounting, and smart home installation in Pasadena, CA. Specialists in historic craftsman homes, estates, and remodels. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/pasadena",
  },
  openGraph: {
    title: "Home Theater Installation Pasadena, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, and smart home installation in Pasadena. Experts in craftsman homes and historic properties. CA License #895999.",
    url: "https://www.laproav.com/services/pasadena",
  },
};

const pasadenaConfig: CityConfig = {
  city: "Pasadena",
  state: "CA",
  slug: "pasadena",
  zipCodes: "91101, 91103, 91104, 91105, 91106, 91107",
  heroSubtitle:
    "Precision home theater and AV installation in one of LA's most architecturally rich communities. Specialists in craftsman homes, estates, and historic properties.",
  introParagraphs: [
    "Pasadena's housing stock is unlike anywhere else in Los Angeles — historic craftsman bungalows, Spanish Revival estates, mid-century moderns, and grand Victorian homes that require a careful, experienced hand when it comes to wiring and installation. We've run in-wall cable in 1920s craftsman homes without disturbing original woodwork, and we've built Dolby Atmos systems into renovated estates near the Arroyo Seco.",
    "The homeowners we work with in Pasadena tend to be detail-oriented — many are Caltech or JPL professionals, architects, or design industry veterans with high expectations for craftsmanship. We match that standard on every project, from simple TV mounts to full home automation builds where the technology has to disappear into the architecture.",
  ],
  commonProjects: [
    "Retrofit wiring in historic craftsman and Spanish Revival homes with plaster walls",
    "Dolby Atmos home theater rooms in Pasadena estates and renovated properties",
    "Whole-home audio systems designed for open craftsman floor plans",
    "Smart home automation for tech-forward homeowners near Caltech",
    "TV mounting with fully concealed wiring in pre-war construction",
  ],
  cityFaqAnswer:
    "Yes — we serve Pasadena regularly, including Old Town, the Estates section near the Arroyo, the Caltech corridor, and surrounding neighborhoods. Zip codes include 91101, 91103, 91104, 91105, 91106, and 91107. Call (818) 257-3732 for a free on-site estimate.",
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
      name: "Pasadena Home Theater Installation",
      item: "https://www.laproav.com/services/pasadena",
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
    { "@type": "City", name: "Pasadena" },
    { "@type": "PostalCode", postalCode: "91101", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91103", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91104", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91105", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91106", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91107", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function PasadenaPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={pasadenaConfig} />
    </>
  );
}
