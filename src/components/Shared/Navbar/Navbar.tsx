/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVLINKS } from "./navlinks";
import { ICONS, IMAGES } from "../../../assets";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import ServiceMegaMenu from "./ServiceMegaMenu";
import IndustryMegaMenu from "./IndustryMegaMenu";

const Navbar = () => {
  const pathname = useLocation().pathname;
  // Changed to track WHICH menu is open (e.g., "Services", "Industries", or null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<any | null>(null);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const isLightPage =
    pathname === "/coming-soon" ||
    pathname === "/privacy-policy" ||
    pathname.startsWith("/blog/");

  return (
    <div className="rounded-xl py-2 font-Manrope flex items-center justify-between gap-18 absolute top-6 left-1/2 -translate-x-1/2 max-w-300 2xl:max-w-7xl w-full mx-auto px-4 2xl:px-0 h-fit z-50">
      <Link to="/">
        <img
          src={isLightPage ? IMAGES.logoBlack : IMAGES.logo}
          alt="logo"
          className="w-32"
        />
      </Link>

      <div>
        <ul
          className={`hidden lg:flex items-center gap-6 font-semibold ${isLightPage ? "text-neutral-50" : "text-white"}`}
        >
          {NAVLINKS.map((link, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={
                link.hasMenu ? () => handleMouseEnter(link.label) : undefined
              }
              onMouseLeave={link.hasMenu ? handleMouseLeave : undefined}
            >
              <Link
                onClick={link?.onClick}
                to={link?.href as string}
                className="flex items-center gap-1 py-2"
              >
                {link.label}
                {link?.hasMenu && (
                  <MdKeyboardArrowDown
                    className={`transition-transform duration-300 ${
                      activeMenu === link.label ? "rotate-180" : ""
                    } ${isLightPage ? "text-neutral-50" : "text-white"}`}
                  />
                )}
              </Link>

              {/* Render the correct menu based on which one is active */}
              <AnimatePresence>
                {activeMenu === link.label && (
                  <div
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.label === "Services" && <ServiceMegaMenu />}
                    {link.label === "Industries" && <IndustryMegaMenu />}
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={"/contact-us"}
        className="bg-gradient-navbar-button shadow-button border border-primary-10 rounded-lg px-4 py-2 font-bold text-white hidden lg:block"
      >
        Say hi
      </Link>

      <button className="lg:hidden">
        <img src={ICONS.hamburgerMenu} alt="" className="size-7" />
      </button>
    </div>
  );
};

export default Navbar;
