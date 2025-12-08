import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | SOS Standing Ovation",
  description:
    "How SOS Standing Ovation handles your information for inquiries and estimates.",
};

const lastUpdated = "December 2025";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Body */}
      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Introduction
            </h2>
            <p>
              SOS Standing Ovation Surround Sound (&quot;SOS&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
              privacy. This page explains what we collect when you contact us
              and how we use it.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p>We collect information you voluntarily provide when you:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Submit a contact form inquiry</li>
              <li>Request a quote or consultation</li>
              <li>Call or email us directly</li>
            </ul>
            <p className="mt-4">
              This may include your name, email, phone, address, and details
              about your project or service needs.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Schedule consultations and service appointments</li>
              <li>Provide quotes and project estimates</li>
              <li>Communicate about our services</li>
              <li>Improve our website and customer experience</li>
            </ul>
            <p className="mt-4">
              We do not sell, trade, or rent your personal information.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Information Sharing
            </h2>
            <p>
              We share your information only with trusted service providers who
              help us operate our business (for example, Supabase for processing
              contact forms), and only as needed to handle your inquiry. We may
              link to external sites (e.g., Yelp); their policies apply when you
              visit them.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet
              is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Retention
            </h2>
            <p>
              We keep inquiry details only as long as needed to communicate with
              you and maintain basic business records.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Your California Privacy Rights
            </h2>
            <p>
              If you are a California resident, you may request information
              about how we collect, use, and disclose your personal information,
              or request deletion. Contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Contact Us
            </h2>
            <div className="space-y-1">
              <p>
                <strong>SOS Standing Ovation Surround Sound</strong>
              </p>
              <p>7035 Laurel Canyon Boulevard Suite #16812</p>
              <p>North Hollywood, CA 91615</p>
              <p>
                Phone:{" "}
                <a className="text-primary underline" href="tel:+18182573732">
                  (818) 257-3732
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="text-primary underline"
                  href="mailto:info@laproav.com"
                >
                  info@laproav.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-semibold text-foreground">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last
              updated&quot; date.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
