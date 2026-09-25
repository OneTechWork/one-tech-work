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
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1PryPPtESX/",
    icon: FaFacebookF,
    color: "text-[#1877F2]",
    hover:
      "hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:shadow-[0_0_30px_rgba(24,119,242,0.18)]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/onetechwork",
    icon: FaInstagram,
    color: "text-[#E4405F]",
    hover:
      "hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:shadow-[0_0_30px_rgba(228,64,95,0.18)]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@onetechwork",
    icon: FaYoutube,
    color: "text-[#FF0000]",
    hover:
      "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:shadow-[0_0_30px_rgba(255,0,0,0.18)]",
  },
  {
    name: "X",
    href: "https://x.com/OneTechWork",
    icon: FaXTwitter,
    color: "text-white",
    hover:
      "hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.10)]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919424527241",
    icon: FaWhatsapp,
    color: "text-[#25D366]",
    hover:
      "hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_30px_rgba(37,211,102,0.18)]",
  },
];

const columns = [
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
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-violet-500/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-18">
        {/* Brand */}
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 transition-all duration-500"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-1 shadow-[0_0_25px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-300/25 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
              <img
                src="/images/logo.png"
                alt="One Tech Work"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="text-left">
              <div className="text-[16px] font-bold tracking-[0.09em] text-white">
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

        {/* Social Media */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
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
                className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] transition-all duration-500 ease-out hover:-translate-y-1 ${social.hover}`}
              >
                <Icon
                  className={`h-[17px] w-[17px] transition-all duration-500 ease-out group-hover:scale-110 ${social.color}`}
                />
              </a>
            );
          })}
        </div>

        {/* Footer Links Matrix */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-14">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                {column.title}
              </h3>

              <div className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.name}`}
                    href={link.href}
                    className="group flex w-fit items-center gap-1.5 text-[14px] text-white/55 transition-all duration-300 ease-out hover:translate-x-1 hover:text-white"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="mx-auto mt-14 max-w-5xl border-t border-white/[0.07] pt-8 lg:mt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
              {/* Email */}
              <a
                href="mailto:contact@onetechwork.com"
                className="group flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-300/70 transition-transform duration-300 group-hover:scale-110" />
                <span>contact@onetechwork.com</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919424527241"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-sm text-white/40">
                <MapPin className="h-4 w-4 text-violet-300/70" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-white/25">
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