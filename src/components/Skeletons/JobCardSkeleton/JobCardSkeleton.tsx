
const JobCardSkeleton = () => {
  return (
    <article className="relative rounded-2xl border border-neutral-10 bg-white p-4 md:p-7 animate-pulse">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex-1">
          {/* Badges + Posted Date */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="h-6 w-28 rounded-full bg-neutral-10" />
            <div className="h-6 w-24 rounded-full bg-neutral-10" />
            <div className="h-4 w-32 rounded-md bg-neutral-10" />
          </div>

          {/* Job Title */}
          <div className="mt-3.5 h-7 md:h-8 w-3/4 max-w-md rounded-md bg-neutral-10" />

          {/* Job Overview */}
          <div className="mt-3 space-y-2">
            <div className="h-3.5 w-full max-w-3xl rounded-md bg-neutral-10" />
            <div className="h-3.5 w-5/6 max-w-2xl rounded-md bg-neutral-10" />
          </div>

          {/* Metadata */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-neutral-10" />
              <div className="h-4 w-28 rounded-md bg-neutral-10" />
            </div>

            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-neutral-10" />
              <div className="h-4 w-40 rounded-md bg-neutral-10" />
            </div>
          </div>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="h-6 w-16 rounded-md bg-neutral-10" />
            <div className="h-6 w-20 rounded-md bg-neutral-10" />
            <div className="h-6 w-14 rounded-md bg-neutral-10" />
            <div className="h-6 w-24 rounded-md bg-neutral-10" />
            <div className="h-6 w-16 rounded-md bg-neutral-10" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-start gap-3 shrink-0 border-t border-neutral-10 pt-4 lg:border-t-0 lg:pt-0">
          <div className="h-11 w-32 lg:w-40 rounded-lg bg-neutral-10" />
          <div className="h-11 w-32 lg:w-40 rounded-lg bg-neutral-10" />
        </div>
      </div>
    </article>
  );
};

export default JobCardSkeleton;