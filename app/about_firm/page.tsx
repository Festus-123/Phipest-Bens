
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phipest-bens International Nig Ltd - About Firm: https://phipest-bens.vercel.app/about_firm",
  description: "Learn more about Phipest-bens International Nig Ltd, a diversified company built on trust and reliability. We specialize in construction, import/export, wholesale and retail, and government contracts.",
  keywords: [
    "Phipest-bens", 
    "Phipest-bens International Nig Ltd", 
    "About Phipest-bens", 
    "Phipest-bens company profile", 
    "construction company Nigeria", 
    "import export Nigeria", 
    "government contracts Nigeria"
  ],
  openGraph: {
    title: "Phipest-bens International Nig Ltd - About Firm",
    description: "Discover the mission, vision, and values of Phipest-bens International Nig Ltd, a trusted partner in construction, trade, and government contracts.",
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
    description: "Learn more about Phipest-bens International Nig Ltd, a diversified company built on trust and reliability.",
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
      <div className="bg-linear-to-r from-blue-700 to-blue-800 p-8 md:p-16 text-white">
        <h1 className="font-extrabold text-3xl md:text-7xl text-center md:text-start">
          About Us
        </h1>
      </div>

    {/* Section for company's history and values */}
    <section className="p-4 md:p-16 flex flex-col gap-4">
        <h1 className="font-bold ">PHIPEST BESN INTERNATIONAL NIGERIA LIMITED</h1>
          <p className="mb-5">
            Phipest-bens International Nig Ltd is a diversified company with a rich history of excellence and innovation. Founded in [Year], we have grown to become a trusted name in the construction, import/export, wholesale and retail, and government contracting sectors. Our mission is to deliver high-quality services and products while fostering long-term relationships with our clients and partners. We are committed to integrity, reliability, and customer satisfaction in everything we do.
          </p>
          {/* Link to checkout company's blog */}
          <Link href="/blog" className="text-black hover:underline bg-linear-to-r from-blue-400 to-blue-50 p-2 md:p-3 rounded-lg">
            blog post
          </Link>
      </section>


      {/* Section for company's location */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Map</h2>
        <p className="text-lg mb-6">Company location and sites.</p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9a651e5e7c!2sEnvato%20Melbourne%20Office!5e0!3m2!1sen!2sau!4v1600000000000"
            title="Company Location Map"
            className="w-full h-64 md:h-96"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default page;
