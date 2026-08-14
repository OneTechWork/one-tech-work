"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Clean, premium and meaningful interfaces designed to make your brand stand out.",
  },
  {
    icon: Code2,
    title: "Quality Development",
    description:
      "Fast, scalable and maintainable digital products built with modern technologies.",
  },
  {
    icon: Rocket,
    title: "Built to Grow",
    description:
      "We create solutions that can evolve with your business instead of holding it back.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "We focus on performance, usability and stability from the first line of code.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Modern UI/UX",
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Cyan glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, 50, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Violet glow */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-[45%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]"
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* LEFT */}
            <div>
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl sm:text-sm"
              >
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span>About One Tech Work</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1 }}
                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px]"
              >
                We build digital
                <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  experiences that matter.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
              >
                One Tech Work is a digital technology company focused on
                creating modern websites, mobile applications, custom software
                and digital experiences for businesses and organizations.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-100"
                >
                  Start Your Project

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                >
                  Explore Our Work

                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              >
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#09090c] px-6 py-8 sm:px-8 sm:py-10">
                  {/* Logo */}
                  <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_0_60px_rgba(34,211,238,0.08)] sm:h-32 sm:w-32">
                    <Image
                      src="/images/logo.png"
                      alt="One Tech Work"
                      width={128}
                      height={128}
                      priority
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="mt-7 text-center">
                    <h2 className="text-xl font-semibold tracking-[0.08em]">
                      ONE TECH WORK
                    </h2>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/30">
                      One Vision • One Solution • One Future
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center">
                      <div className="text-lg font-semibold">01</div>
                      <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                        Vision
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center">
                      <div className="text-lg font-semibold">∞</div>
                      <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                        Ideas
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center">
                      <div className="text-lg font-semibold">01</div>
                      <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                        Future
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
              >
                <Zap className="h-4 w-4 text-cyan-300" />

                <span className="text-xs font-medium text-white/70">
                  Smart. Fast. Scalable.
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            {/* Small heading card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9"
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                Our Approach
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technology should make things
                <span className="block text-white/35">
                  simpler, not harder.
                </span>
              </h2>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-9"
            >
              <p className="text-base leading-8 text-white/50 sm:text-lg">
                At One Tech Work, we believe great digital products are more
                than just good-looking interfaces. They should solve real
                problems, communicate clearly and create a smooth experience
                for the people using them.
              </p>

              <p className="mt-5 text-base leading-8 text-white/50 sm:text-lg">
                From the first idea to the final product, we combine thoughtful
                design with modern technology to build digital solutions that
                are fast, responsive and ready to grow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
              What We Believe
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Built around
              <span className="text-white/35"> better ideas.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.055]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Layers3 className="h-5 w-5 text-violet-300" />
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Modern technology.
                  <span className="block text-white/35">
                    Thoughtful execution.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                  We use modern tools and technologies to create experiences
                  that feel fast, polished and reliable across devices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-5 text-center text-xs font-medium text-white/55 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    {technology}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative z-10 px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />

            <div className="relative z-10">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                Let&apos;s Create Something
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Have an idea?
                <span className="block bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  Let&apos;s build it together.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                Whether you need a website, mobile app or custom software,
                we&apos;re ready to turn your idea into a real digital
                experience.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-100"
              >
                Start Your Project

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030305] to-transparent" />
    </main>
  );
}