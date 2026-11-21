import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { IMAGES } from "../../../../assets";

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
const TrustAndSocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const clients = [
    IMAGES.bcoEco,
    IMAGES.attributionBooster,
    IMAGES.brightTuitionCare,
    IMAGES.globalCryptoAlliance,
    IMAGES.goodKing,
    IMAGES.logicalMedia,
    IMAGES.tenStageMatrix,
    IMAGES.vedicWisdom,
    IMAGES.worldMarket,
  ];
  return (
    <div className="w-full xl:w-[45%] hidden md:flex flex-col items-center justify-center bg-neutral-20 relative overflow-hidden p-6">
      {/* Background Image */}
      <img
        src={IMAGES.serviceBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover opacity-60"
      />

      {/* Glow Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-10/20 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-25/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col gap-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-83 bg-neutral-15 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-35" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-45">
            Technical Feasibility Review
          </span>
        </div>
        {/* Header */}
        <div>
          <h3 className="text-white font-Manrope text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            Architect Your{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-35">
              Growth Phase.
            </span>
          </h3>
          <p className="text-neutral-40/80 text-sm md:text-base leading-relaxed">
            Partner with engineers who've scaled enterprise systems. Let's map a
            roadmap that holds up.
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div className="relative h-50 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={16}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-white/90 text-sm md:text-base italic leading-relaxed line-clamp-3">
                "{testimonials[currentIndex].review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary-35 text-xs">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 relative z-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Client Logos Marquee */}
        <div className="w-full mt-4">
          <p className="text-neutral-40/50 text-xs uppercase tracking-wider text-center mb-4">
            Trusted by industry leaders
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="marquee-track">
              <div className="marquee-content">
                {clients.map((client, index) => (
                  <img
                    key={index}
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="h-6 md:h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustAndSocialProof;
