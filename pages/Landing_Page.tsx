"use client";
import { Inter, Poppins } from "next/font/google";
import { useState ,useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Request_Modal from "@/component/Request_Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Overview from "./Overview";

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
  const [modal, setModal] = useState<boolean>(false);

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

  const handleModal = () => {
    if(!modal) setModal(true);
    else setModal(false);
  }

  return (
    <div className="">

    <div
      ref={bgRef}
      style={{ backgroundImage: "url(/bg.png)" }}
      className={`sticky top-10 bg-fixed bg-no-repeat bg-cover bg-center ${poppins.className}`}
    >
      {/* Hero Section */}
      <div className="bg-transparent h-[75vh] flex items-center justify-center text-black p-8 md:p-12 lg:p-16">
        <div className="flex flex-col gap- mb-10 md:mb-0">
          <h1
            ref={textRef}
            className="font-light text-center text-6xl md:text-7xl lg:text-8xl"
          ></h1>
          <p ref={subtextref} className="text-lg md:text-xl text-center tracking-widest mt-5">
            International Nig Lmtd.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm md:text-base">
            <button 
              onClick={handleModal}
              ref={heroBtnRef} className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r text-white from-blue-400 to-blue-500 font-medium cursor-pointer">
              Request a partnership
            </button>
            <a href="#contact-info" ref={heroBtnRef} className="w-max mt-5 py-2 px-8 md:px-4 rounded-xl bg-linear-to-r from-black to-black/10 text-white font-medium cursor-pointer">
              Contact Info
            </a>
          </div>
        </div>


      </div>
    </div>
    <Overview />
        
      {modal && (
          <Request_Modal 
            title="Request a partnershp"
            requestType="Partnership"
            relaxed={handleModal}/>
        )}

    </div>
  );
};

export default Hero;
