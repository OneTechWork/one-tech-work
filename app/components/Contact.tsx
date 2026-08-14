"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(
        "Message send nahi ho paya. Please try again or contact us on WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] px-5 pb-24 pt-36 text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl sm:text-sm"
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Let&apos;s work together</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]"
          >
            Have an idea?
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8"
          >
            Tell us about your project, idea or business requirement. We&apos;ll
            get back to you and discuss how we can turn it into reality.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
          >
            <h2 className="text-xl font-semibold">Get in touch</h2>

            <p className="mt-3 text-sm leading-6 text-white/40">
              Prefer a direct conversation? Reach out to us through WhatsApp
              or email.
            </p>

            <div className="mt-8 space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919424527241"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:border-emerald-400/20 hover:bg-emerald-400/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/35">WhatsApp</p>
                  <p className="mt-1 text-sm font-medium text-white/75">
                    +91 94245 27241
                  </p>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              {/* Email */}
              <a
                href="mailto:officialonetechwork@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/35">Email</p>
                  <p className="mt-1 truncate text-sm font-medium text-white/75">
                    officialonetechwork@gmail.com
                  </p>
                </div>

                <ArrowUpRight className="ml-auto h-4 w-4 text-white/20" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-white/35">Location</p>
                  <p className="mt-1 text-sm font-medium text-white/75">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.07] pt-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                One Vision • One Solution • One Future
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8"
          >
            {sent ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                  <Send className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  Message sent successfully!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                  Thank you for reaching out. Your message has been sent to
                  One Tech Work. We&apos;ll get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.06] hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <h2 className="text-xl font-semibold">Start your project</h2>
                  <p className="mt-2 text-sm text-white/40">
                    Fill in the details and tell us what you&apos;re looking
                    to build.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Your name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-white/[0.04]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-white/55"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-white/[0.04]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium text-white/55"
                    >
                      Phone / WhatsApp
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-white/[0.04]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-xs font-medium text-white/55"
                    >
                      What do you need?
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="h-12 w-full rounded-xl border border-white/10 bg-[#09090c] px-4 text-sm text-white/70 outline-none transition focus:border-cyan-300/30"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="website">Website</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="software">Custom Software</option>
                      <option value="ui-ux">UI / UX Design</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-white/55"
                    >
                      Tell us about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what you want to build..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/20 transition focus:border-cyan-300/30 focus:bg-white/[0.04]"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm leading-5 text-red-300">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-100 disabled:cursor-not-allowed disabled:scale-100 disabled:opacity-60"
                  >
                    {sending ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-5 text-center sm:flex-row sm:text-left"
        >
          <p className="text-sm text-white/35">
            Prefer WhatsApp? Start a conversation directly.
          </p>

          <a
            href="https://wa.me/919424527241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-5 py-2.5 text-xs font-semibold text-[#25D366] transition hover:bg-[#25D366]/15"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-xs text-white/25 transition hover:text-white/60"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}