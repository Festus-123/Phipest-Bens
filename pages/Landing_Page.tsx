"use client";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// gsap.registerPlugin(TextPlugin);

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

const Hero = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const illustrationRef = useRef(null);
  const subtextref = useRef(null);
  const heroBtnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    // Animate headline text typing effect
    gsap.fromTo(
      textRef.current,
      { text: "", opacity: 0, y: 50 },
      {
        text: "PHIPEST- <br /> -BENS.",
        opacity: 1,
        y: 0,
        duration: 3,
        delay: 0.5,
        ease: "power3.out",
        repeat: Infinity,
        repeatDelay: 30,
      },
    );

    // Animate subtext fade in
    gsap.from(subtextref.current, {
      opacity: 0,
      y: 20,
      duration: 2,
      delay: 1.5,
      ease: "power2.out",
    });

    // Animate buttons with stagger
    gsap.from(heroBtnRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.5,
      delay: 2,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });

    // Background subtle zoom loop
    gsap.to(bgRef.current, {
      scale: 1.05,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.fromTo(
      illustrationRef.current,
      { opacity: 0, y: 50, stagger: 0.3 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        scale: 1,
        duration: 3,
        delay: 0.5,
        ease: "power3.out",
      },
    );

  }, []);

  return (
    <div
      ref={bgRef}
      style={{ backgroundImage: "url(/bg.png)" }}
      className={`sticky top-10 bg-fixed bg-no-repeat bg-cover bg-center ${poppins.className}`}
    >
      {/* Hero Section */}
      <div className=" relative bg-transparent h-[75vh] flex items-center justify-center md:justify-start text-black p-8 md:p-12 lg:p-16">
        <div className="flex flex-col gap- mb-10 md:mb-0">
          <h1
            ref={textRef}
            className="font-light text-center md:text-start text-6xl md:text-7xl lg:text-8xl"
          ></h1>
          <p ref={subtextref} className="text-lg md:text-xl tracking-widest">
            International Nig Lmtd.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm md:text-base">
            <button ref={heroBtnRef} className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r text-white from-blue-400 to-blue-500 font-medium cursor-pointer">
              Request a partnership
            </button>
            <button ref={heroBtnRef} className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r from-black to-black/10 text-white font-medium cursor-pointer">
              Contact Info
            </button>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className="hidden lg:block absolute bottom-0 md:-bottom-20 md:right-10 "
        >
          <Image
            src="/illustration3.png"
            alt="Illustration"
            width={600}
            height={600}
            className="w-60 md:w-100 lg:w-165"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
