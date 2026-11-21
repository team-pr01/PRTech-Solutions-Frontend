import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../../Reusable/Button/Button";

// Properly typed props
interface DiscoveryCallSuccessStateProps {
  onClick: () => void;
}

const DiscoveryCallSuccessState = ({ onClick }: DiscoveryCallSuccessStateProps) => {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center h-full min-h-100 text-center px-6 py-12"
    >
      {/* Animated success icon with ring */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 0.15,
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="relative mb-8"
      >
        {/* Pulsing ring */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-green-400/30"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
          className="relative w-24 h-24 bg-linear-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-lg shadow-green-500/10 ring-4 ring-green-500/5"
        >
          <FiCheckCircle className="text-green-500 text-5xl drop-shadow-sm" />
        </motion.div>
      </motion.div>

      {/* Text content with stagger */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="text-3xl font-bold text-neutral-800 mb-3 tracking-tight"
      >
        Request Received!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="text-neutral-500 max-w-md leading-relaxed text-[15px]"
      >
        Thank you for sharing your project details. Our technical team
        will review your requirements and get back to you within{" "}
        <span className="font-semibold text-neutral-700">24 hours</span>.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-10"
      >
        <Button
          onClick={onClick} // Fixed syntax error here
          label="Submit Another Request"
        />
      </motion.div>

      {/* Optional secondary link */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        className="mt-4 text-sm text-neutral-500 hover:text-primary-10 transition-colors"
      >
        Return to home
      </motion.button>
    </motion.div>
  );
};

export default DiscoveryCallSuccessState;