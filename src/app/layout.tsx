import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { analytics, companyLegalName, companyName, contact, siteUrl } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Montana Commercial Drone Services`,
    template: `%s | ${companyName}`,
  },
  description:
    "Montana-based commercial drone services: aerial photo and video, mapping and photogrammetry, utility and thermal inspection, and on-call wildfire and public-agency support.",
  openGraph: {
    type: "website",
    siteName: companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyLegalName,
  url: siteUrl,
  telephone: contact.phoneHref,
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: contact.addressCity,
    addressRegion: contact.addressState,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "Montana",
  },
  description:
    "Commercial drone (UAS) services based in Montana, including aerial photography and videography, mapping and photogrammetry, utility and thermal inspection, and on-call wildfire and public-agency support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-brand-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-brand-950 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {analytics.plausibleDomain ? (
          <Script
            defer
            data-domain={analytics.plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
        {analytics.vercelAnalytics ? <Analytics /> : null}
      </body>
    </html>
  );
}
