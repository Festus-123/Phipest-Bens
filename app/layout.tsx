import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
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
  title: "Phipest-bens interational Nig Lmtd - Home: https://phipest-bens.vercel.app",
  description: "A Govermentcontact company that handles import / exxport activities, office and startups constructions",
  keywords: ["Phipest-bens", "Phipest-bens international Nig Ltd", "Phipest-bens international Nigeria Limited", "Phipest-bens international Nigeria Ltd", "Phipest-bens international Nig Ltd", "Phipest-bens international Nig Lmtd", "Phipest bens", "Phipest bens international Nig Ltd", "Phipest bens international Nigeria Limited", "Phipest bens international Nigeria Ltd", "Phipest bens international Nig Ltd", "Phipest bens international Nig Lmtd", "import export company in Nigeria", "office construction company in Nigeria", "startup construction company in Nigeria"],
  openGraph: {
    title: "Phipest-bens interational Nig Lmtd - Home: https://phipest-bens.vercel.app",
    description: "A Govermentcontact company that handles import / exxport activities, office and startups constructions",
    url: "https://phipest-bens.vercel.app",
    siteName: "Phipest-bens international Nig Lmtd",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_image.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens international Nig Lmtd Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phipest-bens interational Nig Lmtd - Home: https://phipest-bens.vercel.app",
    description: "A Govermentcontact company that handles import / exxport activities, office and startups constructions",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_image.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens international Nig Lmtd Twitter Card Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
