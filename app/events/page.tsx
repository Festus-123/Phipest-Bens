import { Metadata } from "next";
import Events from "@/pages/Event";

export const metadata: Metadata = {
  title: "Phipest-bens International Nig Ltd - Events: https://phipest-bens.vercel.app/events",
  description: "Stay updated with events, conferences, and activities hosted or attended by Phipest-bens International Nig Ltd, showcasing our role in construction, trade, and government partnerships.",
  keywords: [
    "Phipest-bens events",
    "company events Nigeria",
    "business conferences Nigeria",
    "construction events Nigeria",
    "import export events Nigeria",
    "government contract events Nigeria"
  ],
  openGraph: {
    title: "Phipest-bens International Nig Ltd - Events",
    description: "Explore upcoming and past events by Phipest-bens International Nig Ltd across multiple sectors.",
    url: "https://phipest-bens.vercel.app/events",
    siteName: "Phipest-bens International Nig Ltd",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_events.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens International Nig Ltd Events Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phipest-bens International Nig Ltd - Events",
    description: "Stay updated with events and activities by Phipest-bens International Nig Ltd.",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_events.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens International Nig Ltd Twitter Events Card Image",
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
            <Events />
        </div>
    );
}


export default page;