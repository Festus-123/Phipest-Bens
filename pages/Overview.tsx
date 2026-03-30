"use client";
import { IconType } from "react-icons";
import {
  FiTool,
  FiTruck,
  FiShoppingCart,
  FiCpu,
  FiGlobe,
  FiPackage,
  FiBriefcase,
} from "react-icons/fi";

export type SERVICES = {
  name: string;
  icon: IconType;
};
export type REASONS = {
  title: string;
  description: string;
}

export const services: SERVICES[] = [
  {
    name: "Construction",
    icon: FiTool,
  },
  {
    name: "Delivery Services",
    icon: FiTruck,
  },
  {
    name: "Wholesales and Retails",
    icon: FiShoppingCart,
  },
  {
    name: "Tech Contracts",
    icon: FiCpu,
  },
  {
    name: "Import and Export",
    icon: FiGlobe,
  },
  {
    name: "Goods and Services",
    icon: FiPackage,
  },
  {
    name: "Goverment Contracts",
    icon: FiBriefcase,
  },
];

export const reasons: REASONS[] = [
  {
    title: "Unmatched Reliability",
    description: "Experience the power of reliability with us, where every promise is a commitment fulfilled."
  },
  {
    title: "Diverse Expertise",
    description: "Our diverse expertise is your competitive edge, delivering tailored solutions across industries with precision and innovation."
  },
  {
    title: "Global Reach, Local Touch",
    description: "Experience the best of both worlds with our global reach and local touch, delivering tailored solutions that resonate with your unique needs."
  },
  {
    title: "Sustainable Solutions",
    description: "Choose us for sustainable solutions that not only meet your needs but also contribute to a greener, more responsible future."
  },
  {
    title: "Proven Track Record",
    description: "Join a legacy of success with our proven track record, where every project is a testament to our commitment to excellence and client satisfaction."
  },
  {
    title: "Customer-Centric Approach",
    description: "Experience the difference with our customer-centric approach, where your needs and satisfaction are at the heart of everything we do."
  }

]

const Overview = () => {
  return (
    <div className="relative ">
      {/* Short About Mission  */}
      <div className="bg-white p-8 md:p-16">
      <div className="">
        <h1 className="text-xl md:text-3xl border-b border-gray-300 pb-2 mb-2">
          Our Mission
        </h1>
        <p className=" md:text-2xl tracking-wider text-justify">
          At Phipest Bens International Nigeria Ltd, our mission is to build
          bridges of trust through excellence. We exist to deliver reliable
          solutions across construction, trade, logistics, and government
          partnerships — empowering businesses and communities with services
          that stand the test of time. Every project we take on is driven by
          integrity, innovation, and a commitment to progress.
        </p>
      </div>

      {/* SHort Our Vission */}
      <div className="mt-10 md:mt-20">
        <h1 className="text-xl md:text-3xl border-b border-gray-300 pb-2 mb-2">
          Our Vision
        </h1>
        <p className=" md:text-2xl tracking-wider text-justify">
          We envision a future where Phipest Bens International Nigeria Ltd is a
          global leader in multi‑sector services, recognized for transforming
          challenges into opportunities. Our vision is to expand beyond borders,
          shaping industries, strengthening economies, and creating lasting
          impact through partnerships that inspire growth and prosperity.
        </p>
      </div>

      <div className="mt-10 md:mt-20">
        <h1 className="border-b pb-2 border-gray-300 text-xl md:text-3xl mb-2">
          Services
        </h1>
        {/* Service ontainer */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-4 md:p-8 flex flex-col items-center gap-4 bg-amber-950/5 drop-shadow-md font-bold text-amber-950 text-sm md:text-xl ${item.name === "Goverment Contracts" && "col-span-2 md:col-span-3"}`}
              >
                <Icon className="text-xl md:text-4xl" />
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      </div>

      <div className="bg-transparent text-white/90 p-8 md:p-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Why Choose Phipest Bens?
        </h1>
        {/* Reasons container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-16">
            { reasons.map((item, index) => (
              <div
                key={index}
                className="border-l-8 border-blue-900 p-4 flex flex-col gap-2 bg-white/5 backdrop-blur-lg">
                  <h1 className="text-xl md:text-2xl ">
                    {item.title}
                  </h1>
                  <p className="font-extralight tracking-wider text-sm md:text-base text-justify">
                    {item.description}
                  </p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Overview;
