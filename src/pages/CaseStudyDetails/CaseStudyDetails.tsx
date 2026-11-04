import CaseStudyDetailsHero from "../../components/CaseStudyDetailsPage/CaseStudyDetailsHero/CaseStudyDetailsHero";
import KeySolutions from "../../components/CaseStudyDetailsPage/KeySolutions/KeySolutions";
import Objectives from "../../components/CaseStudyDetailsPage/Objectives/Objectives";
import OurApproach from "../../components/CaseStudyDetailsPage/OurApproach/OurApproach";
import TheProblem from "../../components/CaseStudyDetailsPage/TheProblem/TheProblem";

const CaseStudyDetails = () => {
  return (
    <div>
      <CaseStudyDetailsHero />
      <TheProblem />
      <Objectives />
      <OurApproach />
      <KeySolutions />
    </div>
  );
};

export default CaseStudyDetails;
