import type { Metadata } from "next";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read experiences and feedback from clients who worked with One Tech Work on websites, mobile apps, custom software and digital solutions.",

  alternates: {
    canonical: "https://onetechwork.com/testimonials",
  },

  openGraph: {
    title: "Client Testimonials | One Tech Work",
    description:
      "Read client experiences and feedback about working with One Tech Work on digital products and technology solutions.",
    url: "https://onetechwork.com/testimonials",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | One Tech Work",
    description:
      "Read client experiences and feedback about One Tech Work's digital products and technology solutions.",
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}