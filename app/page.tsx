import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title:
    "SOS Standing Ovation | Home Theater & Smart Home Installation Los Angeles",
  description:
    "Licensed and bonded home theater, TV mounting, and smart home automation experts serving Los Angeles for 20+ years. Dolby Atmos installations, whole-home audio, security cameras. CA License #895999. Call (818) 257-3732.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SOS Standing Ovation | Home Theater Installation Los Angeles",
    description:
      "Premium home theater and smart home installation in Los Angeles. 20+ years experience, CA Licensed #895999, 4.8★ Yelp.",
    type: "website",
    url: "https://www.laproav.com",
    siteName: "SOS Standing Ovation",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "SOS Standing Ovation — Home Theater & Smart Home Installation Los Angeles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Standing Ovation | Home Theater Installation Los Angeles",
    description:
      "Licensed home theater, TV mounting & smart home installation in Los Angeles. 20+ years, CA License #895999.",
  },
};

export default function Home() {
  return <HomePageContent />;
}
