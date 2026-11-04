import CaseStudyDetailsHero from "../../components/CaseStudyDetailsPage/CaseStudyDetailsHero/CaseStudyDetailsHero";
import Objectives from "../../components/CaseStudyDetailsPage/Objectives/Objectives";
import TheProblem from "../../components/CaseStudyDetailsPage/TheProblem/TheProblem";

const CaseStudyDetails = () => {
  return (
    <div>
      <CaseStudyDetailsHero />
      <TheProblem />
      <Objectives />
    </div>
  );
};

export default CaseStudyDetails;
