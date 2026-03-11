import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Beverly Hills, CA",
  description:
    "Premium home theater, TV mounting, Dolby Atmos, and smart home installation in Beverly Hills, CA. Serving 90210 and surrounding areas. Licensed CA contractor #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/beverly-hills",
  },
  openGraph: {
    title: "Home Theater Installation Beverly Hills, CA | SOS Standing Ovation",
    description:
      "Premium home theater, TV mounting, Dolby Atmos, and smart home installation in Beverly Hills. Serving 90210, 90211, 90212. Licensed CA contractor #895999.",
    url: "https://www.laproav.com/services/beverly-hills",
  },
};

const beverlyHillsConfig: CityConfig = {
  city: "Beverly Hills",
  state: "CA",
  slug: "beverly-hills",
  zipCodes: "90210, 90211, 90212",
  heroSubtitle:
    "Licensed, precision home theater and smart home installation for Beverly Hills estates and residences. 20+ years serving Greater Los Angeles.",
  introParagraphs: [
    "Beverly Hills homeowners expect precision — in design, in execution, and in the technology that runs their homes. We've worked throughout 90210 and the surrounding neighborhoods, installing Dolby Atmos theater rooms in estate homes, full Crestron and Lutron automation systems, and outdoor entertainment setups designed to complement high-end architecture.",
    "Whether you're building a dedicated screening room in a new construction on Coldwater Canyon, upgrading an existing media room in a classic flats home, or adding invisible in-ceiling speakers to a renovation project, we bring the same licensed, meticulous approach we've built over 20 years serving Greater Los Angeles.",
  ],
  commonProjects: [
    "Dedicated home theater rooms and private screening rooms",
    "Dolby Atmos ceiling speaker installations in high-ceiling estates",
    "Whole-home Lutron lighting and motorized shade integration",
    "Outdoor entertainment systems for pool areas and patios",
    "Full smart home automation (Crestron, Control4, Apple HomeKit)",
  ],
  cityFaqAnswer:
    "Yes — Beverly Hills is one of our most active service areas. We regularly work in 90210, 90211, and 90212, including new construction on the hills and estate homes in the flats. Call (818) 257-3732 to schedule a free on-site consultation.",
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
      name: "Beverly Hills Home Theater Installation",
      item: "https://www.laproav.com/services/beverly-hills",
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
    { "@type": "City", name: "Beverly Hills" },
    { "@type": "PostalCode", postalCode: "90210", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90211", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "90212", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function BeverlyHillsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={beverlyHillsConfig} />
    </>
  );
}
