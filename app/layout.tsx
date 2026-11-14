import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/lib/portfolio";
import "./globals.css";

const geist = localFont({
  src: "../public/fonts/geist.ttf",
  weight: "100 900",
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = localFont({
  src: "../public/fonts/ibm-plex-mono.ttf",
  variable: "--font-ibm-mono",
  weight: "400",
  display: "swap",
});

const display = localFont({
  src: "../public/fonts/instrument-serif-italic.ttf",
  variable: "--font-display-serif",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: "Rohith Pranav Bala — Product & Software Engineer",
    template: "%s · Rohith Pranav Bala",
  },
  description:
    "I build AI products from zero to launch. Selected work in product engineering, AI, and Web3 by Rohith Pranav Bala, a core engineer on Sourcerer’s 10-day launch.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: profile.name,
    title: "Rohith Pranav Bala — From zero to launch",
    description:
      "Product thinking. End-to-end engineering. Something people can use.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohith Pranav Bala — From zero to launch",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.site,
    jobTitle: "Software Engineer",
    email: profile.email,
    sameAs: [profile.github, profile.linkedin],
  };
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var saved=localStorage.getItem("portfolio-theme");document.documentElement.dataset.theme=saved==="dark"||saved==="light"?saved:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}catch{document.documentElement.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}`,
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${mono.variable} ${display.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
