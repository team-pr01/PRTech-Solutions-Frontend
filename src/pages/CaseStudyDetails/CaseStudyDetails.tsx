import CaseStudyDetailsHero from "../../components/CaseStudyDetailsPage/CaseStudyDetailsHero/CaseStudyDetailsHero";
import ChallengesAndTradeoffs from "../../components/CaseStudyDetailsPage/ChallengesAndTradeoffs/ChallengesAndTradeoffs";
import KeySolutions from "../../components/CaseStudyDetailsPage/KeySolutions/KeySolutions";
import Objectives from "../../components/CaseStudyDetailsPage/Objectives/Objectives";
import OurApproach from "../../components/CaseStudyDetailsPage/OurApproach/OurApproach";
import Results from "../../components/CaseStudyDetailsPage/Results/Results";
import TheProblem from "../../components/CaseStudyDetailsPage/TheProblem/TheProblem";

const CaseStudyDetails = () => {
  return (
    <div>
      <CaseStudyDetailsHero />
      <TheProblem />
      <Objectives />
      <OurApproach />
      <KeySolutions />
      <Results />
      <ChallengesAndTradeoffs />
    </div>
  );
};

export default CaseStudyDetails;
