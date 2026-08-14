import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  },

  twitter: {
    card: "summary_large_image",
    title: "One Tech Work | Web Development, Mobile Apps & Software",
    description:
      "Professional website development, mobile apps, custom software and UI/UX design solutions by One Tech Work.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}