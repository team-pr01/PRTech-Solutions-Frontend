import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";
import { handleScrollToTestimonial } from "../../../helpers/handleScrollToTestimonialSection";
import { clients } from "../../../data/clients.logo";
import FeasibilityReviewFormModal from "../../Homepage/FeasibilityReviewFormModal/FeasibilityReviewFormModal";
import StartYourProjectModal from "../../Shared/StartYourProjectModal/StartYourProjectModal";

const OurWorkHero = () => {
  const [isFeasibilityReviewModalOpen, setIsFeasibilityReviewModalOpen] =
    useState<boolean>(false);
  const [isStartYourProjectModalOpen, setIsStartYourProjectModalOpen] =
    useState<boolean>(false);
  const [logoPage, setLogoPage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Adjust logos per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Mobile (< 768px) gets 2 logos, Tablet/Desktop gets 3
      if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(clients.length / itemsPerPage);

  // Auto-slide logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setLogoPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, totalPages]);

  // Get the current logos based on itemsPerPage
  const currentLogos = clients.slice(
    logoPage * itemsPerPage,
    (logoPage + 1) * itemsPerPage,
  );

  return (
    <div className="bg-gradient-our-work-hero-bg relative min-h-screen md:min-h-0 md:h-170 xl:h-240 font-Manrope pb-20 md:pb-0">
      <img
        src={IMAGES.ourWorkHeroBg}
        alt="hero-bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <Container>
        <div className="relative z-10 pt-32 md:pt-45 lg:pt-55 2xl:pt-61.5 text-center flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-4 md:px-5 2xl:px-0">
          {/* Badge */}
          <div className="bg-white rounded-3xl pl-1 pr-4 py-1 text-[10px] sm:text-xs md:text-sm font-semibold leading-6 flex items-center justify-center gap-2">
            <div className="bg-primary-10 rounded-3xl px-3 py-1 text-white">
              100%
            </div>
            <span className="text-neutral-65">Clients Satisfaction</span>
            <button
              onClick={handleScrollToTestimonial}
              className="text-primary-10 underline"
            >
              See Reviews ↓
            </button>
          </div>

          {/* Heading */}
          <h1 className="text-white text-center heading max-w-230 mx-auto mt-4 md:mt-6 leading-tight">
            Our{" "}
            <span className="font-Playfair-Display italic font-medium">
              Best Works
            </span>{" "}
            Isn’t Just Built, It’s Designed to Perform
          </h1>

          {/* Description */}
          <p className="text-white description max-w-205 mx-auto mt-4 2xl:mt-6 text-sm md:text-base">
            From custom platforms to AI-powered solutions, everything we create
            is built to solve real business problems and help your business run
            smarter, faster, and more efficiently.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-8 w-full">
            <Button
              onClick={() => setIsFeasibilityReviewModalOpen(true)}
              label="Get Your Strategy Plan"
              className="w-full sm:w-auto"
            />
            <Button
              onClick={() => setIsStartYourProjectModalOpen(true)}
              variant="secondary"
              label="Discuss Your Project"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Our Clients Divider */}
          <div className="flex items-center justify-center gap-2 mt-16 md:mt-25 w-full">
            <div className="bg-gradient-our-work-hero-line1 w-8 sm:w-12 md:w-20 h-px rotate-180"></div>
            <div className="px-4 py-2 border border-neutral-99 bg-primary-30 shadow-our-work-client-box rounded-[100px] text-primary-10 text-xs md:text-sm font-medium whitespace-nowrap">
              Our Clients
            </div>
            <div className="bg-gradient-our-work-hero-line1 w-8 sm:w-12 md:w-20 h-px"></div>
          </div>

          {/* Trusted Brands Section */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-8 mt-8 md:mt-14 w-full">
            {/* Trust Text & Button */}
            <div className="flex flex-col items-center xl:items-start gap-4">
              <div className="flex items-center justify-center gap-2">
                <div className="size-4 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
                <p className="text-white font-medium uppercase text-xs md:text-sm text-center">
                  Trusted by Leading Brands
                </p>
              </div>
              <Link to="/contact-us">
                <Button variant="tertiary" label="Add your company" />
              </Link>
            </div>

            {/* Animated Logo Grid */}
            <div
              // Changed grid columns based on screen size, and restricted max-width for mobile
              className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full max-w-md md:max-w-2xl mx-auto xl:mx-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="popLayout">
                {currentLogos.map((client, index) => (
                  <motion.div
                    key={`${logoPage}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-2 md:px-6 lg:px-8 py-2 md:py-3 border border-neutral-99 bg-primary-30 shadow-our-work-client-box rounded-[100px] flex items-center justify-center w-full"
                  >
                    <img
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="w-full max-w-[100px] md:max-w-40 lg:max-w-56 h-6 md:h-8 lg:h-10 object-contain"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>

      <FeasibilityReviewFormModal
        isModalOpen={isFeasibilityReviewModalOpen}
        setIsModalOpen={setIsFeasibilityReviewModalOpen}
      />

      <StartYourProjectModal
        isModalOpen={isStartYourProjectModalOpen}
        setIsModalOpen={setIsStartYourProjectModalOpen}
      />
    </div>
  );
};

export default OurWorkHero;
