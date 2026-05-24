/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Reusable/Button/Button";

type TServiceCardProps = {
  data: {
    id: string;
    title: string;
    icon: any;
    imgSrc: string;
    description: string;
  };
  isExpanded: boolean;
  cardWidth?: number;
};

const ServiceCard: React.FC<TServiceCardProps> = ({ data, isExpanded, cardWidth = 320 }) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      style={{ width: isExpanded ? cardWidth + 80 : cardWidth }}
      className={`relative p-4 2xl:p-6 rounded-4xl border-2 font-Manrope flex flex-col justify-between text-left overflow-hidden transition-all duration-700 ease-in-out
        ${
          isExpanded
            ? "h-120 xl:h-130 2xl:h-150 bg-linear-to-b from-[#0f172a]/90 via-[#0f172a] to-[#038CF8] shadow-2xl shadow-blue-500/40 border-white/20 z-20"
            : "h-110 2xl:h-130 bg-neutral-60 border-white/10 opacity-50 z-10"
        }`}
    >
      {/* Top Section */}
      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-40 md:h-48 2xl:h-56 rounded-2xl overflow-hidden relative border border-white/10"
            >
              <img
                src={data.imgSrc}
                alt={`${data.title} Preview`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Number */}
        <h3
          className={`font-medium transition-colors duration-300 text-primary-10 text-4xl md:text-5xl ${isExpanded ? "hidden" : "block"}`}
        >
          {data.id}.
        </h3>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4 mt-6">
        {/* Icon */}
        <div className="p-2 md:p-3 2xl:p-4 rounded-lg 2xl:rounded-xl border border-primary-25 bg-gradient-service-card-icon-bg flex items-center justify-center w-fit">
          <img src={data.icon} alt="" className="size-5 md:size-6 2xl:size-8" />
        </div>

        {/* Title */}
        <h2 className="text-white font-semibold leading-tight text-base md:text-lg 2xl:text-xl">
          {data.title}
        </h2>

        {/* Animated Description & Button */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-5"
            >
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                {data.description}
              </p>

              {/* Explore Button */}
              <div className="w-fit">
                <Button variant="secondary" label="Explore Design" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;