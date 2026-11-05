import { useNavigate } from "react-router-dom";
import BeforeVSAfter from "../../components/CaseStudyDetailsPage/BeforeVSAfter/BeforeVSAfter";
import CaseStudyDetailsHero from "../../components/CaseStudyDetailsPage/CaseStudyDetailsHero/CaseStudyDetailsHero";
import ChallengesAndTradeoffs from "../../components/CaseStudyDetailsPage/ChallengesAndTradeoffs/ChallengesAndTradeoffs";
import ClientsTestimonial from "../../components/CaseStudyDetailsPage/ClientsTestimonial/ClientsTestimonial";
import KeySolutions from "../../components/CaseStudyDetailsPage/KeySolutions/KeySolutions";
import MoreCaseStudies from "../../components/CaseStudyDetailsPage/MoreCaseStudies/MoreCaseStudies";
import Objectives from "../../components/CaseStudyDetailsPage/Objectives/Objectives";
import OurApproach from "../../components/CaseStudyDetailsPage/OurApproach/OurApproach";
import Results from "../../components/CaseStudyDetailsPage/Results/Results";
import TheProblem from "../../components/CaseStudyDetailsPage/TheProblem/TheProblem";
import CTA from "../../components/Reusable/CTA/CTA";
import { IMAGES } from "../../assets";

const CaseStudyDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CaseStudyDetailsHero />
      <TheProblem />
      <Objectives />
      <OurApproach />
      <KeySolutions />
      <Results />
      <BeforeVSAfter />
      <ChallengesAndTradeoffs />
      <ClientsTestimonial />
      <MoreCaseStudies />
      <CTA
        title="Want to Build Something Similar?"
        description="If your business relies on manual processes or unstructured systems, there’s a better way to scale."
        primaryButton={{
          label: "Get Your Strategy Plan",
          onClick: () => navigate("/contact-us"),
          variant: "primary",
        }}
        secondaryButton={{
          label: "Talk to Us About Your Project",
          onClick: () => navigate("/contact-us"),
          variant: "tertiary",
        }}
        backgroundImage={IMAGES.ctaBg8}
        contentAlignment="left"
      />
    </div>
  );
};

export default CaseStudyDetails;
