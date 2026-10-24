// components/Reusable/Navbar/IndustryMegaMenu.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiHeart,
  FiCloud,
  FiShoppingBag,
  FiActivity,
  FiHome,
  FiArrowRight,
} from "react-icons/fi";

const IndustryMegaMenu = () => {
  const industries = [
    {
      label: "Tuition & Education",
      icon: FiBookOpen,
      href: "/industries/education",
      desc: "Platforms for coaching centers & schools",
    },
    {
      label: "NGO & Non-Profit",
      icon: FiHeart,
      href: "/industries/ngo",
      desc: "Donation & volunteer management systems",
    },
    {
      label: "SaaS & Startups",
      icon: FiCloud,
      href: "/industries/saas",
      desc: "Scalable multi-tenant architectures",
    },
    {
      label: "E-Commerce",
      icon: FiShoppingBag,
      href: "/industries/ecommerce",
      desc: "High-converting storefronts & dashboards",
    },
    {
      label: "Healthcare",
      icon: FiActivity,
      href: "/industries/healthcare",
      desc: "Patient portals & booking systems",
    },
    {
      label: "Real Estate",
      icon: FiHome,
      href: "/industries/real-estate",
      desc: "Property listing & CRM integrations",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed font-Manrope top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-neutral-91 overflow-hidden flex flex-col z-50"
    >
      {/* Top Section: Grid Layout */}
      <div className="p-8 pb-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xs font-bold text-primary-10 uppercase tracking-widest mb-1">
              Industries We Serve
            </p>
            <h3 className="text-2xl font-semibold text-neutral-20">
              Tailored solutions for your sector
            </h3>
          </div>
          <Link
            to="/industries"
            className="text-sm font-semibold text-neutral-50 hover:text-primary-10 transition-colors flex items-center gap-1"
          >
            View all industries <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="group p-4 rounded-xl border border-neutral-91 hover:border-primary-10/50 hover:bg-primary-40/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover background icon */}
              <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-5 transition-opacity duration-500 transform group-hover:scale-150">
                <item.icon size={100} />
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-neutral-96 border border-neutral-91 group-hover:bg-white group-hover:border-primary-20 flex items-center justify-center shrink-0 transition-colors">
                  <item.icon
                    className="text-primary-10 transition-colors"
                    size={20}
                  />
                </div>
                <div>
                  <h4 className="text-neutral-20 font-semibold text-sm mb-1 group-hover:text-primary-10 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-neutral-80 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section: Full-width CTA Bar */}
      <div className="bg-neutral-20 px-8 py-4 flex items-center justify-between border-t border-neutral-91/10">
        <p className="text-neutral-40/80 text-sm">
          Don't see your industry? We build custom solutions for{" "}
          <span className="text-white font-medium">any business model</span>.
        </p>
        <Link
          to="/contact-us"
          className="bg-gradient-comparison text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-25 transition-colors flex items-center gap-2"
        >
          Discuss Your Project <FiArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default IndustryMegaMenu;
