import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Custom Product & Application Development",
      icon: ICONS.productDevelopment,
      imgSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      description:
        "We design and build web and mobile applications tailored to your business — focusing on scalability, performance, and real-world usability.",
      cta: "Explore Development",
      path: "/services/development",
    },
    {
      id: "02",
      title: "UI/UX & Conversion-Focused Design",
      icon: ICONS.uiUxDesign,
      imgSrc:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
      description:
        "We create user experiences that are intuitive, engaging, and built to guide users toward action — not just look visually appealing.",
      cta: "Explore Design",
      path: "/services/design",
    },
    {
      id: "03",
      title: "Cloud, DevOps & System Infrastructure",
      icon: ICONS.deployment,
      imgSrc:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      description:
        "We set up and optimize the technical foundation of your product to ensure it runs fast, securely, and can scale without issues.",
      cta: "Explore Infrastructure",
      path: "/services/infrastructure",
    },
    {
      id: "04",
      title: "Ongoing Maintenance & Performance Optimization",
      icon: ICONS.maintenance,
      imgSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      description:
        "We continuously monitor, improve, and support your system to ensure it performs reliably as your business grows.",
      cta: "Explore Support",
      path: "/services/support",
    },
    {
      id: "05",
      title: "Business Automation & AI Systems",
      icon: ICONS.aiAutomation,
      imgSrc:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
      description:
        "We build systems that automate operations, manage workflows, and integrate AI to reduce manual effort and improve efficiency.",
      cta: "Explore Automation",
      path: "/services/automation",
    },
    {
      id: "06",
      title: "Strategy & Technical Consultation",
      icon: ICONS.technicalConsultation,
      imgSrc:
        "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=80",
      description:
        "Before building anything, we analyze your business, identify gaps, and recommend the right technical approach to achieve your goals.",
      cta: "Get Consultation",
      path: "/services/consultation",
    },
  ];

  const duplicatedServices = [
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  const initialVirtualIndex = services.length * 2;
  const [virtualIndex, setVirtualIndex] = useState(initialVirtualIndex);

  useEffect(() => {
    // Slower, reader-friendly interval (4.5 seconds per card spotlight)
    const interval = setInterval(() => {
      setVirtualIndex((prev) => prev + 1);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const baseStepWidth = 392;
  const targetXOffset = -(virtualIndex * baseStepWidth);

  return (
    <div className="relative h-270 font-medium overflow-hidden">
      <img
        src={IMAGES.serviceBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0"
      />

      {/* Content */}
      <div className="absolute top-18 left-1/2 -translate-x-1/2 text-center flex flex-col items-center gap-6 w-full z-10">
        <Container>
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-white flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-white"></div>
            </div>
            <p className="text-white font-medium uppercase">Services</p>
          </div>

          <h2 className="text-white text-center text-[60px] font-semibold leading-15 max-w-262 mx-auto mt-2.5">
            Services{" "}
            <span className="font-Playfair-Display italic font-medium">
              Built Around
            </span>{" "}
            <span className="text-primary-10">Your Business</span>
          </h2>

          <p className="text-white font-Manrope leading-8 max-w-205 mx-auto font-normal mt-6">
            We don’t offer fixed service bundles. <br />
            Every solution is designed based on your business model, users, and
            growth goals.
          </p>
        </Container>

        {/* Slider Container Row */}
        <div className="mt-17 w-full overflow-hidden relative py-10 px-4 pl-50 flex justify-start">
          <motion.div
            animate={{ x: targetXOffset }}
            transition={{ type: "spring", stiffness: 30, damping: 15 }}
            className="flex gap-6 items-center w-max pl-25"
          >
            {duplicatedServices.map((service, idx) => {
              const isCardExpanded = idx === virtualIndex;

              return (
                <ServiceCard
                  key={`${service.id}-${idx}`}
                  data={service}
                  isExpanded={isCardExpanded}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
