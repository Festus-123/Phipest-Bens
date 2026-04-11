"use client"; // for Next.js App Router
import { useEffect, useRef } from "react";
import { FaMicroblog } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { poppins } from "@/pages/Landing_Page";

gsap.registerPlugin(ScrollTrigger);

export type IMAGES = {
  name: string;
  title: string;
  src: string;
};

const About_Firm = () => {
  const fadeInRef = useRef<HTMLDivElement>(null);

  const images: IMAGES[] = [
    {
      name: "Mr Phillip Oladosu",
      title: "Chairman Executive officer/CEO",
      src: "/phillip.png",
    },
    {
      name: "Mr Israel Phillip",
      title: "Senior Director",
      src: "/israel.png",
    },
    { name: "Miss Suzan Phillip", title: "Director", src: "/ceo_img2.png" },
    {
      name: "Mr Samuel Phillip",
      title: "Associate Director",
      src: "/samuel.png",
    },
    {
      name: "Mrs Esther Phillip",
      title: "Managing Director",
      src: "/ceo_img2.png",
    },
    {
      name: "Mr festus Phillip",
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
    <div
      className={`p-4 md:p-8 lg:p-16 bg-gray-50 text-gray-900 ${poppins.className}`}
    >
      <h1 ref={fadeInRef} className="text-4xl md:text-6xl tracking-wide mb-10 md:mb-20">
        About Us?
      </h1>
      {/* Hero Header */}
      <section 
        ref={fadeInRef}
        className="flex flex-col gap-10 md:gap-20 items-center justify-center">
        <div
          className="flex flex-col lg:flex-row lg:justify-evenly gap-10 md:gap-20 items-center"
        >
          <div className="w-full lg:w-auto p-1 md:p-4 pb-16 md:pb-16 shadow-xl">
            <Image
              src="/about_firm.png"
              alt="About Us Illustration"
              width={1200}
              height={400}
              className="w-full h-auto object-center object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-[60%] flex flex-col gap-4 ">
            <h1 className="text-2xl md:text-4xl tracking-wide font-light">
              Our History?
            </h1>
            <p className="leading-relaxed md:text-lg text-justify">
              Phipest‑Bens International Nigeria Limited was founded in 2013
              with a vision to become a trusted provider of diverse services
              across multiple industries. From its early beginnings, the company
              established itself in construction and engineering, delivering
              projects that combined technical expertise with reliability. Over
              time, the firm expanded into import and export trading, building
              strong international connections that allowed it to serve both
              local and global markets. The company’s growth was fueled by a
              commitment to integrity, transparency, and excellence, values that
              quickly earned it recognition among government agencies, private
              enterprises, and community stakeholders.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row-reverse lg:justify-evenly gap-10 md:gap-20 items-center"
        >
          <div className="w-full lg:w-auto p-1 md:p-4 pb-16 md:pb-16 shadow-xl">
            <Image
              src="/about_firm.png"
              alt="About Us Illustration"
              width={1200}
              height={400}
              className="w-full h-auto object-center object-cover rounded-lg"
            />
          </div>

          <div className="w-full lg:w-[60%] flex flex-col gap-4 ">
            <h1 className="text-2xl md:text-4xl mt-5 md:mt-10 tracking-wide font-light">
              Presently...?
            </h1>
            <p className="leading-relaxed md:text-lg text-justify">
              Today, Phipest‑Bens International Nigeria Limited has evolved into
              a diversified enterprise operating across: - Construction &
              Infrastructure Development: delivering modern, sustainable
              projects that shape communities. - Import/Export Services:
              facilitating global trade with efficiency and compliance. -
              Wholesale & Retail Distribution: ensuring quality products reach
              consumers at competitive prices. - Government Contracting:
              partnering with public institutions to provide trusted solutions.
              The firm continues to embrace innovation and modernization,
              integrating new technologies and practices to stay ahead in
              competitive markets.
            </p>
          </div>
        </div>
      </section>

      {/* Governing bodies */}
      <section className="p-2 md:p-8 lg:p-16 flex flex-col gap-6 mt-20">
        <h1 className="font-light text-3xl md:text-6xl tracking-wide text-center mb-20">
          PHIPEST BENS INTERNATIONAL NIGERIA LIMITED.
        </h1>

        {/* Governing Bodies */}
        <div className="w-full">
          <h1 className="text-2xl md:text-5xl mb-5">Board of Directors</h1>

          <div className="md:p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-10">
            {images.map((img, index) => (
              <div
                key={index}
                className={`pb-4 md:pb-8 shadow-xl rounded-lg text-center ${img.name === "Mr Phillip Oladosu" ? "col-span-2 md:row-span-2" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.name}
                  width={200}
                  height={200}
                  className={`object-cover object-center w-full ${img.name === "Mr Phillip Oladosu" ? "md:h-auto" : "md:max-h-80"}`}
                />
                <h2 className="text-xs md:text-sm mt-4 font-medium">
                  {img.name}
                </h2>
                <p className="text-gray-500 text-xs">{img.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg p-2 md:p-4 rounded-lg border-l-4 border-blue-600">
          <p className="text-xl md:text-2xl">Details:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li> <b>Founded:</b> 2013 </li>
            <li> <b>Location:</b> 1 sijuade, oldd-ife road ibadan, Nigeria.</li>
            <li>
              <b>Founder:</b> Mr Phipplip Oluwole Oladosu
            </li>
            <li>
              <b>C.E.O:</b> Mr Phillip Oluwole Oladosu
            </li>
            <li>
              <b>Net Worth:</b> --- ---
            </li>
            <li>
              <b>About CEO:</b> born {' '} <b>1971</b> {' '} at {' '} <b>Ibadan, Nigeria</b>
            </li>
          </ul>
        </div>

        {/* Blog Link */}
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center justify-between gap-3 bg-linear-to-r from-blue-400  text-black px-4 py-2 rounded-lg shadow hover:scale-105 transform transition"
        >
          <span className="font-medium text-white">Visit Our Blog</span>
          <FaMicroblog />
        </Link>
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
