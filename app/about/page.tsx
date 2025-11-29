import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About SOS Standing Ovation | Home Theater & Smart Home Integration",
  description:
    "Learn more about SOS Standing Ovation, a licensed and bonded home theater and smart home integration company serving the Greater Los Angeles Area since 2007."
};

export default function AboutPage() {
  return <AboutPageContent />;
}

