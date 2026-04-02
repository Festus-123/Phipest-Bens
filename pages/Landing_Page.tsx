"use client";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { M_PLUS_1 } from "next/font/google";

gsap.registerPlugin(TextPlugin);

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"], // choose light to bold
  // variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"], // choose light to bold
  // variable: "--font-inter",
});

const Hero = () => {
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        text: "",
        duration: 2,
        delay: 0.8,
      },
      {
        duration: 4,
        delay: 0.5,
        text: `PHIPEST- <br /> -BENS `,
        ease: "power1.inOut",
        repeat: Infinity,
        repeatDelay: 30,
      },
    );

    gsap.fromTo(
      bgRef.current,
      { opacity: 0.9 },
      { opacity: 1, duration: 1, ease: "power1.inOut", delay: 0.8 },
    );
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-transparent h-[60vh] flex items-center text-white p-8 md:p-16">
        <div className="flex flex-col gap-">
          <h1
            ref={textRef}
            className={`font-light text-2xl md:text-4xl lg:text-8xl ${poppins.className}`}
          ></h1>
          <p className={`text-lg md:text-xl tracking-widest ${poppins.className}`}>
            International Nig Lmtd.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <button className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r from-blue-400 to-blue-500 font-medium cursor-pointer">
            Request a partnership
          </button>
          <button className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r from-black to-black/10 text-white font-medium cursor-pointer">
            Contact Info
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
