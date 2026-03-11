import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import LocationServicePageContent from "@/components/LocationServicePageContent";
import type { CityConfig } from "@/components/LocationServicePageContent";

export const metadata: Metadata = {
  title: "Home Theater Installation Sherman Oaks, CA",
  description:
    "Home theater, TV mounting, surround sound, and smart home installation in Sherman Oaks, CA. Minutes from our North Hollywood base. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/services/sherman-oaks",
  },
  openGraph: {
    title: "Home Theater Installation Sherman Oaks, CA | SOS Standing Ovation",
    description:
      "Home theater, TV mounting, and smart home installation in Sherman Oaks. Fast turnarounds from our North Hollywood base. CA License #895999.",
    url: "https://www.laproav.com/services/sherman-oaks",
  },
};

const shermanOaksConfig: CityConfig = {
  city: "Sherman Oaks",
  state: "CA",
  slug: "sherman-oaks",
  zipCodes: "91403, 91411, 91423",
  heroSubtitle:
    "Home theater, TV mounting, and smart home installation in the heart of the San Fernando Valley. Based nearby in North Hollywood — fast response times, free estimates.",
  introParagraphs: [
    "Sherman Oaks sits at the intersection of accessibility and affluence in the Valley — Ventura Boulevard runs right through it, and the surrounding residential streets are lined with ranch homes, remodeled mid-century properties, and newer builds that have become some of the most sought-after in the San Fernando Valley. We've installed home theater rooms, multi-room audio systems, and smart home setups throughout Sherman Oaks and know the neighborhood well.",
    "Many Sherman Oaks homeowners are undertaking full remodels — and that's exactly when a prewire makes all the difference. Whether you're mid-renovation and want conduit roughed in before the drywall goes up, or you're moving into a finished home and want everything run cleanly, we handle both scenarios with the same licensed, detail-oriented approach.",
  ],
  commonProjects: [
    "Home theater rooms in remodeled and expanded ranch homes",
    "TV mounting with in-wall wiring in open-plan living spaces",
    "Multi-room audio for indoor and outdoor entertaining",
    "Pre-wire rough-in for homes mid-renovation on the Ventura corridor",
    "Smart home and lighting control upgrades",
  ],
  cityFaqAnswer:
    "Absolutely — Sherman Oaks is a regular stop for us, and we're just minutes from our North Hollywood base. We serve 91403, 91411, and 91423. Call (818) 257-3732 to book a free on-site estimate.",
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
      name: "Sherman Oaks Home Theater Installation",
      item: "https://www.laproav.com/services/sherman-oaks",
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
    { "@type": "City", name: "Sherman Oaks" },
    { "@type": "PostalCode", postalCode: "91403", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91411", addressCountry: "US" },
    { "@type": "PostalCode", postalCode: "91423", addressCountry: "US" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
  },
};

export default function ShermanOaksPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, localBusinessSchema]} />
      <LocationServicePageContent config={shermanOaksConfig} />
    </>
  );
}
