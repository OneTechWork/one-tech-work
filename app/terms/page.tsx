import type { Metadata } from "next";

import TermsOfService from "@/app/components/TermsofService";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | One Tech Work",

  description:
    "Read the Terms & Conditions of One Tech Work to understand the rules, responsibilities, services, and conditions that apply when using our website and digital services.",

  keywords: [
    "One Tech Work Terms and Conditions",
    "One Tech Work Terms of Service",
    "One Tech Work legal terms",
    "One Tech Work website terms",
    "digital services terms and conditions",
    "web development terms",
    "app development terms",
  ],

  authors: [
    {
      name: "One Tech Work",
      url: "https://onetechwork.com",
    },
  ],

  creator: "One Tech Work",
  publisher: "One Tech Work",

  alternates: {
    canonical: "https://onetechwork.com/terms",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://onetechwork.com/terms",
    title: "Terms & Conditions | One Tech Work",
    description:
      "Review the Terms & Conditions governing the use of the One Tech Work website and its digital services.",
    siteName: "One Tech Work",
    locale: "en_IN",
    images: [
      {
        url: "https://onetechwork.com/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "One Tech Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | One Tech Work",
    description:
      "Review the Terms & Conditions governing the use of the One Tech Work website and digital services.",
    images: ["https://onetechwork.com/images/logo.png"],
  },

  category: "Legal",
};

export default function TermsPage() {
  return (
    <>
      <TermsOfService />
      <Footer />
    </>
  );
}