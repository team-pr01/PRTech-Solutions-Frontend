/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TJob } from "../../../types/job.type";
import Container from "../../Reusable/Container/Container";
import JobDescriptionSkeleton from "../../Skeletons/JobDetailsPageSkeletons/JobDescriptionSkeleton/JobDescriptionSkeleton";
import ApplicationForm from "./ApplicationForm";

const JobDescription = ({
  job,
  isLoading,
}: {
  job: Partial<TJob>;
  isLoading: boolean;
}) => {
  return isLoading ? (
    <JobDescriptionSkeleton />
  ) : (
    <main className="sectionPadding font-Manrope">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* LEFT COLUMN: ROLE DETAILS */}
          <div className="lg:col-span-7 space-y-12">
            {/* About the Role */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                What Are We Looking For
              </h2>
              <div className="mt-2 space-y-4 text-sm md:text-base leading-7 text-neutral-73">
                {job?.keyRequirements?.map((requirement, index) => (
                  <p key={index}>{requirement}</p>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job?.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-neutral-10 bg-white px-3.5 py-1.5 text-xs md:text-sm font-medium text-neutral-70 shadow-industry-tab"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <div className="h-px bg-neutral-10" />

            {/* Responsibilities */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                What You&apos;ll Do
              </h2>
              <ul className="mt-3 space-y-4">
                {job?.responsibilities?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Qualifications */}
            {job?.qualifications && (
              <section>
                <h2 className="mt-2 text-lg font-bold text-neutral-65">
                  Qualifications
                </h2>
                <ul className="mt-3 space-y-4">
                  {job?.qualifications?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary-10" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Nice to Have */}
            {job?.niceToHave && (
              <section className="rounded-2xl border border-neutral-10 bg-neutral-78 p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-65">
                  Nice to Have{" "}
                  <span className="text-sm font-normal text-neutral-80">
                    (Not Mandatory)
                  </span>
                </h3>
                <ul className="mt-4 space-y-3">
                  {job?.niceToHave?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm md:text-base leading-6 text-neutral-73"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-25" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Your First 90 Days */}
            <section>
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-primary-10" />
                </div>
                <span className="subHeading text-neutral-70">
                  Growth Roadmap
                </span>
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-neutral-65">
                Your First{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-25">
                  90 Days
                </span>
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {job?.growthRoadmap?.phases?.map(
                  (phase: any, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-neutral-10 bg-gradient-challenge-card p-5 transition-all duration-300 hover:border-primary-35 hover:shadow-accordion-card"
                    >
                      <span className="inline-block rounded-full bg-primary-40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-25">
                        {phase?.timeframe}
                      </span>
                      <h3 className="mt-3.5 text-base font-bold text-neutral-65">
                        {phase?.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm leading-6 text-neutral-73">
                        {phase?.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Benefits Snapshot */}
            <section>
              <h2 className="mt-2 text-lg font-bold text-neutral-65">
                Benefits &amp; Perks
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {job?.perks?.map((perk, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 text-sm md:text-base leading-7 text-neutral-73"
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-40 text-primary-10">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>{perk}</span>
                  </li>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: STICKY SNAPSHOT + APPLICATION FORM */}
          <aside id="apply-form" className="lg:col-span-5 lg:sticky lg:top-10">
            {/* Application Form Card */}
            <ApplicationForm jobId={job?.jobId as string} />
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default JobDescription;
