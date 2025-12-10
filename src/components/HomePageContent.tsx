import Link from "next/link";
import { Phone, Award, Shield, Clock, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Smart Home Automation & Home Theater Installation in Los Angeles"
        subtitle="Transform your living space with premium audio-visual solutions and smart home automation. Over 20 years of excellence, licensed & bonded."
        backgroundImage="/images/hero-home-theater.jpg"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-auto px-7 py-5 text-base font-semibold"
              asChild
            >
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-5 w-5" />
                Book Free On-Site Estimate
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto px-8 py-6 text-lg bg-background/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm hover:bg-background/20"
              asChild
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80 text-center">
            Since 2007 · Licensed, bonded, insured (CA) · Serving Greater Los
            Angeles
          </p>
        </div>
      </Hero>

      {/* Trust Indicators */}
      <Section className="bg-muted/50">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">20+ Years Experience</h3>
            <p className="text-muted-foreground">
              Two decades of premium installations across Los Angeles
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Licensed &amp; Bonded
            </h3>
            <p className="text-muted-foreground">
              Fully licensed contractor with comprehensive insurance
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Lifetime Support</h3>
            <p className="text-muted-foreground">
              Ongoing maintenance and support for all installations
            </p>
          </div>
        </div>
      </Section>

      {/* Quick FAQ Teaser */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Quick Answers
          </h2>
          <p className="text-muted-foreground">
            A few common questions we hear—get the full FAQ on our About page.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="space-y-2 rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              How soon can you start?
            </h3>
            <p className="text-sm text-muted-foreground">
              Usually within about a week, depending on scope and scheduling.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Do I need to buy equipment?
            </h3>
            <p className="text-sm text-muted-foreground">
              We can spec and supply, or work with what you have and fill gaps
              as needed.
            </p>
          </div>
          <div className="space-y-2 rounded-lg border border-border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Are you licensed and insured?
            </h3>
            <p className="text-sm text-muted-foreground">
              Yes—licensed, bonded, and insured in California for low-voltage
              work.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/about">View full FAQ</Link>
          </Button>
        </div>
      </Section>

      {/* Services Overview */}
      <Section
        title="Premium Installation Services"
        subtitle="From dedicated home theaters to whole-home automation, we bring your vision to life"
        className="bg-muted/50"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Home Theater Installation",
              description:
                "Custom cinema rooms with Dolby Atmos, premium projectors, and acoustic treatment",
            },
            {
              title: "TV Installation & Mounting",
              description:
                "Professional wall mounting with concealed wiring and optimal viewing angles",
            },
            {
              title: "Smart Home Automation",
              description:
                "Integrated lighting, climate, security, and entertainment control systems",
            },
            {
              title: "Audio Systems",
              description:
                "Whole-home audio, soundbars, and premium speaker installations",
            },
            {
              title: "Security Cameras",
              description:
                "Professional surveillance systems with remote monitoring capabilities",
            },
            {
              title: "Network & WiFi",
              description:
                "Enterprise-grade networking for seamless connectivity throughout your home",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      {/* Reviews & Social Proof */}
      <Section
        title="Reviews & Social Proof"
        subtitle="4.8 ★ rating with 100+ reviews on Yelp. Real feedback from homeowners across Los Angeles."
      >
        {/* Rating Summary */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-5xl font-bold text-foreground">4.8</span>
            <Star className="h-8 w-8 fill-gold text-gold" />
          </div>
          <p className="mb-6 text-muted-foreground">
            Based on 100+ Yelp reviews
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood?osq=SOS+standing+ovation+surround+sound&override_cta=Request+quote+%26+availability"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View All Reviews on Yelp
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Review Cards */}
        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Review 1 - Amanda T. */}
          <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Amanda T.</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              Ron installed our 65-inch 2021 Samsung Frame TV. Professional,
              careful, and extremely clean installation. He walked us through
              options, explained everything clearly, and made the whole process
              easy.
            </p>
            <a
              href="https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood?hrid=M_TNRAGfzBX-zE24-Thw0g"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Read full review on Yelp
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Review 2 - Rich O. */}
          <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Rich O.</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              I had quotes from others, but Ron&apos;s honesty and expertise
              stood out. The installation was precise, cables were hidden
              perfectly, and the work was completed faster than expected. Highly
              recommended.
            </p>
            <a
              href="https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood?hrid=pxPaa95rRxhMGY6hA-RvSg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Read full review on Yelp
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Review 3 - Timothy V. */}
          <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Timothy V.</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">
              Ron arrived prepared with all tools needed. Everything was
              measured and leveled perfectly. He and his assistant cleaned up
              thoroughly afterward. Incredible service and craftsmanship.
            </p>
            <a
              href="https://www.yelp.com/biz/standing-ovation-surround-sound-services-north-hollywood?hrid=G4IcJ4hiRtYUesgzhdHBug"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Read full review on Yelp
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Badges / License Strip */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="rounded-lg bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                Licensed, insured, and bonded low-voltage contractor in
                California
              </p>
            </div>
            <div className="rounded-lg bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                Recognized among top home theater installers in Los Angeles
              </p>
            </div>
            <div className="rounded-lg bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground">
                5-star average over the last 3+ years on Yelp
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mb-8 text-xl text-primary-foreground/90">
            Schedule your free on-site consultation today. We&apos;ll assess
            your space, discuss your vision, and provide a detailed proposal.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-auto px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="tel:+18182573732">
                <Phone className="mr-2 h-5 w-5" />
                Call (818) 257-3732
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto px-8 py-6 text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              asChild
            >
              <Link href="/contact">Request Estimate Online</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomePageContent;
