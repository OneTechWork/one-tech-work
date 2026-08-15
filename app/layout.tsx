import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-6B8S08C0QL";

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
    url: "https://onetechwork.com",
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
      "Professional website development, mobile apps, custom software and UI/UX design solutions by One Tech Work.",
    images: ["https://onetechwork.com/images/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One Tech Work",
  url: "https://onetechwork.com",
  logo: "https://onetechwork.com/images/logo.png",

  description:
    "One Tech Work provides professional website development, mobile app development, custom software and UI/UX design solutions.",

  email: "officialonetechwork@gmail.com",
  telephone: "+919424527241",

  sameAs: [
    "https://www.instagram.com/onetechwork",
    "https://www.facebook.com/share/1PryPPtESX/",
    "https://youtube.com/@onetechwork",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}