"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaRedditAlien,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1PryPPtESX/",
    icon: FaFacebookF,
    className:
      "text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:shadow-[0_0_28px_rgba(24,119,242,0.18)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/onetechwork",
    icon: FaInstagram,
    className:
      "text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:shadow-[0_0_28px_rgba(228,64,95,0.18)]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@onetechwork",
    icon: FaYoutube,
    className:
      "text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:shadow-[0_0_28px_rgba(255,0,0,0.18)]",
  },
  {
    name: "X",
    href: "https://x.com/OneTechWork",
    icon: FaXTwitter,
    className:
      "text-white hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_0_28px_rgba(255,255,255,0.10)]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919424527241",
    icon: FaWhatsapp,
    className:
      "text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_28px_rgba(37,211,102,0.18)]",
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/u/onetechwork/s/ugBORByGcu",
    icon: FaRedditAlien,
    className:
      "text-[#FF4500] hover:border-[#FF4500]/40 hover:bg-[#FF4500]/10 hover:shadow-[0_0_28px_rgba(255,69,0,0.18)]",
  },
];

const footerSections = [
  {
    title: "What We Do",
    links: [
      { name: "Web Development", href: "/services" },
      { name: "App Development", href: "/services" },
      { name: "UI / UX Design", href: "/services" },
      { name: "Digital Solutions", href: "/services" },
    ],
  },
  {
    title: "Who We Are",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Use One Tech Work",
    links: [
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Need Help?",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#030305]">
      {/* Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-violet-500/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-4 pb-8 pt-14 sm:px-8 lg:pt-16">
        {/* Brand */}
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
          >
            {/* Logo */}
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-[0_0_30px_rgba(34,211,238,0.06)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-cyan-300/25 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <img
                src="/images/logo.png"
                alt="One Tech Work"
                className="h-full w-full scale-[1.18] object-cover transition-transform duration-500 group-hover:scale-[1.25]"
              />
            </div>

            {/* Brand Text */}
            <div className="text-left">
              <div className="text-[15px] font-bold tracking-[0.09em] text-white">
                ONE TECH WORK
              </div>

              <div className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-white/30">
                One Vision • One Solution • One Future
              </div>
            </div>
          </Link>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
            Building modern digital experiences with technology, creativity,
            and solutions that make a difference.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-2.5">
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
                className={`group flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-500 ease-out hover:-translate-y-1 sm:h-11 sm:w-11 ${social.className}`}
              >
                <Icon className="h-4 w-4 transition-transform duration-500 ease-out group-hover:scale-110 sm:h-[17px] sm:w-[17px]" />
              </a>
            );
          })}
        </div>

        {/* 2 × 2 Matrix */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2">
          {footerSections.map((section, index) => (
            <div
              key={section.title}
              className={[
                "px-3 py-7 sm:px-8",
                index === 0
                  ? "border-b border-r border-white/[0.07]"
                  : "",
                index === 1
                  ? "border-b border-white/[0.07]"
                  : "",
                index === 2
                  ? "border-r border-white/[0.07]"
                  : "",
              ].join(" ")}
            >
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:text-[11px] sm:tracking-[0.18em]">
                {section.title}
              </h3>

              <div className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <Link
                    key={`${section.title}-${link.name}`}
                    href={link.href}
                    className="group flex w-fit items-center gap-1 text-[12px] text-white/50 transition-all duration-300 ease-out hover:translate-x-1 hover:text-white sm:gap-1.5 sm:text-sm"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight className="h-3 w-3 shrink-0 -translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 sm:h-3.5 sm:w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 border-t border-white/[0.07] pt-7">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-7">
            <a
              href="mailto:contact@onetechwork.com"
              className="group flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-white"
            >
              <Mail className="h-4 w-4 text-cyan-300/70 transition-transform duration-300 group-hover:scale-110" />
              <span>contact@onetechwork.com</span>
            </a>

            <a
              href="https://wa.me/919424527241"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>

            <div className="flex items-center gap-2.5 text-sm text-white/40">
              <MapPin className="h-4 w-4 text-violet-300/70" />
              <span>India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-[11px] text-white/25 sm:text-left">
              © {new Date().getFullYear()} One Tech Work. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="group inline-flex items-center gap-1 text-[11px] font-medium text-cyan-300/80 transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]"
              >
                Privacy Policy

                <ArrowUpRight className="h-3 w-3 opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>

              <Link
                href="/terms"
                className="group inline-flex items-center gap-1 text-[11px] font-medium text-cyan-300/80 transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]"
              >
                Terms &amp; Conditions

                <ArrowUpRight className="h-3 w-3 opacity-70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}