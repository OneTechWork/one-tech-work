import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Web Development, Mobile Apps & Software",
  description:
    "One Tech Work provides professional website development, mobile app development, custom software, UI/UX design and AI-powered digital solutions for businesses and individuals.",

  alternates: {
    canonical: "https://onetechwork.com/",
  },

  openGraph: {
    title: "One Tech Work | Web Development, Mobile Apps & Software",
    description:
      "Professional website development, mobile apps, custom software, UI/UX design and AI-powered digital solutions by One Tech Work.",
    url: "https://onetechwork.com/",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
    images: [
      {
        url: "https://onetechwork.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "One Tech Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "One Tech Work | Web Development, Mobile Apps & Software",
    description:
      "Professional website development, mobile apps, custom software, UI/UX design and AI-powered digital solutions by One Tech Work.",
    images: ["https://onetechwork.com/images/logo.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}