import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { siteDescription, siteUrl } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EIG",
    template: "%s / EIG",
  },
  description: siteDescription,
  keywords: [
    "embodied intelligence",
    "robotics",
    "physical AI",
    "University of Florida",
    "student organization",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "EIG",
    title: "EIG",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EIG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EIG",
    description: siteDescription,
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
        <SiteHeader />
        <main id="content" className="flex-1 pt-[var(--header-height)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
