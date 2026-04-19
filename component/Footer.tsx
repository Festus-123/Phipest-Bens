"use client"

import Link from "next/link";
import { IconType } from "react-icons";
import { FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { SiX } from "react-icons/si";

export type CONTACTTYPE = {
  name: string;
  icon: IconType;
  to: string;
};

const Footer = () => {
  const pathname = usePathname();

    const links = [
    { name: "Home", href: "/" },
    { name: "About_Firm", href: "/about_firm" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
  ];

  const contacts: CONTACTTYPE[] = [
    {
      name: "Linkedin",
      icon: FiLinkedin,
      to: "https://linkedin.com",
    },
    {
      name: "Linkedin",
      icon: SiX,
      to: "https://linkedin.com",
    },
    {
      name: "Linkedin",
      icon: FiFacebook,
      to: "https://linkedin.com",
    },
    {
      name: "Linkedin",
      icon: FiMail,
      to: "https://linkedin.com",
    },
  ];
  return (
    <footer 
      className="relative bg-white border-t border-gray-200  mt-10">
        {/* background overlay */}
      {/* <div className="absolute inset-0 w-full h-full bg-black/60" /> */}
      <div className="relative flex flex-col md:flex-row  gap-10 items-start justify-between p-4 md:p-8">
        <aside className="flex flex-col gap-3">
        <h1 className="font- text-xl md:text-3xl">Phipest-bens international nigeria limited</h1>
          <h1 className="font- text-2xl md:text-3xl italic">
            &quot; Your Partner In Progress &quot;
          </h1>
          <p className="w-sm font-light">
            {" "}
            Building trust through reliable multi‑sector services, Shaping the future with innovative solutions, Empowering growth through strategic partnerships, Delivering excellence in every project, Your trusted partner for success.
          </p>
        </aside>
        <aside id="contact-info" className="flex flex-col gap-2 font-light">
          <p className="text-blue-800 text-sm font-normal">-- CONTACT INFO</p>
          <p>
            located: <i>Off Ilana Street No. 3 Iworoad Ibadan, Nigeria.</i>{" "}
          </p>
          <p> Phone: +234-7065493569</p>
          <p>phiphestbens@gmail.com</p>
          <p>wa.me/7065493569</p>
          <p>t.me/Phipest Bens Int Nig Ltd.</p>
          <p>Direct: --- --- </p>
        </aside>
        <aside className={`flex flex-col gap-2 font-light ${
          pathname 
        }`}>
          <p  className="text-sm text-blue-800 font-normal">-- NAVIGATE</p>
          { links.map((item, index) => (
            
            <Link 
              className={`${pathname === item.href ? "font-normal" : "font-light "}`}
              key={index}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </aside>
      </div>

      <div className="relative flex flex-row gap-2 items-center p-4 md:p-8">
        <div className="flex items-center justify-evenly w-full">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.to}>
                <Icon className="text-lg md:text-xl font-normal" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative border-t border-gray-200 p-4 md:p-8 font-light flex flex-col items-center gap-2">
        <p className="text-center">&copy;copyrights 2013 Phipest Bens Int Nig Ltd All rigths reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
