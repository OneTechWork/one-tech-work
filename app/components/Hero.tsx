"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  MoveUpRight,
  Check,
} from "lucide-react";

const chartBars = [35, 52, 42, 70, 58, 87, 74, 100];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-[#030305] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.065]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          }}
        />
      </div>

      {/* Top center glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-220px] h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px] sm:h-[420px] sm:w-[700px] sm:bg-cyan-500/[0.07] sm:blur-[140px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.75, 0.5],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/[0.10] blur-[100px] sm:h-[520px] sm:w-[520px] sm:bg-cyan-500/[0.13] sm:blur-[140px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 55, 0],
                y: [0, 30, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[320px] w-[320px] rounded-full bg-violet-600/[0.09] blur-[105px] sm:h-[560px] sm:w-[560px] sm:bg-violet-600/[0.12] sm:blur-[150px]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -50, 0],
                y: [0, -35, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.5'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="min-w-0">
            {/* Brand */}
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.75 }}
              className="mb-7 flex items-center gap-3 sm:mb-9 sm:gap-4"
            >
              <div className="relative shrink-0">
                <div
                  aria-hidden="true"
                  className="absolute inset-[-10px] rounded-full bg-cyan-400/10 blur-xl"
                />

                <div className="relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.045] p-1 shadow-[0_0_40px_rgba(34,211,238,0.10)] backdrop-blur-xl sm:h-[68px] sm:w-[68px]">
                  <Image
                    src="/images/logo.png"
                    alt="One Tech Work logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 58px, 68px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <div className="text-[17px] font-bold tracking-[0.11em] text-white sm:text-xl">
                  ONE TECH WORK
                </div>

                <div className="mt-1 truncate text-[8px] uppercase tracking-[0.22em] text-white/40 sm:text-[9px] sm:tracking-[0.28em]">
                  One Vision • One Solution • One Future
                </div>
              </div>
            </motion.div>

            {/* Label */}
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/10 bg-white/[0.045] px-3.5 py-2 text-xs text-white/65 shadow-[0_0_30px_rgba(34,211,238,0.04)] backdrop-blur-xl sm:mb-7 sm:px-4 sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-300 sm:h-4 sm:w-4" />

              <span className="truncate">
                Digital solutions for modern businesses
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="max-w-4xl text-[46px] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[84px]"
            >
              We turn your
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text pb-2 text-transparent">
                ideas into reality.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.8, delay: 0.34 }}
              className="mt-6 max-w-2xl text-[15px] leading-7 text-white/50 sm:mt-7 sm:text-lg sm:leading-8"
            >
              We design and build modern websites, mobile apps, custom
              software and intelligent digital solutions that help businesses
              move forward.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.8, delay: 0.46 }}
              className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap"
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.025] hover:bg-cyan-100 active:scale-[0.98] sm:px-7"
              >
                Start Your Project

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-[0.98] sm:px-7"
              >
                Explore Our Work

                <MoveUpRight className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919424527241"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with One Tech Work on WhatsApp"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.015] px-6 py-3.5 text-sm text-white/60 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.98] sm:px-5"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                WhatsApp
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/25 sm:mt-10 sm:text-xs sm:tracking-[0.22em]"
            >
              <span className="h-px w-8 bg-white/15 sm:w-10" />
              <span>Design • Development • Innovation</span>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-white/35"
            >
              <span className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-cyan-300/70" />
                Modern Design
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-cyan-300/70" />
                Scalable Technology
              </span>

              <span className="flex items-center gap-1.5">
                <Check className="h-3 w-3 text-cyan-300/70" />
                Business Focused
              </span>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.94,
              y: shouldReduceMotion ? 0 : 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[480px] sm:max-w-[560px] lg:max-w-none"
          >
            {/* Main glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[80px] sm:h-[65%] sm:w-[65%] sm:bg-cyan-400/[0.08] sm:blur-[100px]"
            />

            {/* Main glass panel */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[26px] border border-white/10 bg-white/[0.045] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:rounded-[30px] sm:p-3"
            >
              <div className="rounded-[20px] border border-white/10 bg-[#09090c] p-4 sm:rounded-[24px] sm:p-6">
                {/* Browser header */}
                <div className="mb-5 flex items-center justify-between sm:mb-7">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400/50 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/50 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-green-400/50 sm:h-2.5 sm:w-2.5" />
                  </div>

                  <div className="h-1.5 w-20 rounded-full bg-white/10 sm:h-2 sm:w-28" />
                </div>

                {/* Dashboard */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {/* Chart */}
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 sm:p-4">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="h-2.5 w-20 rounded-full bg-white/10 sm:h-3 sm:w-24" />
                      <div className="h-2 w-8 rounded-full bg-cyan-300/30 sm:w-10" />
                    </div>

                    <div className="flex h-28 items-end gap-1.5 sm:h-36 sm:gap-2">
                      {chartBars.map((height, index) => (
                        <motion.div
                          key={`chart-bar-${index}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.85,
                            delay: shouldReduceMotion
                              ? 0
                              : 0.75 + index * 0.07,
                            ease: "easeOut",
                          }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500/20 via-cyan-300/50 to-cyan-100/90 sm:rounded-t-lg"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Percentage */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 sm:p-4">
                    <div className="h-2.5 w-10 rounded-full bg-white/10 sm:h-3 sm:w-12" />

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: shouldReduceMotion ? 1 : 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: shouldReduceMotion ? 0 : 1,
                        duration: 0.6,
                      }}
                      className="mt-6 text-2xl font-semibold sm:mt-7 sm:text-3xl"
                    >
                      98%
                    </motion.div>

                    <div className="mt-1.5 text-[10px] text-white/35 sm:mt-2 sm:text-xs">
                      Performance
                    </div>
                  </div>

                  {/* Bottom interface */}
                  <div className="col-span-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 sm:p-4">
                    <div className="mb-4 flex items-center justify-between sm:mb-5">
                      <div className="h-2.5 w-24 rounded-full bg-white/10 sm:h-3 sm:w-28" />
                      <div className="h-2.5 w-12 rounded-full bg-cyan-300/20 sm:h-3 sm:w-16" />
                    </div>

                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="h-1.5 rounded-full bg-white/10 sm:h-2" />
                      <div className="h-1.5 w-[82%] rounded-full bg-white/10 sm:h-2" />
                      <div className="h-1.5 w-[64%] rounded-full bg-white/10 sm:h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating brand card */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-2 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-black/75 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:-bottom-7 sm:-left-7 sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-white/10 sm:h-9 sm:w-9">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px] sm:tracking-[0.18em]">
                  One Tech Work
                </div>

                <div className="mt-0.5 text-xs font-medium text-white sm:text-sm">
                  Smart. Fast. Scalable.
                </div>
              </div>
            </motion.div>

            {/* Floating orb */}
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 -top-5 h-10 w-10 rounded-full border border-cyan-200/20 bg-cyan-300/10 shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl sm:-right-5 sm:-top-8 sm:h-14 sm:w-14"
            />
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent sm:h-40"
      />

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-white/25 md:flex"
      >
        <span>Scroll</span>

        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-7 w-px bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}