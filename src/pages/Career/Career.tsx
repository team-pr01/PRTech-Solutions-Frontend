/* eslint-disable react-hooks/immutability */
import React, { useEffect, useState } from "react";
import CareerHero from "../../components/CareerPage/CareerHero/CareerHero";
import OpenPositions from "../../components/CareerPage/OpenPositions/OpenPositions";
import HiringProcess from "../../components/CareerPage/HiringProcess/HiringProcess";
import CareerFaq from "../../components/CareerPage/CareerFaq/CareerFaq";
import CTA from "../../components/Reusable/CTA/CTA";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";

type Department = "All" | "Engineering" | "Design" | "Product" | "Growth & Ops";

type WorkMode = "All" | "Remote" | "Hybrid" | "On-site";

interface JobOpening {
  id: string;
  title: string;
  department: Exclude<Department, "All">;
  location: string;
  workMode: Exclude<WorkMode, "All">;
  employmentType: "Full-time" | "Contract";
  experience: string;
  compensation: string;
  postedAt: string;
  featured?: boolean;
  summary: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const Career: React.FC = () => {
  const navigate = useNavigate();
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [isGeneralApplyOpen, setIsGeneralApplyOpen] = useState(false);

  // Lock background scroll & handle Escape key when modal is open
  const isModalOpen = Boolean(activeJob) || isGeneralApplyOpen;

  useEffect(() => {
    if (!isModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAllModals();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  const closeAllModals = () => {
    setActiveJob(null);
    setIsGeneralApplyOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-40 text-neutral-65 font-Manrope selection:bg-primary-10 selection:text-white">
      {/* ==================== 1. HERO SECTION ==================== */}
      <CareerHero />
      <OpenPositions />
      <HiringProcess />
      <CareerFaq />
       <CTA
        title="Exceptional Builders Always Have a Seat Here"
        description="If you're passionate about clean architecture, thoughtful design, or operational automation, tell us what you've built and where you want to grow."
        primaryButton={{
          label: "Send Open Application",
          onClick: () => navigate("/contact-us"),
          variant: "primary",
        }}
        backgroundImage={IMAGES.ctaBg6}
      />
    </div>
  );
};

export default Career;
