import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Van Nuys, CA",
  description:
    "TV mounting, home theater, surround sound, and smart home installation in Van Nuys, CA. Serving 91401, 91402, 91405, 91406, 91411. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/van-nuys",
  },
  openGraph: {
    title: "Home Theater Installation Van Nuys, CA | SOS Standing Ovation",
    description:
      "TV mounting, home theater, and smart home installation in Van Nuys. Serving all Van Nuys zip codes. CA License #895999.",
    url: "https://www.laproav.com/services/van-nuys",
  },
};

const vanNuysConfig: CityConfig = {
  city: "Van Nuys",
  state: "CA",
  slug: "van-nuys",
  zipCodes: "91401, 91402, 91405, 91406, 91411",
  heroSubtitle:
    "TV mounting, home theater, and smart home installation throughout Van Nuys. Professional results, honest pricing, no upselling.",
  introParagraphs: [
    "Van Nuys is one of the most densely populated neighborhoods in the San Fernando Valley, with a wide mix of housing — single-family homes on larger lots in the northern sections, denser residential streets and apartments closer to Van Nuys Boulevard, and everything in between. We've worked throughout all of it, from straightforward TV mounts with clean cable management to multi-room audio setups and security camera installations for homes across the neighborhood.",
    "We bring the same licensed, professional approach to Van Nuys that we bring to every neighborhood in LA. Every home deserves a clean installation done right the first time — and that doesn't require a luxury budget. If you've been putting off getting your TV properly mounted or your home theater system set up properly, give us a call.",
  ],
  commonProjects: [
    "TV mounting with clean cable management in single-family homes and apartments",
    "Surround sound and home theater setups in dedicated rooms",
    "Security camera installs for homes, driveways, and backyard access points",
    "Whole-home Wi-Fi upgrades for larger homes with coverage dead zones",
    "Smart home basics — smart locks, thermostat, and lighting control",
  ],
  cityFaqAnswer:
    "Yes — we serve Van Nuys regularly across all zip codes including 91401, 91402, 91405, 91406, and 91411. Call (818) 257-3732 to book a free on-site estimate.",
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
      name: "Van Nuys Home Theater Installation",
      item: "https://www.laproav.com/services/van-nuys",
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
    { "@type": "City", name: "Van Nuys" },
    { "@type": "PostalCode", postalCode: "91401", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91402", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91405", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91406", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91411", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function VanNuysPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={vanNuysConfig} />
    </>
  );
}
