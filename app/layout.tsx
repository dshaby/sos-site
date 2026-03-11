import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laproav.com"),
  title: {
    default:
      "SOS Standing Ovation | Home Theater & Smart Home Installation Los Angeles",
    template: "%s | SOS Standing Ovation",
  },
  description:
    "Licensed home theater, TV mounting, Dolby Atmos, and smart home installation in Los Angeles. 20+ years experience. CA License #895999. Call (818) 257-3732.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "SOS Standing Ovation",
    locale: "en_US",
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
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://www.laproav.com/#business",
  name: "SOS Standing Ovation Surround Sound",
  alternateName: "Standing Ovation Surround Sound",
  url: "https://www.laproav.com",
  logo: "https://www.laproav.com/favicon.png",
  image: "https://www.laproav.com/images/og-default.png",
  description:
    "Licensed home theater, TV mounting, Dolby Atmos surround sound, whole-home audio, smart home automation, security camera, and network installation services in Los Angeles. CA License #895999.",
  telephone: "+18182573732",
  email: "info@laproav.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7035 Laurel Canyon Boulevard Suite #16812",
    addressLocality: "North Hollywood",
    addressRegion: "CA",
    postalCode: "91615",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1868,
    longitude: -118.3833,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "17:30",
    },
  ],
  areaServed: [
    { "@type": "City", "name": "Los Angeles" },
    { "@type": "City", "name": "North Hollywood" },
    { "@type": "City", "name": "Burbank" },
    { "@type": "City", "name": "Glendale" },
    { "@type": "City", "name": "Pasadena" },
    { "@type": "City", "name": "Beverly Hills" },
    { "@type": "City", "name": "Studio City" },
    { "@type": "City", "name": "Sherman Oaks" },
    { "@type": "City", "name": "Encino" },
    { "@type": "City", "name": "Woodland Hills" },
    { "@type": "City", "name": "Calabasas" },
    { "@type": "City", "name": "Santa Monica" },
    { "@type": "City", "name": "West Hollywood" },
    { "@type": "City", "name": "Malibu" },
    { "@type": "AdministrativeArea", "name": "Los Angeles County" },
  ],
  priceRange: "$$$",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California C-7 Low Voltage Contractor License",
    identifier: "895999",
    recognizedBy: {
      "@type": "Organization",
      name: "California Contractors State License Board",
      url: "https://www.cslb.ca.gov",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Amanda T." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Ron installed our 65-inch Samsung Frame TV. Professional, careful, and extremely clean installation. He walked us through options, explained everything clearly, and made the whole process easy.",
      publisher: { "@type": "Organization", name: "Yelp" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rich O." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "I had quotes from others, but Ron's honesty and expertise stood out. The installation was precise, cables were hidden perfectly, and the work was completed faster than expected.",
      publisher: { "@type": "Organization", name: "Yelp" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Timothy V." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Ron arrived prepared with all tools needed. Everything was measured and leveled perfectly. He and his assistant cleaned up thoroughly afterward. Incredible service and craftsmanship.",
      publisher: { "@type": "Organization", name: "Yelp" },
    },
  ],
  sameAs: [
    "https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood",
    "https://www.houzz.com/pro/laproav",
    "https://www.facebook.com/hometheaterinstallers",
    "https://www.instagram.com/ron.shaby",
    "https://www.linkedin.com/in/ron-shaby/",
    "https://www.youtube.com/user/ronshaby/videos",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.laproav.com/#website",
  url: "https://www.laproav.com",
  name: "SOS Standing Ovation",
  description: "Home theater and smart home installation in Los Angeles",
  publisher: { "@id": "https://www.laproav.com/#business" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <JsonLd data={[localBusinessSchema, websiteSchema]} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
