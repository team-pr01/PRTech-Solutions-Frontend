import { useState } from "react";
import { IMAGES } from "../../../assets";
import Modal from "../../Reusable/Modal/Modal";
import StartYourProjectForm from "./StartYourProjectForm/StartYourProjectForm";
import { FiArrowLeft, FiArrowRight, FiCheck, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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

const nextSteps = [
  "24-hour technical feasibility & bottleneck audit",
  "Clear architecture, timeline & milestone roadmap",
  "Direct 1-on-1 call with a senior systems engineer",
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

type TStartYourProjectModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  preselectedService?: string;
};
const StartYourProjectModal: React.FC<TStartYourProjectModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  preselectedService,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const slideVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      width="w-[94%] sm:w-[88%] lg:w-[90%] xl:w-[84%] 2xl:w-[75%]"
      classNames="p-0 bg-none rounded-3xl overflow-hidden shadow-2xl max-h-[90vh]"
      iconColor="text-neutral-70"
    >
      <div className="relative flex h-full max-h-[92vh] flex-col xl:flex-row overflow-y-auto bg-gradient-start-project font-Manrope backdrop-blur-[45px]">
        {/* Left Side */}
        <div className="relative flex w-full xl:w-[44%] flex-col justify-between overflow-hidden bg-neutral-20 p-7 lg:p-8">
          {/* Subtle Background Image Texture */}
          <img
            src={IMAGES.serviceBg}
            alt="hero-bg"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />

          {/* Top Section: Header + Metrics + What Happens Next */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* Editorial Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-83 bg-white/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white">
                Technical Feasibility Review
              </span>
            </div>

            {/* Header */}
            <div>
              <h3 className="font-Manrope text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight text-white">
                Architect Your{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-45">
                  Growth Phase.
                </span>
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                Partner with engineers who&apos;ve scaled enterprise systems.
                Let&apos;s map a roadmap that holds up.
              </p>
            </div>

            {/* 3-Column Architectural Metrics Strip */}
            <div className="grid grid-cols-3 divide-x divide-white/15 rounded-2xl border border-white/15 bg-neutral-65/45 py-3 backdrop-blur-md">
              <div className="px-4 text-center sm:text-left">
                <div className="font-Manrope text-base sm:text-lg font-bold text-white">
                  24 Hrs
                </div>
                <div className="mt-0.5 text-[11px] text-white/75">
                  Review SLA
                </div>
              </div>
              <div className="px-4 text-center sm:text-left">
                <div className="font-Manrope text-base sm:text-lg font-bold text-primary-45">
                  Custom
                </div>
                <div className="mt-0.5 text-[11px] text-white/75">
                  Architecture
                </div>
              </div>
              <div className="px-4 text-center sm:text-left">
                <div className="font-Manrope text-base sm:text-lg font-bold text-white">
                  100%
                </div>
                <div className="mt-0.5 text-[11px] text-white/75">NDA Safe</div>
              </div>
            </div>

            {/* What Happens Next Card (Fills vertical space purposefully) */}
            <div className="rounded-2xl border border-white/12 bg-neutral-65/50 p-4 backdrop-blur-md">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-primary-35">
                What You Get
              </div>
              <ul className="mt-3 space-y-2.5">
                {nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-center gap-2.5 text-xs sm:text-[13px] text-white/90"
                  >
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary-10/25 text-primary-35">
                      <FiCheck className="h-3 w-3" strokeWidth={2.8} />
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Section: Testimonial Spotlight Card */}
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/15 bg-gradient-contact-us-form-bg p-5 shadow-our-work-client-box backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={13}
                  />
                ))}
                <span className="ml-2 text-[11px] font-medium text-white/80">
                  Verified Client
                </span>
              </div>

              <span className="font-Manrope text-xs font-semibold tracking-wider text-primary-45">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
            </div>

            <div className="relative min-h-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col justify-between gap-4"
                >
                  <p className="text-sm leading-relaxed text-white/95 line-clamp-3">
                    &ldquo;{testimonials[currentIndex].review}&rdquo;
                  </p>

                  <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="h-8 w-8 rounded-full border border-primary-35/50 object-cover"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white leading-tight">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-primary-45">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-neutral-65/60 text-white/85 transition-all hover:border-primary-35 hover:bg-primary-10/30 hover:text-white"
                      >
                        <FiArrowLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-neutral-65/60 text-white/85 transition-all hover:border-primary-35 hover:bg-primary-10/30 hover:text-white"
                      >
                        <FiArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Section: Client Logos Marquee */}
          <div className="relative z-10 pt-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/15" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Trusted by industry leaders
              </p>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="marquee-track">
                <div className="marquee-content items-center">
                  {clients.map((client, index) => (
                    <img
                      key={index}
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="h-6 md:h-7 object-contain opacity-85 transition-opacity hover:opacity-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <StartYourProjectForm
          preselectedService={preselectedService}
        />
      </div>
    </Modal>
  );
};

export default StartYourProjectModal;
