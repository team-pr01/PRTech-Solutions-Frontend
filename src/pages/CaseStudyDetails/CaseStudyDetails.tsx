import CaseStudyDetailsHero from "../../components/CaseStudyDetailsPage/CaseStudyDetailsHero/CaseStudyDetailsHero";
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
    </div>
  );
};

export default CaseStudyDetails;
