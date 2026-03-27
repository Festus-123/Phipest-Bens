"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { M_PLUS_1 } from "next/font/google";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  //   const [count, setCount] = useState(0);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  //   const bg_img = [
  //     "url(/hero_img2.avif)",
  //     "url(/hero_img3.avif)",
  //     "url(/hero_img4.avif)",
  //     "url(/hero_img6.avif)",
  //   ];
  //   const handleChange = () => {
  //     setCount((prev) => (prev + 1) % bg_img.length);
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(handleChange, 9000);

  //     return () => clearInterval(interval);
  //   }, []);

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
        text: `PHIPEST BENS <br /> INTERNATIONAL NIG LTD.`,
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
      <div className="relative flex-1 h-[90vh] text-white/90 flex flex-col justify-center px-8 md:px-16">
        <div
          ref={bgRef}
          style={{
            backgroundImage: "url(/hero_img2.avif)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-full absolute inset-0"
        />

        <div className="bg-black/90 inset-0 absolute" />

        <div className="flex flex-col gap-10 items-center">
          <h1
            ref={textRef}
            className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold text-center"
          ></h1>

          <div className="relative text-lg md:text-xl font-bold bg-white/10 backdrop-blur-md rounded-xl p-2 w-full md:w-[50%] text-center">
            YOUR PARTNER IN PROGRESS
          </div>
          <div className="relative flex flex-col gap-20 items-center ">
            <span className="font-extralight tracking-wider text-sm md:text-sm w-full md:w-[60%] text-justify">
              Phipest Bens International Nigeria Ltd, founded by Phillip Oluwole
              Oladosu, is a diversified enterprise built on trust and
              reliability. We deliver excellence across multiple sectors — from
              construction contracts and wholesale/retail trade to import-export
              services and government partnerships.
            </span>

            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 md:place-self-end">
              <button className="py-2 px-8 mdpx-4 rounded-xl bg-white/90 border border-white/90 text-amber-950 font-medium cursor-pointer">
                Request a partnership
              </button>
              <button className="py-2 px-8 mdpx-4 rounded-xl border border-white text-white font-medium cursor-pointer">
                <a href="#contact-info">Contact Info</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
