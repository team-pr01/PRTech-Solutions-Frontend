import Container from "../../Reusable/Container/Container";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";

const AllCaseStudies = () => {
  return (
    <div className="bg-gradient-case-studies font-Manrope sectionPadding">
      <Container>
        <div className="flex flex-col gap-12">
          <CaseStudyCard />
          <CaseStudyCard />
          <CaseStudyCard />
        </div>
      </Container>
    </div>
  );
};

export default AllCaseStudies;
