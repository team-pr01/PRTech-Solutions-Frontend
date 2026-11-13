import React, { useState } from "react";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";

export interface JobHeroData {
  id: string;
  titlePrefix: string;
  titleHighlight: string;
  department: string;
  team: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Contract";
  experience: string;
  compensation: string;
  postedAt: string;
  reportsTo: string;
  summary: string;
  tags: string[];
}

interface JobDetailsHeroProps {
  job?: JobHeroData;
  onBack?: () => void;
}

const DEFAULT_HERO_JOB: JobHeroData = {
  id: "senior-fullstack-engineer",
  titlePrefix: "Senior Full-Stack",
  titleHighlight: "Systems Engineer",
  department: "Engineering",
  team: "Core Product & Client Systems",
  location: "Remote (Global)",
  workMode: "Remote",
  employmentType: "Full-time",
  experience: "4+ Years",
  compensation: "$120k – $155k + Equity",
  postedAt: "2 days ago",
  reportsTo: "VP of Engineering",
  summary:
    "Architect and ship custom web platforms, internal automation tools, and high-throughput APIs tailored around real business workflows—never bloated templates.",
  tags: [
    "TypeScript",
    "React 19",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Tailwind CSS",
  ],
};

const JobDetailsHero: React.FC<JobDetailsHeroProps> = ({
  job = DEFAULT_HERO_JOB,
  onBack,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Ignore clipboard errors in restricted environments
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleBack = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  return (
    <header className="relative overflow-hidden bg-gradient-start-project pt-20 pb-16 md:pt-50 md:pb-24 text-white">
      {/* Subtle Asymmetric Ambient Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary-15/10 blur-[130px]"
      />

      <Container>
        {/* Top Breadcrumb & Share Utility Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-81 pb-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs md:text-sm"
          >
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 font-medium text-neutral-93 transition-colors hover:text-primary-35"
            >
              <svg
                className="h-4 w-4 text-primary-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Careers</span>
            </button>
            <span className="text-neutral-80">/</span>
            <span className="text-neutral-93">{job.department}</span>
            <span className="text-neutral-80">/</span>
            <span className="font-medium text-white truncate max-w-60 sm:max-w-none">
              {job.titlePrefix} {job.titleHighlight}
            </span>
          </nav>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-83 bg-neutral-15 px-4 py-1.5 text-xs font-medium text-neutral-99 transition-colors hover:border-primary-35/60 hover:text-white"
          >
            {copiedLink ? (
              <>
                <svg
                  className="h-3.5 w-3.5 text-primary-35"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-primary-35">Link Copied</span>
              </>
            ) : (
              <>
                <svg
                  className="h-3.5 w-3.5 text-primary-35"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share Role</span>
              </>
            )}
          </button>
        </div>

        {/* Main Asymmetric Split Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Title, Summary, Tech Stack, CTAs */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="subHeading text-primary-35">
                {job.department} · {job.workMode}
              </span>
            </div>

            <h1 className="heading text-white mt-4">
              {job.titlePrefix} {job.titleHighlight}
            </h1>

            <p className="text-sm lg:text-base mt-5 max-w-2xl text-neutral-99/85">
              {job.summary}
            </p>

            {/* Core Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-neutral-81 bg-neutral-15 px-3 py-1 text-xs font-medium text-primary-45 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button label="Apply for This Role" />

              <span className="text-xs md:text-sm text-neutral-93">
                Posted <strong className="text-white">{job.postedAt}</strong> ·{" "}
                No cover letter required
              </span>
            </div>
          </div>

          {/* Right Column: Elevated Role Brief Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-neutral-81 bg-gradient-key-solution-card shadow-our-work-client-box">
              {/* Highlighted Compensation Header */}
              <div className="bg-gradient-schedule-call-bg border-b border-neutral-81 px-6 py-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Total Compensation
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-neutral-65/60 px-3 py-1 text-[11px] font-medium text-white">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-35 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-35" />
                    </span>
                    Actively Hiring
                  </span>
                </div>

                <div className="mt-2 font-Manrope text-2xl md:text-[26px] font-bold text-white">
                  {job.compensation}
                </div>
              </div>

              {/* Structured Role Specs */}
              <dl className="grid grid-cols-2 gap-x-5 gap-y-5 p-6">
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-80">
                    Location
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {job.location}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-80">
                    Experience
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {job.experience}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-80">
                    Employment Type
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {job.employmentType} · {job.workMode}
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-80">
                    Reports To
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    {job.reportsTo}
                  </dd>
                </div>

                <div className="col-span-2 border-t border-neutral-81 pt-4">
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-neutral-80">
                    Team / Pod
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-primary-35">
                    {job.team}
                  </dd>
                </div>
              </dl>

              {/* Card Bottom SLA Strip */}
              <div className="flex items-center justify-between border-t border-neutral-81 bg-neutral-15 px-6 py-3.5 text-xs text-neutral-93">
                <span>Response within 48 hrs</span>
                <span className="font-semibold text-primary-45">
                  100% Human Review
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default JobDetailsHero;
