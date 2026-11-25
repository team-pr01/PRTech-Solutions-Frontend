import JobDetailsHero from "../../components/JobDetailsPage/JobDetailsHero/JobDetailsHero";
import JobDescription from "../../components/JobDetailsPage/JobDescription/JobDescription";
import OtherOpenPositions from "../../components/JobDetailsPage/OtherOpenPositions/OtherOpenPositions";
import JobDetailsCta from "../../components/JobDetailsPage/JobDetailsCta/JobDetailsCta";
import { useParams } from "react-router-dom";
import { useGetSingleJobByJobIdQuery } from "../../redux/Features/Job/jobApi";
import { LoaderIcon } from "react-hot-toast";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleJobByJobIdQuery(id);
  const job = data?.data || {};

  const heroData = {
    jobId : id,
    department : job?.department,
    workMode : job?.workMode,
    title : job?.title,
    overview : job?.overview,
    skills : job?.skills,
    createdAt : job?.createdAt,
    salary : job?.salary,
    location : job?.location,
    experienceRequired : job?.experienceRequired,
    employmentType : job?.employmentType,
    team : job?.team,
    reportTo : job?.reportTo,
  };

  const jobDetails = {
    description : job?.description,
    keyRequirements : job?.keyRequirements,
    responsibilities : job?.responsibilities,
    qualifications : job?.qualifications,
    niceToHave : job?.niceToHave,
    perks : job?.perks,
    growthRoadmap : job?.growthRoadmap,
    skills : job?.skills,
  }

  if(isLoading) return <LoaderIcon/>
  return (
    <div className="min-h-screen bg-neutral-40 font-Manrope text-neutral-65 selection:bg-primary-10 selection:text-white">
      <JobDetailsHero job={heroData} />
      <JobDescription job={jobDetails} />
      <OtherOpenPositions jobId={id as string} />
      <JobDetailsCta />
    </div>
  );
};

export default JobDetails;
