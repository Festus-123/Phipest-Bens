"use client"; // for Next.js App Router
import { useEffect, useRef } from "react";
import { FaMicroblog } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
// import { Poppins } from 'next/font/google';
import { poppins } from "@/pages/Landing_Page";

const About_Firm = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header fade-in + slide
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // Animate section content
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

    // Animate values box with scale effect
    gsap.from(valuesRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <div className={`bg-gray-50 text-gray-900 ${poppins.className}`}>
      {/* Hero Header */}
      <section
        ref={headerRef}
        className="p-8 md:p-16 flex flex-col gap-10 md:gap-10 items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
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
            <h1 className="text-4xl md:text-6xl tracking-wide">About Us?</h1>

            <h1 className="text-2xl md:text-4xl mt-5 md:mt-10 tracking-wide font-light">
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
              enterprises, and community stakeholders. By consistently meeting
              deadlines and exceeding expectations, Phipest‑Bens laid the
              foundation for long‑term partnerships and a reputation for
              reliability.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
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
              competitive markets. With a strong workforce and a culture of
              customer‑centric service, Phipest‑Bens is positioned as a
              forward‑thinking company that not only meets today’s demands but
              also anticipates tomorrow’s opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* History and Values */}
      <section
        ref={sectionRef}
        className="p-8 md:p-16 flex flex-col gap-6"
      >
        <h1 className="font-light text-6xl tracking-wide text-center ">
          PHIPEST BENS INTERNATIONAL NIGERIA LIMITED.
        </h1>

        <div
          ref={valuesRef}
          className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-blue-600"
        >
          <p className="text-xl md:text-2xl">Our Core Values:</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Integrity: Honesty and transparency in all dealings.</li>
            <li>Reliability: Consistently delivering on promises.</li>
            <li>
              Customer Satisfaction: Prioritizing client needs and expectations.
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
      <section className="container mx-auto px-4 py-12">
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


