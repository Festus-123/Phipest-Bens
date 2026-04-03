import { Metadata } from "next";
import About_Firm from "@/pages/About_Firm";


export const metadata: Metadata = {
  title:
    "Phipest-bens International Nig Ltd - About Firm: https://phipest-bens.vercel.app/about_firm",
  description:
    "Learn more about Phipest-bens International Nig Ltd, a diversified company built on trust and reliability. We specialize in construction, import/export, wholesale and retail, and government contracts.",
  keywords: [
    "Phipest-bens",
    "Phipest-bens International Nig Ltd",
    "About Phipest-bens",
    "Phipest-bens company profile",
    "construction company Nigeria",
    "import export Nigeria",
    "government contracts Nigeria",
  ],
  openGraph: {
    title: "Phipest-bens International Nig Ltd - About Firm",
    description:
      "Discover the mission, vision, and values of Phipest-bens International Nig Ltd, a trusted partner in construction, trade, and government contracts.",
    url: "https://phipest-bens.vercel.app/about_firm",
    siteName: "Phipest-bens International Nig Ltd",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_about.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens International Nig Ltd About Firm Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phipest-bens International Nig Ltd - About Firm",
    description:
      "Learn more about Phipest-bens International Nig Ltd, a diversified company built on trust and reliability.",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_about.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens International Nig Ltd Twitter Card Image",
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

const page = () => {
  return (
    <div>
      <About_Firm />
    </div>
  );
};

export default page;
