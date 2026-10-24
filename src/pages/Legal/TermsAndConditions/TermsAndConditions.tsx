/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import Container from "../../../components/Reusable/Container/Container";
import TermsAndConditionHero from "../../../components/TermsAndConditionPage/TermsAndConditionHero/TermsAndConditionHero";
import {
  FiMail,
  FiShield,
  FiFileText,
  FiUsers,
  FiAlertCircle,
  FiLock,
  FiGlobe,
} from "react-icons/fi";
import TermsAndConditionContents from "../../../components/TermsAndConditionPage/TermsAndConditionContents/TermsAndConditionContents";
import LegalSidebar from "../../../components/Reusable/LegalSidebar/LegalSidebar";

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<any | null>(null);

  const sections = [
    { id: "introduction", label: "Introduction", icon: FiFileText },
    { id: "definitions", label: "Definitions", icon: FiUsers },
    { id: "acceptance", label: "Acceptance of Terms", icon: FiShield },
    { id: "services", label: "Our Services", icon: FiGlobe },
    { id: "user-obligations", label: "User Obligations", icon: FiUsers },
    {
      id: "intellectual-property",
      label: "Intellectual Property",
      icon: FiLock,
    },
    { id: "payment", label: "Payment Terms", icon: FiFileText },
    { id: "confidentiality", label: "Confidentiality", icon: FiLock },
    { id: "limitation", label: "Limitation of Liability", icon: FiAlertCircle },
    { id: "termination", label: "Termination", icon: FiAlertCircle },
    { id: "governing-law", label: "Governing Law", icon: FiGlobe },
    { id: "changes", label: "Changes to Terms", icon: FiFileText },
    { id: "contact", label: "Contact Us", icon: FiMail },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Set immediately for UI responsiveness
    setIsScrolling(true); // Pause the observer

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // Clear any existing timeout
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      // Re-enable the observer after the smooth scroll finishes (approx 800ms)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  };

  useEffect(() => {
    // 3. If user clicked a tab, don't let the observer override it during the scroll
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Adjusts the trigger area to the upper-middle of the screen
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isScrolling]);

  return (
    <div className="font-Manrope bg-neutral-40">
      {/* Hero Section */}
      <TermsAndConditionHero />

      {/* Main Content */}
      <Container>
        <div className="sectionPadding">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar Navigation */}
            <LegalSidebar
              sections={sections}
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            {/* Content */}
            <TermsAndConditionContents />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
