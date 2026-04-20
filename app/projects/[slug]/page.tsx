
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const index = projects.findIndex((p) => p.slug === slug);

  const prev = projects[index - 1];
  const next = projects[index + 1];

  if (!project) {
    notFound();
  }

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };

  return (
    <div className="bg-black/90">
      <div className="p-4 md:p-8">
        <Link
          href="/projects"
          className=" bg-white/40 text-black px-3 py-3 rounded-full text-lg flex items-center w-max"
        >
          <FiArrowLeft />
        </Link>
      </div>

      <section className="flex flex-col gap-4 p-2 md:p-4">
        {/* 🔥 SLIDER START */}
        <div className="w-full flex flex-col gap-10">
            {project.images.map((img, i) => (
              <div key={i}>
                <Image
                  src={img}
                  alt={`${project.name} ${i}`}
                  width={1200}
                  height={600}
                  className="w-full h-140 md:h-screen object-cover rounded-xl"
                />
              </div>
            ))}
        </div>
        {/* 🔥 SLIDER END */}

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
            <FiArrowLeft />
          </Link>
        )}

        <div
          className={`flex flex-row gap-1 items-center ${
            !next && "absolute right-10 md:left-1/2 "
          } ${!prev && "absolute left-10 md:left-1/2"}`}
        >
          {projects.map((e, i) => (
            <Link
              href={`/projects/${e.slug}`}
              key={i}
              className={`w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/60 ${
                e.slug === slug && "bg-white w-6 md:w-8 "
              } ${e.slug !== slug && "hover:bg-white/90"} `}
            ></Link>
          ))}
        </div>

        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className={`text-xl md:text-2xl text-white ${
              !prev && "absolute right-10"
            }`}
          >
            <FiArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default page;