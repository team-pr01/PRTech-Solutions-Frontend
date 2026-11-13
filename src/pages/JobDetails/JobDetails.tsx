import JobDetailsHero from "../../components/JobDetailsPage/JobDetailsHero/JobDetailsHero";
import JobDescription from "../../components/JobDetailsPage/JobDescription/JobDescription";
import OtherOpenPositions from "../../components/JobDetailsPage/OtherOpenPositions/OtherOpenPositions";
import JobDetailsCta from "../../components/JobDetailsPage/JobDetailsCta/JobDetailsCta";

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-neutral-40 font-Manrope text-neutral-65 selection:bg-primary-10 selection:text-white">
      <JobDetailsHero />
      <JobDescription />
      <OtherOpenPositions />
      <JobDetailsCta />
    </div>
  );
};

export default JobDetails;
