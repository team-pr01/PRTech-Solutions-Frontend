import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu, FiTerminal, FiZap, FiCheckCircle } from "react-icons/fi";
import { testimonials } from "../../../../data/testimonials";
import { clients } from "../../../../data/clients.logo";

const AITrustPanel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const slideVariants = {
    enter: { x: 30, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 },
  };

  return (
    <div className="relative hidden md:flex w-full md:w-1/2 xl:w-[44%] flex-col justify-between overflow-hidden bg-[#050B14] p-7 lg:p-8 text-white font-Manrope">
      {/* AI Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />
      <div className="pointer-events-none absolute top-0 right-0 size-75 bg-primary-10/20 blur-[100px] rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-75 bg-purple-500/10 blur-[100px] rounded-full" />

      {/* Top Content */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* AI Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-md border border-primary-10/30 bg-primary-10/10 px-3 py-1.5 backdrop-blur-md">
          <FiCpu className="text-primary-10 text-sm animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary-35">
            AI Systems Architecture
          </span>
        </div>

        {/* Header */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight text-white tracking-tight">
            Deploy Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-35 to-primary-10">
              Automate the Future.
            </span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-93/80">
            We don't just build apps. We build custom LLMs, RAG pipelines, and
            automated workflows that learn and scale with your business.
          </p>
        </div>

        {/* AI Core Metric Box */}
        <div className="flex gap-3">
          <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-primary-10/20 blur-md rounded-full group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-2 text-primary-35 mb-1">
              <FiZap size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Deployment
              </span>
            </div>
            <div className="text-sm font-semibold text-white">14 Days</div>
          </div>
          <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-8 h-8 bg-purple-500/20 blur-md rounded-full group-hover:scale-150 transition-transform" />
            <div className="flex items-center gap-2 text-primary-35 mb-1">
              <FiTerminal size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Architecture
              </span>
            </div>
            <div className="text-sm font-semibold text-white">Custom LLM</div>
          </div>
        </div>

        {/* Terminal-Style Testimonial Card */}
        <div
          className="space-y-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-55 h-fit w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col rounded-xl border border-white/10 bg-[#0A111F] p-5 shadow-2xl"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-93/50">
                    client_feedback.log
                  </span>
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-neutral-93/90 font-mono line-clamp-3">
                  <span className="text-primary-35 mr-2">&gt;</span>"
                  {testimonials[currentIndex].text}"
                </p>

                {/* User Info */}
                <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-3">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-8 w-8 rounded-md object-cover border border-primary-10/30"
                  />
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-[10px] text-neutral-93/60 font-mono">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  <FiCheckCircle className="ml-auto text-green-500/80" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="relative z-10 flex items-center justify-center gap-2 pt-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-primary-10 shadow-[0_0_10px_rgba(6,160,237,0.8)]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Client Logos */}
      <div className="relative z-10 mt-6 border-t border-white/10 pt-4">
        <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-widest text-neutral-93/40">
          Powering AI for industry leaders
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track">
            <div className="marquee-content items-center gap-8">
              {clients?.map((client, index) => (
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-5 md:h-6 object-contain transition-opacity grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrustPanel;
