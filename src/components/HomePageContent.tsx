import { Phone, Award, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Smart Home, Home Theater, and A/V Installation in Los Angeles"
        subtitle="Transform your living space with premium audio-visual solutions and smart home automation. Over 20 years of excellence, licensed & bonded."
        backgroundImage="/images/hero-home-theater.jpg"
      >
        <Button
          size="lg"
          className="h-auto px-8 py-6 text-lg font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Phone className="mr-2 h-5 w-5" />
          Book Free On-Site Estimate
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-auto px-8 py-6 text-lg bg-background/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm hover:bg-background/20"
        >
          View Our Work
        </Button>
      </Hero>

      {/* Trust Indicators */}
      <Section className="bg-muted/30">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">20+ Years Experience</h3>
            <p className="text-muted-foreground">
              Two decades of premium installations across Los Angeles
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Licensed &amp; Bonded</h3>
            <p className="text-muted-foreground">
              Fully licensed contractor with comprehensive insurance
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Lifetime Support</h3>
            <p className="text-muted-foreground">
              Ongoing maintenance and support for all installations
            </p>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section
        title="Premium Installation Services"
        subtitle="From dedicated home theaters to whole-home automation, we bring your vision to life"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Home Theater Installation",
              description:
                "Custom cinema rooms with Dolby Atmos, premium projectors, and acoustic treatment"
            },
            {
              title: "TV Installation & Mounting",
              description:
                "Professional wall mounting with concealed wiring and optimal viewing angles"
            },
            {
              title: "Smart Home Automation",
              description:
                "Integrated lighting, climate, security, and entertainment control systems"
            },
            {
              title: "Audio Systems",
              description:
                "Whole-home audio, soundbars, and premium speaker installations"
            },
            {
              title: "Security Cameras",
              description:
                "Professional surveillance systems with remote monitoring capabilities"
            },
            {
              title: "Network & WiFi",
              description:
                "Enterprise-grade networking for seamless connectivity throughout your home"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Schedule your free on-site consultation today. We&apos;ll assess your space, 
            discuss your vision, and provide a detailed proposal.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-auto px-8 py-6 text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (123) 456-7890
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto px-8 py-6 text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
            >
              Request Estimate Online
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePageContent;
