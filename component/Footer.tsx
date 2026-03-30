import Link from "next/link";
import { IconType } from "react-icons";
import { FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { SiX } from "react-icons/si";

export type CONTACTTYPE = {
  name: string;
  icon: IconType;
  to: string;
};

const Footer = () => {
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
    <footer className="relative bg-linear-to-r from-blue-900/90 to-blue-950/90 text-white/80 p-8 lg:p-12">
      {/* <div className="absolute inset-0 w-full h-full bg-black/60" /> */}
      <div className="relative flex flex-row flex-wrap gap-15 md:gap-5 items-enstart justify-between mb-10 font-light text-sm">
        <aside className="flex flex-col gap-3">
          <h1 className="font- text-xl md:text-2xl">
            PHIPEST BENS <br /> INTERNATIONAL NIGERIA LIMITED.
          </h1>
          <p className="italic">&quot;Your Partner In Progress&quot;</p>
          <p className="font-medium">Statement</p>
          <p>
            {" "}
            Building trust through reliable multi‑sector services, <br /> shaping 
            industries and communities worldwide.
          </p>
          <p>Family leadership role</p>
          <p>Available shares </p>
          <p>Assets holders </p>
        </aside>
        <aside id="contact-info" className="flex flex-col gap-3">
          <h1>Contacts Info.</h1>
          <p>
            located: <i>Off Ilana Street No. 3 Iworoad Ibadan, Nigeria.</i>{" "}
          </p>
          <p> Phone: +234-7065493569</p>
          <p>phiphestbens@gmail.com</p>
          <p>wa.me/7065493569</p>
          <p>t.me/Phipest Bens Int Nig Ltd.</p>
          <p>Direct: --- --- </p>
        </aside>
        <aside className="hidden md:flex flex-col gap-3">
          <p>About_CEO</p>
          <p>About_Firm</p>
          <p>Services</p>
          <p>Partnerships</p>
          <p>Projects</p>
          <p>Awards & Achivements</p>
        </aside>
      </div>

      <div className="relative border-t p-4 md:p-8 lg:p-12 flex flex-col items-center gap-2">
        <p className="text-center">&copy;2013 Phipest Bens Int Nig Ltd All rigths reserved</p>
        {/* <p>Founded by Phillip Oluwole Oladosu C.E.O-current</p> */}
        <div className="flex items-center gap-4 underline text-xs md:text-sm">
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
        </div>
      </div>

      <div className="relative flex flex-row gap-2 items-center mt-10">
        <div className="flex items-center justify-evenly w-full">
          {contacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.to}>
                <Icon className="text-xl md:text-2xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
