import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import { useGetAllActiveJobsQuery } from "../../../redux/Features/Job/jobApi";
import type { TJob } from "../../../types/job.type";
import JobCard from "../../CareerPage/OpenPositions/JobCard";
import JobCardSkeleton from "../../Skeletons/JobCardSkeleton/JobCardSkeleton";

const OtherOpenPositions = ({ jobId }: { jobId: string }) => {
  const { data, isLoading, isFetching } = useGetAllActiveJobsQuery({});
  const jobs = data?.data?.jobs?.filter((job: TJob) => job?.jobId != jobId);
  return (
    <section className="sectionPadding border-t border-neutral-10 bg-neutral-71">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-16 subHeading">Explore More</p>
            </div>

            <h2 className="heading text-neutral-65 mt-4">
              Other Open{" "}
              <span className="font-Playfair-Display italic font-medium text-primary-10">
                Positions
              </span>
            </h2>
          </div>

          <Link
            to="/career"
            className="self-start sm:self-auto text-sm font-semibold text-primary-10 hover:underline"
          >
            View in Career →
          </Link>
        </div>

        <div className="mt-8">
          {isLoading || isFetching ? (
            <div className="mt-5 grid grid-cols-1 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <JobCardSkeleton key={index} />
              ))}
            </div>
          ) : jobs?.length > 0 ? (
            <div className="mt-5 grid grid-cols-1 gap-5">
              {jobs.map((job: TJob) => (
                <JobCard key={job?.jobId} job={job} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="mt-8 rounded-2xl border border-dashed border-neutral-10 bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-40 text-primary-10">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-Manrope text-xl font-semibold text-neutral-65">
                No more job openings are available at this moment
              </h3>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default OtherOpenPositions;
