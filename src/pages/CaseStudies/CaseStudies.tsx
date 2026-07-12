import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import AllCaseStudies from "../../components/CaseStudiesPage/AllCaseStudies/AllCaseStudies";
import CaseStudyHero from "../../components/CaseStudiesPage/CaseStudyHero/CaseStudyHero";
import CTA from "../../components/Reusable/CTA/CTA";

const CaseStudies = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CaseStudyHero />
      <AllCaseStudies />
      <CTA
        backgroundImage={IMAGES.ctaBg6}
        title="Thinking About Building Something Custom?"
        description="If you’re dealing with manual processes, unclear systems, or scaling challenges we can help you structure and build it the right way."
        primaryButton={{
          label: "Discuss Your Project",
          onClick: () => navigate("/contact-us"),
          variant: "secondary",
        }}
        secondaryButton={{
          label: "Get Your Strategy Plan",
          onClick: () => navigate("/contact-us"),
          variant: "tertiary",
        }}
      />
    </div>
  );
};

export default CaseStudies;
