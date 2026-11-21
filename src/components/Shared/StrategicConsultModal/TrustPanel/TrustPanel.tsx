import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const TrustPanel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slideVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className="relative hidden md:flex w-full xl:w-[44%] flex-col justify-between overflow-hidden bg-gradient-our-work-hero-bg p-7 lg:p-8 text-white">
      {/* Background Image with subtle dark scrim */}
      <img
        src={IMAGES.serviceBg}
        alt="hero-bg"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-neutral-65/70 via-neutral-65/50 to-neutral-16/90"
      />

      {/* Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full bg-primary-10/25 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-primary-25/15 blur-[90px]"
      />

      {/* Top Content */}
      <div className="relative z-10 flex flex-col gap-7">
        {/* Eyebrow Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-83 bg-neutral-15 px-3.5 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-35" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-45">
            Technical Feasibility Review
          </span>
        </div>

        {/* Header */}
        <div>
          <h3 className="font-Manrope text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-tight text-white">
            Architect Your{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-35">
              Growth Phase.
            </span>
          </h3>
          <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-neutral-99/80">
            Partner with engineers who&apos;ve scaled enterprise systems.
            Let&apos;s map a roadmap that holds up.
          </p>
        </div>

        {/* Quick Assurance Pills */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-neutral-15 px-3.5 py-2.5 backdrop-blur-sm">
            <div className="text-[11px] uppercase tracking-wider text-primary-35">
              Turnaround
            </div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-white">
              Within 24 Hours
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-neutral-15 px-3.5 py-2.5 backdrop-blur-sm">
            <div className="text-[11px] uppercase tracking-wider text-primary-35">
              Deliverable
            </div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-white">
              Scope &amp; Timeline
            </div>
          </div>
        </div>

        {/* Testimonial Card Container */}
        <div className="space-y-3.5">
          <div className="relative min-h-50 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/15 bg-neutral-15 p-5 sm:p-6 shadow-our-work-client-box backdrop-blur-xl"
              >
                {/* Top Row: Stars & Quote Mark */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="fill-yellow-400 text-yellow-400"
                        size={14}
                      />
                    ))}
                  </div>
                  <span className="font-Playfair-Display text-2xl leading-none text-primary-35/40">
                    &ldquo;
                  </span>
                </div>

                {/* Review */}
                <p className="my-2 text-sm md:text-[15px] italic leading-relaxed text-white/90 line-clamp-3">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>

                {/* User Info */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-9 w-9 rounded-full border border-primary-35/40 object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="mt-0.5 text-xs text-primary-35">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-7 bg-primary-35"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="relative z-10 mt-8 border-t border-white/10 pt-5">
        <p className="mb-3.5 text-center text-[11px] font-medium uppercase tracking-widest text-neutral-99/50">
          Trusted by industry leaders
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track">
            <div className="marquee-content items-center">
              {clients.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-6 md:h-7 object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustPanel;