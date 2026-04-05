import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { PROJECTS } from "../../data/projects";

export const metadata: Metadata = {
  title: "Phipest-bens International Nig Ltd - Projects: https://phipest-bens.vercel.app/projects",
  description: "Explore completed and ongoing projects by Phipest-bens International Nig Ltd, including construction contracts, import/export operations, retail expansions, and government partnerships.",
  keywords: [
    "Phipest-bens projects", 
    "construction projects Nigeria", 
    "import export projects Nigeria", 
    "government contracts projects", 
    "retail projects Nigeria", 
    "Phipest-bens International Nig Ltd projects"
  ],
  openGraph: {
    title: "Phipest-bens International Nig Ltd - Projects",
    description: "Showcasing the diverse portfolio of Phipest-bens International Nig Ltd across construction, trade, and government contracts.",
    url: "https://phipest-bens.vercel.app/projects",
    siteName: "Phipest-bens International Nig Ltd",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_projects.png",
        width: 1200,
        height: 630,
        alt: "Phipest-bens International Nig Ltd Projects Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phipest-bens International Nig Ltd - Projects",
    description: "Explore completed and ongoing projects by Phipest-bens International Nig Ltd across multiple sectors.",
    images: [
      {
        url: "https://phipest-bens.vercel.app/og_projects.png",
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
    // Display Projects here
    <div>
        <section>
        <div className="p-8 md:p-16 bg-linear-to-r from-blue-400 to-blue-500 text-white">
            <h1 className="text-4xl md:text-7xl text-center md:text-left font-extrabold">
                Projects
            </h1>
        </div>
        </section>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-20 lg:gap-15 p-4 md:p-16 ">
        {projects.map((project: PROJECTS, index: number) => (
          <div
            key={index}
            className="relative drop-shadow-lg rounded-lg flex flex-col gap-4  mb-4"
          >
            {/* <div className="max-h-65"> */}
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
            {/* </div> */}
            <div key={index} className="relative p-4 flex flex-col gap-2 h-75">
              <h1 className="font-bold text-xl md:text-2xl">{project.name}</h1>
              <p className="font-light md:text- tracking-wider text-justify">
                {project.description}
              </p>
              <span className="text-gray-500">Rating: {project.rating}⭐</span>
              <span className="italic  rounded-xl text-xs w-auto font-light">
                Service Type: {project.serviceType}
              </span>
            <Link href={`/projects/${project.slug}`} className="absolute right-0 bottom-1 bg-linear-to-r from-blue-400 to-blue-500 text-white/90 rounded-xl p-2 w-50 text-center  hover:from-blue-700 mt-10">
                View project
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
