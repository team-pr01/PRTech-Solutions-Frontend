/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVLINKS } from "./navlinks";
import { ICONS, IMAGES } from "../../../assets";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import ServiceMegaMenu from "./ServiceMegaMenu";
import IndustryMegaMenu from "./IndustryMegaMenu";

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeoutRef = useRef<any | null>(null);

  // Track scroll for the floating effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  // Determine text/logo colors based on page background
  const isLightPage =
    pathname === "/coming-soon" ||
    pathname === "/privacy-policy" ||
    pathname.startsWith("/blog/");

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pointer-events-none px-3">
      {/* Outer vertical padding wrapper (no y-transform, keeps mega menu flush below dock) */}
      <motion.div
        initial={false}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex flex-col items-center pointer-events-none"
      >
        {/* The Animated Dock Container */}
        <motion.div
          initial={false}
          animate={{
            maxWidth: isScrolled ? 900 : 1200,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`pointer-events-auto w-full flex items-center justify-between gap-4 lg:gap-6 font-Manrope px-5 2xl:px-6 transition-[background-color,border-color,box-shadow,border-radius] duration-500 ease-out mt-5 ${
            isScrolled
              ? isLightPage
                ? "bg-white/20 backdrop-blur-xl border border-neutral-10/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full py-2"
                : "bg-neutral-16/30 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.22)] rounded-full py-2"
              : "bg-transparent border border-transparent rounded-full py-2"
          }`}
        >
          <Link to="/" className="shrink-0">
            <img
              src={isLightPage ? IMAGES.logoBlack : IMAGES.logo}
              alt="logo"
              className="w-32 md:w-40 transition-opacity duration-500"
            />
          </Link>

          <div>
            <ul
              className={`hidden lg:flex items-center font-semibold transition-colors duration-500 ${
                isLightPage ? "text-neutral-70" : "text-white"
              }`}
            >
              {NAVLINKS.map((link) => {
                const isCaseStudies = link.label === "Case Studies";
                const isHidden = isScrolled && isCaseStudies;

                return (
                  <motion.li
                    key={link.label}
                    initial={false}
                    animate={
                      isCaseStudies
                        ? {
                            maxWidth: isHidden ? 0 : 160,
                            opacity: isHidden ? 0 : 1,
                            paddingLeft: isHidden ? 0 : 12,
                            paddingRight: isHidden ? 0 : 12,
                          }
                        : undefined
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      pointerEvents: isHidden ? "none" : "auto",
                    }}
                    className={`relative whitespace-nowrap ${
                      isCaseStudies ? "overflow-hidden" : "px-3"
                    }`}
                    onMouseEnter={
                      link.hasMenu
                        ? () => handleMouseEnter(link.label)
                        : () => setActiveMenu(null)
                    }
                    onMouseLeave={link.hasMenu ? handleMouseLeave : undefined}
                  >
                    <Link
                      onClick={link?.onClick}
                      to={link?.href as string}
                      tabIndex={isHidden ? -1 : 0}
                      className="flex items-center gap-1 py-2 transition-opacity hover:opacity-70"
                    >
                      {link.label}
                      {link?.hasMenu && (
                        <MdKeyboardArrowDown
                          className={`transition-transform duration-300 ${
                            activeMenu === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <Link
            to={"/contact-us"}
            className={`shrink-0 bg-gradient-navbar-button shadow-button border border-primary-10 px-5 py-2 font-bold text-white hidden lg:block hover:opacity-90 transition-all duration-300 whitespace-nowrap ${
              isScrolled ? "rounded-full" : "rounded-lg"
            }`}
          >
            Say hi
          </Link>

          <button className="lg:hidden shrink-0">
            <img
              src={isLightPage ? ICONS.hamburgerMenuBlack : ICONS.hamburgerMenu}
              alt=""
              className="size-7"
            />
          </button>
        </motion.div>

        {/* Detached Mega Menu Anchor — No double motion.div, mode="wait" prevents overlap/shiver */}
        <div className="relative w-full max-w-[1200px] flex justify-center pointer-events-none">
          <AnimatePresence mode="wait">
            {activeMenu && (
              <div
                key={activeMenu}
                onMouseEnter={() => handleMouseEnter(activeMenu)}
                onMouseLeave={handleMouseLeave}
                className="pointer-events-auto relative w-full flex justify-center pt-2"
              >
                {activeMenu === "Services" && <ServiceMegaMenu />}
                {activeMenu === "Industries" && <IndustryMegaMenu />}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;