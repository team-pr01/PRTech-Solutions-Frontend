/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "../../assets";
import Container from "../../components/Reusable/Container/Container";
import Button from "../../components/Reusable/Button/Button";

const NotFound = () => {
  // Animation variants
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Continuous floating animation for the 404
  const floatVariants: any = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Continuous glowing pulse for the background orb
  const pulseVariants: any = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-screen font-Manrope overflow-hidden">
      {/* Background Image */}
      <img
        src={IMAGES.objectiveBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Continuous Animated Background Orb */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary-10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Content */}
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-50 lg:top-60 2xl:top-70 left-1/2 -translate-x-1/2 text-center flex flex-col items-center w-full px-4 z-10"
        >
          {/* Decorative Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
          >
            <div className="size-2 rounded-full bg-[#FF5F5F] animate-pulse" />
            <p className="text-white subHeading tracking-wider text-xs">
              Error 404
            </p>
          </motion.div>

          {/* Giant 404 Text with Continuous Float */}
          <motion.h1
            variants={floatVariants}
            animate="animate"
            className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 text-[120px] md:text-[180px] font-bold leading-none mt-4 select-none drop-shadow-2xl"
          >
            404
          </motion.h1>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="heading text-white text-center max-w-262 mx-auto -mt-6 md:-mt-10"
          >
            Oops! Page{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              Not Found
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="description text-neutral-40/80 max-w-180 2xl:max-w-205 mx-auto mt-4 text-center"
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let's get you back on track.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 2xl:mt-10"
          >
            <Link to="/">
              <Button label="Back to Home" />
            </Link>
            <Link to="/contact-us">
              <Button
                variant="tertiary"
                label="Contact Support"
                className="w-full md:w-fit"
              />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
