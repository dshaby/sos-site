import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title:
    "SOS Standing Ovation | Premium Home Theater & Smart Home Installation in Los Angeles",
  description:
    "Licensed and bonded home theater, TV installation, and smart home automation experts serving Los Angeles for over 20 years. Premium A/V solutions and Dolby Atmos installations. Call (818) 257-3732.",
  openGraph: {
    title: "SOS Standing Ovation | Home Theater Installation Los Angeles",
    description:
      "Premium home theater and smart home installation services in Los Angeles. Over 20 years of excellence.",
    type: "website"
  }
};

export default function Home() {
  return <HomePageContent />;
}
