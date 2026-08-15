import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact One Tech Work",
  description:
    "Contact One Tech Work to discuss website development, mobile apps, custom software, UI/UX design, AI solutions and other digital projects.",

  alternates: {
    canonical: "https://onetechwork.com/contact",
  },

  openGraph: {
    title: "Contact One Tech Work",
    description:
      "Get in touch with One Tech Work to discuss your website, mobile app, software or digital product project.",
    url: "https://onetechwork.com/contact",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact One Tech Work",
    description:
      "Get in touch with One Tech Work to discuss your website, mobile app, software or digital product project.",
  },
};

export default function ContactPage() {
  return <Contact />;
}