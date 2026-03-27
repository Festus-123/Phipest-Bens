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

const Overview = () => {
  return (
    <div className="relative p-8 md:p-16">
      {/* Short About Mission  */}
      <div className="">
        <h1 className="text-xl md:text-3xl border-b border-gray-300 pb-2 mb-2">
          Our Mission
        </h1>
        <p className="text-lg md:text-2xl tracking-wider">
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
        <p className="text-lg md:text-2xl tracking-wider">
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
  );
};

export default Overview;
