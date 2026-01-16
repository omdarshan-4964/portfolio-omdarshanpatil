import type { Metadata } from "next";
import "./globals.css";
// import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "../components/ErrorReporter";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Omdarshan Shinde Patil | Next.js & AI Engineer",
  description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems. 6 Production Apps, 99.9% Uptime.",
  keywords: [
    "Next.js Developer",
    "AI Engineer",
    "Agentic AI",
    "MERN Stack",
    "React Flow",
    "Omdarshan Shinde Patil",
    "Full Stack Developer",
    "Distributed Systems",
    "TypeScript",
    "React Developer"
  ],
  authors: [{ name: "Omdarshan Shinde Patil" }],
  creator: "Omdarshan Shinde Patil",
  publisher: "Omdarshan Shinde Patil",
  openGraph: {
    title: "Omdarshan Shinde Patil | Next.js & AI Engineer",
    description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems. 6 Production Apps, 99.9% Uptime.",
    url: "https://portfolio-omdarshanpatil.vercel.app",
    siteName: "Omdarshan Shinde Patil Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Omdarshan Shinde Patil - Next.js & AI Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Omdarshan Shinde Patil | Next.js & AI Engineer",
    description: "Full-Stack Engineer specialized in Agentic AI, Next.js 16, and Distributed Systems. 6 Production Apps, 99.9% Uptime.",
    creator: "@Omdarshan_jsx",
    images: ["/profile.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://portfolio-omdarshanpatil.vercel.app" />
      </head>
      <body className="antialiased">  
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        {/* Google Analytics - Replace G-PLACEHOLDER with your actual GA4 Measurement ID */}
        <GoogleAnalytics gaId="G-RR8J2RCVN9" />
      </body>
    </html>
  );
}
