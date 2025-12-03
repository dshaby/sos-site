import type { Metadata } from "next";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services | Standing Ovation Surround Sound",
  description:
    "Professional TV mounting, home theater, audio, networking, and smart home services across Los Angeles."
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

