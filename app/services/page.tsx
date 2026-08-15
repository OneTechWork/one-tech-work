import type { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Web Development & Software Services",
  description:
    "Explore One Tech Work's professional website development, mobile app development, custom software, UI/UX design, cloud, backend and AI solutions for businesses and individuals.",

  alternates: {
    canonical: "https://onetechwork.com/services",
  },

  openGraph: {
    title: "Web Development & Software Services | One Tech Work",
    description:
      "Professional website development, mobile apps, custom software, UI/UX, cloud, backend and AI solutions by One Tech Work.",
    url: "https://onetechwork.com/services",
    type: "website",
    siteName: "One Tech Work",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development & Software Services | One Tech Work",
    description:
      "Professional website development, mobile apps, custom software, UI/UX, cloud, backend and AI solutions by One Tech Work.",
  },
};

export default function ServicesPage() {
  return <Services />;
}