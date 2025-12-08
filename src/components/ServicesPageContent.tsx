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
  Camera
} from "lucide-react";
import Section from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Monitor,
    title: "TV Mounting & Flat-Panel Installation",
    description:
      "Securely mount your flat-panel TV on any surface—drywall, brick, stone, or over a fireplace—with a clean, professional finish.",
    features: [
      "Safe, kid-friendly mounting on any wall type",
      "Hidden cables and clean cable management",
      "Optimal viewing height and angle for your space"
    ]
  },
  {
    icon: Home,
    title: "Home Theater & Dolby Atmos",
    description:
      "Transform any room into a cinematic experience with 4K projectors, large screens, and immersive Dolby Atmos surround sound.",
    features: [
      "4K and laser projector installation",
      "Immersive Dolby Atmos speaker configurations",
      "Optimized seating and screen placement"
    ]
  },
  {
    icon: Speaker,
    title: "Whole-Home & Outdoor Audio",
    description:
      "Enjoy music throughout your home and backyard with multi-room audio systems and weather-resistant outdoor speakers.",
    features: [
      "Seamless audio in every room of your home",
      "Patio, pool, and backyard speaker setups",
      "Landscape-friendly rock and hidden speakers"
    ]
  },
  {
    icon: Wifi,
    title: "Networks & Wi-Fi Performance",
    description:
      "Build a reliable foundation for all your entertainment with whole-home Wi-Fi coverage and reliable performance for streaming and smart devices.",
    features: [
      "Reliable Wi-Fi in every corner of your home",
      "Wireless access points for better streaming",
      "Network foundation for all your smart devices"
    ]
  },
  {
    icon: Camera,
    title: "Security Cameras & Surveillance",
    description:
      "Protect your home with professional camera systems, DVR/NVR recording, and remote viewing from your phone.",
    features: [
      "DVR/NVR systems with local storage",
      "Remote viewing via phone or tablet",
      "Coverage for doors, driveways, and key areas"
    ]
  },
  {
    icon: Cable,
    title: "Low-Voltage Prewire & Retrofits",
    description:
      "Get your new construction or remodel wired right the first time for TVs, speakers, cameras, and networking.",
    features: [
      "Pre-wiring for new builds and remodels",
      "In-wall cable runs done properly",
      "Residential and small commercial projects"
    ]
  },
  {
    icon: Lightbulb,
    title: "Smart Remotes & Control Systems",
    description:
      "Simplify your entertainment with universal remotes that control your TV, receiver, streaming devices, and more.",
    features: [
      "One remote to replace them all",
      "Simple control of all your devices",
      "Conference room and lobby setups available"
    ]
  }
];

const ServicesPageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Professional TV mounting, surround sound, and home theater installations across Los Angeles, designed for a clean look and an amazing experience.
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

      {/* Services Grid Section */}
      <Section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              What We Can Do For Your Home
            </h2>
            <p className="text-muted-foreground">
              From simple TV mounting to full home theater systems, we handle the entire process, including wiring, calibration, and clean-up.
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

      {/* Brands We Work With Section */}
      <Section className="bg-muted/40 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Brands We Install &amp; Support
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We work with trusted names in home theater, audio, and smart home technology.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-muted-foreground font-medium">
            <span>Sony</span>
            <span>Samsung</span>
            <span>LG</span>
            <span>Sonos</span>
            <span>Denon</span>
            <span>Marantz</span>
            <span>Klipsch</span>
            <span>JBL</span>
            <span>Ubiquiti</span>
            <span>Control4</span>
            <span>Lutron</span>
            <span>Hikvision</span>
            <span className="text-primary/70">&amp; more</span>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              How Our Install Process Works
            </h2>
            <p className="text-muted-foreground">
              We keep things simple and transparent, from your first call to the final walkthrough of your new setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">1.</div>
              <h3 className="font-medium">Schedule your visit</h3>
              <p className="text-muted-foreground">
                Tell us about your room, TV size, and any special requests.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-semibold text-primary">2.</div>
              <h3 className="font-medium">On-site assessment</h3>
              <p className="text-muted-foreground">
                We review mounting options, wiring paths, and equipment placement.
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
              <h3 className="font-medium">Tuning & walkthrough</h3>
              <p className="text-muted-foreground">
                We calibrate your system and show you how everything works.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-4 w-4" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Request Estimate Online
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServicesPageContent;
