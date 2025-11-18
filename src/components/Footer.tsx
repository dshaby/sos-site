import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">SOS Standing Ovation</h3>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Premium home theater and smart home installation services in Los Angeles. 
              Over 20 years of excellence.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Licensed &amp; Bonded • CA License #123456
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:info@sosav.com"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  info@sosav.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  Serving Greater Los Angeles Area
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} SOS Standing Ovation Surround Sound. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
