"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Web Development",
  "App Development",
  "UI / UX Design",
  "Digital Solutions",
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/onetechwork?igsh=N24xMWVydXhudDN5&igsi=N24xMWVydXhudDN5",
    icon: FaInstagram,
    color: "text-[#E4405F]",
    hover:
      "hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:shadow-[0_0_25px_rgba(228,64,95,0.18)]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1EGfqtw9UM/",
    icon: FaFacebookF,
    color: "text-[#1877F2]",
    hover:
      "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:shadow-[0_0_25px_rgba(24,119,242,0.18)]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@onetechwork?si=EQUA7Uk_pgQSgqw8",
    icon: FaYoutube,
    color: "text-[#FF0000]",
    hover:
      "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:shadow-[0_0_25px_rgba(255,0,0,0.18)]",
  },
];

/* =========================================================
   EXTERNAL LINKS
========================================================= */

const whatsappLink = "https://wa.me/919424527241";

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#030305]">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[350px] rounded-full bg-violet-500/[0.035] blur-[120px]"
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        {/* ===================================================
            FOOTER GRID
        ==================================================== */}

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-1 shadow-[0_0_25px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:border-cyan-300/20 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <img
                  src="/images/logo.png"
                  alt="One Tech Work"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <div className="text-[15px] font-bold tracking-[0.09em] text-white">
                  ONE TECH WORK
                </div>

                <div className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-white/30">
                  One Vision • One Solution • One Future
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              Building modern digital experiences with technology, creativity,
              and solutions that make a difference.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-0.5 ${social.hover}`}
                  >
                    <Icon
                      className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${social.color}`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-1.5 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  <span>{link.name}</span>

                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:contact@onetechwork.com"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] transition-colors duration-300 group-hover:border-cyan-300/20">
                  <Mail className="h-3.5 w-3.5 text-cyan-300/80" />
                </span>

                <span className="pt-1">contact@onetechwork.com</span>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] transition-colors duration-300 group-hover:border-[#25D366]/20">
                  <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                </span>

                <span className="pt-1">WhatsApp</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 text-sm text-white/40">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <MapPin className="h-3.5 w-3.5 text-violet-300/80" />
                </span>

                <span className="pt-1">India</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div className="mt-14 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-white/25">
              © {new Date().getFullYear()} One Tech Work. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              {/* Privacy Policy */}
              <Link
                href="/privacy-policy"
                className="group inline-flex items-center gap-1 text-[11px] text-white/30 transition-colors duration-300 hover:text-cyan-200"
              >
                Privacy Policy
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>

              {/* Terms */}
              <Link
                href="/terms"
                className="group inline-flex items-center gap-1 text-[11px] text-white/30 transition-colors duration-300 hover:text-white/70"
              >
                Terms
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}