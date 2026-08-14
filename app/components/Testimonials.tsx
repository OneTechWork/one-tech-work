"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Project Client",
    role: "Website Project",
    text: "One Tech Work understood our requirements clearly and turned the idea into a clean, modern and professional digital experience.",
  },
  {
    name: "Business Client",
    role: "Digital Solution",
    text: "The overall experience was smooth and professional. The design, communication and attention to detail really stood out.",
  },
  {
    name: "Project Partner",
    role: "Technology Project",
    text: "A strong focus on quality and user experience. The final result feels modern, responsive and easy to use.",
  },
];

export default function Testimonials() {
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
            y: [0, 45, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Violet glow */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
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

      <section className="relative z-10 px-5 pb-14 pt-36 sm:px-8 sm:pt-40 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl sm:text-sm"
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span>Client Experiences</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              What people say
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                about our work.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
            >
              We believe the best measure of our work is the experience we
              create for the people and businesses we work with.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL CARDS
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.055] sm:p-7"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition-opacity duration-500 group-hover:bg-cyan-400/10" />

                {/* Quote icon */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Quote className="h-5 w-5 text-cyan-300" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-3.5 w-3.5 fill-cyan-300 text-cyan-300"
                      />
                    ))}
                  </div>
                </div>

                {/* Review */}
                <p className="relative mt-7 text-sm leading-7 text-white/55 sm:text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-white/[0.07]" />

                {/* Client */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </h2>

                    <p className="mt-1 text-xs text-white/30">
                      {testimonial.role}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-xs font-semibold text-white/40">
                    0{index + 1}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                  Built with purpose
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Good technology creates
                  <span className="text-white/35"> better experiences.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                  Every project we build is focused on combining thoughtful
                  design, reliable development and a simple user experience.
                </p>
              </div>

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.04] shadow-[0_0_50px_rgba(34,211,238,0.06)]">
                <div className="text-center">
                  <div className="text-xl font-semibold">5.0</div>

                  <div className="mt-1 flex items-center justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-2.5 w-2.5 fill-cyan-300 text-cyan-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
                Your project could be next
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Ready to create
                <span className="block bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  something great?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                Let&apos;s discuss your idea and turn it into a digital
                experience that people remember.
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