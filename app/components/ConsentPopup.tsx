"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const CONSENT_KEY = "one-tech-work-consent";

export default function ConsentPopup() {
  const [status, setStatus] = useState<
    "loading" | "pending" | "accepted"
  >("loading");

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted") {
      setStatus("accepted");
    } else {
      setStatus("pending");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setStatus("accepted");
  };

  const handleReject = () => {
    window.location.replace("https://www.google.com");
  };

  if (status === "loading" || status === "accepted") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-cyan-400/[0.08] blur-[120px]"
      />

      {/* Popup */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cyan-300/[0.15] bg-[#07090d]/95 shadow-[0_0_80px_rgba(34,211,238,0.10)]">
        {/* Top Glow */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"
        />

        <div className="p-6 sm:p-8">
          {/* Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] shadow-[0_0_25px_rgba(34,211,238,0.08)]">
            <ShieldCheck className="h-6 w-6 text-cyan-300" />
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Your Privacy Matters
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-white/55">
            We use cookies and similar technologies to provide a better
            experience, keep our website secure, and understand how our
            website is used.
          </p>

          <p className="mt-3 text-sm leading-6 text-white/55">
            By selecting{" "}
            <span className="font-medium text-white/80">
              Accept All
            </span>
            , you agree to our{" "}
            <Link
              href="/terms"
              className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]"
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="font-medium text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition-all duration-300 hover:text-cyan-200 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            {/* Reject */}
            <button
              type="button"
              onClick={handleReject}
              className="h-11 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-white/60 transition-all duration-300 hover:border-red-300/20 hover:bg-red-400/[0.05] hover:text-white"
            >
              Reject All
            </button>

            {/* Accept */}
            <button
              type="button"
              onClick={handleAccept}
              className="h-11 rounded-xl border border-cyan-300/30 bg-cyan-300/[0.10] px-5 text-sm font-semibold text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.10)] transition-all duration-300 hover:border-cyan-200/50 hover:bg-cyan-300/[0.16] hover:text-cyan-100 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >
              Accept All
            </button>
          </div>

          {/* Notice */}
          <p className="mt-5 text-center text-[10px] leading-5 text-white/25">
            You must accept to continue using One Tech Work.
          </p>
        </div>
      </div>
    </div>
  );
}
