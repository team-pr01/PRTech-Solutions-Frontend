import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "../../../assets";
import { INDUSTRIES } from "../../../data/industries.data";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const industryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Find which industry is currently in view
      let currentIndex = 0;
      industryRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = containerRef.current?.getBoundingClientRect();
          if (containerRect) {
            const relativeTop = rect.top - containerRect.top;
            if (relativeTop <= 200 && relativeTop >= -100) {
              currentIndex = idx;
            }
          }
        }
      });
      
      setActiveIndustry(currentIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="sectionPadding font-Manrope bg-white">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">
                INDUSTRIES
              </p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5">
              Who{" "}
              <span className="font-Playfair-Display italic font-medium">
                We
              </span>{" "}
              <span className="text-primary-10">Work With</span>{" "}
            </h2>

            <p className="description text-neutral-80 max-w-179 mx-auto my-6">
              We partner with businesses that need more than just a website — they
              need systems that drive growth, automate operations, and scale
              efficiently.
            </p>
          </div>

          <div className="mt-18 flex flex-col xl:flex-row justify-between gap-12 relative">
            {/* Left Side - Dynamic Image with Smooth Transition */}
            <div className="w-full xl:w-[50%] block xl:sticky top-40 self-start h-100 rounded-2xl overflow-hidden">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full rounded-2xl overflow-hidden"
              >
                <img
                  src={INDUSTRIES[activeIndustry]?.image || IMAGES.dummyIndustry}
                  alt={INDUSTRIES[activeIndustry]?.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
              
              {/* Optional: Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Right Side - Scrollable Industries */}
            <div 
              ref={containerRef}
              className="w-full xl:w-[50%] h-150 overflow-y-auto pr-4 scrollbar-none pt-1"
            >
              <div className="flex flex-col gap-13">
                {INDUSTRIES?.map((industry, idx) => (
                  <div 
                    key={idx} 
                    ref={(el) => {
                      industryRefs.current[idx] = el;
                    }}
                    className={`flex gap-6 group transition-all duration-300 ${
                      activeIndustry === idx ? "opacity-100" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div className={`bg-gradient-industry-line w-0.5 transition-all duration-300 ${
                      activeIndustry === idx ? "bg-primary-10 h-auto" : "bg-gray-200 group-hover:bg-primary-10"
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className={`bg-primary-10 border border-neutral-90 shadow-industry-icon p-3 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          activeIndustry === idx ? "scale-110 shadow-lg" : "group-hover:scale-105"
                        }`}>
                          <img
                            src={industry?.icon}
                            alt=""
                            className="size-7"
                          />
                        </div>
                        <h3 className={`text-2xl font-medium leading-7 transition-all duration-300 ${
                          activeIndustry === idx ? "text-primary-10" : "text-neutral-65 group-hover:text-primary-10"
                        }`}>
                          {industry?.title}
                        </h3>
                      </div>

                      <p className="text-neutral-80 mt-4 mb-4 leading-relaxed">
                        {industry?.description}
                      </p>

                      {/* Pointers */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {industry?.pointers?.map((pointer, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2">
                            <FaCheckCircle className={`text-sm shrink-0 transition-all duration-300 ${
                              activeIndustry === idx ? "text-primary-10" : "text-primary-10/70"
                            }`} />
                            <span className={`text-sm transition-all duration-300 ${
                              activeIndustry === idx ? "text-neutral-70 font-medium" : "text-neutral-70/80"
                            }`}>
                              {pointer}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link to={"/contact-us"}>
                        <Button variant="outlinePrimary" label="Learn More" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Industries;