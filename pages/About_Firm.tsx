"use client"; // for Next.js App Router
import { useEffect, useRef } from "react";
import { FaMicroblog } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { poppins } from "@/pages/Landing_Page";

gsap.registerPlugin(ScrollTrigger);

export type IMAGES = {
  name: string;
  title: string;
  about?: string;
  src: string;
};

const About_Firm = () => {
  const fadeInRef = useRef<HTMLDivElement>(null);

  const images: IMAGES[] = [
    {
      name: "Mr Phillip Oladosu",
      about:
        "Visionary CEO leading the company’s growth, partnerships, and multi-industry success.",
      title: "Chairman Executive Officer/CEO",
      src: "/phillip.png",
    },
    {
      name: "Mr Israel Phillip",
      about:
        "Oversees operations and strategy, ensuring smooth execution of projects and daily activities.",
      title: "Senior Director",
      src: "/israel.png",
    },
    {
      name: "Miss Suzan Phillip",
      about:
        "Drives financial strategy and business growth through innovation and smart planning.",
      title: "Director",
      src: "/ceo_img2.png",
    },
    {
      name: "Mr Samuel Phillip",
      about:
        "Supports expansion and client relations with strong project management expertise.",
      title: "Associate Director",
      src: "/samuel.png",
    },
    {
      name: "Mrs Esther Phillip",
      about:
        "Leads company direction and operations with a focus on excellence and client satisfaction.",
      title: "Managing Director",
      src: "/ceo_img2.png",
    },
    {
      name: "Mr Festus Phillip",
      about:
        "Leads software development and drives the company’s digital innovation.",
      title: "Lead Software Engineer",
      src: "/festus.png",
    },
  ];

  useEffect(() => {
    // Animate header fade-in + slide
    gsap.utils.toArray(fadeInRef.current).forEach((el) => {
      gsap.from(el as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <div className={` text-gray-900 ${poppins.className}`}>
      <h1
        ref={fadeInRef}
        className="text-4xl md:text-6xl tracking-wide mb-10 md:mb-20 p-4 md:p-12"
      >
        About Us
      </h1>

      <section
        ref={fadeInRef}
        className="flex flex-col gap-16 md:gap-24 items-center justify-center p-4 md:p-12"
      >
        {/* History Section */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
          <div className="w-full lg:w-auto p-1 md:p-4 pb-8 md:pb-8 shadow-xl rounded-lg">
            <Image
              src="/about_firm.png"
              alt="Company history illustration"
              width={1200}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            <h2 className="text-2xl md:text-4xl tracking-wide font-light">
              Our Story
            </h2>

            <p className="leading-relaxed md:text-lg text-justify">
              Founded in 2013, Phipest-Bens International Nigeria Limited began
              with a clear vision: to deliver reliable and high-quality services
              across multiple industries. Starting in construction and
              engineering, the company built a reputation for excellence,
              precision, and trust.
            </p>

            <p className="leading-relaxed md:text-lg text-justify">
              As it grew, the firm expanded into import and export, creating
              strong international partnerships and serving both local and
              global markets. Its commitment to integrity and consistency has
              earned lasting trust from clients, government bodies, and
              partners.
            </p>
            <h2 className="text-2xl md:text-4xl tracking-wide font-light mt-10">
              Where We Are Today
            </h2>

            <p className="leading-relaxed md:text-lg text-justify">
              Today, the company operates as a diversified enterprise across
              construction, trade, distribution, and government contracting. It
              delivers modern infrastructure, facilitates global commerce, and
              provides reliable services across sectors.
            </p>

            <p className="leading-relaxed md:text-lg text-justify">
              By embracing innovation and evolving with industry trends,
              Phipest-Bens continues to grow while maintaining its commitment to
              quality, efficiency, and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Governing bodies */}
      <section className=" flex flex-col gap-6 mt-20">
        <h1 className="font-light text-3xl md:text-6xl tracking-wide text-center mb-20 p-4 md:p-12">
          PHIPEST BENS INTERNATIONAL NIGERIA LIMITED.
        </h1>

        {/* Governing Bodies */}
        <div className="w-full">
          <h1 className="text-2xl md:text-5xl mb-5 p-4 md:p-12">
            Board of Directors
          </h1>

          <div className="flex flex-col gap-5">
            {images.map((img, index) => (
              <div
                key={index}
                className={`p-8 md:px-12 border-t border-b border-gray-300 gap-5 md:gap-0  flex flex-col md:flex-row md:items-center justify-between`}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={200}
                  height={200}
                  className={`object-cover object-center w-full h-auto max-h-140 md:w-60 md:h-60`}
                />
                <div>
                  <h2 className="text-lg md:text-3xl mt-4 font-medium">
                    {img.name}
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base font-normal w-sm text-justify">
                    {img.about}
                  </p>
                </div>
                <p className="uppercase">{img.title}</p>
                <div className="text-2xl hover:scale-110 cursor-pointer">
                  <FiArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-shadow-2xs p-2 md:p-4 rounded-lg font-medium text-justify">
          <p className="text-lg md:text-2xl p-4 md:p-12">
            Phipest bens international Nigeria limited is a leading company in
            construction, <b>Founded in 2013</b> by Mr Phillip Oladosu, the
            company has grown to become a trusted name in the industry, known
            for its commitment to quality and excellence. With a strong focus on
            innovation and customer satisfaction, Phipest bens has successfully
            completed numerous projects across various sectors, including
            residential, commercial, and infrastructure development. The
            company&quot;s dedication to delivering exceptional results has
            earned it a reputation for reliability and professionalism in the
            construction industry.
          </p>
        </div>

        {/* Blog Link */}
        {/* <Link
          href="/blog"
          className="hidden mt-6  items-center justify-between gap-3 bg-linear-to-r from-blue-400  text-black px-4 py-2 rounded-lg shadow hover:scale-105 transform transition"
        >
          <span className="font-medium text-white">Visit Our Blog</span>
          <FaMicroblog />
        </Link> */}
      </section>

      {/* Location Map */}
      <section className="fade-in-section container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4 ">Our Location</h2>
        <p className="text-lg mb-6 text-gray-700">
          Explore our company sites and offices.
        </p>
        <div className="rounded-lg overflow-hidden shadow-lg">
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

export default About_Firm;
