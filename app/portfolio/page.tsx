import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description:
    "Explore One Tech Work's portfolio of websites, mobile apps, custom software and digital projects built for businesses and clients.",

  alternates: {
    canonical: "https://onetechwork.com/portfolio",
  },

  openGraph: {
    title: "Web Development Portfolio | One Tech Work",
    description:
      "Explore websites, mobile apps, custom software and digital projects built by One Tech Work.",
    url: "https://onetechwork.com/portfolio",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Portfolio | One Tech Work",
    description:
      "Explore websites, mobile apps, custom software and digital projects built by One Tech Work.",
  },
};

export default function PortfolioPage() {
  return <Portfolio />;
}