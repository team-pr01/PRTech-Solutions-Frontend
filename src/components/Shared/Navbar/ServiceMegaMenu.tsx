import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiCpu,
  FiLayers,
  FiPenTool,
  FiSettings,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";

const ServiceMegaMenu = () => {
  const services = [
    { label: "Product Development", icon: FiCode, href: "/services" },
    { label: "UI/UX & Design", icon: FiLayers, href: "/services" },
    { label: "Graphics & Brand Design", icon: FiPenTool, href: "/services" },
    { label: "AI Development & Integration", icon: FiCpu, href: "/services" },
    { label: "Deployment & DevOps", icon: FiSettings, href: "/services" },
    { label: "Maintenance & Support", icon: FiTrendingUp, href: "/services" },
    {
      label: "Business Automation Solutions",
      icon: FiBriefcase,
      href: "/services",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: IMAGES.dummyClientPicture,
      review:
        "PRTech transformed our operations. The custom system they built saves us 20+ hours a week.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateHub",
      image: IMAGES.dummyClientPicture,
      review:
        "Incredible attention to detail. They didn't just build an app, they built a scalable business solution.",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director",
      image: IMAGES.dummyClientPicture,
      review:
        "The AI integration they provided completely changed how we handle customer support.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Increased to 5 seconds for better readability

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Animation variants for slide up
  const slideVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed font-Manrope top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-neutral-91 overflow-hidden flex flex-col md:flex-row z-50"
    >
      {/* Left Side: Links List */}
      <div className="w-full md:w-1/2 p-6 flex flex-col bg-white">
        <p className="text-xs font-bold text-neutral-50 uppercase tracking-widest mb-2 px-3">
          Our Services
        </p>
        {services.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            className="group flex items-center gap-4 p-3 hover:bg-neutral-96 transition-colors duration-200 border-b border-primary-20/30 last:border-0"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-30 flex items-center justify-center group-hover:bg-primary-10 transition-colors shrink-0">
              <item.icon
                className="text-primary-10 group-hover:text-white transition-colors"
                size={18}
              />
            </div>
            <span className="text-neutral-30 font-semibold group-hover:text-neutral-20 transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Right Side: Promo / CTA Card with Testimonial */}
      <div className="w-full md:w-1/2 bg-neutral-20 p-8 flex flex-col justify-between relative overflow-hidden">
        <img
          src={IMAGES.serviceBg}
          alt="hero-bg"
          className="w-full h-full absolute inset-0 object-cover"
        />
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-10/20 blur-[60px] rounded-full" />

        <div className="relative z-10">
          <h3 className="text-white font-Manrope text-3xl font-semibold mb-3 leading-tight">
            Ready to grow your business?
          </h3>
          <p className="text-neutral-40/70 text-sm leading-relaxed mb-6">
            We don't just build websites — we create systems that generate
            leads, automate operations, and help you scale faster.
          </p>

          {/* Testimonial Card Container */}
          <div className="relative h-45 w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between"
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-yellow-400 fill-yellow-400"
                      size={14}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-white/90 text-sm italic leading-snug line-clamp-2">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 mt-3">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-9 h-9 rounded-full object-cover border border-white/30"
                  />
                  <div>
                    <p className="text-white font-semibold text-xs">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-neutral-40/70 text-[10px]">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-1.5 mt-3 relative z-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-4 bg-white"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <Link to="/contact-us" className="mt-5 relative z-10 w-full">
          <Button
            label="Let's Started"
            variant="secondary"
            className="w-full"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceMegaMenu;
