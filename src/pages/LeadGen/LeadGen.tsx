import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import HowItWorks from "../../components/LeadGenPage/HowItWorks/HowItWorks";
import LeadGenHero from "../../components/LeadGenPage/LeadGenHero/LeadGenHero";
import MoreResources from "../../components/LeadGenPage/MoreResources/MoreResources";
import OurGuarantee from "../../components/LeadGenPage/OurGuarantee/OurGuarantee";
import ResourcePreview from "../../components/LeadGenPage/ResourcePreview/ResourcePreview";
import TheScalingChallenge from "../../components/LeadGenPage/TheScalingChallenge/TheScalingChallenge";
import CTA from "../../components/Reusable/CTA/CTA";

const LeadGen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LeadGenHero />
      <ResourcePreview />
      <TheScalingChallenge />
      <MoreResources />
      <HowItWorks />
      <OurGuarantee />
      <CTA
        backgroundImage={IMAGES.ctaBg7}
        title="Still Figuring Things Out?"
        description="Sometimes the fastest way forward is a quick conversation."
        primaryButton={{
          label: "Book a Strategy Call",
          onClick: () => navigate("/contact-us"),
          variant: "secondary",
        }}
      />
    </div>
  );
};

export default LeadGen;
