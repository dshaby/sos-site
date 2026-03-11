import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Home Theater Installer in Los Angeles | 20+ Years, CA License #895999",
  description:
    "Meet the team behind SOS Standing Ovation. 20+ years serving Greater Los Angeles. CA C-7 License #895999. 4.8-star Yelp rating with 100+ reviews. Established 2007.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About SOS Standing Ovation | Home Theater Experts Since 2007",
    description:
      "Licensed, bonded, and recognized among the best home theater companies in Los Angeles. CA License #895999. 4.8★ Yelp.",
    url: "https://www.laproav.com/about",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long have you been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've been serving customers in Los Angeles since 2007, with over 20 years of experience in home theater and low-voltage integration.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve homeowners and businesses throughout Greater Los Angeles including North Hollywood, Beverly Hills, Burbank, Glendale, Pasadena, Studio City, Sherman Oaks, Encino, Woodland Hills, Calabasas, Santa Monica, West Hollywood, Culver City, Malibu, and surrounding communities.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to buy all the equipment myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We can recommend and supply TVs, speakers, receivers, projectors, cameras, and networking gear, or we can work with equipment you already own and advise on any gaps.",
      },
    },
    {
      "@type": "Question",
      name: "Can you mount a TV above a fireplace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We regularly install TVs above fireplaces, including on brick, stone, and tile surfaces. We use the appropriate mounting hardware and can install articulating mounts that tilt down for comfortable viewing, plus we handle all the wiring so cables stay hidden.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the free on-site estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We walk through your space, discuss your goals and budget, review existing wiring and equipment, and provide a detailed written estimate with recommendations—all at no cost and with no obligation.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can you start my project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects begin within about a week, depending on scope and scheduling. After the consultation, we'll give you a clear timeline.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer any warranty or support after installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We stand behind our work and offer lifetime support on all installations. If you ever have questions about your system or need adjustments, we're just a phone call away.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I read your reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can read detailed customer reviews on Yelp at https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood. We maintain an average rating of 4.8 stars based on 100+ reviews.",
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
      name: "About",
      item: "https://www.laproav.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <AboutPageContent />
    </>
  );
}
