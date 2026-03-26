"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { M_PLUS_1 } from "next/font/google";

gsap.registerPlugin(TextPlugin);


const Landing_Page = () => {
    const [count, setCount] = useState(0)
  const textRef = useRef(null);
  const bgRef = useRef(null);

  const bg_img = [
    "url(/hero_img2.jpg)",
    "url(/hero_img3.jpg)",
    "url(/hero_img4.jpg)",
    "url(/hero_img5.jpg)",
    "url(/hero_img6.jpg)",
  ];
  const handleChange = () => {
    let increase = count

    if(count >= 0){
        increase++
        setCount(increase)
    }
    if(count === 4){
        setCount(0)
    }
    
    // return () => setCount(increase)
  }

  useEffect(() => {
    setInterval(handleChange, 9000)
  }, [count])

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { text: "" },
      {
        duration: 4,
        delay: 0.5,
        text: `PHIPEST BENS <br /> INTERNATIONAL NIG LTD.`,
        ease: "power1.inOut",
        repeat: Infinity,
        repeatDelay: 20,
      },
    );

    gsap.fromTo(
        bgRef.current,
        { opacity: 0.9},
        { opacity: 1, duration: 1, ease: "power1.inOut", delay: 0.8}
    )

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesTohow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover text-white/90 flex flex-col justify-evenly">
      {/* <Slider className="relative border border-white inset-0"  {...settings}> */}
        {/* {bg_img.map((item, index) => ( */}
            <div
              ref={bgRef}
              style={{
                backgroundImage: bg_img[count],
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "",
              }}
              className="bg-cover bg-fixed inset-0 absolute w-full h-full"
            />
        {/* ))} */}
        {/* </Slider> */}

        <div className="bg-black/80 inset-0 absolute" />

        <h1
          ref={textRef}
          className="relative text-5xl md:text-6xl font-extrabold text- whitespace-pre-line px-8 md:px-16"
        ></h1>
        <div className="relative flex flex-col gap-20 items-center px-8 md:px-16">
          <span className="font-light md:font-extralight text-lg md:twxt-2xl tracking-wider">
            Phipest Bens Int Nig Ltd Founded by Phillip oluwole Oladosu is a
            company that stands for trust an reliability, Providing Multi-factor
            services to variaous places accross the country and throughout the
            globe
          </span>

          <div className="flex items-center gap-10 place-self-end">
            <button className="py-2 px-8 mdpx-4 rounded-xl bg-white/90 border border-white/90 text-amber-950 font-medium cursor-pointer">
              Request a partnership
            </button>
            <button className="py-2 px-8 mdpx-4 rounded-xl border border-white text-white font-medium cursor-pointer">
              Contact Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_Page;
