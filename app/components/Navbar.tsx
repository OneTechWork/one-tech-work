"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   NAVIGATION
========================================================= */

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
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
   WHATSAPP
========================================================= */

const whatsappLink = "https://wa.me/919424527241";

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* =======================================================
     SCROLL DETECTION
     Lightweight: avoids updating React state on every
     single scroll event.
  ======================================================= */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 20;

        setScrolled((current) =>
          current === isScrolled ? current : isScrolled
        );

        ticking = false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     MOBILE MENU BODY LOCK
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR WRAPPER
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
        {/* =================================================
            NAVBAR
        ================================================== */}

        <nav
          className={`mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border px-3 transition-all duration-500 sm:h-[74px] sm:px-5 ${
            scrolled
              ? "border-white/10 bg-[#050507]/80 shadow-[0_18px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
              : "border-white/[0.07] bg-black/25 backdrop-blur-xl"
          }`}
        >
          {/* =================================================
              LOGO / BRAND
          ================================================== */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            {/* Logo */}
            <div className="relative shrink-0">
              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-[-8px] rounded-full bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Logo box */}
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] p-1 shadow-[0_0_25px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:border-cyan-300/20 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:h-11 sm:w-11">
                <Image
                  src="/images/logo.png"
                  alt="One Tech Work"
                  fill
                  priority
                  sizes="44px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Brand text */}
            <div className="min-w-0">
              <div className="truncate text-[13px] font-bold tracking-[0.09em] text-white sm:text-[15px]">
                ONE TECH WORK
              </div>

              <div className="hidden text-[7px] uppercase tracking-[0.24em] text-white/35 min-[420px]:block sm:text-[8px]">
                One Vision • One Solution • One Future
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2.5 text-[13px] font-medium text-white/55 transition-all duration-300 hover:bg-white/[0.05] hover:text-white xl:px-4"
              >
                {link.name}

                <span className="absolute bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-300 to-violet-400 transition-all duration-300 group-hover:w-4/5" />
              </Link>
            ))}
          </div>

          {/* =================================================
              DESKTOP RIGHT SIDE
          ================================================== */}

          <div className="hidden items-center gap-2 lg:flex">
            {/* Social icons */}
            <div className="mr-1 flex items-center gap-1.5">
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
                    className={`group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.015] transition-all duration-300 hover:-translate-y-0.5 ${social.hover}`}
                  >
                    <Icon
                      className={`h-[15px] w-[15px] transition-all duration-300 group-hover:scale-110 ${social.color}`}
                    />
                  </a>
                );
              })}
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/[0.07] px-4 text-xs font-medium text-[#25D366] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_28px_rgba(37,211,102,0.16)]"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>WhatsApp</span>
            </a>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              Let's Talk

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#070709]/95 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden"
            >
              <div className="p-3">
                {/* Mobile Nav Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.04,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/60 transition-all duration-300 hover:bg-white/[0.05] hover:text-white"
                      >
                        <span>{link.name}</span>

                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-3 h-px bg-white/[0.07]" />

                {/* Mobile Socials + WhatsApp */}
                <div className="flex items-center justify-between px-2 py-2">
                  <div className="flex items-center gap-2">
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
                          className={`group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 ${social.hover}`}
                        >
                          <Icon
                            className={`h-[16px] w-[16px] ${social.color} transition-transform duration-300 group-hover:scale-110`}
                          />
                        </a>
                      );
                    })}
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/[0.07] px-4 py-2.5 text-xs font-medium text-[#25D366] transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-100"
                >
                  Start Your Project

                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}