import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About One Tech Work",
  description:
    "Learn about One Tech Work, a digital technology company providing website development, mobile apps, custom software, UI/UX design, cloud, backend and AI solutions.",

  alternates: {
    canonical: "https://onetechwork.com/about",
  },

  openGraph: {
    title: "About One Tech Work",
    description:
      "Learn about One Tech Work and our approach to building modern websites, mobile apps, custom software and digital solutions.",
    url: "https://onetechwork.com/about",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "About One Tech Work",
    description:
      "Learn about One Tech Work and our approach to building modern digital solutions.",
  },
};

export default function AboutPage() {
  return <About />;
}