"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { HiMenu, HiX } from "react-icons/hi";
import Request_Modal from "./Request_Modal";

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [open]);

  const handleModal = () => {
    if(!modal && !open){
      setModal(true)
    }else if(!modal && open){
      setOpen(false)
      setModal(true)
    }else {
      setModal(false)
    }
  }


  const links = [
    { name: "Home", href: "/" },
    { name: "About_Firm", href: "/about_firm" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
  ];

  return (
    <div
      ref={containerRef}
      className="sticky top-0 z-50 bg-white w-full p-4 flex justify-between items-center text-sm md:text-lg"
    >
      {/* Left side: Logo or nav links (desktop) */}
      <div className="hidden md:flex flex-row items-center gap-6">
        {links.map((item, index) => (
          <Link
            className={`font-medium ${
              pathname === item.href && "border-b-2 border-blue-950"
            }`}
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl focus:outline-none"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Right side: CTA button */}
      <button 
        onClick={handleModal}
        className="cursor-pointer bg-linear-to-r from-blue-400 hover:from-blue-800 to-blue-500 text-white font-bold py-1 px-4 md:py-2 md:px-8 rounded-xl">
        Contact Us
      </button>

      {modal && (
          <Request_Modal 
            title="Contact Us"
            requestType="Full Service"
            relaxed= {handleModal}/>
        )}

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className="absolute top-full w-full h-screen backdrop-blur-md md:hidden"
      >
        <div className="h-screen flex flex-col p-6 gap-6">
          {links.map((item, index) => (
            <Link
              className={`font-medium bg-white rounded-lg p-2 w-max text-lg ${
                pathname === item.href && "border-l-2 border-blue-950"
              }`}
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;