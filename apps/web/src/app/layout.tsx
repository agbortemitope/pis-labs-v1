import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { ToastProvider } from "@/components/ToastProvider";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "PIS Labs | Applied AI Venture Studio",
  description: "PIS Labs is a premium Applied AI Venture Studio. We research, build, and distribute scalable, production-grade financial infrastructure and AI-powered systems.",
  keywords: ["Applied AI", "Venture Studio", "AI Infrastructure", "Fintech", "PIS Labs", "SaaS", "AI Development"],
  authors: [{ name: "Pelumi", url: "https://pislabs.com" }],
  creator: "PIS Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pislabs.com",
    title: "PIS Labs | Applied AI Venture Studio",
    description: "Research. Build. Distribute. We build scalable digital systems by combining technical authority, production-grade AI development, and community-driven distribution.",
    siteName: "PIS Labs",
    images: [
      {
        url: "https://pislabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PIS Labs - Applied AI Venture Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PIS Labs | Applied AI Venture Studio",
    description: "Research. Build. Distribute. We build scalable digital systems by combining technical authority, production-grade AI development, and community-driven distribution.",
    images: ["https://pislabs.com/og-image.jpg"],
    creator: "@pislabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PIS Labs",
              "url": "https://pislabs.com",
              "logo": "https://pislabs.com/og-image.jpg",
              "description": "Applied AI Venture Studio building scalable digital systems by combining technical authority, production-grade AI development, and community-driven distribution."
            })
          }}
        />
        {/* Google Analytics with Consent Mode v2 — default denied until user accepts */}
        <Script
          id="gtag-consent-default"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SYK3DFWKQ1"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SYK3DFWKQ1');
            `,
          }}
        />
      </head>
      <body 
        suppressHydrationWarning
        className={`${inter.variable} bg-transparent text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <BackgroundEffects />
            {children}
            <CookieConsent />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
