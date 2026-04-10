"use client";

import { MouseEventHandler, SyntheticEvent, useState } from "react";
import { poppins } from "@/pages/Landing_Page";
import { FiX } from "react-icons/fi";
import { toast } from "sonner";

export type REQUEST = {
  request: string;
  name: string;
};

export type PROP = {
  title: string;
  requestType: string;
  relaxed: MouseEventHandler<HTMLElement>;
};

const Request_Modal = ({ title, requestType, relaxed }: PROP) => {
    const [loading, setLoading] = useState(true)

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Message on it way...");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    if(loading) setLoading(false);
    else setLoading(true)

    try{
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
          name: formData.get("name"),
        email: formData.get("email"),
        request: formData.get("request"),
        requestType: formData.get("request-type"),
      }),
    });

    const data = await res.json();
    console.log(data)

    if (data.success) {
        setLoading(false)
      toast.success("Message sent successfully", { id: toastId });

      form.reset(); // ✅ works now
    } else {
        setLoading(false)
      toast.error("Err, couldn't send message", { id: toastId });
    }
    }catch(error){
        setLoading(false)
        toast.error("Err Sending Message", {id: toastId})
        console.log("Error", error)
    }
  };

  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-black/40 z-50 backdrop-blur-lg flex items-center justify-center ${poppins.className}`}
    >
      <div
        onClick={relaxed}
        className="absolute top-5 right-5 text-2xl md:text-4xl cursor-pointer text-white/80 transition-all duration-500"
      >
        <FiX />
      </div>

      {/* Modal */}
      <form 
        onSubmit={handleSubmit}
        className="bg-white text-gray-600 rounded-xl p-4 md:p-8 w-[90%] md:w-[50%] flex flex-col gap-2">
        <h1 className="font-medium text-xl md:text-2xl mb-10">{title}</h1>

        {/* Name */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="text-sm text-gray-500">
            name
          </label>
          <input
            type="text"
            required
            name="name"
            className="border border-gray-200 rounded-lg p-2 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="text-sm text-gray-500">
            email
          </label>
          <input
            type="email"
            required
            name="email"
            className="border border-gray-200 rounded-lg p-2 outline-none"
          />
        </div>

        {/* Request */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="text-sm text-gray-500">
            request
          </label>
          <input
            type="text"
            required
            name="request"
            className="border border-gray-200 rounded-lg p-2 outline-none"
          />
        </div>

        {/* Request Type */}
        <div className="flex flex-col gap-2 ">
          <label htmlFor="" className="text-sm text-gray-500">
            request Type
          </label>
          <input
            type="text"
            required
            name="request-type"
            value={requestType}
            readOnly
            className="border border-gray-200 rounded-lg p-2 outline-none"
          />
        </div>

        <button 
            disabled={!loading}
            className="bg-linear-to-r from-blue-400 to-blue-500 text-white p-2 rounded-lg mt-5 cursor-pointer hover:from-blue-500 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Request_Modal;
