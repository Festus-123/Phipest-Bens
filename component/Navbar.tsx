"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const Navbar = () => {
    const pathname = usePathname();

    const containerRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { y: "-100%", opacity: 0},
            {y: 0, opacity: 1, duration: 0.8}
        )
    }, [])

    const links = [
        {name: "Home", href: "/", },
        {name: "About_C.E.O", href: "/about_ceo", },
        {name: "About_Firm", href: "", },
        {name: "Services", href: "/services", },
        {name: "Industries", href: "", },
        {name: "Projects", href: "/projects", },
        {name: "Events", href: "/events", },
        {name: "News", href: "/news", },
    ]
  return (
    <div
        ref={containerRef} 
        className="sticky top-0 z-50 bg-white w-full p-4 flex justify-between items-center text-sm md:text-lg ">
        <div className="flex flex-row items-center gap-5 max-w-[70%] md:max-w-full overflow-x-auto md:overflow-x-hidden nav-scroll">
        { links.map((item, index) => (
                <Link
                className={` font-medium ${pathname === item.href && "border-b-2 border-blue-950"}`}
                key={index}
                href={item.href}>
                    {item.name}
                </Link>
        ))}
        </div>

        <button className="cursor-pointer bg-linear-to-r from-blue-400 hover:from-blue-800 to-blue-500 text-white font-bold py-1 px-4 md:py-2 md:px-8 rounded-xl">
            Contact Us
        </button>
    </div>
)};

export default Navbar;
