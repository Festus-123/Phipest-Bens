import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  console.log("Project: ", project);
  const index = projects.findIndex((p) => p.slug === slug);

  const prev = projects[index - 1];
  const next = projects[index + 1];

  if (!project) {
    notFound();
  }

  return (
    <div>
      <div className="bg-black/90 relative">
        <Link
          href="/projects"
          className="absolute bg-black/40 text-white/90 text-lg md:text-xl p-1 md:p-2  top-4 left-3 rounded-full"
        >
          <FiArrowLeft className="" />
        </Link>
        <section className="flex flex-col gap-4">
          <Image
            src={project.image}
            alt={project.name}
            width={1200}
            height={600}
            className="w-full h-120 object-cover"
          />
          <div className="p-4 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white/90 mb-4">
              {project.name}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl">
              {project.longDescription}
            </p>
          </div>

          <div>
            {project.details && (
              <ul className="list-disc list-inside text-gray-600 px-4 md:px-16">
                {project.details.map((detail, index) => (
                  <li key={index} className="mb-2">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
        
        <div className="w-full flex flex-row items-center justify-between px-4 py-8 md:py-8 md:px-16 ">
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="text-white text-xl md:text-2xl"
            >
              <FiArrowLeft className="" />
            </Link>
          )}

          <div
            className={`flex flex-row gap-1 items-center ${!next && "absolute left-10 md:left-1/2 "} ${!prev && "absolute right-10 md:left-1/2"}`}
          >
            {projects.map((e, i) => (
              <Link
                href={`/projects/${e.slug}`}
                key={i}
                className={`w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60 ${e.slug === slug && "bg-white w-6 md:w-8 "} ${e.slug !== slug && "hover:bg-white/90"} `}
              ></Link>
            ))}
          </div>

          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className={`text-xl md:text-2xl text-white ${!prev && "absolute right-10"}`}
            >
              <FiArrowRight className="" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
