import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free On-Site Estimate | Home Theater Installation Los Angeles",
  description:
    "Schedule a free on-site consultation for home theater, TV mounting, or smart home installation in Los Angeles. Licensed contractor CA #895999. Call (818) 257-3732 or request an estimate online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Get a Free On-Site Estimate | SOS Standing Ovation Los Angeles",
    description:
      "Contact Los Angeles's top-rated home theater installer. Free on-site assessment, no obligation. Call (818) 257-3732.",
    url: "https://www.laproav.com/contact",
  },
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
      name: "Contact",
      item: "https://www.laproav.com/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactPageContent />
    </>
  );
}
