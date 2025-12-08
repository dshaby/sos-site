"use client";

import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  honeypot: string;
}

const ContactPageContent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { error } = await supabase.functions.invoke("contact", {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        },
      });

      if (error) throw error;

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! We received your request and will be in touch soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error. Please call us at (818) 257-3732.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Schedule a free on-site consultation or send us a message with your
            project details.
          </p>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="border border-border shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="hidden">
                  <Input
                    type="text"
                    name="company"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(818) 555-1234"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="Street, City, Zip Code"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your project, room size, TV size, etc."
                  />
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Request Free On-Site Estimate"}
                  </Button>

                  {submitStatus.type && (
                    <div
                      className={cn(
                        "text-sm p-3 rounded-md border",
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border-green-200"
                          : "bg-red-50 text-red-800 border-red-200"
                      )}
                    >
                      {submitStatus.message}
                    </div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border border-border shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Better yet, see us in person!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  We love our customers, so feel free to book a complimentary
                  on-site visit.
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-foreground">
                    SOS Standing Ovation Surround Sound
                  </h3>

                  <div className="space-y-3">
                    <a
                      href="https://maps.google.com/?q=7035+Laurel+Canyon+Boulevard+Suite+16812+North+Hollywood+CA+91615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 group-hover:text-primary" />
                      <div>
                        <p>7035 Laurel Canyon Boulevard Suite #16812</p>
                        <p>North Hollywood, California 91615, United States</p>
                      </div>
                    </a>

                    <a
                      href="tel:+18182573732"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-medium"
                    >
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <span>(818) 257-3732</span>
                    </a>

                    <a
                      href="mailto:info@laproav.com"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span>info@laproav.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border shadow-md">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  {[
                    { day: "Mon", hours: "08:00 am – 06:30 pm" },
                    { day: "Tue", hours: "08:00 am – 06:30 pm" },
                    { day: "Wed", hours: "08:00 am – 06:30 pm" },
                    { day: "Thu", hours: "08:00 am – 06:30 pm" },
                    { day: "Fri", hours: "08:00 am – 06:30 pm" },
                    { day: "Sat", hours: "Closed", isClosed: true },
                    { day: "Sun", hours: "09:00 am – 05:30 pm" },
                  ].map(({ day, hours, isClosed }) => (
                    <div
                      key={day}
                      className="flex items-center justify-between gap-6 border-b border-border/60 last:border-0 py-2"
                    >
                      <span className="text-muted-foreground">{day}</span>
                      <span
                        className={cn(
                          "font-medium",
                          isClosed && "text-red-600"
                        )}
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-muted-foreground">
              Have more questions? See our <Link href="/about" className="underline hover:text-primary">FAQ</Link>.
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPageContent;
