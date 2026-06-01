import { motion } from "framer-motion";
import {
  FiClock,
  FiBell,
  FiCalendar,
  FiSmile,
  FiStar,
  FiZap,
} from "react-icons/fi";
import Container from "../../Reusable/Container/Container";

const ComingSoon = () => {
  const features = [
    { icon: FiZap, text: "Lightning Fast Performance" },
    { icon: FiStar, text: "AI-Powered Solutions" },
    { icon: FiSmile, text: "User-Centric Design" },
  ];

  return (
    <div className="relative font-Manrope overflow-hidden bg-gradient-to-b from-neutral-40 to-primary-40 mt-">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 opacity-10"
        >
          <FiClock size={200} className="text-primary-10" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 opacity-5"
        >
          <FiBell size={150} className="text-primary-10" />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
        >
          <FiCalendar size={300} className="text-primary-10" />
        </motion.div>
      </div>

      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen py-20 relative z-10">
          {/* Decorative Chips */}
          <div className="hidden md:flex absolute left-10 top-1/3">
            <div className="bg-primary-10 rounded-xl shadow-chip px-5 py-2 text-white font-Manrope font-medium text-sm rotate-12">
              Coming Soon
            </div>
          </div>
          <div className="hidden md:flex absolute right-10 bottom-1/3">
            <div className="bg-primary-10 rounded-xl shadow-chip px-5 py-2 text-white font-Manrope font-medium text-sm -rotate-15">
              Get Ready
            </div>
          </div>

          {/* Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10 animate-pulse"></div>
            </div>
            <p className="text-neutral-70 font-medium uppercase tracking-wider">
              Coming Soon
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="heading text-neutral-70 text-center max-w-262 mx-auto">
              Something{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Amazing
              </span>{" "}
              is Coming Soon
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="description text-neutral-80 max-w-205 mx-auto mt-6 text-center"
          >
            We're working hard to bring you something extraordinary. Get ready
            for a revolutionary experience that will transform the way you do
            business.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mt-16"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full border border-neutral-91 shadow-sm"
              >
                <feature.icon className="text-primary-10 text-xl" />
                <span className="text-neutral-70 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Animated Bottom Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-10 via-primary-25 to-primary-10"
            style={{ transformOrigin: "left" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ComingSoon;
