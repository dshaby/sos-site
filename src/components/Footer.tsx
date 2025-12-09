import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaHouzz } from "react-icons/fa";

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
              Licensed &amp; Bonded • CA License #895999
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
                  href="tel:+18182573732"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  (818) 257-3732
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:info@laproav.com"
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  info@laproav.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/80">
                  Serving the Greater Los Angeles Area
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-8 flex justify-center space-x-5">
          <a
            href="https://www.facebook.com/hometheaterinstallers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.houzz.com/pro/laproav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="Houzz"
          >
            <FaHouzz className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/ron.shaby"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ron-shaby/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/user/ronshaby/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
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
              <a
                href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=895999"
                className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify License #895999
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
