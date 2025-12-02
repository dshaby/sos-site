import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Standing Ovation Surround Sound",
  description: "Get in touch to schedule a free on-site consultation.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

