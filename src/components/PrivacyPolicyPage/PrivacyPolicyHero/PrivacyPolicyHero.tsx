// pages/PrivacyPolicy/PrivacyPolicyHero.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronRight, FiShield, FiLock, FiCheckCircle, FiFileText } from "react-icons/fi";
import Container from "../../../components/Reusable/Container/Container";

const PrivacyPolicyHero = () => {
  const lastUpdated = "February 10, 2026";

  return (
    <div className="relative bg-neutral-40 overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 border-b border-neutral-91">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Decorative Floating Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-20/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary-30 blur-[80px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-xs md:text-sm text-neutral-80 mb-6 font-medium bg-white px-4 py-2 rounded-full border border-neutral-91 shadow-sm"
            >
              <Link to="/" className="hover:text-primary-10 transition-colors">
                Home
              </Link>
              <FiChevronRight className="text-neutral-50" />
              <span className="text-primary-10">Privacy Policy</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-20 leading-tight tracking-tight"
            >
              Your Data. <br />
              <span className="text-primary-10 font-Playfair-Display italic font-medium">
                Secured & Respected.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-80 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed"
            >
              Transparency is at our core. Learn exactly how PRTech Solutions collects, uses, and safeguards your personal information when you use our services.
            </motion.p>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <div className="flex items-center gap-2 text-sm text-neutral-70 bg-white border border-neutral-91 px-4 py-2 rounded-lg shadow-sm">
                <FiFileText className="text-primary-10" />
                <span>Last Updated: <strong>{lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-70 bg-white border border-neutral-91 px-4 py-2 rounded-lg shadow-sm">
                <FiCheckCircle className="text-green-500" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative hidden lg:flex justify-center items-center"
          >
            {/* Center Shield */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-20"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary-30"
              />
              
              {/* Main Shield Icon */}
              <div className="relative z-10 w-32 h-32 bg-white rounded-3xl shadow-[0_8px_30px_rgb(6,160,237,0.15)] border border-neutral-91 flex items-center justify-center -rotate-6">
                <FiShield className="w-16 h-16 text-primary-10" />
              </div>

              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-md border border-neutral-91"
              >
                <FiLock className="w-6 h-6 text-primary-25" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-md border border-neutral-91"
              >
                <FiCheckCircle className="w-6 h-6 text-green-500" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyHero;