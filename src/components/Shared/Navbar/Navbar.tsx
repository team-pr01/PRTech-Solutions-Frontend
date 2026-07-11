import { Link, useLocation } from "react-router-dom";
import { NAVLINKS } from "./navlinks";
import { ICONS, IMAGES } from "../../../assets";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="rounded-xl py-2 font-Manrope flex items-center justify-between gap-18 absolute top-6 left-1/2 -translate-x-1/2 max-w-300 2xl:max-w-7xl w-full mx-auto px-4 2xl:px-0 h-fit z-20">
      <Link to="/">
        <img
          src={
            pathname === "/coming-soon" || pathname.startsWith("/blog/")
              ? IMAGES.logoBlack
              : IMAGES.logo
          }
          alt="logo"
          className="w-32"
        />
      </Link>

      <div>
        <ul
          className={`hidden lg:flex items-center gap-6 font-semibold ${pathname === "/coming-soon" || pathname.startsWith("/blog/") ? "text-neutral-50" : "text-white"}`}
        >
          {NAVLINKS.map((link, index) => (
            <Link
              key={index}
              onClick={link?.onClick}
              to={link?.href as string}
              className="flex items-center gap-1"
            >
              {link.label}
              {link?.hasMenu && (
                <MdKeyboardArrowDown className={`${pathname === "/coming-soon" || pathname.startsWith("/blog/") ? "text-neutral-50" : "text-white"}`} />
              )}
            </Link>
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
