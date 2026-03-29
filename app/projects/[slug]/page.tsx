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
      <Link href="/projects" className="absolute bg-black/40 text-white/90 text-lg md:text-xl p-1 md:p-2  top-4 left-3 rounded-full">
          <FiArrowLeft className=""/>
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
              {project.description}
            </p>
          </div>

        </section>
          <div className="w-full flex flex-row items-center justify-between px-4 py-2 md:py-8 md:px-16"> 
            { prev && (
                <Link href={`/projects/${prev.slug}`} className="bg-white/40 p-2 rounded-full text-lg md:text-xl">
                    <FiArrowLeft className=""/> 
                </Link>
            )}

            { next && (
                <Link href={`/projects/${next.slug}`} className={`bg-white/40 p-2 rounded-full text-lg md:text-xl ${!prev && "absolute right-10"}`}>
                    <FiArrowRight className=""/>
                </Link>
            )}
          </div>
      </div>
    </div>
  );
};

export default page;
