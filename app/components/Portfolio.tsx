"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Sparkles,
  Check,
} from "lucide-react";

type ProjectCategory = "Website";

type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "Darbare E Ashrafi Betul",
    category: "Website",
    description:
      "A modern spiritual website created to showcase the darbar, its history, activities and important information through an elegant digital experience.",
    image: "/images/portfolio/darbare-ashrafi.png",
    tags: ["Next.js", "React", "Modern UI"],
    href: "https://darbare-e-ashrafi-betul.vercel.app",
  },
  {
    title: "SiteSprout",
    category: "Website",
    description:
      "A modern digital experience focused on clean presentation, strong visual hierarchy and a smooth responsive user experience.",
    image: "/images/portfolio/siteprout.png",
    tags: ["Web Design", "Responsive", "UI/UX"],
    href: "https://www.getsitesprout.com/",
  },
  {
    title: "Superboosted",
    category: "Website",
    description:
      "A premium creative website designed around bold visuals, modern interactions and a polished digital brand experience.",
    image: "/images/portfolio/superboosted.png",
    tags: ["Creative", "Web Design", "UI/UX"],
    href: "https://www.superboosted.design/",
  },
  {
    title: "Toad Bakery",
    category: "Website",
    description:
      "A visually engaging bakery website built to present the brand, products and overall experience in a clean and memorable way.",
    image: "/images/portfolio/toadbakery.png",
    tags: ["Brand Website", "Responsive", "Design"],
    href: "https://www.toadbakery.com/",
  },
];

const filters = ["All", "Website"] as const;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

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

        {/* Top glow */}
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-32 h-[480px] w-[480px] rounded-full bg-cyan-500/10 blur-[150px]"
        />

        {/* Right glow */}
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
          className="absolute -right-52 top-[45%] h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[160px]"
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
              <span>Our Work</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]"
            >
              Ideas we turned
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                into reality.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
            >
              Explore some of the digital experiences and technology
              solutions created by One Tech Work for businesses, brands
              and organizations.
            </motion.p>
          </div>

          {/* =================================================
              FILTERS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                    active
                      ? "border-white/15 bg-white text-black shadow-lg"
                      : "border-white/10 bg-white/[0.035] text-white/50 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  {active && <Check className="h-3.5 w-3.5" />}
                  {filter}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            layout
            className="grid gap-6 lg:grid-cols-2"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/20 hover:bg-white/[0.05]"
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#09090c]">
                    <Image
                      src={project.image}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-cyan-400/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-[11px] font-medium text-white/80 shadow-lg backdrop-blur-xl">
                        <Globe2 className="h-3.5 w-3.5 text-cyan-300" />
                        {project.category}
                      </div>
                    </div>

                    {/* Visit icon */}
                    <div className="absolute right-5 top-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/70 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Bottom project info */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
                        One Tech Work
                      </span>

                      <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </a>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {project.title}
                      </h2>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                        {project.description}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-white/40 transition-colors duration-300 group-hover:border-white/10 group-hover:text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visit project */}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-7 inline-flex items-center gap-2 text-xs font-semibold text-white/60 transition-colors duration-300 hover:text-cyan-300"
                  >
                    Visit Live Website

                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            ))}
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
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] px-6 py-12 text-center shadow-[0_20px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-10 sm:py-16">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="relative z-10">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/70">
                Your project could be next
              </p>

              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Have an idea?
                <span className="block bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-transparent">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
                Tell us what you have in mind and we&apos;ll help turn it
                into a powerful digital experience.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-100"
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