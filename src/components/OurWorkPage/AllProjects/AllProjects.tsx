import LatestProjectsHeader from "../../Homepage/LatestProjects/LatestProjectsHeader";
import Container from "../../Reusable/Container/Container";
import ProjectCard from "./ProjectCard";
import Button from "../../Reusable/Button/Button";
import { projectsData } from "../../Homepage/LatestProjects/LatestProjects";

const AllProjects = () => {
  // const [activeIndustryTab, setActiveIndustryTab] = useState<string>("All");
  return (
    <div className="bg-gradient-latest-project-bg sectionPadding font-Manrope">
      <Container>
        {/* Header */}
        <LatestProjectsHeader />

        <div className="mt-15 flex flex-col items-center">
          {/* Industries tab */}
          {/* <div className="flex items-center justify-center gap-4 px-4 py-2.5 rounded-4xl 2xl:rounded-[73px] shadow-industry-tab bg-white border border-primary-10 w-full md:w-fit overflow-x-auto text-nowrap">
            {industryNames.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustryTab(industry)}
                className={`py-2 px-5 text-lg font-medium text-left rounded-[70px] w-fit transition duration-300 ${
                  activeIndustryTab === industry
                    ? "bg-primary-10 text-white"
                    : "text-neutral-85 hover:bg-primary-10/10 hover:text-primary-10"
                }`}
              >
                {industry}
              </button>
            ))}
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7.5 gap-y-10 mt-17">
            {projectsData?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-6 xl:mt-12 2xl:mt-17">
            <Button label="View All Projects" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProjects;
