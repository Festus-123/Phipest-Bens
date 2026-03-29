import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { PROJECTS } from "../../data/projects";

const page = () => {
  return (
    // Display Projects here
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-4 md:p-16 ">
        {projects.map((project: PROJECTS, index: number) => (
          <div
            key={index}
            className="relative drop-shadow-lg  rounded-lg flex flex-col gap-4 "
          >
            <Link href={`/projects/${project.slug}`} className="absolute w-full h-full "/>
            <div className="max-h-65">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={400}
                className="w-full h-full object-center"
              />
            </div>
            <div key={index} className="p-4 flex flex-col gap-2">
              <h1 className="font-bold text-xl md:text-2xl">{project.name}</h1>
              <p className="font-light md:text- tracking-wider text-justify">
                {project.description}
              </p>
              <span className="text-gray-500">Rating: {project.rating}⭐</span>
              <span className="italic bg-gray-300/90 p-1 rounded-xl text-xs w-auto font-light">
                Service Type: {project.serviceType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
