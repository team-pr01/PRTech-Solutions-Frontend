import Container from "../../Reusable/Container/Container";
import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi";

const TermsAndConditionHero = () => {
  const lastUpdated = "January 15, 2026";
  return (
    <div className="bg-gradient-about-us-strip relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-25 rounded-full blur-[150px]" />
      </div>

      <Container>
        <div className="relative z-10 pt-40 pb-16 text-center">
          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-center heading max-w-230 mx-auto"
          >
            Terms &{" "}
            <span className="font-Playfair-Display italic font-medium">
              Conditions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-93 max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed"
          >
            Please read these terms and conditions carefully before using our
            services. By accessing or using PRTech Solutions, you agree to be
            bound by these terms.
          </motion.p>

          {/* Last Updated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <FiFileText className="text-primary-10" />
              <span className="text-neutral-93 text-sm">
                Last Updated:{" "}
                <span className="text-white font-medium">{lastUpdated}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditionHero;
