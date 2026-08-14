"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Globe2,
  Palette,
  Database,
  BrainCircuit,
  Check,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Development",
    description:
      "Modern, fast and responsive websites designed to give your business a powerful digital presence.",
    features: [
      "Business Websites",
      "Landing Pages",
      "Corporate Websites",
      "Responsive Design",
    ],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Custom mobile applications built with smooth experiences, modern interfaces and scalable architecture.",
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-platform Apps",
      "App UI/UX",
    ],
    gradient: "from-violet-400 to-purple-600",
  },
  {
    number: "03",
    icon: Code2,
    title: "Custom Software",
    description:
      "Powerful software solutions created around your exact business requirements and workflow.",
    features: [
      "Business Software",
      "Management Systems",
      "Custom Dashboards",
      "Automation",
    ],
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    number: "04",
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Clean and engaging interfaces designed to make your digital product simple, beautiful and easy to use.",
    features: [
      "Website UI",
      "App UI",
      "User Experience",
      "Design Systems",
    ],
    gradient: "from-pink-400 to-violet-500",
  },
  {
    number: "05",
    icon: Database,
    title: "Cloud & Backend",
    description:
      "Secure and scalable backend systems that keep your applications reliable and ready to grow.",
    features: [
      "Database Systems",
      "Cloud Integration",
      "APIs",
      "Authentication",
    ],
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    number: "06",
    icon: BrainCircuit,
    title: "AI & Smart Solutions",
    description:
      "Intelligent digital solutions that use automation and modern AI technology to improve business workflows.",
    features: [
      "AI Integration",
      "Automation",
      "Smart Features",
      "AI-powered Tools",
    ],
    gradient: "from-orange-400 to-pink-500",
  },
];

export default function Services() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white">
      {/* ================= BACKGROUND ================= */}

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
            x: [0, 80, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
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
            x: [0, -70, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-[40%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]"
        />
      </div>

      {/* ================= HERO ================= */}

      <section className="relative z-10 px-5 pb-16 pt-36 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24">
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

              <span>What We Do</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]"
            >
              Digital solutions
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                built for growth.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
            >
              From websites and mobile applications to custom software and
              intelligent digital solutions, we build technology that helps
              businesses move forward.
            </motion.p>
          </div>

          {/* ================= SERVICES GRID ================= */}

          <div className="mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-500 hover:border-white/[0.15] hover:bg-white/[0.055] sm:p-7"
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  {/* Top */}
                  <div className="relative flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${service.gradient} bg-opacity-10`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-xs font-medium tracking-[0.2em] text-white/20">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative mt-7 space-y-2.5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-white/55"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.07]">
                          <Check className="h-3 w-3 text-cyan-300" />
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Bottom line */}
                  <div className="relative mt-7 h-px w-full overflow-hidden bg-white/[0.07]">
                    <motion.div
                      className={`h-full w-0 bg-gradient-to-r ${service.gradient}`}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.3 + index * 0.08,
                      }}
                    />
                  </div>

                  {/* Learn more */}
                  <Link
                    href="/contact"
                    className="group/link relative mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/45 transition-colors hover:text-white"
                  >
                    Discuss your project

                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="relative z-10 px-5 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16">
            {/* CTA glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative z-10">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                Have an idea?
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s build something
                <span className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  {" "}
                  remarkable.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                Tell us about your project and let&apos;s turn your idea into
                a digital experience that stands out.
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