"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

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

  const links = [
    { name: "Home", href: "/" },
    { name: "About_Firm", href: "/about_firm" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
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
      <button className="cursor-pointer bg-linear-to-r from-blue-400 hover:from-blue-800 to-blue-500 text-white font-bold py-1 px-4 md:py-2 md:px-8 rounded-xl">
        Request a partnership
      </button>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className="absolute top-full left-2 md:hidden"
      >
        <div className="flex flex-col p-2 gap-4">
          {links.map((item, index) => (
            <Link
              className={`font-medium bg-white rounded-lg p-2 w-max ${
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