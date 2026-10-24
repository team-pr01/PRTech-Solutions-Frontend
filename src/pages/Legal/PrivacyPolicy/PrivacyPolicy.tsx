/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import Container from "../../../components/Reusable/Container/Container";
import LegalSidebar from "../../../components/Reusable/LegalSidebar/LegalSidebar";
import PrivacyPolicyContents from "../../../components/PrivacyPolicyPage/PrivacyPolicyContents/PrivacyPolicyContents";
import PrivacyPolicyHero from "../../../components/PrivacyPolicyPage/PrivacyPolicyHero/PrivacyPolicyHero";
import PrivacyPolicyFooterCTA from "../../../components/PrivacyPolicyPage/PrivacyPolicyFooterCTA/PrivacyPolicyFooterCTA";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use It" },
  { id: "disclosure", label: "4. Disclosure" },
  { id: "security", label: "5. Security" },
  { id: "your-rights", label: "6. Your Rights" },
  { id: "cookies", label: "7. Cookies" },
  { id: "updates", label: "8. Children's Privacy" },
  { id: "contact", label: "9. Contact Us" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<any | null>(null);

  useEffect(() => {
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 }
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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsScrolling(true);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 800);
    }
  };

  return (
    <div className="font-Manrope bg-neutral-40 min-h-screen">
      {/* Hero Section */}
      <PrivacyPolicyHero/>

      {/* Main Content Layout */}
      <Container>
        <div className="py-16 md:py-24 flex flex-col lg:flex-row gap-16 relative">
          {/* Reusable Sidebar */}
          <LegalSidebar 
            sections={sections} 
            activeSection={activeSection} 
            scrollToSection={scrollToSection} 
          />

          {/* Document Reader Area */}
            <PrivacyPolicyContents />
        </div>
      </Container>

    <PrivacyPolicyFooterCTA/>
     
    </div>
  );
};

export default PrivacyPolicy;