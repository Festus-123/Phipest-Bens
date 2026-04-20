"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Request_Modal from "@/component/Request_Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Overview from "./Overview";


export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"],
});

const Hero = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const subtextref = useRef<HTMLParagraphElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const fullText = "PHIPEST - BENS INT NIG LTD.";

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 5 });

    // Typing in
    tl.fromTo(
      textRef.current,
      { text: "" },
      {
        text: fullText,
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "none",
      },
    );

    // Pause before deleting
    tl.to(textRef.current, { duration: 10 });

    // Backspacing effect (delete backwards from cursor)
    tl.to(
      {},
      {
        duration: 3,
        ease: "none",
        onUpdate: function () {
          if (textRef.current) {
            const progress = this.progress(); // 0 → 1
            const charsToShow = Math.floor(fullText.length * (1 - progress));
            textRef.current.innerHTML = fullText.substring(0, charsToShow);
          }
        },
      },
    );

    // Blinking cursor loop
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animate subtext fade in
    gsap.from(subtextref.current, {
      opacity: 0,
      y: 20,
      duration: 2,
      delay: 1.5,
      ease: "power2.out",
    });

    // Animate buttons with stagger
    gsap.from(gsap.utils.toArray(".hero-btn"), {
      opacity: 0,
      y: 30,
      duration: 1.5,
      delay: 2,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });

    // Background subtle zoom loop
    gsap.to(bgRef.current, {
      scale: 1,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Illustration animation
    gsap.fromTo(
      illustrationRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 3,
        delay: 0.5,
        ease: "power3.out",
      },
    );
  }, []);

  const handleModal = () => {
    if (!modal) setModal(true);
    else setModal(false);
  };

  return (
    <div className="relative">
      <div
        ref={bgRef}
        style={{ backgroundImage: "url(/bg3.png)" }}
        className={`sticky top-15 bg-no-repeat bg-cover bg-center ${poppins.className}`}
      >
        <div className="absolute inset-0 w-full h-full bg-black/60" />
        {/* Hero Section */}
        <div className="relative bg-transparent h-[40vh] flex items-center justify-center text-white p-8 md:p-12 lg:p-16">
          <div className="flex flex-col gap- mb-10 md:mb-0 items-center">
            <h1 className="font-light text-center text-5xl md:text-7xl lg:text-8xl">
              <span ref={textRef}></span>
              <span ref={cursorRef} className="inline-block">
                |
              </span>
            </h1>
              <button
                onClick={handleModal}
                className="hero-btn cursor-pointer bg-linear-to-r from-blue-400 to-blue-500 p-2  mt-5 px-8 md:px-4 font-medium"
              >
                Request a partnership
              </button>
          </div>
        </div>
      </div>
      <Overview />

      {modal && (
        <Request_Modal
          title="Request a partnershp"
          requestType="Partnership"
          relaxed={handleModal}
        />
      )}
    </div>
  );
};

export default Hero;
