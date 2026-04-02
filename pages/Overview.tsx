"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

const Overview = () => {
  const [width, setWidth] = useState<number>(0);

  const [number, setNumber] = useState<number[]>([]);

  useEffect(() => {
    // Set initial width
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    // Update width on resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleArray = () => {
    const array: number[] = [];
    for (let i = 0; i < 40; i++) {
      array.push(i);
      const handlePush = () => setNumber(array);
      handlePush();
    }
    console.log(number, "number");
  };

  useEffect(() => {
    // Slide in for "What We Offer"
    gsap.from(".left-in", {
      x: "-100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".left-in",
        start: "top 80%",
      },
    });

    // Slide in for "The Big Picture"
    gsap.from(".right-in", {
      x: "100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".right-in",
        start: "top 90%",
      },
    });

    // Fade in for "Why Choose" items
    gsap.utils.toArray(".fade-in-section").forEach((el) => {
      gsap.from(el as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 80%",
        },
      });
    });

    handleArray();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width < 768 ? 1 : 5,
    slidesToScroll: width < 768 ? 1 : 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className={`relative bg-white p-8 md:p-16 z-10 ${poppins.className}`}>
      {/* What We Offer */}
      <section
        className={`fade-in-section flex flex-col-reverse md:flex-row items-center gap-10 md:gap-40 md:p-16`}
      >
        <div className="w-full md:w-[60%] flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl md:text-6xl mb-2">What We Offer?</h1>
          <p className="tracking-wider text-justify">
            At Phipest Bens International Nigeria Ltd, our mission is to build
            bridges of trust through excellence. We exist to deliver reliable
            solutions across construction, trade, logistics, and government
            partnerships — empowering businesses and communities with services
            that stand the test of time. Every project we take on is driven by
            integrity, innovation, and a commitment to progress.
          </p>
          <Link
            href="/services"
            className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-600 w-max py-2 px-4 md:py-3 md:px-6 mt-4 rounded-lg text-white place-self-end"
          >
            Visit page
          </Link>
        </div>
        <div className="p-1 md:p-4 pb-16 md:pb-16 shadow-xl">
          <Image
            width={600}
            height={400}
            src="/it_consulting.jpg"
            alt="What we offer?"
            className="w-full md:w-auto h-100 object-cover object-center"
          />
        </div>
      </section>

      {/* The Big Picture */}
      <section
        className={`fade-in-section flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-40 md:p-16 mt-20`}
      >
        <div className="w-full md:w-[60%] flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl md:text-6xl mb-2">The Big Picture ~</h1>
          <p className="tracking-wider text-justify">
            The future phipest bens helps paint is one of global connectivity
            and sustainable growth. We envision a world where businesses and
            communities thrive through reliable partnerships and innovative
            solutions. As we expand our reach across industries and borders, our
            commitment to integrity, excellence, and progress remains
            unwavering. With a focus on building trust and delivering value, we
            aim to be a catalyst for positive change, shaping a future where
            everyone can prosper together.
          </p>
          <Link
            href="/about_firm"
            className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-600 w-max py-2 px-4 md:py-3 md:px-6 mt-2 rounded-lg text-white place-self-end"
          >
            Visit page
          </Link>
        </div>
        <div className="p-1 md:p-4 pb-16 md:pb-16 shadow-xl">
          <Image
            width={600}
            height={400}
            src="/government_contracts.jpg"
            alt="the big picture"
            className="w-full md:w-auto h-100 object-cover object-center"
          />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="mt-20 md:mt-40 fade-in-section">
        <h1 className="text-4xl md:text-6xl text-center">
          Why Choose Phipest Bens?
        </h1>
        <section className="relative flex flex-col items-center justify-evenly gap-10 md:gp-20 p-4 md:p-16 fade-in-section">
          {/* Decorative badges */}
          <div className="p-4 mt-10 h-80 md:h-120 w-15 md:w-20 drop-shadow-2xl bg-linear-to-b from-blue-400 to-blue-500 relative text-center text-white text-shadow-lg">
            <div className="w-50 md:w-70 text-xs md:text-sm p-2 md:p-4 absolute top-5 md:top-10 -left-2 drop-shadow-2xl bg-linear-to-r from-yellow-400 to-yellow-500">
              Unmatched Reliability
            </div>
            <div className="w-50 md:w-70 text-xs md:text-sm p-2 md:p-4 absolute top-20 md:top-30 -right-3 drop-shadow-2xl bg-linear-to-r from-green-400 to-green-500">
              Global Reach, Local Touch
            </div>
            <div className="w-50 md:w-70 text-xs md:text-sm p-2 md:p-4 absolute top-35 md:top-50 -right-3 drop-shadow-2xl bg-linear-to-r from-green-400 to-green-500">
              Diverse Expertise
            </div>
            <div className="w-50 md:w-70 text-xs md:text-sm p-2 md:p-4 absolute top-50 md:top-70 -left-2 drop-shadow-2xl bg-linear-to-r from-amber-400 to-amber-500">
              Sustainable Solutions
            </div>
            <div className="w-50 md:w-70 text-xs md:text-sm p-2 md:p-4 absolute top-65 md:top-90 -right-4 drop-shadow-2xl bg-linear-to-r from-purple-400 to-purple-500">
              Customer-centric Approach
            </div>
          </div>

          <div
            className={`${poppins.className} md:absolute top-1/4 right-5 md:w-60 hidden md:flex flex-col gap-1`}
          >
            <h3 className="font-extralight text-lg md:text-xl">
              Unmatched Reliability:
            </h3>
            <p className="text-xs text-justify">
              With a proven track record of delivering reliable services across
              multiple sectors, we have built a reputation for trustworthiness
              and excellence that sets us apart from the competition.
            </p>
          </div>
          <div
            className={`${poppins.className} md:absolute top-1/4 left-5 md:w-50 hidden md:flex flex-col gap-1`}
          >
            <h3 className="font-extralight text-lg md:text-xl">
              Global reach, Local touch:
            </h3>
            <p className="text-xs text-justify">
              We are at the top when it comes to global reach with a local
              touch, ensuring that our clients receive personalized service and
              support no matter where they are in the world.
            </p>
          </div>
          <div
            className={`${poppins.className} md:absolute bottom-1/4 right-5 md:w-50 hidden md:flex flex-col gap-1`}
          >
            <h3 className="font-extralight text-lg md:text-xl">
              DIverse Enterprise:
            </h3>
            <p className="text-xs text-justify">
              Offering a wide range of services across construction, trade,
              logistics, and government partnerships, we have the expertise to
              meet diverse needs and deliver comprehensive solutions.
            </p>
          </div>
          <div
            className={`${poppins.className} md:absolute bottom-1/4 left-5 md:w-50 hidden md:flex flex-col gap-1`}
          >
            <h3 className="font-extralight text-lg md:text-xl">
              Sustainable solutions:
            </h3>
            <p className="text-xs text-justify">
              The solutions we provide are sustainable and long-lasting,
              ensuring that our clients receive value that endures over time.
            </p>
          </div>
          <div className={`w-full md:w-50 hidden md:flex flex-col gap-1`}>
            <h3 className="font-extralight text-lg md:text-xl">
              Customer-centric Approach:
            </h3>
            <p className="text-xs text-justify">
              We deliver value by putting our customers at the center of
              everything we do. Our solutions are tailored to meet your unique
              needs, ensuring satisfaction and long-term success.
            </p>
          </div>

          {/* Mobile view why choose phipest */}
          <div className={`md:hidden mt-10 text-justify text-xl`}>
            At Phipest bens we are unmatched due to our capabilities and prove
            worth we have delivered and ensure smootha dn ffast services renered
            over the years
          </div>
        </section>

        {/* Testimonials */}
      </section>

      {/* What people say */}
      <section className="mt-20 md:mt-40 fade-in-section relative flex flex-col items-center justify-evenly gap-10 md:gp-20 fade-in-section">
        <h1 className="text-4xl md:text-6xl text-center mb-10">
          {" "}
          What people say?
        </h1>
        <Slider
          {...settings}
          className="w-full left-in gap-10 slick-space rounded-lg"
        >
          {number.map((item, index) => (
            <div
              key={index}
              className={` bg-linear-to-b from-blue-200 to-blue-100 p-2 md:p-4 shadow-lg rounded-lg ${item === 0 && "hidden"}`}
            >
              <p className="text-sm italic">
                <span className="mr-2 font-bold inline-block text-xl md:text-3xl">
                  {item}
                </span>
                &quot;Phipest Bens transformed our project with their expertise
                and dedication. A true partner in progress!&quot;
              </p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Overview;
