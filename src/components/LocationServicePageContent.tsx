import Link from "next/link";
import {
  Monitor,
  Cable,
  Home,
  Speaker,
  Lightbulb,
  ChevronRight,
  Phone,
  Wifi,
  Camera,
  CheckCircle,
  MapPin,
} from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CityConfig {
  city: string;
  state: string;
  slug: string;
  zipCodes: string;
  heroSubtitle: string;
  introParagraphs: string[];
  commonProjects: string[];
  cityFaqAnswer: string;
}

const services = [
  {
    icon: Monitor,
    title: "TV Mounting & Flat-Panel Installation",
    description:
      "Securely mount your flat-panel TV on any surface—drywall, brick, stone, or over a fireplace—with a clean, professional finish.",
    features: [
      "Safe, kid-friendly mounting on any wall type",
      "Hidden cables and clean cable management",
      "Optimal viewing height and angle for your space",
    ],
  },
  {
    icon: Home,
    title: "Home Theater & Dolby Atmos",
    description:
      "Transform any room into a cinematic experience with 4K projectors, large screens, and immersive Dolby Atmos surround sound.",
    features: [
      "4K and laser projector installation",
      "Immersive Dolby Atmos speaker configurations",
      "Optimized seating and screen placement",
    ],
  },
  {
    icon: Speaker,
    title: "Whole-Home & Outdoor Audio",
    description:
      "Enjoy music throughout your home and backyard with multi-room audio systems and weather-resistant outdoor speakers.",
    features: [
      "Seamless audio in every room of your home",
      "Patio, pool, and backyard speaker setups",
      "Landscape-friendly rock and hidden speakers",
    ],
  },
  {
    icon: Wifi,
    title: "Networks & Wi-Fi Performance",
    description:
      "Build a reliable foundation for all your entertainment with whole-home Wi-Fi coverage and reliable performance for streaming and smart devices.",
    features: [
      "Reliable Wi-Fi in every corner of your home",
      "Wireless access points for better streaming",
      "Network foundation for all your smart devices",
    ],
  },
  {
    icon: Camera,
    title: "Security Cameras & Alarm Systems",
    description:
      "Protect your home with professional camera systems, DVR/NVR recording, alarm systems, and remote monitoring from your phone.",
    features: [
      "DVR/NVR systems with local storage",
      "Alarm system installation",
      "Remote viewing and alerts via phone or tablet",
    ],
  },
  {
    icon: Cable,
    title: "Low-Voltage Prewire & Retrofits",
    description:
      "Get your new construction or remodel wired right the first time for TVs, speakers, cameras, and networking.",
    features: [
      "Pre-wiring for new builds and remodels",
      "In-wall cable runs done properly",
      "Commercial and office space projects",
    ],
  },
  {
    icon: Lightbulb,
    title: "Smart Home Automation",
    description:
      "Simplify your home with universal remotes, smart locks, thermostats, lighting, motorized blinds, and automated garage doors—all controlled from one place.",
    features: [
      "Lighting control and motorized blinds/shades",
      "Smart door locks and garage door control",
      "HVAC, thermostat, and alarm system integration",
    ],
  },
];

const standardFaqs = [
  {
    question: "How long have you been in business?",
    answer:
      "We've been serving customers in Los Angeles since 2007, with over 20 years of experience in home theater and low-voltage integration.",
  },
  {
    question: "What's included in the free on-site estimate?",
    answer:
      "We walk through your space, discuss your goals and budget, review existing wiring and equipment, and provide a detailed written estimate with recommendations—all at no cost and with no obligation.",
  },
  {
    question: "How soon can you start my project?",
    answer:
      "Most projects begin within about a week, depending on scope and scheduling. After the consultation, we'll give you a clear timeline.",
  },
  {
    question: "Do I need to buy all the equipment myself?",
    answer:
      "No. We can recommend and supply TVs, speakers, receivers, projectors, cameras, and networking gear, or we can work with equipment you already own and advise on any gaps.",
  },
  {
    question: "Can you mount a TV above a fireplace?",
    answer:
      "Yes. We regularly install TVs above fireplaces, including on brick, stone, and tile surfaces. We use the appropriate mounting hardware and can install articulating mounts that tilt down for comfortable viewing, plus we handle all the wiring so cables stay hidden.",
  },
  {
    question: "Do you offer any warranty or support after installation?",
    answer:
      "Yes. We stand behind our work and offer lifetime support on all installations. If you ever have questions about your system or need adjustments, we're just a phone call away.",
  },
  {
    question: "Where can I read your reviews?",
    answer:
      "You can read our customer reviews on Yelp at yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood. We maintain an average rating of 4.8 stars based on 100+ reviews.",
  },
];

export default function LocationServicePageContent({
  config,
}: {
  config: CityConfig;
}) {
  const { city, state, heroSubtitle, introParagraphs, commonProjects, cityFaqAnswer } =
    config;

  const faqs = [
    {
      question: `Do you serve ${city}?`,
      answer: cityFaqAnswer,
    },
    ...standardFaqs,
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Home Theater &amp; Smart Home Installation in {city}, {state}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-4 w-4" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Request Free On-Site Estimate
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* City Intro Section */}
      <Section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-5">
          {introParagraphs.map((para, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Services We Offer in {city}
            </h2>
            <p className="text-muted-foreground">
              From simple TV mounting to full home theater systems, we handle
              the entire process, including wiring, calibration, and clean-up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border border-border/70 shadow-md h-full flex flex-col"
              >
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="pt-4 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contact">
                        Request Estimate
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Common Projects in [City] */}
      <Section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Common Projects in {city}
          </h2>
          <ul className="space-y-4">
            {commonProjects.map((project) => (
              <li key={project} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{project}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted/30 py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              How Our Install Process Works
            </h2>
            <p className="text-muted-foreground">
              We keep things simple and transparent, from your first call to the
              final walkthrough of your new setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">1.</div>
              <h3 className="font-medium">Schedule a free consultation</h3>
              <p className="text-muted-foreground">
                We&apos;ll analyze your home layout, determine the type of
                system to be installed, and plan integration with any existing
                systems.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">2.</div>
              <h3 className="font-medium">On-site assessment</h3>
              <p className="text-muted-foreground">
                We review mounting options, wiring paths, and equipment
                placement.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">3.</div>
              <h3 className="font-medium">Professional installation</h3>
              <p className="text-muted-foreground">
                We handle mounting, wiring, and setup with minimal disruption.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">4.</div>
              <h3 className="font-medium">Tuning &amp; walkthrough</h3>
              <p className="text-muted-foreground">
                We calibrate your system and show you how everything works.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-6 last:border-0 last:pb-0">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service Area Note */}
      <Section className="bg-muted/50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Serving {city} and Surrounding LA Communities
          </h2>
          <p className="text-muted-foreground mb-4">
            We serve homeowners and businesses throughout {city} and Greater Los
            Angeles. Based in North Hollywood, we cover the entire LA metro area.
          </p>
          <p className="text-sm text-muted-foreground">
            CA License #895999 &middot; (818) 257-3732 &middot; info@laproav.com
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to Transform Your {city} Home?
          </h2>
          <p className="text-muted-foreground">
            Call us or request a free on-site estimate. No obligation, no
            pressure—just honest advice from a licensed professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button size="lg" asChild>
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-4 w-4" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Request Free On-Site Estimate
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
