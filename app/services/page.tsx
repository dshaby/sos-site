import type { Metadata } from "next";
import ServicesPageContent from "@/components/ServicesPageContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home Theater, TV Mounting & Smart Home Services Los Angeles",
  description:
    "Professional TV mounting, home theater design, Dolby Atmos surround sound, whole-home audio, smart home automation, security cameras, and network wiring across Greater Los Angeles. CA License #895999. Free on-site estimates.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Home Theater, TV Mounting & Smart Home Services Los Angeles",
    description:
      "Professional TV mounting, Dolby Atmos home theater, whole-home audio, smart home automation, and security camera installation across Greater Los Angeles.",
    url: "https://www.laproav.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Home Theater and Smart Home Installation Services",
  description:
    "Professional AV and smart home services in Greater Los Angeles",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "TV Mounting & Flat-Panel Installation",
        description:
          "Professional TV wall mounting on any surface—drywall, brick, stone, or over a fireplace—with concealed wiring and optimal viewing angles.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "TV Mounting",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Home Theater & Dolby Atmos Installation",
        description:
          "Custom home theater rooms with 4K projectors, large screens, and immersive Dolby Atmos surround sound.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Home Theater Installation",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Whole-Home & Outdoor Audio",
        description:
          "Multi-room audio systems with seamless audio throughout the home and weather-resistant outdoor speakers for patios, pools, and backyards.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Whole-Home Audio Installation",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Networks & Wi-Fi Performance",
        description:
          "Whole-home Wi-Fi coverage with wireless access points for reliable streaming and a solid network foundation for all smart devices.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Network Installation",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Security Cameras & Alarm Systems",
        description:
          "Professional surveillance systems with DVR/NVR recording, alarm system installation, and remote monitoring via phone or tablet.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Security Camera Installation",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Low-Voltage Prewire & Retrofits",
        description:
          "Pre-wiring for new construction and remodels for TVs, speakers, cameras, and networking. Commercial and office space projects.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Low-Voltage Wiring",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Smart Home Automation",
        description:
          "Smart lighting, motorized blinds, smart locks, thermostats, and automated garage doors—all controlled from one app or voice assistant.",
        provider: { "@id": "https://www.laproav.com/#business" },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Greater Los Angeles",
        },
        serviceType: "Smart Home Automation",
      },
    },
  ],
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
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[servicesSchema, breadcrumbSchema]} />
      <ServicesPageContent />
    </>
  );
}
