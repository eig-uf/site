import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteName, siteSummary, siteUrl, socialLinks, contactEmail } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const organizationId = `${siteUrl}/#organization`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s / ${siteName}`,
  },
  description: siteSummary,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Embodied Intelligence Group",
    "EIG",
    "University of Florida",
    "robot learning",
    "physical AI",
    "robotics",
    "student organization",
    "ARM0",
  ],
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteSummary,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Embodied Intelligence Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteSummary,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-svh flex-col"
      >
        <a
          href="#content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-foreground px-4 py-3 font-mono text-xs uppercase tracking-wider text-background transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: siteName,
                alternateName: "EIG",
                url: siteUrl,
                logo: `${siteUrl}/logo-white.png`,
                email: contactEmail,
                sameAs: [
                  socialLinks.linkedin,
                  socialLinks.instagram,
                  "https://github.com/eig-uf",
                ],
                parentOrganization: {
                  "@type": "CollegeOrUniversity",
                  name: "University of Florida",
                  url: "https://www.ufl.edu/",
                },
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: siteName,
                url: siteUrl,
                description: siteSummary,
                publisher: { "@id": organizationId },
              },
            ],
          }}
        />
        <SiteHeader />
        <main id="content" className="flex-1 pt-[var(--header-height)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
