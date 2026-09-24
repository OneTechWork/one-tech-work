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

const loginLink = "https://one-tech-work-app.vercel.app/login";
const signUpLink = "https://one-tech-work-app.vercel.app/register";
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
            TOP CTA
        ==================================================== */}

        <div className="relative mb-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-8 lg:p-10">
          {/* CTA Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-80px] top-[-100px] h-[260px] w-[260px] rounded-full bg-cyan-400/[0.08] blur-[90px]"
          />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                Let's Build Something
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Have an idea?
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                  Let's turn it into reality.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/45 sm:text-[15px]">
                From websites to digital solutions, we build modern experiences
                designed to help your business grow.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
              {/* Login */}
              <a
                href={loginLink}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.08] hover:text-cyan-100"
              >
                Login
              </a>

              {/* Sign Up */}
              <a
                href={signUpLink}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)]"
              >
                Sign Up

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

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
              <a
                href="mailto:contact@onetechwork.com"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <Mail className="h-3.5 w-3.5 text-cyan-300/80" />
                </span>

                <span className="pt-1">contact@onetechwork.com</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-white/40 transition-colors duration-300 hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                </span>

                <span className="pt-1">WhatsApp</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/40">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
                  <MapPin className="h-3.5 w-3.5 text-violet-300/80" />
                </span>

                <span className="pt-1">
                  India
                </span>
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
              <Link
                href="/privacy"
                className="text-[11px] text-white/25 transition-colors duration-300 hover:text-white/60"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-[11px] text-white/25 transition-colors duration-300 hover:text-white/60"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}