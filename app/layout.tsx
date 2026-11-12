
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import ConsentPopup from "./components/ConsentPopup";

const GA_MEASUREMENT_ID = "G-6B8S08C0QL";

const BASE_URL = "https://onetechwork.com";
const ORGANIZATION_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const FOUNDER_ID = `${BASE_URL}/#founder`;
const LOGO_URL = `${BASE_URL}/images/logo.png`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "One Tech Work | Web Development, Mobile Apps & Software",
    template: "%s | One Tech Work",
  },

  description:
    "One Tech Work provides professional website development, mobile app development, custom software and UI/UX design solutions for businesses and individuals.",

  applicationName: "One Tech Work",

  authors: [
    {
      name: "One Tech Work",
    },
  ],

  creator: "One Tech Work",
  publisher: "One Tech Work",

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
    locale: "en_IN",
    siteName: "One Tech Work",
    title: "One Tech Work | Web Development, Mobile Apps & Software",
    description:
      "Professional website development, mobile apps, custom software and UI/UX design solutions by One Tech Work.",
    url: BASE_URL,
    images: [
      {
        url: LOGO_URL,
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
      "Professional website development, mobile apps, custom software and UI/UX design solutions by One Tech Work.",
    images: [LOGO_URL],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "One Tech Work",
      alternateName: "OneTechWork",
      url: BASE_URL,

      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },

      image: LOGO_URL,

      description:
        "One Tech Work provides professional website development, mobile app development, custom software and UI/UX design solutions for businesses and individuals.",

      email: "officialonetechwork@gmail.com",
      telephone: "+919424527241",

      founder: {
        "@id": FOUNDER_ID,
      },

      knowsAbout: [
        "Website Development",
        "Web Application Development",
        "Mobile App Development",
        "Custom Software Development",
        "UI/UX Design",
        "Digital Solutions",
      ],

      sameAs: [
        "https://www.instagram.com/onetechwork",
        "https://m.facebook.com/profile.php?id=1347320471791716",
        "https://youtube.com/@onetechwork",
      ],
    },

    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Faiz Khan",
      url: BASE_URL,
      worksFor: {
        "@id": ORGANIZATION_ID,
      },
    },

    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_URL,
      name: "One Tech Work",
      alternateName: "OneTechWork",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* OneTechWork Entity, Founder and Website Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Consent Popup */}
        <ConsentPopup />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
