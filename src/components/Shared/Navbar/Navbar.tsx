import { Link } from "react-router-dom";
import { NAVLINKS } from "./navlinks";
import { IMAGES } from "../../../assets";

const Navbar = () => {
  return (
    <div className="rounded-xl border border-neutral-10 bg-neutral-15 backdrop-blur-[45px] px-3 py-2 font-Manrope flex items-center justify-between gap-18 fixed top-6 left-1/2 -translate-x-1/2 w-fit h-fit z-20">
      <Link to="/">
        <img src={IMAGES.logo} alt="logo" className="w-28" />
      </Link>

      <div>
        <ul className="flex items-center gap-6 font-semibold text-white">
          {NAVLINKS.map((link, index) => (
            <Link key={index} to={link.href} className="">
              {link.label}
            </Link>
          ))}
        </ul>
      </div>

      <button className="bg-gradient-navbar-button shadow-button border border-primary-10 rounded-lg px-4 py-2 font-bold text-white">
        Say hi
      </button>
    </div>
  );
};

export default Navbar;