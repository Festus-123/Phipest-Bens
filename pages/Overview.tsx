"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700"], 
});

const Overview = () => {
  return (
    <div className={`relative bg-white p-8 md:p-16 ${poppins.className}`}>
      {/* Short Services stand point  */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-40 p-4 md:p-16">
        <div className="w-full md:w-[60%] flex flex-col gap-2 md:gap-4">
          <h1 className={`text-2xl md:text-6xl mb-2 ${poppins.className}`}>
            What We Offer?
          </h1>
          <p className={`tracking-wider text-justify ${poppins.className}`}>
            At Phipest Bens International Nigeria Ltd, our mission is to build
            bridges of trust through excellence. We exist to deliver reliable
            solutions across construction, trade, logistics, and government
            partnerships — empowering businesses and communities with services
            that stand the test of time. Every project we take on is driven by
            integrity, innovation, and a commitment to progress.
          </p>
          <Link
            href="/services"
            className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-600 w-max py-2 px-4 md:py-3 md:px-6 mt-2 rounded-lg text-white place-self-end"
          >
            Visit page
          </Link>
        </div>
        <div className="p-4 pb-16 shadow-xl">
          <Image
            width={600}
            height={400}
            src="/it_consulting.jpg"
            alt="What we offer?"
            className="h-100 object-cover object-center"
          />
        </div>
      </div>

      {/* SHort Our Vission */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-40 p-4 md:p-16 mt-10">
        <div className="w-full md:w-[60%] flex flex-col gap-2 md:gap-4">
          <h1 className={`text-2xl md:text-6xl mb-2 ${poppins.className}`}>
            The Big Picture ~
          </h1>
          <p className={`tracking-wider text-justify ${poppins.className}`}>
            At Phipest Bens International Nigeria Ltd, our mission is to build
            bridges of trust through excellence. We exist to deliver reliable
            solutions across construction, trade, logistics, and government
            partnerships — empowering businesses and communities with services
            that stand the test of time. Every project we take on is driven by
            integrity, innovation, and a commitment to progress.
          </p>
          <Link
            href="/about_firm"
            className="bg-linear-to-r from-blue-400 to-blue-500 hover:from-blue-600 w-max py-2 px-4 md:py-3 md:px-6 mt-2 rounded-lg text-white place-self-end"
          >
            Visit page
          </Link>
        </div>
        <div className="p-4 pb-16 shadow-xl">
          <Image
            width={600}
            height={400}
            src="/government_contracts.jpg"
            alt="the big picture"
            className="h-100 object-cover object-center"
          />
        </div>
      </div>

      {/* Wy chppse phipest ection */}
      <div className="mt-20 md:mt-40">
        <h1 className={`text-4xl md:text-6xl text-center`}>
          Why Choose Phipest Bens?
        </h1>
        <section className="relative flex flex-col items-center justify-evenly gap-10 md:gp-20 p-4 md:p-16 ">
          {/* Picture */}
          <div
            className={`p-4  mt-10  h-80 md:h-120 w-15 md:w-20 drop-shadow-2xl bg-linear-to-b from-blue-400 to-blue-500 relative ${poppins.className} text-center`}
          >
            {/* <div className="p-4 h-100 w-20 drop-shadow-2xl bg-linear-to-b from-blue-400 to-blue-500 rounded-t-full" /2 */}
            <div className="text-xs md:text-sm p-2 md:p-4 h-10 md:h-15 w-50 md:w-70 absolute top-5 md:top-10 -left-2 drop-shadow-2xl bg-linear-to-r from-yellow-400 to-yellow-500 ">
              {" "}
              Unmatched Reliability{" "}
            </div>
            <div className="text-xs md:text-sm p-2 md:p-4 h-10 md:h-15 w-50 md:w-70 absolute top-20 md:top-30 -right-3 drop-shadow-2xl bg-linear-to-r from-green-400 to-green-500 ">
              {" "}
              Global Reach, Local touch
            </div>
            <div className="text-xs md:text-sm p-2 md:p-4 h-10 md:h-15 w-50 md:w-70 absolute top-35 md:top-50 -right-3 drop-shadow-2xl bg-linear-to-r from-green-400 to-green-500 ">
              Diverse Expertise{" "}
            </div>
            <div className="text-xs md:text-sm p-2 md:p-4 h-10 md:h-15 w-50 md:w-70 absolute top-50 md:top-70 -left-2 drop-shadow-2xl bg-linear-to-r from-amber-400 to-amber-500 ">
              Sustainable Solutions{" "}
            </div>
            <div className="text-xs md:text-sm p-2 md:p-4 h-10 md:h-15 w-50 md:w-70 absolute top-65 md:top-90 -right-4 drop-shadow-2xl bg-linear-to-r from-purple-400 to-purple-500 ">
              {" "}
              Customer-centric Approach
            </div>
          </div>
          {/* Words */}
          <div className="grid grid-cols-2 gap-10">
            <div
              className={`${poppins.className}  md:absolute top-1/4 right-5 md:w-60 flex flex-col gap-1`}
            >
              <h3 className="font-extralight text-lg md:text-xl">
                The Unmatched:
              </h3>
              <p className="text-xs text-justify">
                At Phipest bens we are unmatched due to our capabilities and
                prove worth we have delivered and ensure smootha dn ffast
                services renered over the years
              </p>
            </div>
            <div
              className={`${poppins.className} md:absolute top-1/4 left-5 w-50 flex flex-col gap-1`}
            >
              <h3 className="font-extralight text-lg md:text-xl">
                Global reach, Local touch:
              </h3>
              <p className="text-xs text-justify">
                At Phipest bens we are unmatched due to our capabilities and
                prove worth we have delivered and ensure smootha dn ffast
                services renered over the years
              </p>
            </div>
            <div
              className={`${poppins.className} md:absolute bottom-1/4 right-5 w-50 flex flex-col gap-1`}
            >
              <h3 className="font-extralight text-lg md:text-xl">
                DIverse Enterprise:
              </h3>
              <p className="text-xs text-justify">
                At Phipest bens we are unmatched due to our capabilities and
                prove worth we have delivered and ensure smootha dn ffast
                services renered over the years
              </p>
            </div>
            <div
              className={`${poppins.className} md:absolute bottom-1/4 left-5 w-50 flex flex-col gap-1`}
            >
              <h3 className="font-extralight text-lg md:text-xl">
                Sustainable solutions:
              </h3>
              <p className="text-xs text-justify">
                At Phipest bens we are unmatched due to our capabilities and
                prove worth we have delivered and ensure smootha dn ffast
                services renered over the years
              </p>
            </div>
          </div>
          <div className={`w-50 flex flex-col gap-1`}>
            <h3 className="font-extralight text-lg md:text-xl">
              Customer-centric Approach:
            </h3>
            <p className="text-xs text-justify">
              At Phipest bens we are unmatched due to our capabilities and prove
              worth we have delivered and ensure smootha dn ffast services
              renered over the years
            </p>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <div>
        
      </div>
    </div>
  );
};

export default Overview;
