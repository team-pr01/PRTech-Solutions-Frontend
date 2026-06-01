import { Link, useLocation } from "react-router-dom";
import { NAVLINKS } from "./navlinks";
import { ICONS, IMAGES } from "../../../assets";

const Navbar = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="rounded-xl border border-neutral-10 bg-neutral-15 backdrop-blur-[45px] px-3 py-2 font-Manrope flex items-center justify-between gap-18 absolute top-6 left-1/2 -translate-x-1/2 max-w-[320px] lg:max-w-225 w-full h-fit z-20">
      <Link to="/">
        <img
          src={pathname !== "/coming-soon" ? IMAGES.logo : IMAGES.logoBlack}
          alt="logo"
          className="w-28"
        />
      </Link>

      <div>
        <ul
          className={`hidden lg:flex items-center gap-6 font-semibold ${pathname !== "/coming-soon" ? "text-white" : "text-neutral-65"}`}
        >
          {NAVLINKS.map((link, index) => (
            <Link
              key={index}
              onClick={link?.onClick}
              to={link?.href as string}
              className=""
            >
              {link.label}
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
