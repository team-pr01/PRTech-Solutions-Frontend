import LeadGenHero from "../../components/LeadGenPage/LeadGenHero/LeadGenHero";
import MoreResources from "../../components/LeadGenPage/MoreResources/MoreResources";
import ResourcePreview from "../../components/LeadGenPage/ResourcePreview/ResourcePreview";
import TheScalingChallenge from "../../components/LeadGenPage/TheScalingChallenge/TheScalingChallenge";

const LeadGen = () => {
  return (
    <div>
      <LeadGenHero />
      <ResourcePreview />
      <TheScalingChallenge />
      <MoreResources />
    </div>
  );
};

export default LeadGen;
