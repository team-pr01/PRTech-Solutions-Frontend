import React from "react";
import Container from "../../../Reusable/Container/Container";

const JobDetailsHeroSkeleton: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-start-project pt-30 md:pt-36 lg:pt-44 3xl:pt-48 pb-16 md:pb-24 text-white font-Manrope">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary-15/10 blur-[130px]"
      />

      <Container>
        <div className="animate-pulse">
          {/* Breadcrumb & Share Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-81 pb-6">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center gap-4">
              <div className="h-4 w-12 rounded bg-neutral-81" />
              <div className="h-3 w-2 rounded bg-neutral-81" />
              <div className="h-4 w-14 rounded bg-neutral-81" />
              <div className="h-3 w-2 rounded bg-neutral-81" />
              <div className="h-4 w-24 rounded bg-neutral-81" />
              <div className="h-3 w-2 rounded bg-neutral-81" />
              <div className="h-4 w-28 rounded bg-neutral-81" />
            </div>

            {/* Share Button Skeleton */}
            <div className="h-8 w-28 rounded-full border border-neutral-81 bg-neutral-15" />
          </div>

          {/* Main Content */}
          <div className="mt-6 md:mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              {/* Department & Work Mode */}
              <div className="flex items-center gap-3">
                <div className="h-4 w-44 rounded bg-primary-35/30" />
              </div>

              {/* Job Title */}
              <div className="mt-4 space-y-3">
                <div className="h-10 md:h-12 w-full max-w-130 rounded-lg bg-neutral-81" />
                <div className="h-10 md:h-12 w-3/5 max-w-[320px] rounded-lg bg-neutral-81" />
              </div>

              {/* Job Overview */}
              <div className="mt-5 max-w-2xl space-y-2.5">
                <div className="h-4 w-full rounded bg-neutral-81" />
                <div className="h-4 w-11/12 rounded bg-neutral-81" />
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="h-7 w-24 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-16 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-20 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-24 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-20 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-28 rounded-lg border border-neutral-81 bg-neutral-15" />
                <div className="h-7 w-16 rounded-lg border border-neutral-81 bg-neutral-15" />
              </div>

              {/* Apply Button & Posted Date */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="h-12 w-52 rounded-full bg-primary-35/40" />

                <div className="flex items-center gap-2">
                  <div className="h-4 w-16 rounded bg-neutral-81" />
                  <div className="h-4 w-24 rounded bg-neutral-81" />
                  <div className="h-4 w-32 rounded bg-neutral-81" />
                </div>
              </div>
            </div>

            {/* Right Column - Compensation Card */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-neutral-81 bg-gradient-key-solution-card shadow-our-work-client-box">
                {/* Compensation Header */}
                <div className="border-b border-neutral-81 bg-gradient-schedule-call-bg px-6 py-5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="h-3 w-32 rounded bg-white/20" />
                    <div className="h-7 w-28 rounded-full border border-white/20 bg-neutral-65/50" />
                  </div>

                  <div className="mt-3 h-7 w-3/4 rounded-md bg-white/20" />
                </div>

                {/* Role Specifications */}
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 p-6">
                  {/* Location */}
                  <div>
                    <div className="h-3 w-16 rounded bg-neutral-81" />
                    <div className="mt-2 h-4 w-32 rounded bg-white/15" />
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="h-3 w-20 rounded bg-neutral-81" />
                    <div className="mt-2 h-4 w-24 rounded bg-white/15" />
                  </div>

                  {/* Employment Type */}
                  <div>
                    <div className="h-3 w-28 rounded bg-neutral-81" />
                    <div className="mt-2 h-4 w-32 rounded bg-white/15" />
                  </div>

                  {/* Reports To */}
                  <div>
                    <div className="h-3 w-20 rounded bg-neutral-81" />
                    <div className="mt-2 h-4 w-36 rounded bg-white/15" />
                  </div>

                  {/* Team / Pod */}
                  <div className="col-span-2 border-t border-neutral-81 pt-4">
                    <div className="h-3 w-24 rounded bg-neutral-81" />
                    <div className="mt-2 h-4 w-52 max-w-full rounded bg-primary-35/30" />
                  </div>
                </div>

                {/* Bottom SLA Strip */}
                <div className="flex items-center justify-between gap-3 border-t border-neutral-81 bg-neutral-15 px-6 py-3.5">
                  <div className="h-3 w-32 rounded bg-neutral-81" />
                  <div className="h-3 w-28 rounded bg-primary-35/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default JobDetailsHeroSkeleton;
