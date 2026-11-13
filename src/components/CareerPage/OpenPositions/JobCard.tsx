/* eslint-disable @typescript-eslint/no-explicit-any */
const JobCard = ({ job } : { job: any }) => {
  return (
    <article className="group relative rounded-2xl border border-neutral-10 bg-white p-6 md:p-7 transition-all duration-300 hover:border-primary-35 hover:shadow-accordion-card">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-full bg-primary-40 px-3 py-1 text-xs font-semibold text-primary-25">
              {job.department}
            </span>
            <span className="rounded-full border border-neutral-10 bg-neutral-96 px-3 py-1 text-xs font-medium text-neutral-73">
              {job.workMode}
            </span>
            {job.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-neutral-65 px-3 py-1 text-xs font-medium text-primary-35">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-35" />
                Priority Hiring
              </span>
            )}
            <span className="text-xs text-neutral-80">
              Posted {job.postedAt}
            </span>
          </div>

          <h3 className="mt-3.5 cursor-pointer font-Manrope text-xl md:text-2xl font-semibold text-neutral-65 transition-colors group-hover:text-primary-10">
            {job.title}
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-73">
            {job.summary}
          </p>

          {/* Metadata + Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-neutral-77">
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-primary-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-primary-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {job.employmentType} · {job.experience}
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-neutral-65">
              <svg
                className="h-4 w-4 text-primary-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {job.compensation}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-md border border-neutral-10 bg-neutral-78 px-2.5 py-1 text-xs font-medium text-neutral-70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-start gap-3 shrink-0 border-t border-neutral-10 pt-4 lg:border-t-0 lg:pt-0">
          <button
            type="button"
            className="flex-1 lg:flex-none w-full lg:w-40 rounded-full bg-gradient-primary-button px-5 py-2.5 text-sm font-semibold text-white shadow-chip transition-all hover:brightness-110"
          >
            Apply Now
          </button>
          <button
            type="button"
            className="flex-1 lg:flex-none w-full lg:w-40 rounded-full border border-neutral-10 bg-white px-5 py-2.5 text-sm font-medium text-neutral-65 transition-colors hover:border-primary-10 hover:bg-primary-40/50 hover:text-primary-25"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
