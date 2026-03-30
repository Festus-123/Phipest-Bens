import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { PROJECTS } from "../../data/projects";

const page = () => {
  return (
    // Display Projects here
    <div>
        <section>
        <div className="p-8 md:p-16 bg-linear-to-r from-blue-700 to-blue-800 text-white">
            <h1 className="text-4xl md:text-7xl text-center md:text-left font-extrabold">
                Projects
            </h1>
        </div>
        </section>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-16 ">
        {projects.map((project: PROJECTS, index: number) => (
          <div
            key={index}
            className="relative drop-shadow-lg  rounded-lg flex flex-col gap-4 "
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
            <div key={index} className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl md:text-2xl">{project.name}</h1>
              <p className="font-light md:text- tracking-wider text-justify">
                {project.description}
              </p>
              <span className="text-gray-500">Rating: {project.rating}⭐</span>
              <span className="italic  rounded-xl text-xs w-auto font-light">
                Service Type: {project.serviceType}
              </span>
            <Link href={`/projects/${project.slug}`} className="bg-linear-to-r from-blue-400 to-blue-500 text-white/90 rounded-xl p-2 w-50 text-center place-self-end hover:from-blue-950 mt-10">
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
