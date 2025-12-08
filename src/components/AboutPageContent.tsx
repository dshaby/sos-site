import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Home,
  Settings,
  Lightbulb,
  Shield,
  Building2,
  CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const AboutPageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/20 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground leading-tight md:text-4xl lg:text-5xl">
              About SOS Standing Ovation
            </h1>
            <p className="mb-4 mx-auto max-w-2xl text-lg font-light text-muted-foreground md:text-xl">
              Premium home theater and smart home integration services, serving the Greater Los Angeles Area since 2007.
            </p>
            <p className="mb-8 text-sm text-muted-foreground">
              Licensed &amp; Bonded • CA License #895999
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className=""
                asChild
              >
                <a href="tel:+18182573732">
                  <Phone className="h-5 w-5" />
                  <span className="ml-2">Call (818) 257-3732</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Free On-Site Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <Section
        title="Our Story"
        subtitle="Over two decades of experience in home theater design, smart home automation, and low-voltage installation."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column - Text */}
          <div className="space-y-4 text-muted-foreground">
            <p>
              SOS Standing Ovation was established in{" "}
              <strong className="text-foreground">2007</strong>, built on over{" "}
              <strong className="text-foreground">20 years of hands-on experience</strong> in home
              theater design and low-voltage integration. What started with professional TV mounting
              quickly grew into full smart home solutions, audio systems, and whole-home
              automation.
            </p>
            <p>
              We specialize in designing and installing systems that look clean, perform reliably,
              and are easy for homeowners to use every day. From living rooms and dedicated theater
              rooms to outdoor entertainment areas and small commercial spaces, we handle
              everything from cabling and hardware selection to programming and final tuning.
            </p>
            <p>
              We are fully licensed, bonded, and insured in the State of California. Our team takes
              pride in showing up prepared, working efficiently, cleaning up thoroughly, and making
              sure every customer understands how to use their new system with confidence.
            </p>
          </div>

          {/* Right Column - Bullet List */}
          <div className="rounded-lg bg-muted/50 p-6 md:p-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Key Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">Established in 2007</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">20+ years of industry experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Licensed &amp; bonded low-voltage contractor in California (CA License #895999)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Serving all areas of Los Angeles County
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Residential and light commercial projects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  Focus on clean installations, honest recommendations, and clear communication
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* What We Do Section */}
      <Section
        title="What We Do"
        subtitle="Complete low-voltage solutions for home theaters, smart homes, and connected spaces."
        className="bg-muted/50"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Home className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Home Theater Design &amp; Installation
            </h3>
            <p className="text-muted-foreground">
              Custom theater rooms, Dolby Atmos setups, projectors, screens, and acoustic
              considerations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Settings className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              TV Mounting &amp; Media Rooms
            </h3>
            <p className="text-muted-foreground">
              Precise measurements, secure mounting, concealed wiring, and clean, finished look.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Lightbulb className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">Smart Home Automation</h3>
            <p className="text-muted-foreground">
              Lighting, shades, climate, and scenes that you can control from your phone or voice
              assistant.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Settings className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Whole-Home Audio &amp; Networking
            </h3>
            <p className="text-muted-foreground">
              Multi-room audio, WiFi coverage, and reliable networking for modern connected homes.
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Shield className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Security &amp; Surveillance Systems
            </h3>
            <p className="text-muted-foreground">
              Cameras, recorders, remote access, and integrated monitoring solutions.
            </p>
          </div>

          {/* Card 6 */}
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow hover:shadow-md">
            <Building2 className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-3 text-xl font-semibold text-foreground">Commercial &amp; Office Spaces</h3>
            <p className="text-muted-foreground">
              Conference rooms, lobbies, and small business environments that need reliable AV and
              networking.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Process Section */}
      <Section
        title="How We Work"
        subtitle="A simple, guided process from first call to final walkthrough."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <span className="text-lg font-semibold">1</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">On-Site Consultation</h3>
            <p className="text-muted-foreground">
              We visit your home or business, listen to your goals, review the space, and discuss
              budget and options.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <span className="text-lg font-semibold">2</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">Design &amp; Installation</h3>
            <p className="text-muted-foreground">
              We design a system tailored to your needs, handle all cabling and equipment, and
              install everything with a clean finish.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-primary text-primary mb-4">
              <span className="text-lg font-semibold">3</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Tuning &amp; Lifetime Support
            </h3>
            <p className="text-muted-foreground">
              We calibrate the system, walk you through how to use it, and remain available for
              adjustments, upgrades, and ongoing support.
            </p>
          </div>
        </div>
      </Section>

      {/* Credentials & Recognition */}
      <Section
        title="Credentials & Recognition"
        subtitle="Licensed, bonded, and recognized for quality work."
      >
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/badges/expertise-2021.webp"
              alt="Expertise.com Best Home Theater Companies in Los Angeles 2021"
              width={200}
              height={200}
              className="h-32 w-auto object-contain md:h-40"
            />
            <p className="mt-3 max-w-[200px] text-sm text-muted-foreground">
              Named one of the Best Home Theater Companies in Los Angeles
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Link
              href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=895999"
              className="block transition-opacity hover:opacity-90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/badges/ca-license.jpg"
                alt="California Contractors State License Board - Active License #895999"
                width={260}
                height={180}
                className="h-28 w-auto rounded border border-border object-contain shadow-sm md:h-36"
              />
            </Link>
            <p className="mt-3 max-w-[220px] text-sm text-muted-foreground">
              CA License #895999 · C-7 Low Voltage
              <br />
              <Link
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=895999"
                className="underline transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify on CSLB.ca.gov
              </Link>
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section title="Frequently Asked Questions" className="bg-muted/50">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long have you been in business?</AccordionTrigger>
              <AccordionContent>
                We&apos;ve been serving customers in Los Angeles since 2007, with over 20 years of
                experience in home theater and low-voltage integration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Which areas do you serve?</AccordionTrigger>
              <AccordionContent>
                We serve homeowners and businesses throughout the Greater Los Angeles Area and
                surrounding communities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Do I need to buy all the equipment myself?</AccordionTrigger>
              <AccordionContent>
                No. We can recommend and supply TVs, speakers, receivers, projectors, cameras, and
                networking gear, or we can work with equipment you already own and advise on any
                gaps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can you mount a TV above a fireplace?</AccordionTrigger>
              <AccordionContent>
                Yes. We regularly install TVs above fireplaces, including on brick, stone, and tile
                surfaces. We use the appropriate mounting hardware and can install articulating
                mounts that tilt down for comfortable viewing, plus we handle all the wiring so
                cables stay hidden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What&apos;s included in the free on-site estimate?</AccordionTrigger>
              <AccordionContent>
                We walk through your space, discuss your goals and budget, review existing wiring
                and equipment, and provide a detailed written estimate with recommendations—all at
                no cost and with no obligation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>How soon can you start my project?</AccordionTrigger>
              <AccordionContent>
                Most projects begin within about a week, depending on scope and scheduling. After
                the consultation, we&apos;ll give you a clear timeline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Do you offer any warranty or support after installation?</AccordionTrigger>
              <AccordionContent>
                Yes. We stand behind our work and offer lifetime support on all installations. If you
                ever have questions about your system or need adjustments, we&apos;re just a phone
                call away.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Where can I read your reviews?</AccordionTrigger>
              <AccordionContent>
                You can read detailed customer reviews on Yelp. We maintain an average rating around
                4.8 stars based on 100+ reviews.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Final CTA Section */}
      <section className="relative bg-gradient-to-b from-primary/90 to-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
              Ready to Plan Your Next Project?
            </h2>
            <p className="mb-8 text-lg font-light text-primary-foreground/90 md:text-xl">
              Call us to schedule a free on-site consultation, or send us a message and we&apos;ll
              follow up with details and recommendations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className=""
                asChild
              >
                <a href="tel:+18182573732">
                  <Phone className="h-5 w-5" />
                  <span className="ml-2">Call (818) 257-3732</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
                asChild
              >
                <Link href="/contact">Request Estimate Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageContent;
