import type { Metadata } from "next";

import PrivacyPolicy from "@/app/components/PrivacyPolicy";
import Footer from "@/app/components/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | One Tech Work",

  description:
    "Read the Privacy Policy of One Tech Work to understand how we collect, use, protect, and handle information when you use our website and digital services.",

  keywords: [
    "One Tech Work Privacy Policy",
    "One Tech Work privacy",
    "One Tech Work data policy",
    "One Tech Work website privacy policy",
    "digital services privacy policy",
    "web development privacy policy",
    "app development privacy policy",
    "data protection policy",
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
    canonical: "https://onetechwork.com/privacy-policy",
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
    url: "https://onetechwork.com/privacy-policy",
    title: "Privacy Policy | One Tech Work",
    description:
      "Learn how One Tech Work collects, uses, protects, and handles information when you use our website and digital services.",
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
    title: "Privacy Policy | One Tech Work",
    description:
      "Learn how One Tech Work collects, uses, protects, and handles information when you use our website and digital services.",
    images: ["https://onetechwork.com/images/logo.png"],
  },

  category: "Legal",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
      <Footer />
    </>
  );
}