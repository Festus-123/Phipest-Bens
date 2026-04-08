"use client"
import Link from "next/link";
import Image from "next/image";
import { services } from "../data/services";
import { useState } from "react";
import Request_Modal from "@/component/Request_Modal";

const Services = () => {
  const [modal, setModal] = useState<boolean>(false)
  const [serviceName, setServiceName] = useState("Construction")

    const handleModal = (name: string) => {
      setServiceName(name)
    if(!modal) setModal(true);
    else setModal(false);
  }
  return (
    <div className="">
      <h1 className="font-bold text-xl md:text-3xl p-4 md:p-16 mb-10 md:mb-0">
        Our Services
      </h1>

      {/* Display services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-4 md:p-16 gap-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col gap-5rounded-lg shadow-md"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              width={600}
              height={600}
              className="w-full h-100 object-cover rounded-md mb-2"
            />
            <div
                className="w-full h-full justify-end items-start absolute inset-0 text-white bg-black/40 flex flex-col gap-2 md:opacity-0 hover:opacity-100 transition-opacity duration-200 p-4 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold ">
                {service.title}
              </h3>
              <p className="text-gray-200">{service.description}</p>
              <Link
                href=""
                onClick={() => handleModal(service.title)}
                className="bg-white p-2 rounded-xl text-black"
              >
                Request Service
              </Link>
            </div>
          </div>
        ))}
      </div>

    {modal && (
          <Request_Modal 
            title={`Service: ${serviceName}`}
            requestType={`${serviceName}`}
            relaxed={() => handleModal(serviceName)}/>
        )}
    </div>
  );
};

export default Services;
